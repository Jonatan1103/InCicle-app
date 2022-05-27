import styles from './Header.module.css'
import logo from '../../../assets/logo.png'

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.main}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>  
    </header>
  )
}

export default Header