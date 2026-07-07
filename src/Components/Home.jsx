import React from 'react'
import HeroSection from '../Page/HeroSecton'
import FoodGoals from '../Page/FoodGoals'
import ShopYour from '../Page/ShopYour'
import HuelWorks from '../Page/HuelWorks'
import RecommendedByExperts from '../Page/RecommendedByExperts'
import AsSeenIn from '../Page/AsSeenIn'
import ShopOur from '../Page/ShopOur'
import Huel from '../Page/Huel'
import JoinHuel from '../Page/JoinHuel'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <FoodGoals/>
        <ShopYour/>
        <HuelWorks/>
        <RecommendedByExperts/>
        <AsSeenIn/>
        <ShopOur/>
        <Huel/>
        {/* <JoinHuel/> */}
    </div>
  )
}

export default Home