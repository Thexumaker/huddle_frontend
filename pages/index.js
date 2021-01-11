import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainContainer from '../components/mainPage/mainContainer'
import Container from '../components/navbar/container'
import AboutContainer from '../components/mainPage/aboutContainer'
import React from 'react'
import Link from 'next/link'
import {useState,useEffect} from 'react'

import {signIn,signOut,useSession} from 'next-auth/client'
export default function Home() {
  const [session,loading] = useSession()
  console.log(session)
  

  return (
    <div>
    <Container links = {['About', 'Blog', 'api/Log in','Sign Up']} />
    <MainContainer />
    <AboutContainer />
    {!session &&<> <button onClick={signIn}>Sign in</button> </>}
    {
      session && <> Signed in as {session.user.email}
      <button onClick={signOut}>Sign out</button>
      <Link href="/secret" >To the secret</Link>
      </>
    }
    </div>
  )
}
