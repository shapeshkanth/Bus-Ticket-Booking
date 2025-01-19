import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';

const PassengerDetails = () => {
    const location = useLocation();
    const { from, to, travelDate, route, scheduleTime, selectedSeats } = location.state || {};
        
  
  const seats = selectedSeats ;

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
   

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       await axios.post('http://localhost:4000/passenger/users', { name, age, email, phone, from, to, travelDate, seats});
        
        alert("Booking succesfuly..");
       
         setName('');
         setAge('');
         setEmail('');
         setPhone('');
    } catch (error) {
      
    }

    
        const data = {
          collectionName: travelDate,
          route: route,
          schedule: "schedule",
          time: scheduleTime,
          Bookseat: selectedSeats 
        };
      
        try {
          // Use the correct endpoint
          const response = await axios.post("http://localhost:4000/api/routes/updateBookseat", data);
          console.log(response.data.message);
        } catch (error) {
          console.error("Error updating Bookseat:", error);
        }



  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <img src="/images/wallpaper.jpg" alt="Scenic Background" className="w-full h-full object-cover absolute top-0 left-0" />
      <div className="absolute w-full max-w-md bg-teal-300 bg-opacity-70 rounded-lg shadow-md p-8 border-2 border-black-900">
        <div className="bg-blue-200 ps-5 border-2 border-blue-400 rounded-xl text-bold">
          <p>From: {from}</p>
          <p>To: {to}</p>
          <p>Date: {travelDate}</p>
          <p>Selected Seats: {seats && seats.length > 0 ? seats.join(", ") : "No seats selected"}</p>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Passenger Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
            <input
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PassengerDetails;
