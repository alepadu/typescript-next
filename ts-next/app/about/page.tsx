import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className='card shadow'>
          <div className='card-header'></div>
          <div className='card-body'>
            <div className='row'>
              <div className='col-6'>
                <button>cia ciao</button>
              </div>
              <div className='col-6'>
                <a> Ciao!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
