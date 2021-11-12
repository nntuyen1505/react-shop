import React from 'react'
import NavBarBottom from './components/NavBarBottom'
import NavBarTop from './components/NavBarTop'
import NewsletterHorizontal from './components/NewsletterHorizontal'
import NewsletterVertical from './components/NewsletterVertical'
import PasswordReset from './components/PasswordReset'
import Product from './components/Product'
import Search from './components/Search'
import SizeChart from './components/SizeChart'
import SlideBar from './components/SlideBar'
import WaitList  from './components/WaitList'

export default function Header() {
    return (
        <>
        <NewsletterHorizontal/>
        <NewsletterVertical/>
        <PasswordReset/>
        <Product/>
        <Search/>
        <SlideBar/>
        <SizeChart/>
        <WaitList/>
        <NavBarTop/>
        <NavBarBottom/>
        </>
        
    )
}
