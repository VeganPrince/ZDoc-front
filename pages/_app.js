import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
}

export default MyApp
