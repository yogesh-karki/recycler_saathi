import React from 'react'
import { Routes , Route  } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Programs from './pages/About/Programs';
import ProgramDetail from './pages/About/ProgramDetail';
import Milestone from './pages/About/Milestone';
import PlasticRecycling from './pages/PlasticRecycling/PlasticRecycling';
import { Faq } from './pages/FAQ/Faq';
import Team from './pages/Team/Team';
import { News } from './pages/News/News';
import NewsDetail from './pages/News/NewsDetail';
import Portal from './pages/Portal/Portal';
import AboutPlastics from './pages/Plastic/AboutPlastics';
import PlasticIndustry from './pages/Plastic/PlasticIndustry';
import WWWV from './pages/Plastic/WWWV';
import GlobalProblems from './pages/Problems/GlobalProblems';
import RegionalProblems from './pages/Problems/RegionalProblems';
import NationalProblems from './pages/Problems/NationalProblems';
import LocalLevel from './pages/Solutions/LocalLevel';
import PolicyLevel from './pages/Solutions/PolicyLevel';
import MilestoneDetail from './pages/About/MilestoneDetail';
import BecomeWss from './pages/Careers/BecomeWss';
import BecomeRecyclerSaathi from './pages/Careers/BecomeRecyclerSaathi';
import BailingPartner from './pages/Careers/BailingPartner';

const Layout = () => {

  return (
    <>
        
        <Header />
          <Routes>
            <Route path='/' element={<Home  />} />
            <Route path='/about' element={<About  />} />
            <Route path='/programs' element={<Programs  />} />
            <Route path='/programDetail' element={<ProgramDetail/> } />
            <Route path='/about_plastics' element={<AboutPlastics />} />
            <Route path='/milestones' element={<Milestone />} />
            <Route path='/milestone-detail' element={<MilestoneDetail />} />
            <Route path='/plastic_recycling' element={<PlasticRecycling/> } />
            <Route path='/plastic_industry' element={<PlasticIndustry/> } />
            <Route path='/world_without_waste_vision' element={<WWWV/> } />
            <Route path='/faq' element={<Faq/> } />
            <Route path='/team' element={<Team/> } />
            <Route path='/news' element={<News/> } />
            <Route path='/newsDetail' element={<NewsDetail/> } />
            <Route path='/portal' element={<Portal/> } />
            <Route path='/global_problems' element={<GlobalProblems/> } />
            <Route path='/regional_problems' element={<RegionalProblems/> } />
            <Route path='/national_problems' element={<NationalProblems/> } />
            <Route path='/local_level_interventions' element={<LocalLevel/> } />
            <Route path='/policy_level_interventions' element={<PolicyLevel/> } />
            <Route path='/bailing_partner' element={<BailingPartner/> } />
            <Route path='/become_recycler_saathi' element={<BecomeRecyclerSaathi/> } />
            <Route path='/become_waste_smart_school' element={<BecomeWss/> } />
            
         
          </Routes>

          
          
        <Footer />

       
    </>
  )
}

export default Layout