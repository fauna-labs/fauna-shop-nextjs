// pages/index.js
import Dashboard from '../components/Dashboard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Dashboard />
    </div>
  )
}
