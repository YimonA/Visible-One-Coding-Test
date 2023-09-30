import Hero from '../component/Hero'
import About from '../component/About'
import OurChallenges from '../component/OurChallenges'
import OldWebsite from '../component/OldWebsite'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div className=' container-fluid'>
        <Hero/>
        <About/>
        <OurChallenges/>
        <OldWebsite/>
        <Footer/>
    </div>
  )
}

export default Home