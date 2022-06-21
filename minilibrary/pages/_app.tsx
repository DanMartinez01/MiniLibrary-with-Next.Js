import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import { Fragment } from 'react'
import Image from "next/image";
import Link from 'next/link'
import styles from "../styles/Home.module.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.Home}><h3>HOME</h3></a>
        </Link>
        <Link href="/why">
          <a><h3>Why do we learn English?</h3></a>
        </Link>
        <Link href="https://www.linkedin.com/in/daniela-mart%C3%ADnez-5935a9105/">
          <a><h3>About Me</h3></a>
        </Link>
      </nav>
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <Link className={styles.footerLink} href="https://github.com/DanMartinez01">Github</Link>
        <Link className={styles.footerLink} href="https://www.linkedin.com/in/daniela-mart%C3%ADnez-5935a9105/">LinkedIn</Link>
        <a href="/"> The English Corner &copy;{new Date().getFullYear()}</a>
      </footer>
    </>
  );

}

export default MyApp
