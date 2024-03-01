"use client";

import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {slideInFromRight, slideInFromTop} from '@/utils/motion';
import {slideInFromLeft} from '@/utils/motion';
import {SparklesIcon} from '@heroicons/react/24/outline';

const AboutMeContent = () => {
    return (
        <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[8px] px-[10px] border border-[#7042F88B] opacity-[0.9]">
                    <SparklesIcon className="text-[#B49Bff] mr-[10px] h-5 w-5"/>
                    <h1 className="Welcome-text text-[17px] mr-[10px]">Hey There, Stranger!</h1>
                </motion.div>
                <motion.div
                variants={slideInFromLeft(0.5)}
                className="flex flex-col gap-6 mt-6 text-7xl font-bold text-white max-w-[600px] w-auto h-auto py-10">
                    <span>
                        Welcome to Daryl&apos;s
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Software & Cybersecurity </span>
                        Depository
                    </span>
                </motion.div>
                <motion.p
                variants={slideInFromLeft(0.8)}
                className="text-xl font-bold text-gray-400 max-w-[600px]">
                    Thank you for visiting my page!
                </motion.p>
                <motion.p
                variants={slideInFromLeft(0.8)}
                className="text-lg text-gray-400 max-w-[600px]">
                    Feel free to browse around or reach out via LinkedIn, I'd love to hear from you!
                </motion.p>
            </div>
        </motion.div>
    )
}

export default AboutMeContent