import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Container } from "react-bootstrap"; /* Container is a component of react bootstrap the spaces elements which are more soothing to eye */
import Homescreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import './index.css';
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          {/* <Homescreen /> */}
          <Routes>
            <Route path='/' element={<Homescreen />} exact /> {/* using the root route(/) to go to the component Homescreen 
            also, we do not want to go to homescreeen whenever there is '/' in route therefore 'exact'
            is used*/}
            <Route path='/product/:id' element={<ProductScreen />} /> {/* ':id' is a placeholder for the productID*/}
            <Route path='/cart'>
              <Route path=':id' element={<CartScreen />} />
              <Route path='' element={<CartScreen />} />
            </Route> {/* both these means the id field is optional (we can also go from add to cart to cart)*/}
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
