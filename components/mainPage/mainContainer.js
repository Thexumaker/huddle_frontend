import styles from './mainContainer.module.css'
const mainContainer = () => {

    return (
        <div className={styles.mains}>
            <div className= {styles.left}>
                <img className = {styles.img} src="/images/groupSelfie.svg"></img>
            </div>
            <div className={styles.right}>
            <h1 className={`${styles.headerText} ${styles.purple}`}>Huddle Dating</h1>
            <p className={styles.headerText2}>Shifting towards human dating and replacing the swiping with conversing</p>

            </div>
        </div>
    )
}
export default mainContainer;