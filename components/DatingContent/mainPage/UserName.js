import styles from './UserName.module.css'
const UserName = ({user}) => {

    return (
        <div>
    <div className={styles.mid}>
        <h1>{`${user.first} ${user.last}`}</h1>
    </div>

<div className= {styles.info}>
  <div className={styles.card}>
    <h3 className={styles.title}>Statistics</h3>
    
    
  </div>
  <div className={styles.card}>
    <h3 className={styles.title}>Personal Info</h3>
  </div>
  <div className={styles.card}>
    <h3 className={styles.title}>Interests</h3>
    
  </div>
  <div className={styles.card}>
    <h3 className={styles.title}>Love Language</h3>
    
  </div>
  </div>



    </div>


    )
}
export default UserName;