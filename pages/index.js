import Head from 'next/head' 
import Hero from '../components/hero'

export default function Home() {
  return (
    <div className="px-8 mt-10">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <div className="mx-auto">
      <Hero/>
      </div>
    </div>
  )
}
