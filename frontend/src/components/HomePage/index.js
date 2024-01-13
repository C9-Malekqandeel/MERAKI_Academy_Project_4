import React,{createContext} from 'react'
import HeadBarHome from '../HeadBarHome'
import ImagesItems from '../ImagesItems'
import Slides from '../Slides'
import Category from '../Category';


const HomePage = () => {
  return (
    <div>
        <HeadBarHome/>
        <ImagesItems/>
        <Slides/>
        <Category/>
    </div>
  )
}

export default HomePage