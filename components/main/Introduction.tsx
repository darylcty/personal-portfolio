"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { slideInFromTop, slideInFromLeft } from '@/utils/motion';

const Introduction = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-3 h-600 pb-80 py-20" id="about-me">
            <div className="flex flex-row relative items-center justify-center h-full w-full bg-[#050505]">
                <div className="absolute w-auto top-1 z-[5]">
                    <motion.div
                    variants={slideInFromTop}
                    className="cursive Welcome-text text-[40px] font-large text-center font-bold text-gray-200">
                        who am i_
                    </motion.div>
                    <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]">
                        Solving modern problems using modern technologies - 
                        <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-gray-500 to-purple-500"> From Shipyard to Software </span>

                    </motion.div>
                    <Image
                    src="/aboutme.svg"
                    alt="professional experience"
                    width={300}
                    height={1000}
                    className="items-center w-full h-full border-rounded-lg"
                    />
                    <Image
                    src="/professional_experience.svg"
                    alt="professional experience"
                    width={300}
                    height={1000}
                    className="items-center w-full h-full border-rounded-lg"
                    />
                </div>
            </div>
        </section>
    )
}

export default Introduction