// Copyright Fauna, Inc.
// SPDX-License-Identifier: MIT-0

import { useRouter } from 'next/router'
import Link from 'next/link'
import Cookie from 'js-cookie'

export default function Navbar() {
  const router = useRouter()
  const logOut = () => {
      Cookie.remove('fauna-session')
      router.push('/login')
  }

  return (
    <nav className="uk-navbar-container" style={{ display: 'flex'}}>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active"><Link href='/'>Fauna E-Com</Link></li>
        </ul>
      </div>
      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li >
            <Link href='/store/new' className="uk-button uk-button-primary" style={{ color: 'white'}}>
              Add Store
            </Link>
          </li>
          <li >
            <a onClick={logOut} className="uk-button uk-button-danger" style={{ color: 'white'}}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
