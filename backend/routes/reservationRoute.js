import express from 'express';
const router = express.Router();

router.post('/send', (req, res) => {
  const { firstName, lastName, email, phone, date, time } = req.body;

  // Validate the incoming data
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  // Handle the reservation logic here
  console.log(req.body); // Log the request body to verify the data

  res.status(200).json({
    success: true,
    message: "Reservation received successfully!",
  });
});

export default router;
