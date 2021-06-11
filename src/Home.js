import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"
        alt="home image"
        className="home__image"
      />
      {/* Product : id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="123123"
          title="OnePlus 9R 5G (Carbon Black, 8GB RAM, 128GB Storage)"
          price={39999.0}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41733yAnlzL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="123128"
          title="Mi Notebook Horizon Edition 14 Intel Core i5-10210U 10th Gen 14-inch (35.56 cms) Thin and Light Laptop(8GB/512GB SSD/Windows 10/Nvidia MX350 2GB Graphics/Grey/1.35Kg), XMA1904-AR+Webcam"
          price={54999.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/712rw0zcH8L._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123125"
          title="
boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)"
          price={379.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/719elVA3FvL._SL1500_.jpg"
        />
        <Product
          id="123126"
          title="
Yamaha F310, 6-Strings Acoustic Guitar, Natural"
          price={17500.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51INShoKdNL._SL1000_.jpg"
        />
        <Product
          id="123127"
          title="
OnePlus Buds Z (White)"
          price={2999.0}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/51vwQzwM%2BZL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123124"
          title="
OnePlus 125.7 cm (50 inches) U Series 4K LED Smart Android TV 50U1S (Black) (2021 Model)"
          price={47999.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Sdj04A8dS._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
