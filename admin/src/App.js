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
import List from "./pages/list/List";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import ListList from "./pages/listList/ListList";
import NewList from "./pages/newList/NewList";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        {user === null ? (
          <Route path="/" exact>
            <Login />
          </Route>
        ) : (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route path="/home" exact>
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
              <Route path="/lists" exact>
                <ListList />
              </Route>
              <Route path="/lists/:listId" exact>
                <List />
              </Route>
              <Route path="/newList" exact>
                <NewList />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
