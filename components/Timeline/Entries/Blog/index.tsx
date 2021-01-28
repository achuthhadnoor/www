import Icon from "react-icons-kit";
import { eye } from 'react-icons-kit/entypo'
import { IBlog } from "../../../../types/timeline";

const Blog = (blog: IBlog) => (
    <div>
        <h3>
            {blog.title}
        </h3>
        <p>
            {blog.summary}
        </p>
        <span>
            <Icon icon={eye} />
            {blog.readTime}
        </span>
    </div>
)
export default Blog;