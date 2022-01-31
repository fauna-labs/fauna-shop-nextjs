// components/Dashboard.js

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookie from 'js-cookie'

export default function Dashboard() {
  const router = useRouter()
  const cookies = Cookie.get('fauna-session');

  useEffect(() => {
    if(!cookies) {
      router.push('/login')
    } 
  }, [cookies, router])

  return <div>Dashboard</div>
}
