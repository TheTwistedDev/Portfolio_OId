import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import {AnimatePresence} from 'framer-motion'
import Router from 'next/router'

function MyApp({ Component, pageProps,router }) {


  return (
    <ThemeProvider attribute="class">
      <div className="lg:px-50 sm:px-20 md:px-32">
        <div className="p-4 bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="my-4 overflow-hidden bg-white lg:col-span-9 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route}/>
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
