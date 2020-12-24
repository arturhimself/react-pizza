import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((json) => setProducts(json.pizzas));
  });

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home products={products} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  )
};

export default App;