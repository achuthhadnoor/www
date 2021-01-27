import styled from 'styled-components';

const Apps = () => {
  return (
    <Menu>
      <Heading>Apps</Heading>
      <Description>
        Exploring the technology by building digital designs to applications
      </Description>
    </Menu>
  );
};

const Menu = styled.div`
  text-align: center;
  @media (max-width: 800px) {
    text-align: left;
    padding-left: 10px;
  }
`;
const Heading = styled.h1`
  font-weight: 800;
  font-size: 2.25rem;
  line-height: 2.5rem;
`;
const Description = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  max-width: 500px;
  width: 100%;
  margin: auto;
`;

export default Apps;
