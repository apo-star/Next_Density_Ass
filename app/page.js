"use client";
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer';
import EqBeats from './Components/EqBeats';
import OpenVaccancy from './Components/OpenVacancy';
import Work from './Components/Work';
import TestPrivacy from './Components/TestPrivacy';

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center w-100% justify-between p-24">
      <Header/>
      <Main/>
      <EqBeats/>

      <EqBeats/>
      <TestPrivacy/>
      <Work/>
      <OpenVaccancy/>
      <Footer/>
    </main>
  )
}
