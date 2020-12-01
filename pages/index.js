import React from 'react';
import Social from './../components/social';
import styled from 'styled-components';
import {
  Title,
  SubTitle,
  P,
  Section,
  Ul,
  Row,
  H3
} from '../components/mdx_components';
export default () => {
  const [projects] = React.useState([
    {
      title: 'Snipper',
      link: 'https://producthunt.com/posts/snipper',
      description: 'A simple snippet manager on menubar.'
    },
    {
      title: 'Snip',
      link: 'https://producthunt.com/posts/snip',
      description: 'A single line snippets manager on your menubar.'
    }
  ]);
  return (
    <Wrapper>
      <Section id="hero">
        <div
          style={{ maxWidth: '300px', display: 'flex', alignItems: 'center' }}
        >
          <hr style={{ flex: 1 }} />
          <Social />
        </div>
        <div style={{ padding: '10px 0px ' }}>
          <Title>Achuth Hadnoor</Title>
          <SubTitle>Developer {'&'} UI/UX designer</SubTitle>
          <P style={{ padding: '20px 0px' }}>
            I <b>design and develop</b> digital products. Through these
            experiences, I've had the opportunity to create
            <b> products</b> that are not only <b>enjoyable to use by design</b>{' '}
            but are also <b>written in code that's maintainable</b> and easy to
            understand.
          </P>
          {/* <ActionButton
            href="https://www.linkedin.com/in/achuth-hadnoor-49223ba6/"
            target="_blank"
          >
            Resume`
          </ActionButton> */}
        </div>
      </Section>
      <Section id="skills">
        <SubTitle>Skills</SubTitle>
        <P>
          Through my studies, I've gained a solid understanding of computer
          science and web development concepts, and have dedicated a lot of my
          free time to apply these concepts to real-world scenarios and
          applications.
        </P>
        <Ul>
          <Row>
            <li>Javascript ES6</li>
            <li>React Native</li>
            <li>Styled-Components</li>
            <li>Git</li>
            <li>Firebase</li>
          </Row>
          <Row>
            <li>ElectronJS</li>
            <li>NodeJS</li>
            <li>JAM Stack</li>
            <li>Travis CI / Circle CI</li>
            <li>GraphQl</li>
          </Row>
        </Ul>
      </Section>
      <Section id="projects">
        <SubTitle>What am i working on now?</SubTitle>
        <P>
          I like to stay busy and always have a project in the works. Take a
          look at some of the applications, articles, and companies I've
          dedicated my time to.
        </P>
        <Ul>
          {projects.map((project, i) => (
            <Row key={`project-${i}`}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                key={`project-${i}`}
                index={i}
                className="readmore"
              >
                Visit Site <span className="arrow">&rarr;</span>
              </a>
            </Row>
          ))}
        </Ul>
      </Section>
      <Section id="contact">
        <SubTitle>Let's build something together</SubTitle>
        <P>
          Feel free to reach out if you're looking for a developer, have a
          question, or just want to connect.
        </P>
        <P>
          <a
            style={{ color: '#000', textDecoration: 'underline' }}
            href="mailto:achuth.hadnoor123@gmail.com"
          >
            achuth.hadnoor123@gmail.com
          </a>
        </P>
      </Section>
    </Wrapper>
  );
};

const ActionButton = styled.a`
  border: none;
  background: #121221;
  color: #eee;
  padding: 10px 15px;
  border-radius: 10px;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  min-height: 100vh;
  padding: 20px;
  margin: auto;
  opacity: 0;
  animation: bcCCNc 0.6s 0.3s ease-in-out forwards;
  @media (min-width: 960px) {
    & {
      max-width: 940px;
      padding: 20px;
      margin: auto;
    }
  }
  @media (min-width: 1200px) {
    & {
      max-width: 1200px;
      padding: 20px;
    }
  }

  /* sc-component-id: sc-keyframes-bcCCNc */
  @-webkit-keyframes bcCCNc {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes bcCCNc {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  /* sc-component-id: sc-keyframes-iuhkkK */
  @-webkit-keyframes iuhkkK {
    from {
      width: 0px;
      opacity: 0;
    }
    to {
      width: 200px;
      opacity: 1;
    }
  }
  @keyframes iuhkkK {
    from {
      width: 0px;
      opacity: 0;
    }
    to {
      width: 200px;
      opacity: 1;
    }
  }
  /* sc-component-id: sc-keyframes-gztygP */
  @-webkit-keyframes gztygP {
    from {
      -webkit-transform: translateY(30px);
      -ms-transform: translateY(30px);
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes gztygP {
    from {
      -webkit-transform: translateY(30px);
      -ms-transform: translateY(30px);
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
