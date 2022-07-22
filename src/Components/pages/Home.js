import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Navbar from '../Navbar';
import Cards from '../Cards';
import Instruction from '../Instruction';
import Index_Home from '../../components/templates/Index_Home';
import ModalBox from '../ModalBox';


function Home() {
  return (
    <>
        <Navbar name="create" link="/create" third="Categories" link3="/categories"/>
      <HeroSection />
      <Index_Home></Index_Home>
     
      <Instruction/>
      
 
    
    </>
  );
}

export default Home;