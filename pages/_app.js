import '../styles/global.scss'
import { StateProvider } from '../util/Store'

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
       <Component {...pageProps} />
    </StateProvider>
     
  )
}

export default MyApp