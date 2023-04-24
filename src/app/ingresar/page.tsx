import Link from 'next/link'
import styles from '@/styles/Login.module.css'
import PasswordInput from '@/components/Forms/PasswordInput'
import UsernameInput from '@/components/Forms/UsernameInput'

const Login = () => {
  return (
    <>
      <main className={styles.login}>
        <div className={styles.screen}>
          <div className={styles.screenContent}>
            <form className={styles.loginForm} action='/ingresar' method='POST'>
              <div className={styles.loginField}>
                <UsernameInput styles={styles} />
              </div>
              <div className={styles.loginField}>
                <PasswordInput props={{ styles, placeholder: 'Contraseña', id: 'password' }} />
              </div>
              <button className={styles.button + ' ' + styles.loginSubmit}>
                <span>ingresar ahora</span>
                <i className={styles.buttonIcon} />
              </button>
            </form>
            <div className={styles.socialLogin}>
              <h3 className={styles.loginMethods}>ingresar con</h3>
              <div className={styles.socialIcons}>
                <Link href='/ingresar' className={styles.socialLoginIcon + ' fab fa-google'}>
                  oogle
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.screenBackground}>
            <span className={styles.screenBackgroundShape + ' ' + styles.screenBackgroundShape4} />
            <span className={styles.screenBackgroundShape + ' ' + styles.screenBackgroundShape3} />
            <span className={styles.screenBackgroundShape + ' ' + styles.screenBackgroundShape2} />
            <span className={styles.screenBackgroundShape + ' ' + styles.screenBackgroundShape1} />
          </div>
        </div>
      </main>
    </>
  )
}

export const metadata = {
  title: 'Ingresar | SB Estudio Contable'
}

export default Login
