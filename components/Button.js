
import styles from './styles/Button.module.scss'
import { useRouter } from 'next/router'

export default function Button({children, primary, onClick, href}) {
    const router = useRouter();
  
    const prime = primary && 'primary'
    return <button className={`${styles[prime]} ${styles.container}`} onClick={()=> onClick || href && router.push('/create')}>{children}</button>
}