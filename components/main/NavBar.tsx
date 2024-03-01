import React from 'react';
import Image from 'next/image';
import { Socials } from '@/constants';

const NavBar = () => {
    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#0e2461]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
                    <Image
                    src="/portfolio_logo.png"
                    alt="logo"
                    height={50}
                    width={50}
                    className="cursor-pointer hover:animate-slowspin"
                    />
                </a>
                <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full text-xl h-auto ml-[15px] mr-[10px] py-[10px] text-gray-200">
                        <a href="#about-me" className="cursor-pointer">who am i</a>
                        <a href="#skills" className="cursor-pointer">what i know</a>
                        <a href="#projects" className="cursor-pointer">what i did</a>
                    </div>
                </div>
                    <div className="flex flex-row gap-5">
                    {Socials.map((social) => (
                        <a href={social.link} key={social.name} target="_blank">
                            <Image
                            src={social.src}
                            alt={social.name}
                            width={35}
                            height={35}
                            />
                        </a>
                    ))}
                    {/* <a href="#contact" className="flex flex-row gap-5">
                        <Image
                        src="/email.png"
                        alt="email"
                        width={35}
                        height={35}
                        />
                    </a> */}
                    </div>
                </div>
            </div>
    )
}

export default NavBar;
