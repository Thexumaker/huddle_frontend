import Link from 'next/link';
import styles from './bottomNav.module.css'
import {AiOutlineUser, AiOutlineMessage, AiOutlineHome} from "react-icons/ai"
import {signIn,signOut,useSession} from 'next-auth/client'
import { useRouter } from 'next/router'


const BottomNav = ({icons}) => {
    

    return (

        <div>
            
            <ul className={styles.listofIcons}>
                <li className={styles.li}>
                <Link href="/">
                    <AiOutlineUser className={styles.icon} />
                </Link>
                </li>
                <li className={styles.li} >
                <Link href="/">
                    <AiOutlineMessage className={styles.icon} />
                </Link>
                </li>
                <li onClick = {signOut} className={styles.li}>

                    <AiOutlineHome className={styles.icon} />

                </li>
            </ul>
        

        
    </div>


    )
}
export default BottomNav;