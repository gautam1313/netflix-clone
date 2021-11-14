import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

function App() {
  const isLoggedOut = true;
  return (
    <>
      {isLoggedOut ? (
        <Login />
      ) : (
        <Router>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/users" exact>
                <UserList />
              </Route>
              <Route path="/users/:userId" exact>
                <User />
              </Route>
              <Route path="/newUser" exact>
                <NewUser />
              </Route>
              <Route path="/movies" exact>
                <ProductList />
              </Route>
              <Route path="/products/:productId" exact>
                <Product />
              </Route>
              <Route path="/newProduct" exact>
                <NewProduct />
              </Route>
            </Switch>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
