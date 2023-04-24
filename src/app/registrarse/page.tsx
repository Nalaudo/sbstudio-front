import Link from 'next/link'
import styles from '@/styles/Signup.module.css'
import PasswordInput from '@/components/Forms/PasswordInput'
import UsernameInput from '@/components/Forms/UsernameInput'

const Signup = () => {
  return (
    <>
      <main className={styles.signup}>
        <div className={styles.screen}>
          <div className={styles.screenContent}>
            <form className={styles.signupForm} action='/ingresar' method='POST'>
              <div className={styles.signupField}>
                <UsernameInput styles={styles} />
              </div>
              <div className={styles.signupField}>
                <PasswordInput props={{ styles, placeholder: 'Contraseña', id: 'password' }} />
              </div>
              <div className={styles.signupField}>
                <PasswordInput props={{ styles, placeholder: 'Repetir Contraseña', id: 'repeatPassword' }} />
              </div>
              <button className={styles.button + ' ' + styles.signupSubmit}>
                <span>ingresar ahora</span>
                <i className={styles.buttonIcon} />
              </button>
            </form>
            <div className={styles.socialSignup}>
              <h3 className={styles.signupMethods}>registrarse con</h3>
              <div className={styles.socialIcons}>
                <Link href='/ingresar' className={styles.socialSignupIcon + ' fab fa-google'}>
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

export default Signup
