import styles from '../styles/Home.module.css'
import BottomNav from '../components/DatingContent/bootomNav/bottomNav'
const axios = require('axios').default
export default function Home({events,users,error}) {
    
    return (
      <div>
      <h2>Events Near By:</h2>
      <div className={styles.grid}>
        
        {events.map((event) => {
          return (
            <div className={styles.gridItem}>
          <h1>
          {event.eventAddress.street}
        </h1>
        <h2>
        {event.eventAddress.city}
        </h2>
        <h2>
        {event.eventName}
        </h2>
        </div>
        )

        })}

          
          
      
      </div>
      <h1>Your huddles:</h1>
      <div className={styles.grid}>
        
        {users.map((user) => {
          return (
            <div className={styles.gridItem}>
          <h1>
          {user.userEmail}
        </h1>
        <h2>
        {user.messages.message}
        </h2>
        
        </div>
        )

        })}

          
          
      
      </div>

      
      <BottomNav />
      </div>
    )
  }
  Home.getInitialProps = async () => {
    try {
      const [events, users] = await Promise.all([
        axios.get('https://huddledatingapp.herokuapp.com/event'),
        axios.get('https://huddledatingapp.herokuapp.com/user')
      ]);

      return { events: events.data, users: users.data };
    } catch (error) {
      return { error };
    }
  };
  
  