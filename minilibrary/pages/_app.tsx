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
          <a className={styles.Home}><h1>HOME</h1></a>
        </Link>
        <Link href="/why">
          <a><h3>Why do we learn English?</h3></a>
        </Link>
        <Link href="/">
          <a><h3>Teacher Dani</h3></a>
        </Link>
      </nav>
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <a>Teacher Dani 2022</a>
        <a>Github</a>
        <a>LinkedIn</a>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image alt="Vercel Logo" height={16} src="/vercel.svg" width={72} />
          </span>
        </a> */}
      </footer>
    </>
  );

}

export default MyApp
