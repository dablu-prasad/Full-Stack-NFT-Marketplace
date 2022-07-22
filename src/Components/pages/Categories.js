import React from 'react'
import Cards from '../Cards';

import Navbar from '../Navbar';
import Index_Home from '../../components/templates/Index_Home'
import FilterCard from '../FilterCard'
function Categories(props) {

 
  return (
    <>

<Navbar name="Art" link='/art' third='Music' link3='/music' fourth="Photography" link4='/photography'/>
      <FilterCard flag="true" categories={props.filter} heading={props.heading}/>
    </>
    
  )
}

export default Categories