import styles from './signupbox.module.css'
import axios from 'axios';
import { useForm } from "react-hook-form";
import Router from 'next/router'




const SignInBox = (props) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        alert(JSON.stringify(data))
        const res = await axios.post('https://huddledatingapp.herokuapp.com/user/create',
        {
            email: data.userName,
            password: data.userpassword

        })
        console.log(res)
        alert(JSON.stringify(res.data))
        Router.push('/')


    }
    

    return (
    <div className={styles.body}>
    <div className={styles.main}>
    <p className={styles.sign} align="center">Sign in</p>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form1}>
      <input className={styles.un} name= 'userName' type="text" align="center" ref={register} placeholder="Username" />
      <input className={styles.pass} name= 'userpassword' type="password" ref={register}  align="center"  placeholder="Password" />
      <input type='submit' value="Sign in" className={`${styles.submit} ${styles.a}`} align="center" />
      <p className={styles.forgot} align="center"><a href="#">Forgot Password?</a></p>
            
    </form>         
    </div>
    </div>
    )
}
export default SignInBox;