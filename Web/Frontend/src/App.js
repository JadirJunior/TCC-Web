import React, { useState } from "react";

import {
  BrowserRouter,
  Switch,
  Route,
  HashRouter,
  useLocation,
} from "react-router-dom";

import { InfoProvider } from "./InfoContext";
import { LoginProvider } from "./LoginContext";

import "./global-styles/style.css";

import Login from "./components/Modals/Login/Login";
import SignUp from "./components/Modals/SignUp/SignUp";
import SignUpComplementary from "./components/Modals/SignUp_Complementary/SignUp_Complementary";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import AddAdress from "./components/Modals/AddAdress/AddAdress";
import RecoverPassword from "./components/Modals/RecoverPassword/RecoverPassword";
import E_Product from "./components/Main/E_Product/E_Product";
import SearchedProducts from "./components/SearchedProducts/SearchedProducts";
import Cart from "./components/Cart/Cart";
import User from "./components/Modals/User/User";
import MyProducts from "./components/MyProducts/MyProducts";
import AddProduct from "./components/AddProduct/AddProduct";
import AddedProduct from "./components/AddProduct/AddedProduct";
import MyAddedProducts from "./components/MyProducts/MyAddedProducts";
import { CounterProvider } from "./CounterContext";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content">
          <LoginProvider>
            <CounterProvider>
              <Header />
              <Switch>
                <Route path="/myproducts" exact component={MyProducts} />
                <Route
                  path="/myaddedproducts"
                  exact
                  component={MyAddedProducts}
                />
                <Route path="/addedproduct" exact component={AddedProduct} />
                <Route path="/addproduct" exact component={AddProduct} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/products" exact component={Main} />
                <Route path="/products/search" component={SearchedProducts} />
                <InfoProvider>
                  <Route path="/products/:id" exact component={E_Product} />
                </InfoProvider>
              </Switch>
              <Modals />
            </CounterProvider>
          </LoginProvider>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

const Modals = () => {
  const Location = useLocation();

  return (
    <HashRouter hashType="noslash" key={Location.hash}>
      <Route path="/login" component={Login} />
      <Route path="/user" component={User} />
      <SignUp />
      <SignUpComplementary />
      <AddAdress />
      <RecoverPassword />
    </HashRouter>
  );
};

export default App;
