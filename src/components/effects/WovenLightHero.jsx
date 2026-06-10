"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
// Import Timer directly if your version exposes it on the THREE namespace or separately
// Note: In newer Three.js versions, Timer is built right into the core or addons. 
// If THREE.Timer is undefined in your specific build, you can also import it from 'three/addons/utils/Timer.js'

export default function WovenBackground({
    children,
    className = "",
    as: Component = "section",
    particleCount = 50000,   
    knotRadius = 1.5,        
    knotTube = 0.5,          
    opacity = 0.8            
}) {
    return (
        <Component className={`relative overflow-hidden w-full ${className}`}>
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                <WovenCanvas 
                    particleCount={particleCount} 
                    knotRadius={knotRadius} 
                    knotTube={knotTube}
                    opacity={opacity}
                />
            </div>
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </Component>
    );
}

const WovenCanvas = ({ particleCount, knotRadius, knotTube, opacity }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    let width = currentMount.clientWidth || window.innerWidth;
    let height = currentMount.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    const mouse = new THREE.Vector2(-999, -999); 
    
    // FIXED: Changed from THREE.Clock() to THREE.Timer()
    const timer = new THREE.Timer(); 
    
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    const geometry = new THREE.BufferGeometry();
    const torusKnot = new THREE.TorusKnotGeometry(knotRadius, knotTube, 200, 32);

    for (let i = 0; i < particleCount; i++) {
        const vertexIndex = i % torusKnot.attributes.position.count;
        const x = torusKnot.attributes.position.getX(vertexIndex);
        const y = torusKnot.attributes.position.getY(vertexIndex);
        const z = torusKnot.attributes.position.getZ(vertexIndex);
        
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        originalPositions[i * 3] = x;
        originalPositions[i * 3 + 1] = y;
        originalPositions[i * 3 + 2] = z;

        const color = new THREE.Color();
        color.setHSL(Math.random(), 0.8, isDarkMode ? 0.5 : 0.7);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
        
        velocities[i * 3] = 0;
        velocities[i * 3 + 1] = 0;
        velocities[i * 3 + 2] = 0;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: knotRadius < 1.0 ? 0.012 : 0.018, 
        vertexColors: true,
        blending: isDarkMode ? THREE.NormalBlending : THREE.AdditiveBlending,
        transparent: true,
        opacity: isDarkMode ? opacity : opacity * 0.8,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const updateMeshScale = (w, h) => {
        const aspect = w / h;
        if (aspect > 1) {
            points.scale.set(1.2, 1.2 / aspect, 1);
        } else {
            points.scale.set(1, 1, 1);
        }
    };
    
    updateMeshScale(width, height);

    const handleMouseMove = (event) => {
        const rect = currentMount.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };
    
    const handleMouseLeave = () => {
        mouse.set(-999, -999); 
    };

    window.addEventListener('mousemove', handleMouseMove);
    currentMount.addEventListener('mouseleave', handleMouseLeave);

    let animationFrameId;

    const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        
        // FIXED: Advance the timer instance forward manually on every layout frame tick
        timer.update(); 
        const elapsedTime = timer.getElapsed(); 

        const mouseWorld = new THREE.Vector3(
            mouse.x * (4.5 * points.scale.x), 
            mouse.y * (3.0 * points.scale.y), 
            0
        );

        for (let i = 0; i < particleCount; i++) {
            const ix = i * 3;
            const iy = i * 3 + 1;
            const iz = i * 3 + 2;

            const currentPos = new THREE.Vector3(positions[ix], positions[iy], positions[iz]);
            const originalPos = new THREE.Vector3(originalPositions[ix], originalPositions[iy], originalPositions[iz]);
            const velocity = new THREE.Vector3(velocities[ix], velocities[iy], velocities[iz]);

            const dist = currentPos.distanceTo(mouseWorld);
            if (dist < 1.3) {
                const force = (1.3 - dist) * 0.08;
                const direction = new THREE.Vector3().subVectors(currentPos, mouseWorld).normalize();
                velocity.add(direction.multiplyScalar(force));
            }

            const returnForce = new THREE.Vector3().subVectors(originalPos, currentPos).multiplyScalar(0.008);
            velocity.add(returnForce);
            
            velocity.multiplyScalar(0.88);

            positions[ix] += velocity.x;
            positions[iy] += velocity.y;
            positions[iz] += velocity.z;
            
            velocities[ix] = velocity.x;
            velocities[iy] = velocity.y;
            velocities[iz] = velocity.z;
        }
        geometry.attributes.position.needsUpdate = true;

        points.rotation.y = elapsedTime * 0.05;
        renderer.render(scene, camera);
    };
    animate();

    const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
            const { width: newWidth, height: newHeight } = entry.contentRect;
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
            updateMeshScale(newWidth, newHeight);
        }
    });
    resizeObserver.observe(currentMount);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (currentMount) {
            currentMount.removeEventListener('mouseleave', handleMouseLeave);
        }
        resizeObserver.disconnect();
        cancelAnimationFrame(animationFrameId);
        
        if (currentMount && renderer.domElement) {
            currentMount.removeChild(renderer.domElement);
        }
        
        geometry.dispose();
        material.dispose();
        renderer.dispose();
    };
  }, [particleCount, knotRadius, knotTube, opacity]); 

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
};