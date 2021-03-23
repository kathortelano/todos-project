import styles from './styles/Title.module.scss'
import Link from 'next/link'
import { useGlobalStore } from '../util/StoreAPI'



export  function Display({children})  {
   return <div className={styles.container}>
            <Logo href='/'/>
            <Title>{children}</Title>
        </div>
}

export function Logo({ href}) {
    const { dark } = useGlobalStore();
    const DARK = dark ? styles.dark : ''
    return <div className={`${styles.logo} ${DARK}`}>
            <Link href={href}><a>Todo:</a></Link>
        </div>
}

export function Title({children}) {
    const { dark } = useGlobalStore();
    const DARK = dark ? styles.dark : ''
    return <div className={`${styles.title} ${DARK}`}>{children}</div>
}