import React, { useCallback, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from './Nav'
import {RiSunLine, RiMoonLine} from 'react-icons/ri'
import { useGlobalStore } from '../util/StoreAPI'
import { useState} from 'react'

import styles from './styles/Layout.module.scss';

export default function Layout({page, children}) {
    const { toggle, dark } = useGlobalStore();
    const DARK = dark ? styles.dark : ''

    return <div className={`${styles.container} ${DARK}`}>
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
           <span onClick={()=> toggle()}>{dark ?  <RiSunLine/> : <RiMoonLine/>}</span>
        </footer>
    </div>
}