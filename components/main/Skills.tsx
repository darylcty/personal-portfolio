import React from 'react';
import { Programming_Languages } from '@/constants';
import { Frontend_skill } from '@/constants';
import { Backend_skill } from '@/constants';
import { Other_skill } from '@/constants';
import SkillDataProvider from '../subcomponents/SkillDataProvider';
import SkillText from '../subcomponents/SkillText';

export const Skills = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden mt-20 py-10" id="skills" style={{transform: "scale(0.9"}}>
            <SkillText />
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Programming_Languages.map((image, index) => (
                    <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Frontend_skill.map((image, index) => (
                    <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Backend_skill.map((image, index) => (
                    <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Other_skill.map((image, index) => (
                    <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
                ))}
            </div>
        </section>
    )
}

export default Skills