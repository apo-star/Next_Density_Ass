import Image from 'next/image'
import Header from './Components/Header'
import Main from './Components/Main'

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center  justify-between p-24">
      <Header/>
      <Main/>
    </main>
  )
}
