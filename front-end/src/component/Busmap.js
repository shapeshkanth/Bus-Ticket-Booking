import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Busmap = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const location = useLocation();
  const { from, to, travelDate,route, scheduleTime, bookedSeats } = location.state || {};
     


  // Predefined seats to show as `/images/chair3.png`
  const predefinedSeats = bookedSeats ? bookedSeats : [];

  // UseEffect to alert whenever selectedSeats state changes


  useEffect(() => {
    console.log('Updated Selected Seats:', selectedSeats);
  }, [selectedSeats]);

  // Toggles seat image and updates selected seats
  function toggleImage(element) {
    const img = element.querySelector('img');
    if (!img) {
      console.error('Image not found!');
      return;
    }

    const currentSrc = img.getAttribute('src');
    const numberElement = element.querySelector('.number');
    const selectedNumber = numberElement ? numberElement.textContent : 'Unknown';

    if (currentSrc === '/images/chair1.png') {
      img.setAttribute('src', '/images/chair2.png');
      setSelectedSeats((prevSeats) => [...prevSeats, selectedNumber]);
    } else if (currentSrc === '/images/chair2.png') {
      img.setAttribute('src', '/images/chair1.png');
      setSelectedSeats((prevSeats) =>
        prevSeats.filter((seat) => seat !== selectedNumber)
      );
    }
  }

  // Determines the initial image for a seat
  const getSeatImage = (seatNumber) => {
    return predefinedSeats.includes(seatNumber)
      ? '/images/chair3.png'
      : '/images/chair1.png';
  };

  return (
    <div className="grid justify-center bg-gray-100">
        <div className='bg-blue-200 border-1 border-blue-300 rounded-xl grid justify-center font-bold'>
            <h3>From: {from}</h3>
            <h3>To: {to}</h3>
            <h3>Date: {travelDate}</h3>
            
        </div>
                        <div className="mb-3 ml-80">
                            <img
                            src="/images/driver.png"
                            alt="Scenic Background"
                            className="w-16 h-16 ml-10"
                            />
                        </div>

                            <div className="flex mb-2">
                                <div className="flex mr-20 gap-2 relative">
                                        <div className="relative" onClick={(e) => toggleImage(e.currentTarget)} >
                                            <img src={getSeatImage('01')} alt="Scenic Background" className="seat-img w-16 h-16" />
                                            <p className="number absolute top-0 left-0 font-bold px-5 py-1">01</p>
                                        </div>

                                        <div className="relative" onClick={(e) => toggleImage(e.currentTarget)} >
                                            <img src={getSeatImage('02')} alt="Scenic Background" className="seat-img w-16 h-16" />
                                            <p className="number absolute top-0 left-0 font-bold px-5 py-1">02</p>
                                        </div>
                                </div>
                           <div className="flex gap-2">
                              <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('03')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">03</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('04')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">04</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('05')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">05</p>
                                </div>
                        
                        </div>
                             </div>
                             <div className="flex mb-2">
                                <div className="flex mr-20 gap-2 relative">
                                        <div className="relative" onClick={(e) => toggleImage(e.currentTarget)} >
                                            <img src={getSeatImage('06')} alt="Scenic Background" className="seat-img w-16 h-16" />
                                            <p className="number absolute top-0 left-0 font-bold px-5 py-1">06</p>
                                        </div>

                                        <div className="relative" onClick={(e) => toggleImage(e.currentTarget)} >
                                            <img src={getSeatImage('07')} alt="Scenic Background" className="seat-img w-16 h-16" />
                                            <p className="number absolute top-0 left-0 font-bold px-5 py-1">07</p>
                                        </div>
                                </div>
                           <div className="flex gap-2">
                              <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('08')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">08</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('09')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">09</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('10')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">10</p>
                                </div>
                        
                        </div>
                             </div>
            <div className="flex mb-2">
                        <div className="flex mr-20 gap-2 relative">
                                    <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                        <img src={getSeatImage('11')} alt="Scenic Background" className="w-16 h-16" />
                                        <p className="number absolute top-0 left-0 font-bold px-5 py-1">11</p>
                                    </div>
                                    
                                    <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                        <img src={getSeatImage('12')} alt="Scenic Background" className="w-16 h-16" />
                                        <p className="number absolute top-0 left-0 font-bold  px-5 py-1">12</p>
                                    </div>
                        </div>
                        <div className="flex gap-2">
                              <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('13')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">13</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('14')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">14</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('15')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">15</p>
                                </div>
                        
                        </div>
            </div>
            <div className="flex mb-2">
                        <div className="flex mr-20 gap-2 relative">
                                    <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                        <img src={getSeatImage('16')} alt="Scenic Background" className="w-16 h-16" />
                                        <p className="number absolute top-0 left-0 font-bold px-5 py-1">16</p>
                                    </div>
                                    
                                    <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                        <img src={getSeatImage('17')} alt="Scenic Background" className="w-16 h-16" />
                                        <p className="number absolute top-0 left-0 font-bold  px-5 py-1">17</p>
                                    </div>
                        </div>
                        <div className="flex gap-2">
                              <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('18')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className=" number absolute top-0 left-0 font-bold  px-5 py-1">18</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('19')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className=" number absolute top-0 left-0 font-bold  px-5 py-1">19</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('20')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">20</p>
                                </div>
                        
                        </div>
            </div>
            <div className="flex mb-2">
                        <div className="flex mr-20 gap-2 relative">
                                    <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                        <img src={getSeatImage('21')} alt="Scenic Background" className="w-16 h-16" />
                                        <p className=" number absolute top-0 left-0 font-bold px-5 py-1">21</p>
                                    </div>
                                    
                                    <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                        <img src={getSeatImage('22')} alt="Scenic Background" className="w-16 h-16" />
                                        <p className="number absolute top-0 left-0 font-bold  px-5 py-1">22</p>
                                    </div>
                        </div>
                        <div className="flex gap-2">
                              <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('23')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">23</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('24')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">24</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('25')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">25</p>
                                </div>
                        
                        </div>
            </div>
            <div className="flex mb-2">
                        <div className="flex mr-20 gap-2 relative">
                                    <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                        <img src={getSeatImage('26')} alt="Scenic Background" className="w-16 h-16" />
                                        <p className="number absolute top-0 left-0 font-bold px-5 py-1">26</p>
                                    </div>
                                    
                                    <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                        <img src={getSeatImage('27')} alt="Scenic Background" className="w-16 h-16" />
                                        <p className="number absolute top-0 left-0 font-bold  px-5 py-1">27</p>
                                    </div>
                        </div>
                        <div className="flex gap-2">
                              <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('28')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">28</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('29')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">29</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('30')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">30</p>
                                </div>
                        
                        </div>
            </div>
            <div className="flex mb-2">
                        <div className="flex mr-20 gap-2 relative">
                                    <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                        <img src={getSeatImage('31')} alt="Scenic Background" className="w-16 h-16" />
                                        <p className="number absolute top-0 left-0 font-bold px-5 py-1">31</p>
                                    </div>
                                    
                                    <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                        <img src={getSeatImage('32')} alt="Scenic Background" className="w-16 h-16" />
                                        <p className="number absolute top-0 left-0 font-bold  px-5 py-1">32</p>
                                    </div>
                        </div>
                        <div className="flex gap-2">
                              <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('33')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">33</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('34')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">34</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('35')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">35</p>
                                </div>
                        
                        </div>
            </div>
            <div className="flex mb-2">
                        <div className="flex mr-20 gap-2 relative">
                                    <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                        <img src={getSeatImage('36')} alt="Scenic Background" className="w-16 h-16" />
                                        <p className="number absolute top-0 left-0 font-bold px-5 py-1">36</p>
                                    </div>
                                    
                                    <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                        <img src={getSeatImage('37')} alt="Scenic Background" className="w-16 h-16" />
                                        <p className="number absolute top-0 left-0 font-bold  px-5 py-1">37</p>
                                    </div>
                        </div>
                        <div className="flex gap-2">
                              <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('38')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">38</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('39')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">39</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('40')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">40</p>
                                </div>
                        
                        </div>
            </div>
            <div className="flex mb-2">
                        <div className="flex mr-20 gap-2 relative">
                                    <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                        <img src={getSeatImage('41')} alt="Scenic Background" className="w-16 h-16" />
                                        <p className="number absolute top-0 left-0 font-bold px-5 py-1">41</p>
                                    </div>
                                    
                                    <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                        <img src={getSeatImage('42')} alt="Scenic Background" className="w-16 h-16" />
                                        <p className="number absolute top-0 left-0 font-bold  px-5 py-1">42</p>
                                    </div>
                        </div>
                        <div className="flex gap-2">
                              <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('43')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">43</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('44')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">44</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('45')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">45</p>
                                </div>
                        
                        </div>
            </div>
           


            <div className="flex gap-2 ml-52 pl-2 mb-2">
                               <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('46')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">46</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('47')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">47</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('48')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">48</p>
                                </div>
            </div>
            <div className="flex gap-2">
                              <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('49')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">49</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('50')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">50</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('51')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">51</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('52')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">52</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('53')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">53</p>
                                </div>
                                <div className="relative" onClick={(e) => toggleImage(e.currentTarget)}>
                                    <img src={getSeatImage('54')} alt="Scenic Background" className="w-16 h-16" />
                                    <p className="number absolute top-0 left-0 font-bold  px-5 py-1">54</p>
                                </div>
            </div>
            <div className='flex justify-center'>
            <div className='border-1 border-orange-500 rounded-xl bg-orange-500 mb-10 mt-6 h-8 w-32 flex justify-center item-center'>
            {/* <Link to="/PassengerDetails" state={{ selectedSeats }}>booking</Link> */}
            {selectedSeats.length > 0 ? (
        <Link
          to={`/PassengerDetails?from=${encodeURIComponent(
            from
          )}&to=${encodeURIComponent(to)}&travelDate=${encodeURIComponent(
            travelDate
          )}`}
          state={{ from, to, travelDate, route, scheduleTime, selectedSeats }}
         
        >
          Book
        </Link>
      ) : (
        <p className="text-black-800 font-bold">No seat selected</p>
      )}          </div>
          </div>
    </div>
    );
}
export default Busmap;