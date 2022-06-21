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
const Why: NextPage<Props> = ({ book }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}> Why do we learn English?</h1>
                <p className={styles.descriptionText}>
                    People learn new languages for many different reasons, such as travel or work, and the benefits can be incredibly worthwhile, whatever the reason.
                    <br />
                    Studying a foreign language can increase cultural knowledge and can help you feel more confident when travelling. It’s also a fact that learning a second language improves brain functionality.
                    People who speak more than one language have improved memory, problem-solving and critical-thinking skills, enhanced concentration, ability to multitask and better listening skills.
                </p>
                <h3 className={styles.descriptionText}> Sounds great, right? So, now you know that it’s a good idea to learn a language, why is it important to learn English?</h3>
                <div className={styles.descriptionCardsBox}>
                    <p className={styles.CardsText}>Studying English can help you get a job: <br />
                        English is the language of science, aviation, computers, diplomacy, and tourism. Knowing English increases your chances of getting the job you want.</p>
                    <p className={styles.CardsText}>Travelling is a lot easier with a good knowledge of English: <br />
                        Even if you are in a country where English is not the official language, chances are that English will still be used as a tool for communication!</p>
                    <p className={styles.CardsText}>English is the language of the media industry:<br />
                        If you speak English, you won’t need to rely on translations and subtitles anymore to enjoy your favourite books, songs, films and TV shows!</p>
                </div>

            </main>
        </div>
    )
}


export default Why