import React from 'react';

const CityCard = ({ city }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">{city.name}</h2>
      <img src={city.image} alt={city.name} className="w-full h-32 object-cover mb-2" />
      <p>{city.info}</p>
    </div>
  );
};

const Cities = ({ selectedCountry, cities }) => {
  const filteredCities = cities.filter((city) => city.country === selectedCountry);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
      {filteredCities.map((city) => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
};

export default Cities;
