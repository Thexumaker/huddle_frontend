import styles from '../styles/Home.module.css'
import MainContainer from '../components/mainPage/mainContainer'
import Container from '../components/navbar/container'
import AboutContainer from '../components/mainPage/aboutContainer'
export default function Home() {
    return (
      <div>
      <Container links = {['About', 'Blog', 'Log in']} />
      <MainContainer />
      <AboutContainer />
      </div>
    )
  }
  