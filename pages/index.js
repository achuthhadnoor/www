import React from 'react';
import Social from './../components/social';
import styled from 'styled-components';
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
      <section id="hero">
        <div
          style={{ maxWidth: '300px', display: 'flex', alignItems: 'center' }}
        >
          <hr style={{ flex: 1 }} />
          <Social />
        </div>
        <div style={{ padding: '10px 0px ' }}>
          <div style={{ margin: '10px 0px', fontSize: '48px' }}>
            Achuth Hadnoor{' '}
          </div>
          <div style={{ fontSize: '36px', margin: '10px 0px' }}>
            Developer and UI/UX designer{' '}
          </div>
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
      </section>
      <div className="grid">
        {projects.map((project, i) => (
          <a
            href={project.link}
            className="project-card"
            key={`project-${i}`}
            index={i}
          >
            <h3>{project.title} &rarr;</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
};

const P = styled.p`
  font-size: 16px;
  color: #4d4d4d;
  max-width: 400px;
  width: 100%;
  line-height: 2;
  margin: 40px 0px;
`;
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
