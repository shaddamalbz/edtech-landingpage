import { Outlet } from 'react-router-dom'

// componets
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const baseLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default baseLayout
