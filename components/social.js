import { Linkedin, Mail, Instagram, Github, Dribbble, Twitter } from '../icons';
export default (props) => (
  <div style={{ flex: 1 }} {...props}>
    <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
      <a
        href="https://www.linkedin.com/in/achuth-hadnoor-49223ba6/"
        target="_blank"
        style={{ padding: '10px' }}
        title="Linkedin"
      >
        <Linkedin />
      </a>
      <a
        href="mailto:achuth.hadnoor123@gmail.com"
        target="_blank"
        style={{ padding: '10px' }}
        title="Email"
      >
        <Mail />
      </a>
      <a
        href="https://dribbble.com/achuth_hadnoor"
        target="_blank"
        style={{ padding: '10px' }}
        title="Dribbble"
      >
        <Dribbble />
      </a>
      <a
        href="https://instagram.com/uiuxdx"
        target="_blank"
        style={{ padding: '10px' }}
        title="instagram"
      >
        <Instagram />
      </a>
      <a
        href="https://github.com/achuthhadnoor"
        target="_blank"
        style={{ padding: '10px' }}
        title="Github"
      >
        <Github />
      </a>
      <a
        href="https://twitter.com/achuth_hadnoor"
        target="_blank"
        style={{ padding: '10px' }}
        title="Twitter"
      >
        <Twitter />
      </a>
    </div>
  </div>
);
