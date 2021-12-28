import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from 'components/Footer';
import Header from './Header';
// import MobileMenu from 'components/MobileMenu';

export default function Container(props) {

    const { children, ...customMeta } = props;
    const router = useRouter();
    const meta = {
        title: 'Achuth Hadnoor – Developer, writer, creator.',
        description: `Front-end developer, JavaScript enthusiast, and maker.`,
        image: 'https://achuth.dev/static/images/banner.png',
        type: 'website',
        ...customMeta
    };
    return (
        <div className="bg-gray-0 dark:bg-gray-900 print:dark:bg-gray-500 px-4 sm:px-10">
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta property="og:url" content={`https://achuth.dev${router.asPath}`} />
                <link rel="canonical" href={`https://achuth.dev${router.asPath}`} />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Achuth Hadnoor" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@achuth_hadnoor" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                {meta.date && (
                    <meta property="article:published_time" content={meta.date} />
                )}
            </Head>
            <Header />
            <main
                id="skip"
                className="flex flex-col justify-center sm:p-0  max-w-6xl mx-auto print:sm:px-4 print:sm:pt-24"
            >
                {children}
            </main>
            <Footer />
        </div>
    );
}