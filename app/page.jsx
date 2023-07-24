import Head from 'next/image'
import Header from '@/components/Header'
import Banner from '@/components/Banner'

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
        </section>
      </main>
    </div>
  )
}
