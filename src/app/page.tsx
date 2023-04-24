import styles from '@/styles/Home.module.css'

const Home = () => {
  return (
    <main className={styles.home}>
      <div className={styles.homeTitleContainer}>
        <h1 className={styles.homeTitle}>SB ESTUDIO CONTABLE</h1>
      </div>
    </main>
  )
}

export const metadata = {
  title: 'Inicio | SB Estudio Contable'
}

export default Home
