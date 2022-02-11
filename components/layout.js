// Copyright Fauna, Inc.
// SPDX-License-Identifier: MIT-0

import Navbar from './Navbar'
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
