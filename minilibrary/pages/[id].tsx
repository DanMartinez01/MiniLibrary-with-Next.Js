import * as React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import data from '../data.json'
import { Book } from '../types'

interface Props {
    book: Book;
}
const Home: NextPage<Props> = ({ book }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name={book.title} content={book.title} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>📚{book.title}</h1>
                <iframe allow="autoplay" height="400" src={`${book.file}/preview`} />
                <a className={styles.button} href={`${book.file}/view`}>
                    <h2>Download</h2>
                </a>
            </main>
        </div>
    )
}
export const getStaticProps: GetStaticProps<any, any> = async ({ params: { id } }) => {
    const book = data.find((book) => book.id === id);
    return {
        props: {
            book,
        },
        revalidate: 10,
    };
};
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths:
            data.map((book) => ({ params: { id: book.id } })),
        fallback: false,
    };
}

export default Home