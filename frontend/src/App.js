import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppointmentForm from './pages/AppointmentForm';
import ProfessionalList from './pages/ProfessionalList';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agendamento" element={<AppointmentForm />} />
        <Route path="/profissionais" element={<ProfessionalList />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;