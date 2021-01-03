import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProducts } from './redux/actions/products';
import { Header } from './components';
import { Home, Cart } from './pages';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: move to redux, add redux-thunk
    // TODO: watch filtration and sorting, set parametres in URL from redux
    // TODO: add fake loading
    const fetchData = async () => {
      const response = await fetch('http://localhost:3004/pizzas');
      const pizzas = await response.json();
      dispatch(setProducts(pizzas));
    };
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  )
};

export default App;