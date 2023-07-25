'use client'
import { useState, useEffect } from 'react'; // Import useEffect and useState
import Header from '@/components/Header';
import Banner from '@/components/Banner';

export default function Home() {
  const [exploreData, setExploreData] = useState([]);

  useEffect(() => {
    // This function will be executed once the component mounts
    // Fetch data and update the state using setExploreData
    async function fetchData() {
      try {
        const response = await fetch('https://jsonkeeper.com/b/4G1G');
        const data = await response.json();
        setExploreData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData(); // Call the fetchData function
  }, []); // The empty dependency array [] ensures the effect runs only once, when the component mounts

  return (
    <div>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        
          {exploreData?.map((item) => (
            <h1 key={item.location}>{item.location}</h1> // Provide a unique key for each element in the map
          ))}
        </section>
      </main>
    </div>
  );
}
