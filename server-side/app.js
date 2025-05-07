// Required dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors()); // Enable CORS for frontend access
app.use(bodyParser.json()); // Parse JSON request bodies

// Hard-coded events data (no database)
const events = [
  {
    id: 1,
    eventName: "Web Development Workshop",
    eventDate: "2025-05-15",
    eventLocation: "Tech Hub, Chennai",
    eventPaid: false,
    eventMode: "Offline"
  },
  {
    id: 2,
    eventName: "JavaScript Conference",
    eventDate: "2025-05-22",
    eventLocation: "Convention Center, Chennai",
    eventPaid: true,
    eventMode: "Offline"
  },
  {
    id: 3,
    eventName: "React Advanced Webinar",
    eventDate: "2025-05-18",
    eventLocation: null,
    eventPaid: true,
    eventMode: "Online"
  },
  {
    id: 4,
    eventName: "Node.js Basics",
    eventDate: "2025-05-29",
    eventLocation: "Developer Space, Chennai",
    eventPaid: false,
    eventMode: "Offline"
  },
  {
    id: 5,
    eventName: "Full Stack Development Masterclass",
    eventDate: "2025-06-05",
    eventLocation: null,
    eventPaid: true,
    eventMode: "Online"
  }
];

// API endpoint to get all events
app.get('/events', (req, res) => {
  // Add a slight delay to simulate network latency (optional)
  setTimeout(() => {
    res.json(events);
  }, 300);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});