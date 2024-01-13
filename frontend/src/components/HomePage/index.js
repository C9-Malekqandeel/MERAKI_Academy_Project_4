import React,{createContext} from 'react'
import HeadBarHome from '../HeadBarHome'
import ImagesItems from '../ImagesItems'
import Slides from '../Slides'
import Category from '../Category';
import Item from '../Item';


const HomePage = () => {
  return (
    <div>
        <HeadBarHome/>
        <ImagesItems/>
        <Slides/>
        <Category/>
        <Item/>
    </div>
  )
}

export default HomePage