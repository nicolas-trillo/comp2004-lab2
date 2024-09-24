import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import Card from "./components/Card";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='grey-text'>Resorts Lite</h1>
      <div className="cards-container">
        <Card img="/1.jpg" name="Okinawa Royal Resort" location="Okinawa, Japan" rating="4.9" price="399.49"/>
        <Card img="/2.jpg" name="Ibis Honolulu" location="Honolulu, HI" rating="3.4" price="120.50"/>
        <Card img="/3.jpg" name="Hotel del Pueblo Havana" location="Havana, Cuba" rating="2.4" price="40.50"/>
        <Card img="/4.jpg" name="The Boat Inn" location="San Juan, PR" rating="3.4" price="240.50"/>
        <Card img="/5.jpg" name="The Cabins Hotel" location="Greece" rating="4.4" price="299.49"/>
        <Card img="/6.jpg" name="The Ritz BWI" location="British West Indies" rating="4.9" price="799.99"/>
        {/* <Card img="/7.jpg" name="Hilton Yukon" location="Somewhere, YK" rating="5.0" price="1399.49"/> */}
      </div>
    </>
  );
}

export default App;
