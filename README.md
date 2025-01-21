## Bus Ticket Booking Web Application

This is a full-stack web application for booking bus tickets online. The project is built using **React.js** for the front end and **Node.js, Express.js, and MongoDB** for the back end.
---

### Features

- **User Authentication** (Sign up, Login)
- **Search for Buses** by route and date
- **Select Seats and Book Tickets**
- - **Responsive UI Design**

---
### Technologies Used

### Frontend:
- React.js
- Axios (for API requests)
- React Router DOM
- Tailwind CSS

### Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose (for database modeling)
- dotenv (for environment variables)
- CORS (for handling cross-origin requests)

---


## Installation and Setup

### Prerequisites:
Ensure you have the following installed on your system:

- Node.js
- MongoDB (local or cloud-based e.g., MongoDB compas)

### Steps to Run Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/shapeshkanth/Bus-Ticket-Booking.git
   cd Bus-Ticket-Booking

###  Create a .env file in the backend folder and add the following:

PORT=4000
MONGO_URI=mongodb://localhost:27017/authDB
JWT_SECRET=your_jwt_secret

## Start the Backend Server

cd back-end
node app.js

## Start the front-end Application 
Open another powershell
cd front-end
npm start

Open your browser and visit http://localhost:3000/Home

# Project Structure
bus-ticket-booking/
│-- back-end/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── .env
│
│-- front-end/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env
│
└── README.md

