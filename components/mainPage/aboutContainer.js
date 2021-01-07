import styles from './aboutContainer.module.css'
const AboutContainer = () => {

    return (
        <div>
        <div className={styles.mains}>
            <h1 className={styles.purple}>Vision</h1>
            <p className={styles.content}>
To shift the perspective on how we can create
 meaningful and authentic relationships in a
  time when social media creates barriers from
   honest self-expression.
</p>
<h2 className={styles.purple}>Mission</h2>
<p className={styles.content}>
Our aim is to undo much of the harms created by social media by discouraging swipe culture, and arming users with the courage to be themselves. We do this by creating a platform that is convenient and focuses on in-person interactions through our app’s design, partnerships with businesses and engagement with our users.

</p>
        </div>
        <div className={styles.mains}>
            <h1 className={`${styles.purple} ${styles.offertitle}`}>What do we offer?</h1>
            <div className= {styles.offerBox}>
                <div className={styles.offerItem}>
                <img className={styles.offerimg} src = '/images/swipe.png'></img>
                    <h4> No More Swiping </h4>
                    <p>Removing the gamification of dating</p>
                </div>
                <div className={styles.offerItem}>
                    <img className={styles.offerimg} src = '/images/clip-944.png'></img>
                    <h4> Group Matches </h4>
                    <p>Takes the pressure of 1 on 1 settings</p>
                </div>
                <div className={styles.offerItem}>
                    <img className={styles.offerimg} src='/images/msg.png'></img>
                    <h4> In App Messaging </h4>
                    <p>No need to switch off the app to set events or to chat</p>
                </div>
                <div className={styles.offerItem}>
                    <img className={styles.offerimg} src='/images/restaurant.png'></img>
                    <h4> Support for local businesses </h4>
                    <p>Sponsored events in app are integrated with local business needs</p>
                </div>
            </div>
        </div>
        </div>
    )
}
export default AboutContainer;