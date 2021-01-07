import styles from '../styles/Home.module.css'

import SignInBox from '../components/signup/signupbox'
import Container from '../components/navbar/container'
export default function Home() {
    return (
      <div>
          <Container links = {['About', 'Blog', 'Log in','Sign Up']} />
          <SignInBox />
          
      
      </div>
    )
  }