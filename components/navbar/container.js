import Link from 'next/link';
import styles from './container.module.css'

import {signIn,signOut,useSession} from 'next-auth/client'
const Container = ({links}) => {
    const [session,loading] = useSession()
    return (
        <div className={styles.navi}>
        <div className={styles.left}>
       <a href='/'> <img className={styles.logo}  src="images/huddle.svg"></img></a>

        </div>
        <div className={styles.middle}>
        <Link key = {'About'} href='about'>
        <a className={styles.item}>About</a>
      </Link>
      <Link key = {'Blog'} href='blog'>
        <a className={styles.item}>Blog</a>
      </Link>
      <Link key = {'Sign Up'} href='signup'>
        <a className={styles.item}>Sign Up</a>
      </Link>
      {!session &&<> <a onClick={signIn} className={styles.item}>Sign In</a> </>}
      {session && <> <a onClick={signOut} className={styles.item}>Sign Out</a> </> }
    

        

    </div>
        </div>

    )
}
export default Container;