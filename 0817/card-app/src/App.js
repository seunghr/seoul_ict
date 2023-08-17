import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Menu } from './styeldComp'
import Cards from './Cards'
import Detail from './Detail'
import { useSelector } from 'react-redux';

function App(){
  return(
    <BrowserRouter>
      <Menu>
        <h1 style={{fontSize:"50px"}}>★짱구 극장판 소개★</h1>
      </Menu>
      <Routes>
          {useSelector((state) => state.contents).map((content, idx) => {
            return <Route path={content.path} key={idx} element={<Detail content={content.detail} />} />
          })}
          <Route path="/" element={<Cards />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;