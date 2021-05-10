import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
    <header className="App-header">
      <h1>SPA</h1>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About us</Link></li>
      </ul>
    </header>
    <Component {...pageProps} />
    <footer>U.org</footer>
  </div>
  )
}
export default MyApp