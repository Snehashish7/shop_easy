import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Container } from "react-bootstrap";
import Homescreen from "./screens/homescreen";
import ProductScreen from "./screens/ProductScreen";
import './index.css';
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          {/* <Homescreen /> */}
          <Routes>
            <Route path='/' element={<Homescreen />} exact /> {/* using the root route(/) to go to the component Homescreen */}
            <Route path='/product/:id' element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
