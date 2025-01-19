import React, { useState,useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [route, setRoute] = useState(null); 

  useEffect(() => {
   
    axios
      .get("http://localhost:4000/api/bus-routes") 
      .then((response) => {
        setRoute(response.data); 
        console.log(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching bus routes:", error);
      });
  }, []);

  
  const routes = route ? route : {};

  
  const allLocations = route ? [...new Set(Object.values(routes).flat())] : [];

 

  const handleSearch = (e) => {
    e.preventDefault();
    if (!from || !to || !travelDate) {
      setMessage("Please fill out all fields.");
    } else if (from.toLowerCase() === to.toLowerCase()) {
      setMessage("The 'From' and 'To' locations cannot be the same.");
    } else {
      let selectedRoute = null;

      
      for (const key in routes) {
        const route = routes[key];
        if (route.includes(from.toLowerCase()) && route.includes(to.toLowerCase())) {
          const fromIndex = route.indexOf(from.toLowerCase());
          const toIndex = route.indexOf(to.toLowerCase());
          if (fromIndex < toIndex) {
            
            const match = key.match(/\d+/); 
            
            if (match) {
              selectedRoute = match[0]; 
            }
            break;
          }
        }
      }

      if (selectedRoute) {
        navigate(
          `/buslist?from=${encodeURIComponent(from)}&to=${encodeURIComponent(
            to
          )}&travelDate=${travelDate}&route=${selectedRoute}`
        );
      } else {
        setMessage(`Sorry, no available route from ${from} to ${to}. Please try different locations.`);
      }
    }
  };

  return (
    <div>
      
      <header className="flex justify-between w-full h-24 bg-black items-center px-4">
        <div className="flex items-center">
          <img
            src="/images/pngwing.com.png"
            alt="Company Logo"
            className="h-20 w-20"
          />
          <h1 className="text-5xl text-white ml-4">B~</h1>
          <h3 className="text-2xl text-teal-400">Booking</h3>
        </div>
        <h2 className="text-white text-3xl font-bold">B-Booking.lk</h2>
        <div className="flex gap-2">
          <div className="border border-white text-white text-xl px-4 py-1 rounded-md hover:bg-teal-100 hover:text-blue-600">
            <Link to="/Login"> Login</Link>
          </div>
          <div className="border border-white text-white text-xl px-4 py-1 rounded-md hover:bg-teal-100 hover:text-blue-600">
            <Link to="/Register"> Register</Link>
          </div>
        </div>
      </header>

      
      <main className="relative min-h-screen flex items-center justify-center">
        <img
          src="/images/wallpaper.jpg"
          alt="Scenic Background"
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className="absolute inset-x-0 top-16 w-full text-center bg-teal-300 bg-opacity-70 py-2 rounded-md">
          <h2 className="text-2xl font-semibold">Online Booking</h2>
        </div>
        <div className="absolute top-32 w-4/5 max-w-lg mx-auto border-2 border-blue-500 rounded-md shadow-lg backdrop-blur-xl bg-teal-100 bg-opacity-20 p-8">
          <form onSubmit={handleSearch} className="space-y-6">
            <LocationInput
              id="from"
              label="From:"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              datalistId="fromOptions"
              options={allLocations}
            />
            <LocationInput
              id="to"
              label="To:"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              datalistId="toOptions"
              options={allLocations}
            />
            <div>
              <label htmlFor="travelDate" className="block text-lg font-medium">
                Travel Date:
              </label>
              <input
                type="date"
                id="travelDate"
                value={travelDate}
                
                onChange={(e) => setTravelDate(e.target.value)}
                required
                className="w-full p-2 rounded-md bg-teal-200"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 p-3 text-white bg-blue-700 rounded-md hover:bg-blue-600"
            >
              Search Route
            </button>
            {message && (
              <p className="mt-4 text-lg text-center font-semibold text-blue-800">
                {message}
              </p>
            )}
          </form>
        </div>
      </main>

     
      <footer className="bg-gray-800 text-white py-8 text-center">
        <h3 className="text-2xl font-semibold">B~Booking</h3>
        <p>Your trusted partner for seamless bus ticket booking.</p>
        <div className="space-x-4 mt-4">
          <a href="#about" className="hover:text-blue-400">
            About Us
          </a>
          |
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
          |
          <a href="#faq" className="hover:text-blue-400">
            FAQ
          </a>
          |
          <a href="#terms" className="hover:text-blue-400">
            Terms & Conditions
          </a>
          |
          <a href="#privacy" className="hover:text-blue-400">
            Privacy Policy
          </a>
        </div>
        <p className="mt-4">© 2025 B~Booking. All Rights Reserved.</p>
      </footer>
    </div>
  );
}


const LocationInput = ({ id, label, value, onChange, datalistId, options }) => (
  <div>
    <label htmlFor={id} className="block text-lg font-medium">
      {label}
    </label>
    <input
      type="text"
      id={id}
      value={value}
      onChange={onChange}
      list={datalistId}
      placeholder={`Enter ${label.toLowerCase()}`}
      required
      className="w-full p-2 rounded-md bg-teal-200"
    />
    <datalist id={datalistId}>
      {options.map((option, index) => (
        <option key={index} value={option.charAt(0).toUpperCase() + option.slice(1)} />
      ))}
    </datalist>
  </div>
);

export default Home;
