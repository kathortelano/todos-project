import styles from './styles/Title.module.scss'
import Link from 'next/link'

export  function Display({children})  {
   return <div className={styles.container}>
            <Logo href='/'/>
            <Title>{children}</Title>
        </div>
}

export function Logo({ href}) {
    return <div className={styles.logo}>
            <Link href={href}><a>Todo:</a></Link>
        </div>
}

export function Title({children}) {
    return <div className={styles.title}>{children}</div>
}