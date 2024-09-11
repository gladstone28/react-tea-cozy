import React from 'react';

function Store() {
  return (
    <section id="store">
      <h2>Tea of the Month</h2>
      <h4>What's Steeping at The Tea Cozy?</h4>
      <div className="flex-container items">
        <div className="item">
          <img
            src="https://content.codecademy.com/courses/freelance-1/unit-4/img-berryblitz.jpg"
            alt="Fall Berry Blitz Tea"
          />
          <span>Fall Berry Blitz Tea</span>
        </div>
        <div className="item">
          <img
            src="https://content.codecademy.com/courses/freelance-1/unit-4/img-spiced-rum.jpg"
            alt="Spiced Rum Tea"
          />
          <span>Spiced Rum Tea</span>
        </div>
        <div className="item">
          <img
            src="https://content.codecademy.com/courses/freelance-1/unit-4/img-donut.jpg"
            alt="Seasonal Donuts"
          />
          <span>Seasonal Donuts</span>
        </div>
        <div className="item">
          <img
            src="https://content.codecademy.com/courses/freelance-1/unit-4/img-myrtle-ave.jpg"
            alt="Myrtle Ave Tea"
          />
          <span>Myrtle Ave Tea</span>
        </div>
        <div className="item">
          <img
            src="https://content.codecademy.com/courses/freelance-1/unit-4/img-bedford-bizarre.jpg"
            alt="Bedford Bizarre Tea"
          />
          <span>Bedford Bizarre Tea</span>
        </div>
      </div>
    </section>
  );
}

export default Store;
