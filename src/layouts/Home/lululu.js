import { Fragment, useState, useContext } from 'react';
import React from "react";
import "./experience.module.css";
import "react-vertical-timeline-component/style.min.css";

import { Section } from '../../components/Section';
import { Transition } from '../../components/Transition';
import styles from './Profile.module.css';

import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
    SiNetlify,
  SiPython,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";
import { SiTypescript } from "react-icons/si";
import { FaSwift } from "react-icons/fa";
import { SiDart } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { FaRust } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import Card2 from "./skillcard";

import {
  SiCss3,
  SiReact,
  SiDjango,
  SiFlask,
  SiFlutter,
  SiNodeDotJs,
  SiNextDotJs,
  SiD3DotJs,
  SiBootstrap,
  SiThreeDotJs,
  SiMaterialUi,
} from 'react-icons/si';
import { SimpleGrid } from '@chakra-ui/react';

export const Helloanhem = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  const themename = React.useContext(React.createContext());
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);

return (
    <Section
      //className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <div className="section mainsection">
            <h2 className="section__title" data-aos="fade-right"> Web/ <span className="different">Mobile Development 🍳</span> </h2>
            <SimpleGrid spacing={2} templateColumns='repeat(auto-fill, minmax(110px, 1fr))'>
                <Card2 key="html" icon={<SiHtml5 />} title="HTML" />
                <Card2 key="css" icon={<SiCss3 />} title="CSS" />  
                <Card2 key="react" icon={<SiReact />} title="React" />
                <Card2 key="react-native" icon={<SiReact />} title="React Native" />
                <Card2 key="redux" icon={<SiRedux />} title="Redux" />
                <Card2 key="django" icon={<SiDjango />} title="Django" />
                <Card2 key="flask" icon={<SiFlask />} title="Flask" />
                <Card2 key="flutter" icon={<SiFlutter />} title="Flutter" />
                <Card2 key="nodejs" icon={<SiNodeDotJs />} title="Node.js" />
                <Card2 key="nextjs" icon={<SiNextDotJs />} title="Next.js" />  
                <Card2 key="express" icon={<SiExpress />} title="Express.js" />
                <Card2 key="d3" icon={<SiD3DotJs />} title="D3.js" />
                <Card2 key="tailwind" icon={<SiTailwindcss />} title="Tailwind CSS" />
                <Card2 key="bootstrap" icon={<SiBootstrap />} title="Bootstrap" />
                <Card2 key="threejs" icon={<SiThreeDotJs />} title="Three.js" />
                <Card2 key="materialui" icon={<SiMaterialUi />} title="MaterialUI" />  
                <Card2 key="swiftui" icon={<FaSwift />} title="Swift UI" />
                <Card2 key="chakraui" icon={<SiChakraui />} title="Chakra UI" />
            </SimpleGrid>
            </div>
    </Section>
  );
};