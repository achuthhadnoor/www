import styled from 'styled-components';
const Articles = () => {
  return (
    <Wrapper>
      <ArticlesTitle>Recent Articles</ArticlesTitle>
      <Grid>
        <ArticleWrapper>
          <Title>What i learned from a month of 800$ through referal</Title>
          <Content>
            Lessons and takeaways from my experience of bringing apps to users
            through a
          </Content>
          <TimeStamp>April 7, 2020</TimeStamp>
        </ArticleWrapper>
        <ArticleWrapper>
          <Title>What i learned from a month of 800$ through referal</Title>
          <Content>
            Lessons and takeaways from my experience of bringing apps to users
            through a
          </Content>
          <TimeStamp>April 7, 2020</TimeStamp>
        </ArticleWrapper>
        <ArticleWrapper>
          <Title>What i learned from a month of 800$ through referal</Title>
          <Content>
            Lessons and takeaways from my experience of bringing apps to users
            through a
          </Content>
          <TimeStamp>April 7, 2020</TimeStamp>
        </ArticleWrapper>
        <ArticleWrapper>
          <Title>What i learned from a month of 800$ through referal</Title>
          <Content>
            Lessons and takeaways from my experience of bringing apps to users
            through a
          </Content>
          <TimeStamp>April 7, 2020</TimeStamp>
        </ArticleWrapper>
        <ArticleWrapper>
          <Title>What i learned from a month of 800$ through referal</Title>
          <Content>
            Lessons and takeaways from my experience of bringing apps to users
            through a
          </Content>
          <TimeStamp>April 7, 2020</TimeStamp>
        </ArticleWrapper>
        <ArticleWrapper>
          <Title>What i learned from a month of 800$ through referal</Title>
          <Content>
            Lessons and takeaways from my experience of bringing apps to users
            through a
          </Content>
          <TimeStamp>April 7, 2020</TimeStamp>
        </ArticleWrapper>
        <ArticleWrapper>
          <Title>What i learned from a month of 800$ through referal</Title>
          <Content>
            Lessons and takeaways from my experience of bringing apps to users
            through a
          </Content>
          <TimeStamp>April 7, 2020</TimeStamp>
        </ArticleWrapper>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 3em;
  padding: 0px 1em;
`;

const ArticlesTitle = styled.h1`
  font-size: 1.3em;
  font-weight: 600;
  padding: 1em 0px;
`;
const Title = styled.div`
  font-weight: 400;
  line-height: 1.5em;
`;
const Content = styled.div`
  font-weight: 300;
  color: ${(props) => props.theme.color2};
  line-height: 1.5em;
`;
const TimeStamp = styled.div`
  font-weight: 200;
  color: ${(props) => props.theme.color3};
  line-height: 1.5em;
`;
const ArticleWrapper = styled.div`
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  flex: 0 1 calc(50% - 1em);
  :hover {
    background: ${(props) => props.theme.bg3};
  }
  :hover ${Title} {
    color: ${(props) => props.theme.accent};
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  margin-right: 10px;
  justify-content: space-between;
  @media (min-width: 320px) and (max-width: 767px) {
    & {
      flex-direction: column;
      flex: 1;
    }
  }
`;

export default Articles;
