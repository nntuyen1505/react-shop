import React from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import OursStory from './components/OursStory'
import Welcome from './components/Welcome'
import About from './components/About'
import OursStory2 from './components/OursStory2'
import Slogan from './components/Slogan'
import Images from './components/Images'
import Review from './components/Review'
import Social from './components/Social'
import Features from '../../components/Features'

export default function Abouts() {
    return (
        <>
            <BreadCrumb/>
            <Welcome/>
            <OursStory/>
            <About/>
            <OursStory2/>
            <Slogan/>
            <Images/>
            <Review/>
            <Social/>
            <Features/>
        </>
    )
}
