import React from 'react'
import { Routes , Route  } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import PlasticRecycling from './pages/PlasticRecycling/PlasticRecycling';
import { Faq } from './pages/FAQ/Faq';
import Team from './pages/Team/Team';
import { News } from './pages/News/News';
import NewsDetail from './pages/News/NewsDetail';
import Portal from './pages/Portal/Portal';
import AboutPlastics from './pages/About/AboutPlastics';
import PlasticIndustry from './pages/About/PlasticIndustry';
import WWWV from './pages/About/WWWV';

const Layout = () => {

  return (
    <>
        <Header />
          <Routes>
            <Route path='/' element={<Home  />} />
            <Route path='/about' element={<About  />} />
            <Route path='/about_plastics' element={<AboutPlastics />} />
            <Route path='/plastic_recycling' element={<PlasticRecycling/> } />
            <Route path='/plastic_industry' element={<PlasticIndustry/> } />
            <Route path='/world_without_waste_vision' element={<WWWV/> } />
            <Route path='/faq' element={<Faq/> } />
            <Route path='/team' element={<Team/> } />
            <Route path='/news' element={<News/> } />
            <Route path='/newsDetail' element={<NewsDetail/> } />
            <Route path='/portal' element={<Portal/> } />
         
          </Routes>

          
          
        <Footer />

       
    </>
  )
}

export default Layout