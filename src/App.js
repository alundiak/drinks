import React from 'react';
import logo from './images/logo6.jpg';
import './styles/App.css';
import './styles/responsive.css';
import DrinksList from './components/DrinksList';
import DrinkCard from './components/DrinkCard';
import SwipeableDrinksList from './components/SwipeableDrinksList';
import TinderLikeDrinksList from './components/tinder-cards/TinderLikeDrinksList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <article>
        {/* <SwipeableDrinksList /> */}
        <TinderLikeDrinksList />
        {/* <DrinksList /> */}
        {/* <DrinkCard /> */}
        {/* <figure>can be modal-like UI component</figure> */}
      </article>
      <footer>
        <span>(c) Andrii Lundiak</span>
      </footer>
    </div>
  );
}

export default App;
