import Icon from "react-icons-kit";
import { eye } from 'react-icons-kit/entypo'
import { zap } from 'react-icons-kit/feather/zap'
import { IBlog } from "../../../../types/timeline";
import styled from 'styled-components'

const Blog = (blog: IBlog) => (
    <>
        <EntryIcon>
            <Icon icon={zap} />
        </EntryIcon>
        <BlogWrapper>
            <BlogTitle>
                {blog.title}
            </BlogTitle>
            <BlogSummary>
                {blog.summary}
            </BlogSummary>
            <BlogReadTime>
                <Icon icon={eye} style={{ padding: '5px' }} />
                {blog.readTime}
            </BlogReadTime>
            <BlogReadTime>
                12 January, 2021
        </BlogReadTime>
        </BlogWrapper>
    </>
);

const BlogWrapper = styled.div`
    margin: 10px;
    background: #fff;
    padding: 10px;
    border-radius:5px;
`;

const BlogTitle = styled.h3`
    font-weight:600;
    padding:5px 0px;
`;

const BlogSummary = styled.p`
    padding: 10px 5px;
    font-size:.9em;
`;

const BlogReadTime = styled.span`
    font-size:.7em;
    color:${({ theme }) => theme.color3};
    padding-left:5px;
`;

const EntryIcon = styled.span`
    padding:10px;
    background:${({ theme }) => theme.blog.bg};
    color:${({ theme }) => theme.blog.color};
    border-radius:50%;
`;

export default Blog;