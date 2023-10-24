import React from 'react';
import './style.css'

const Home = ({ countries, setSelectedCountry }) => {
  return (
    <section class="mb-40">
      <div class="relative overflow-hidden bg-cover bg-no-repeat herooo"  >
        <div
          class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
          <div class="flex h-full items-center justify-center">
            <div class="px-6 text-center text-white md:px-12">
              <h1 class="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                World's Cities
              </h1>
              <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
              <select  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setSelectedCountry(e.target.value)}
                >
                <option value="">Select a country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
                </select>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Home;
