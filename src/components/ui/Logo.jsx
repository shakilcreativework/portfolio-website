import Link from "next/link";
import { LuCodeXml } from "react-icons/lu";


const Logo = () => {
    return (
        <Link href={'/'} className="flex gap-2 items-center">
            <LuCodeXml className="text-2xl text-purple-600" />
            <h2 className="font-semibold text-lg uppercase">Md Shakil Ahmed</h2>
        </Link>
    );
};

export default Logo;