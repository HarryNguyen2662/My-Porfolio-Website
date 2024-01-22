import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Harry, currently I is a driven computer science student from {' '}
      <Link href="https://www.gsu.edu">Georgia State University</Link> with a 4.0 GPA. I has gained expertise in languages like Python, C++, Java, JavaScript, and TypeScript through coursework and hands-on projects. I has full-stack web development skills having worked with React, Redux, Node.js, Django, Flask, and databases like MongoDB and PostgreSQL.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I has created web and mobile apps like an instantaneous trading platform implemented with React, Redux, PostgreSQL, D3.js, and News/IEX Cloud APIs for real-time data. I also built a mobile messenger app using React Native, Firebase, and ChatGPT API, increasing engagement 52% and reducing response time 35%. In addition, I created my portfolio website with React, Next.js, Three.js, and Chakra UI, boosting interaction 31%. I is proficient in data visualization, UI/UX design, system optimization, Agile development, and deploying scalable applications.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I has interned as a software engineer at Google, completed a full-stack bootcamp, and provided technical support at my university. Key highlights are my proven ability to quickly master new technologies, implement complex projects end-to-end, engage in Agile processes, optimize systems for efficiency and UX, and effectively collaborate. With my academic excellence, communication skills, and hands-on experience, I is well-qualified for software engineer roles.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="https://drive.google.com/file/d/1-XOIlrUa-Tcfh4N4oABXInPA1CE6OcVm/view?usp=share_link"
                icon="send"
              >
                My resume
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in prom in high school at Vietnam"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
