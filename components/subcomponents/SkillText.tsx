"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';
import { slideInFromLeft } from '@/utils/motion';
import { slideInFromRight } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/outline';

const SkillText = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center">
            <motion.div
                    variants={slideInFromTop}
                    className="cursive Welcome-text text-[40px] font-large text-center font-bold text-gray-200">
                        what i know_
                    </motion.div>
            <motion.div
            variants={slideInFromLeft(0.5)}
            className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]">
                Solving modern problems using modern technologies using these
            </motion.div>
            <motion.div
            variants={slideInFromRight(0.5)}
            className="text-[25px] text-gray-200 mt-[10px] text-center mb-[10px]">
                 <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Skills </span>
                I&apos;ve picked up along the way
            </motion.div>
        </div>
    )
}

export default SkillText