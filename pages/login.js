import styles from '../styles/Home.module.css'

import LoginBox from '../components/login/loginBox'
import Container from '../components/navbar/container'
export default function Home() {
    return (
      <div>
          <Container links = {['About', 'Blog', 'Log in','Sign Up']} />
          
          <LoginBox />

          
      
      </div>
    )
  }
  
  