import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';
import github from 'prism-react-renderer/themes/github';
export const Title = styled.div`
  font-size: 48px;
  margin: 10px 0px;
`;
export const SubTitle = styled.div`
  margin: 10px 3px;
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
  padding: 0;
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

const Code = ({ children, className }) => {
  const language = className.replace(/language-/, '');
  return (
    <>
      {language}
      <Highlight
        {...defaultProps}
        code={children}
        language={language}
        theme={github}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: '20px' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </>
  );
};
export const MDXComponents = {
  h1: (props) => <Title {...props} />,
  h2: (props) => <SubTitle {...props} />,
  h3: (props) => <H3 {...props} />,
  code: Code,
  // kbd: Kbd,
  // br: (props) => <Box height="24px" {...props} />,
  // hr: Hr,
  // table: Table,
  // th: THead,
  // td: TData,
  // a: CustomLink,
  p: (props) => <P {...props} style={{ maxWidth: 800 }} />
  // ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  // ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  // li: (props) => <Box as="li" pb={1} {...props} />,
  // blockquote: Quote
};
