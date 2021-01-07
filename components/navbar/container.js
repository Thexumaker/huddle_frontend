import Link from 'next/link';
import styles from './container.module.css'

const Container = ({links}) => {

    return (
        <div className={styles.navi}>
        <div className={styles.left}>
       <a href='/'> <img className={styles.logo}  src="images/huddle.svg"></img></a>

        </div>
        <div className={styles.middle}>
        {links.map( (link) => (
        
        <Link href={`/${link.replace(/\s/g, '').toLowerCase()}`}>
        <a className={styles.item}>{` ${link}`}</a>
      </Link>
      
    ))}
    </div>
        </div>

    )
}
export default Container;