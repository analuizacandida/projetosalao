const { saveAppointment } = require('../models/appointmentModel');

exports.createAppointment = async (req, res) => {
  const { professional, procedure, date } = req.body;

  if (!professional || !procedure || !date) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    await saveAppointment({ professional, procedure, date });
    res.status(201).json({ message: 'Appointment created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create appointment' });
  }
};