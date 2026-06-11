// import Link from "next/link";
// import { LuCodeXml } from "react-icons/lu";


// const Logo = () => {
//     return (
//         <Link href={'/'} className="flex gap-2 items-center">
//             <LuCodeXml className="text-2xl text-purple-600" />
//             <h2 className="font-semibold text-lg uppercase">Md Shakil Ahmed</h2>
//         </Link>
//     );
// };

// export default Logo;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuCodeXml } from "react-icons/lu";

const Logo = () => {
    const pathname = usePathname();

    const handleLogoClick = (e) => {
        if (pathname === "/") {
            e.preventDefault();
            // We can target the window frame directly, Lenis catches this and converts it into kinetic momentum!
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.pushState(null, "", "/");
        }
    };

    return (
        <Link href={'/'} onClick={handleLogoClick} className="flex gap-2 items-center">
            <LuCodeXml className="text-2xl text-purple-600" />
            <h2 className="font-semibold text-lg uppercase">Md Shakil Ahmed</h2>
        </Link>
    );
};

export default Logo;