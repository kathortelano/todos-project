import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from './Nav'

import styles from './styles/Layout.module.scss';

export default function Layout({page, children}) {
    return <div className={styles.container}>
        <Head>
        <title>Todo - {page}</title>
        <link rel="icon" href="/todo.svg" />
      </Head>
        <Nav page={page}/>
        
        <main className={styles.content}>
            {children}
        </main>
        <footer className={styles.footer}>
            <small className={styles.copyright}>
            Making my mark on the internet and the world! <Link href={'/findme'}><a className={styles.name}>Katrina Hortelano</a></Link> 2021. 
            </small>
        </footer>
    </div>
}