// Copyright Fauna, Inc.
// SPDX-License-Identifier: MIT-0

import Dashboard from '../components/Dashboard'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <Layout>
      <div className={styles.container}>
        <Dashboard />
      </div>
    </Layout>
  )
}
