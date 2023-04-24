interface Styles {
  homeLink: string
  proceduresLink: string
  newsLink: string
  loginLink: string
  signupLink: string
}

const NavLinks = ({ styles }: { styles: Styles }) => {
  const links = [
    { label: 'Home', route: '/', styles: styles.homeLink },
    { label: 'Trámites', route: '/tramites', styles: styles.proceduresLink },
    { label: 'Noticias', route: '/noticias', styles: styles.newsLink },
    { label: 'Ingresar', route: '/ingresar', styles: styles.loginLink },
    { label: 'Registrarse', route: '/registrarse', styles: styles.signupLink }
  ]
  return links
}

export default NavLinks
