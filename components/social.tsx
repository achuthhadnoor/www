import Icon from '../icons'

const Social = (props:any) => (
  <div style={{ flex: 1 }} {...props}>
    <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
      <a
        href="https://dribbble.com/achuth_hadnoor"
        target="_blank"
        style={{ padding: '10px' }}
        title="Dribbble"
      >
        <Icon name="Dribble" />
      </a>
      <a
        href="https://instagram.com/uiuxdx"
        target="_blank"
        style={{ padding: '10px' }}
        title="instagram"
      >
        <Icon name="Instagram" />
      </a>
      <a
        href="https://github.com/achuthhadnoor"
        target="_blank"
        style={{ padding: '10px' }}
        title="Github"
      >
        <Icon name="Github" />
      </a>
      <a
        href="https://twitter.com/achuth_hadnoor"
        target="_blank"
        style={{ padding: '10px' }}
        title="Twitter"
      >
        <Icon name="Twitter" />
      </a>
      <a
        href="https://www.linkedin.com/in/achuth-hadnoor-49223ba6/"
        target="_blank"
        style={{ padding: '10px' }}
        title="Linkedin"
      >
        <Icon name="Linkedin" />
      </a>
      <a
        href="mailto:achuth.hadnoor123@gmail.com"
        target="_blank"
        style={{ padding: '10px' }}
        title="Email"
      >
        <Icon name="Mail" />
      </a>
    </div>
  </div>
);

export default Social;