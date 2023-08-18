"use client";
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer';

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center w-100% justify-between p-24">
      <Header/>
      <Main/>
      <Footer/>
    </main>
  )
}
