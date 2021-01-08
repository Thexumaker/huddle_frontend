import Link from 'next/link';
import styles from './bottomNav.module.css'
import {AiOutlineUser, AiOutlineMessage, AiOutlineHome} from "react-icons/ai"

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
                <li className={styles.li}>
                <Link href="/">
                    <AiOutlineHome className={styles.icon} />
                </Link>
                </li>
            </ul>
        

        
    </div>


    )
}
export default BottomNav;