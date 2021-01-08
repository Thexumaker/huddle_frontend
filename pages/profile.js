import styles from '../styles/Home.module.css'
import BottomNav from '../components/DatingContent/bootomNav/bottomNav'
import UserImage from '../components/DatingContent/mainPage/UserImage'
import UserName from '../components/DatingContent/mainPage/UserName'

export default function Home() {
    return (
      <div>
          <UserImage />
          <UserName user = {{first: 'David', last:'Xu'}} />
          <BottomNav />
          
      
      </div>
    )
  }
  