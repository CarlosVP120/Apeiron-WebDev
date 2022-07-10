import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => (
    <footer className="flex gap-8 items-center justify-center bg-black text-white p-20">
        <Image src="/assets/logo.svg" width={25} height={25} />
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy Policy</Link>
    </footer>
)

export default Footer