import './App.css'
import { Route, Switch } from 'react-router-dom'
import Products from './components/products/Products'
import Cart_Items from './components/cart_items/Cart_Items'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Products}></Route>
      <Route exact path="/cart" component={Cart_Items}></Route>
    </Switch>
  )
}

export default App
