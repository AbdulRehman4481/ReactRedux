import React from 'react'
import Students from './Students'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Students />
      </main>
      <Footer />
    </>
  )
}
