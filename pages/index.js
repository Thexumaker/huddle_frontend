
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainContainer from '../components/mainPage/mainContainer'
import Container from '../components/navbar/container'
import AboutContainer from '../components/mainPage/aboutContainer'
import React from 'react'
import Router from 'next/router'


import {signIn,signOut,useSession} from 'next-auth/client'
export default function Home() {
  const [session,loading] = useSession()
  if (session) {
    Router.push('homePage')
  }

  

  return (
    <div>
    <Container />
    <MainContainer />
    <AboutContainer />
    
    </div>
  )
}




