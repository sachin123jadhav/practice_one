import React from 'react'
import "./restaurant.css"
import Menu from './menuApi'
import MenuCard from './MenuCard'
import NavBar from './NavBar'

import { useState } from "react"

const uniqueList = [... new Set(Menu.map((curEle) => {
  return curEle.category
})),
"All",
]


const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const filterItem = (category) => {
    if(category==="All"){
      setMenuData(Menu)
      return;
    }
    const updatedList = Menu.filter((curEle) => {

      
      return curEle.category === category;

    });
    setMenuData(updatedList)

  }

  return (
    <>
     
      <NavBar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />


    </>
  )
}

export default Restaurant