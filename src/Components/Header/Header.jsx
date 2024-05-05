import React from 'react'
 import "./header.css"
import Navbar from "../Navbar/Navbar"
import SearchForm from "../SearchForm/SearchForm"

function Header() {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>if you have a garden and library, you have everything you need! A library is not a luxury but one..!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header
