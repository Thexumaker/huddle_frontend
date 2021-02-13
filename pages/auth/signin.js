import { providers, signIn } from 'next-auth/client'

import styles from './loginBox.module.css'


export default function SignIn({ providers }) {

  return (
    <div className={styles.body}>
    <div className={styles.main}>
    <p className={styles.sign} align="center">Sign in</p>
    <div class = {styles.providersBox}>
    {Object.values(providers).map(provider => (
        <div className={styles.sign}> 
          <a className= {styles.item} onClick={() => signIn(provider.id)}>Sign in with {provider.name}</a>

        </div>
        
    ))}


    </div>
    
          
    </div>
    </div>


   
  )
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(context)
  }
}
