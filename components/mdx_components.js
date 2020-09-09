import styled from 'styled-components';
export const Title = styled.div`
  font-size: 48px;
  margin: 10px 0px;
`;
export const SubTitle = styled.div`
  margin: 10px 0px;
  font-size: 36px;
`;
export const H1 = styled.div`
  font-size: 24px;
`;
export const H2 = styled.div`
  font-size: 18px;
`;
export const H3 = styled.div`
  font-size: 16px;
`;

export const P = styled.p`
  font-size: 16px;
  color: #4d4d4d;
  max-width: 500px;
  width: 100%;
  line-height: 2;
  margin: 40px 0px;
`;

export const Section = styled.section`
  margin: 40px 0px;
  padding: 40px 0px;
`;

export const Ul = styled.ul`
  list-style: circle;
  grid-gap: 10px;
  display: flex;
  flex-direction: column;
  div {
    flex: 1;
  }
  li {
    padding: 10px;
    margin: 10px;
  }
  .readmore:hover {
    border-bottom: 1px solid #121212;
    transition: all 0.3s ease-in-out;
  }
  .readmore:hover .arrow {
    transform: translateX(10px);
    position: absolute;
    transition: all 0.3s ease-in-out;
  }
  @media (min-width: 960px) {
    & {
      flex-direction: row;
    }
  }
`;
export const Row = styled.div`
  padding: 20px 0px;
`;
