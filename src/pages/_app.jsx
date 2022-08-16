import { AuthContext } from '../src/contexts/AuthContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContext>
      <Component {...pageProps} />
    </AuthContext>
  )
}

export default MyApp
