import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Title from './Title'

import styles from './styles/Layout.module.scss';

export default function Layout({page, children}) {
    return <div className={styles.container}>
    <Head>
        <title>{page}</title>
        <link rel="icon" href="/todo.svg" />
      </Head>
        <Title>{page}</Title>
        <main className={styles.content}>
            {children}
        </main>
        <footer className={styles.footer}>
            <small className={styles.copyright}>
            Making my mark on the internet and the world! <Link href={'/'}><a>Katrina Hortelano</a></Link> 2021. 
            </small>
        </footer>
    </div>
}