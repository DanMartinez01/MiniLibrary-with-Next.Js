import * as React from "react";
import type { GetStaticProps } from "next";
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'


import data from '../data.json'
import { Book } from '../types'

interface Props {
  books: Book[];
}
const Home: NextPage<Props> = ({ books }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My virtual library</title>
        <meta name="description" content="All the books you need" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          🙋Welcome to the virtual library📚
        </h1>
        <p className={styles.description}>
          📚Here you will find all the material you need for class📝
        </p>

        <div className={styles.grid}>
          {books.map((book) => (
            <a key={book.id} href={`/${book.id}`} className={styles.card}>
              <h2>{book.title}<br /> &rarr; </h2>
              <p>{book.level} </p>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      books: data,
    },
    revalidate: 10,
  };
};

export default Home
