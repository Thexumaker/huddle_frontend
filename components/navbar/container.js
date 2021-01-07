import Link from 'next/link';
import styles from './container.module.css'

const Container = ({links}) => {

    return (
        <div className={styles.navi}>
        <div className={styles.left}>
        <img className={styles.logo} src="images/huddle.svg"></img>

        </div>
        <div className={styles.middle}>
        {links.map( (link) => (
        
        <Link href="/login">
        <a className={styles.item}>{` ${link}`}</a>
      </Link>
      
    ))}
    </div>
        </div>

    )
}
export default Container;