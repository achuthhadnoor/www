import Head from 'next/head'
import Menu from '../components/Menu'
function Home() { 
  return (
    <div className="container mx-auto px-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu/>
     </div>
  )
}

export default Home;