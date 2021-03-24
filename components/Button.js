
import styles from './styles/Button.module.scss'
import { useRouter } from 'next/router'
import { useGlobalStore } from '../util/StoreAPI'

export default function Button({children, primary, onClick, href, ...rest}) {
    const router = useRouter();
    const { dark } = useGlobalStore();
    const DARK = dark ? styles.dark : ''
    const prime = primary && 'primary'
    return <button {...rest} className={`${styles[prime]} ${styles.container} ${DARK}`} onClick={()=> onClick || href && router.push('/create')}>{children}</button>
}