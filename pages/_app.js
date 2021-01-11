import '../styles/globals.css'
import {Provider} from "next-auth/client"
import "reflect-metadata"
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
    <Component {...pageProps} />
    </Provider>

  )
  
}

export default MyApp
