import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
MyApp.getInitialProps = async ({Component, ctx}) => {
  let pageProps = {}
  if(Component.getInitialProps){
    pageProps = await Component.getInitialProps(ctx)
  }
  return { pageProps }
}
export default MyApp
