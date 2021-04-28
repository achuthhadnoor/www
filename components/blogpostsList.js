import { frontMatter as alffiliate } from '../pages/blog/affiliate-marketing.mdx'
import { frontMatter as branding } from '../pages/blog/personal-branding-over-portfolios.mdx'

export default [
    alffiliate,
    branding,
]
const articles = [
    {
        title: "Personal branding is more influential than long list of portfolio projects",
        summary: "Portfolio projects help you undertand the design problems in the existing design project. but personal branding helps you create a design system",
        tags: [{
            id: "design",
            value: "design",
            style: "text-indigo-400 bg-indigo-50"
        }, {
            id: "personal",
            value: "personal",
            style: "text-pink-400 bg-pink-50"
        }],
        link: "/blog/personal-branding-over-portfolios"
    },
    {
        title: "What i learned from a $1k through affiliate marketing",
        summary: "Lessons and takeaways from my experience of bringing apps to uses using affiliate marketers",
        tags: [{
            id: "marketing",
            value: "marketing",
            style: "bg-red-50  text-red-400"
        }],
        link: "/blog/affiliate-marketing"
    }
]
