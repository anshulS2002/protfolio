import React from 'react'
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='skillsList' whileHover={{ scale: 1.05 }} initial={{ x: 0, y: 0 }} animate={{ x: x, y: y }} transition={{ duration: 3.5 }}>
            {name}
        </motion.div>
    )
}

const SkillsCloud = () => {
    return (
        <div className='skillCloud-container'>
            <motion.div className='skillsList' whileHover={{ scale: 1.05 }}>
                Web
            </motion.div>
            <Skill name="C++" x="-3vw" y="-5vw" />
            <Skill name="HTML" x="5.4vw" y="-10vw" />
            <Skill name="CSS" x="5.4vw" y="10vw" />
            <Skill name="JAVASCRIPT" x="-10.4vw" y="6vw" />
            <Skill name="REACT" x="-2.4vw" y="-18vw" />
            <Skill name="NODE.JS" x="5.4vw" y="18vw" />
            <Skill name="MongoDB" x="15.4vw" y="-20vw" />
            <Skill name="NEXT.JS" x="-15.4vw" y="-25vw" />
            <Skill name="Git" x="-21.4vw" y="-10vw" />
            <Skill name="Docker" x="21.4vw" y="10vw" />
            <Skill name="DSA" x="-21.4vw" y="20vw" />
        </div>
    )
}

export default SkillsCloud