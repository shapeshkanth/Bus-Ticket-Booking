import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

const getAvailableSeats = (schedule, timeSlot) => {
  
  const bookedSeats = schedule?.[timeSlot]?.Bookseat?.length ?? 0;
  return 54 - bookedSeats; 
};

const getBookedSeats = (schedule, timeSlot) => {
    const bookedSeats = schedule?.[timeSlot]?.Bookseat ?? [];
    return bookedSeats; 
  };

const Buslist = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const from = queryParams.get('from');
  const to = queryParams.get('to');
  const travelDate = queryParams.get('travelDate');
  const route = queryParams.get('route');

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const collectionName = travelDate;
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:4000/api/data", {
          collection: collectionName,
          route: route,
        });
        setData(response.data);
      } catch (error) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (collectionName) fetchData();
  }, [collectionName]);

  if (loading) {
    return <p>Loading buses...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      {data.length > 0 ? (
        <ul className="space-y-4">
          {data.map((item, index) =>
            item.schedule && Object.keys(item.schedule).length > 0 ? (
              Object.keys(item.schedule).map((timeKey, ind) => {
               
                const availableSeats = getAvailableSeats(item.schedule, timeKey);

                return (
                  <li key={`${index}-${ind}`} className="p-4 bg-blue-100 rounded-lg shadow-md">
                    <div className="w-full max-w-4xl bg-blue-100 border-2 border-blue-500 rounded-lg overflow-hidden shadow-lg">
                      <div className="h-8 bg-blue-700 text-white flex items-center px-4">
                        <p className="text-sm">@stops {item.dippo}</p>
                      </div>
                      <div className="bg-black h-1"></div>
                      <div className="flex flex-wrap justify-between items-center p-4">
                        <div className="w-44 flex-shrink-0">
                          <img
                            src="/images/3.jpg"
                            alt="Noimage"
                            className="h-full w-full rounded-md"
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-sm">Departure</p>
                          <h3 className="text-xl font-semibold">{item.startLocation}</h3>
                          <p className="text-sm">Date</p>
                          <h3 className="text-lg font-semibold">{collectionName}</h3>
                          <p className="text-sm">Time</p>
                          <h3 className="text-lg font-semibold">{item.starttime}</h3>
                        </div>
                        <div className="text-center">
                          <img
                            src="/images/arrow.png"
                            alt="Noimage"
                            className="max-w-12 mx-auto"
                          />
                          <p className="text-sm">Duration {item.duration} hours</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm">Arrival</p>
                          <h3 className="text-xl font-semibold">{item.endLocation}</h3>
                          <p className="text-sm">Date</p>
                          <h3 className="text-lg font-semibold">{item.endDate}</h3>
                          <p className="text-sm">Time</p>
                          <h3 className="text-lg font-semibold">{item.endtime}</h3>
                        </div>
                        <div className="text-center">
                           <p className="text-sm">Available Seats </p> 
                          <h3 className="text-xl font-semibold">{availableSeats}</h3>
                          <div className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 active:bg-green-500 text-lg">
                            <Link
                              to={`/Busmap?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&travelDate=${encodeURIComponent(travelDate)}&route=${encodeURIComponent(route)}&scheduleTime=${encodeURIComponent(timeKey)}`}
                              state={{ from, 
                                to, 
                                travelDate, 
                                route,
                                scheduleTime: timeKey,
                                bookedSeats: getBookedSeats(item.schedule, timeKey)}}
                            >
                              Book
                            </Link>
                          </div>
                        </div>
                       
                      </div>
                      <div className="h-5 bg-blue-300"></div>
                    </div>
                  </li>
                );
              })
            ) : (
              <p key={index} className="text-gray-600">No buses available.</p>
            )
          )}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Buslist;
