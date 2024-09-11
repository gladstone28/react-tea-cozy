import React from 'react';

function Locations() {
  return (
    <section id="locations">
      <h2>Locations</h2>
      <div className="flex-container locations">
        <div className="location">
          <h3>Downtown</h3>
          <p>384 West 4th St</p>
          <p>Suite 108</p>
          <p>Portland, Maine</p>
        </div>
        <div className="location">
          <h3>East Bayside</h3>
          <p>3433 Phisherman's Avenue</p>
          <p>(Northwest Corner)</p>
          <p>Portland, Maine</p>
        </div>
        <div className="location">
          <h3>Oakdale</h3>
          <p>515 Crescent Avenue</p>
          <p>Second Floor</p>
          <p>Portland, Maine</p>
        </div>
      </div>
    </section>
  );
}

export default Locations;
