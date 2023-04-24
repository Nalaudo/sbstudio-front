'use client'

import logoNoBkg from '@/assets/logos/logoNoBkg.png'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import NavLinks from './HeaderComponents/NavLinks'
import ScrollClasses from './HeaderComponents/ScrollClasses'

const links = NavLinks({
  styles: { homeLink: styles.homeLink, proceduresLink: styles.proceduresLink, newsLink: styles.newsLink, loginLink: styles.loginLink, signupLink: styles.signupLink }
})

const Header = () => {
  const scrollClass = ScrollClasses({ styles: { top: styles.top, hide: styles.hide, show: styles.show } })

  return (
    <header className={styles.header + ' ' + scrollClass}>
      <div className={styles.navContainer}>
        <Link href='/'>
          <Image width={150} priority src={logoNoBkg} alt='SB Estudio Contable Logo' />
        </Link>
        <nav className={styles.nav}>
          {links.map(({ label, route, styles }) => {
            return (
              <Link key={route} href={route} className={styles}>
                {label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Header
