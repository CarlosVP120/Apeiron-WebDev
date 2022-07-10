import React from "react";
import Image from "next/image";
import Member from "./member";

const AboutUs: React.FC = () => {
    return (
        <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl z-50`}>
            <div className="container mx-auto px-11">
                <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
                    <strong>We will help you develop your website, faster.</strong> Our team of engineers can create the best user experiences for your custom website with a great coding quality.
                </p>
            </div>
            <div className="container mx-auto px-11 text-center mt-28">
                <h2>Our Team</h2>
                <div className="mt-2">the &ldquo;MXTs&rdquo;</div>
                <div className="mt-10 grid grid-cols-2">
                    <Member id="carlos" name="Carlos" socialId="@carlosavp4" link="https://github.com/CarlosVP120"/>
                    <Member id="abraham" name="Abraham" socialId="@abrahamjr" link="#"/>
                </div>
            </div>
        </section>
    )
}

export default AboutUs