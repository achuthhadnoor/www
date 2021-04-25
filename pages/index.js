import Social from '../components/social'
import Subscribe from '../components/subscribe'
import Articles from '../components/Home/recentArticles'
import Container from '../components/container'

function Home() {
  return (
    <Container> 
      <main className="mx-auto mt-5 px-4">
        <h1 className="text-3xl py-2">Achuth Hadnoor</h1>
        <h3 className="text-lg pb-5">Developer {'&'} UI/UX Designer</h3>
        <p className="text-sm max-w-prose leading-loose">
         👋 Hey, I am a
      <a target="_blank" rel="noopener" href="https://achuth.dev/dribbble" className="p-1 ml-1 bg-yellow-50 hover:bg-yellow-100 rounded-md text-yellow-600">designer</a>, 
      <a target="_blank" rel="noopener" href="https://achuth.dev/github" className="p-1 ml-1 bg-yellow-50 hover:bg-yellow-100 rounded-md text-yellow-600">developer</a>,
      <a target="_blank" rel="noopener" href="https://achuth.dev/medium" className="p-1 ml-1 bg-yellow-50 hover:bg-yellow-100 rounded-md text-yellow-600">writer</a>
      and <a target="_blank" rel="noopener"  href="https://achuth.dev/producthunt" className="p-1 ml-1 bg-yellow-50 hover:bg-yellow-100 rounded-md text-yellow-600">maker</a>. I craft digital products that are used by hundreds of creators
    </p>
        <div className="mt-5 flex items-center">
          <hr className="w-16" />
          <Social />
        </div>
      </main>
      <section id="articles" className="px-4 mt-10">
        <Articles />
      </section>
      <section className="px-4 mt-10" id="newsletter">
        <Subscribe />
      </section>
 </Container> )
}

export default Home;