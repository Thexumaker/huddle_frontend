import styles from './signupbox.module.css'
import { useState } from 'react';
const SignInBox = (props) => {
    const [userName, setName] = useState('');
    const [password, setPassword] = useState('');
    const handleUserName = event => {
        setName(event.target.value);
        };
        const handlePassword = event => {
            setPassword(event.target.value);
            };

    return (
    <div className={styles.body}>
    <div className={styles.main}>
    <p className={styles.sign} align="center">Register</p>
    <form className={styles.form1}>
      <input className={styles.un} type="text" align="center" value={userName} onChange={handleUserName} placeholder="Username" />
      <input className={styles.pass} type="password" value={password} align="center" onChange={handlePassword} placeholder="Password" />
      <a className={`${styles.submit} ${styles.a}`} align="center">Register</a>
      <p className={styles.forgot} align="center"><a href="#">Forgot Password?</a></p>
            
    </form>         
    </div>
    </div>
    )
}
export default SignInBox;