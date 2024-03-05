"use client";

import React from 'react';
import ProjectCard from '../subcomponents/ProjectCard';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20" id="projects">
        <motion.div
          variants={slideInFromTop}
          className="cursive Welcome-text text-[40px] font-large text-center font-bold text-gray-200">
                        what i did_
          </motion.div>
      <div className="flex flex-col items-center justify-center py-20">
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            My Software Development Projects
          </h1>
            <ProjectCard
              src="/portfolio.png"
              title="Portfolio Webpage"
              description="A Next.JS Personal Portfolio Webpage built with TypeScript and Tailwind."/>
            <ProjectCard
              src="/bearlyhired.png"
              title="BearlyHired Job Application Tracker"
              description="A MERN stack job application, interview rounds and offer tracker inpsired by personal career switching experience."/>
            <ProjectCard
              src="/fincademy.png"
              title="Financial Literacy eLearning Platform"
              description="A collaborative MERN stack eLearning platform aimed at addressing financial illiteracy in Singapore."/>
            <ProjectCard
              src="/frigidforager.png"
              title="Fridge Tracker & Recipe "
              description="A React webapp that allows users to track inventory and look up recipes with ingredients on hand. Built with Spoontacular API and Airtable API."/>
            <ProjectCard
              src="/dpwm.png"
              title="Password Manager "
              description="An Angular+Firebase password manager that allows users to store passwords securely. Other functionalities include adding sites and apps, editing and deleting passwords."/>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-center py-20">
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 py-20">
            My Cybersecurity Projects
          </h1>
            <ProjectCard
              src="/wip.png"
              title="Network Scanner App"
              description="Discovers devices on a network, requiring basic network understanding and scripting skills."/>
            <ProjectCard
              src="/wip.png"
              title="Password Manager App"
              description="Stores and manages passwords securely, often involving data structures and user interface design."/>
            <ProjectCard
              src="/wip.png"
              title="File Encryption/Decryption Tool"
              description="Encrypts and decrypts files using existing libraries, requiring good understanding of encryption algorithms."/>
          </div>
        </div> */}
      </section>
  )
}

export default Projects