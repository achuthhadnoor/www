import React from 'react';
import Link from 'next/link';
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
    <>
      <main>
        <h1 className="title"> Hey, i'm Achuth Hadnoor </h1>
        <p>
          {' '}
          I am a developer , UI/UX designer and maker. If you would like to know
          about my work or more. you can find them here.
        </p>

        <Link href="/blog/2020/intro-to-next">
          <a>Go to the post</a>
        </Link>
        <h1>Projects </h1>
        <div className="grid">
          {projects.map((project, i) => (
            <a
              href={project.link}
              className="card"
              key={`project-${i}`}
              index={i}
            >
              <h3>{project.title} &rarr;</h3>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </main>

      <footer></footer>
    </>
  );
};
