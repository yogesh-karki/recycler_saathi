
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomeAbout from './components/HomeAbout';
import Nepal from './components/Nepal';
import Objective from './components/Objective';
import OurImpacts from './components/OurImpacts';
import './main.scss'

function App() {
  
  return (
    <>
      <Header />

      <section className="banner">
        <video className='videoTag' autoPlay loop muted>
            <source src="./images/video/banner.mp4" type='video/mp4' />
        </video>

        <div className="container">
            <div className="text">
              <h1>SELF-SUSTAINABLE RECYCLING ENTERPRISE</h1>
            </div>
        </div>
      </section>

      <HomeAbout />

      <OurImpacts />

      <Objective />

      {/* <Nepal /> */}

      <Footer />
    </>
  );
}

export default App;
