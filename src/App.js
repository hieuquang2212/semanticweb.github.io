import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
import  Header from './component/Header/Header'
import Content from './component/Content/Content'
import Footer from './component/Footer/Footer'
import Product from './component/Product/Product'
import ProductCategory from './component/Content/ProductCategory'
import Login from './component/Login/Login'
import Register from './component/Login/Register'
import ShoppingCart from './component/Content/ShoppingCart'
import Shipping from './component/Content/Shipping'
import Payment from './component/Content/Payment'
import TopHeader from './component/Header/TopHeader'
import MainHeader from './component/Header/MainHeader'
import Navigation from './component/Header/Navigation'
import MainMenu from './component/Header/MainMenu'
import Search from './component/Content/Search'
import Account from './component/Content/Account'
import PersonalProfile from './component/Content/PersonalProfile'
import { UserProvider } from './component/Context/UserContext'
import AuthService from './component/Auth/AuthService'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        username: '',
        loggedIn: false,
        changeUsername: (user) => {
          this.setState({
            username: user
          })
        },
        changeLoginStatus: (newValue) => {
          this.setState({
            loggedIn: newValue
          })
        },
        shoppingCart: [],
        addProductToCart: (productInfo) => {
          var newShoppingCart = this.state.shoppingCart.slice()
          newShoppingCart.push(productInfo)
          this.setState({
             shoppingCart: newShoppingCart
          })
        },
        increaseQuantity: (idx)=> {
          var newShoppingCart = this.state.shoppingCart.slice()
          newShoppingCart[idx].quantity += 1
          this.setState({
            shoppingCart: newShoppingCart
         })
        },
        decreaseQuantity: (idx)=> {
          var newShoppingCart = this.state.shoppingCart.slice()
          newShoppingCart[idx].quantity -= 1
          this.setState({
            shoppingCart: newShoppingCart
         })
        },
        handleChangeInput: (newList = []) => {
          this.setState({
            shoppingCart: newList
          })
        }

    }
    this.Auth =  new AuthService()
  }
  componentWillMount() {
     
      if (localStorage.getItem("id_token")) {
             if (this.Auth.loggedIn) {
                this.setState({
                    loggedIn: true
                })
                const user = this.Auth.getProfile()
                this.setState({
                    username: user.username
                })
            }
      }
  }
  render() {
    
    return (
    <Router>
      <Container fluid>
        <UserProvider value={this.state}>
          <TopHeader/>
          <MainHeader/>
          <Switch>
              <Route path='/'>
                <Navigation/>
              </Route>
          </Switch>
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/shoppingcart">
              <ShoppingCart/>
            </Route>
            <Route path="/shipping">
              <Shipping/>
            </Route>
            <Route path="/payment">
              <Payment/>
            </Route>
            <Route path="/account"  render={(props) => <Account {...props}/>}/>
            <Route path='/product' render={(props) => <Product {...props}/>}/>
            <Route path='/category' render={(props) => <ProductCategory {...props}/>}/>
            <Route path='/search' render={(props) => <Search {...props}/>}/>
            <Route path="/" render={(props) => <Content {...props} />}/>
            
          </Switch>
          <Footer/>
        </UserProvider>
      </Container>
    </Router>
    );
  }
}

export default App;
