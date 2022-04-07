/* eslint-disable @next/next/no-sync-scripts */
// Copyright Fauna, Inc.
// SPDX-License-Identifier: MIT-0

import Head from 'next/head'
import Navbar from './Navbar'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.7.6/dist/css/uikit.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.6/dist/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.6/dist/js/uikit-icons.min.js" />
      </Head>
      {
        router.route === '/store/[id]' ? null : <Navbar />
      }
      {children}
    </>
  )
}
