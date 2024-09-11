import React from 'react';
import Header from './components/Header';
import Mission from './components/Mission';
import Store from './components/Store';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Assuming your CSS file is named 'App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Mission />
        <Store />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
