import styles from './styles/Title.module.scss'
import Link from 'next/link'

export default function Title({children})  {
   return <div className={styles.title}>
            <h1 className={styles.link}>
                <Link href='/'><a>Todo:</a></Link>
            </h1>
            <h1 className={styles.titleText}>{children}</h1>
        </div>
}