import { Display } from './Title'
import Button from './Button'
import styles from './styles/Nav.module.scss'

export default function Nav({page}) {

    return  <nav className={styles.container}>
      <Display >{page}</Display>
     <div className={styles.button}>
        <Button primary href={'/create'}>create</Button>
    </div>
  </nav>
}