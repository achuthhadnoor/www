import React from 'react';
import Social from './../components/social';
import styled from 'styled-components';
import {
  Title,
  SubTitle,
  P,
  Section,
  Ul,
  Row
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
    <main>
      <Section id="hero">
        <div
          style={{ maxWidth: '300px', display: 'flex', alignItems: 'center' }}
        >
          <hr style={{ flex: 1 }} />
          <Social />
        </div>
        <div style={{ padding: '10px 0px ' }}>
          <Title>Achuth Hadnoor</Title>
          <SubTitle>Developer and UI/UX designer</SubTitle>
          <P>
            I create digital products thar are targeted to boost productivity.
            Through these experiences, I've had the opportunity to create
            memorable products that are not only enjoyable to use but are
            written in code that's maintainable and easy to understand.
          </P>
          <ActionButton
            href="https://www.linkedin.com/in/achuth-hadnoor-49223ba6/"
            target="_blank"
          >
            Resume`
          </ActionButton>
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
            <li>Styled-Components</li>
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
    </main>
  );
};

const ActionButton = styled.a`
  border: none;
  background: #121221;
  color: #eee;
  padding: 10px 15px;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;
