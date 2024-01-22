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


export const Skillmot = ({ id, visible, sectionRef }) => {
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
            <h2 className="section__title" data-aos="fade-right"> Programing <span className="different">Language 🍳</span> </h2>
            <SimpleGrid spacing={2} templateColumns='repeat(auto-fill, minmax(110px, 1fr))'>
                <Card2 key="python" icon={<SiPython />} title="Python"/>
                <Card2 key="cpp" icon={<TbBrandCpp />} title="C/C++"/>  
                <Card2 key="java" icon={<FaJava />} title="Java"/>
                <Card2 key="javascript" icon={<SiJavascript />} title="JavaScript"/>
                <Card2 key="typescript" icon={<SiTypescript />} title="TypeScript"/>
                <Card2 key="swift" icon={<FaSwift />} title="Swift"/>
                <Card2 key="dart" icon={<SiDart />} title="Dart"/>
                <Card2 key="golang" icon={<FaGolang />} title="Golang"/>  
                <Card2 key="rust" icon={<FaRust />} title="Rust"/>
                <Card2 key="php" icon={<FaPhp />} title="PHP" />
            </SimpleGrid>
            </div>

    </Section>
  );
};