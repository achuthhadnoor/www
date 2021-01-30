import styled from 'styled-components';

const Apps = ({title,description,children}) => {
  return (
    <Menu>
      <Heading>{title}</Heading>
      <Description>
       {description}
      </Description>
     <Content> {children}</Content>
    </Menu>
  );
};

const Menu = styled.div` 
padding-top:1em;
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
  margin-top:1em;
`;

const Content = styled.div`
  padding-top:1em;
`;    

export default Apps;
