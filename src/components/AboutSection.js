import React from 'react';
import home1 from 'assets/home1.png';
// Styled
import styled from 'styled-components';
import { BasicLayout, Description, Image, Hide } from '../styles';
// Framer Motion
import { motion } from 'framer-motion';
const AboutSection = () => {
  const titleAnim = {
    hidden: {
      opacity: 0,
    },
    show: { opacity: 1, transition: { duration: 1 } },
  };
  const container = {
    hidden: {
      x: 100,
    },
    show: {
      x: 0,
      transition: { duration: 1, staggerChildren: 0.5, when: 'afterChildren' },
    },
  };
  return (
    <BasicLayout>
      <Description>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </BasicLayout>
  );
};

// Styled Components

export default AboutSection;
