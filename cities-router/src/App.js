// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Cities from './Cities';
import Footer from './Footer';
import About from "./About";
import Contact from "./Contact";

const citiesData = [
  {
      id:1,
      name: "Aqaba",
      country:"Jordan",
      info : "Sea",
      image:"https://www.gojordantours.com/wp-content/uploads/2022/08/aqaba.jpg"
  },
  {
      id: 2,
      name: "Paris",
      country: "France",
      info: "City of Love",
      image: "https://www.thetrainline.com/cms/media/1360/france-eiffel-tower-paris.jpg?mode=crop&width=1080&height=1080&quality=70"
      },
      {
      id: 3,
      name: "Kyoto",
      country: "Japan",
      info: "Historical Temples",
      image: "https://lp-cms-production.imgix.net/2021-02/shutterstockRF_787331263.jpg"
      },
      {
      id: 4,
      name: "Rio de Janeiro",
      country: "Brazil",
      info: "Carnival Capital",
      image: "https://i.natgeofe.com/n/560b293d-80b2-4449-ad6c-036a249d46f8/rio-de-janeiro-travel_3x4.jpg"
      },
      {
      id: 5,
      name: "Sydney",
      country: "Australia",
      info: "Opera House",
      image: "https://media.timeout.com/images/103161245/image.jpg"
      },
      {
      id: 6,
      name: "Cairo",
      country: "Egypt",
      info: "Pyramids",
      image: "https://www.traveloffpath.com/wp-content/uploads/2023/05/Cairo-Pyramids-Egypt.jpg"
      },
      {
      id: 7,
      name: "Barcelona",
      country: "Spain",
      info: "Sagrada Familia",
      image: "https://a.cdn-hotels.com/gdcs/production81/d1983/1441d9b5-d0e6-4230-9923-646d58ba66d8.jpg"
      },
      {
      id: 8,
      name: "New York City",
      country: "United States",
      info: "Empire State Building",
      image: "https://media.architecturaldigest.com/photos/5da74823d599ec0008227ea8/16:9/w_2991,h_1682,c_limit/GettyImages-946087016.jpg"
      },
      {
      id: 9,
      name: "Dubai",
      country: "United Arab Emirates",
      info: "Burj Khalifa",
      image: "https://travelbird-images.imgix.net/f2/0b/f20bce73731062f021a0c62b7353fa76?auto=compress%2Cformat&crop=faces%2Cedges%2Ccenter&fit=crop&h=1144&w=828"
      },
      {
      id: 10,
      name: "Venice",
      country: "Italy",
      info: "Canals and Gondolas",
      image: "https://cdn.britannica.com/62/153462-050-3D4F41AF/Grand-Canal-Venice.jpg"
      }
];


function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home countries={['Jordan', 'France', 'Japan','Brazil', 'Australia', 'Egypt','Spain','United States','United Arab Emirates','Italy']} 
        setSelectedCountry={setSelectedCountry} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
      </header>
      {selectedCountry && <Cities selectedCountry={selectedCountry} cities={citiesData} />}
      <Footer />
    </div>
  );
}

export default App;
