import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Techlead from "./pages/techlead/Techlead";
import Sales from "./pages/sales/Sales"
import Talent from "./pages/talent/Talent"
import Customer from "./pages/customer/Customer"
import '../node_modules/bulma/bulma.sass';
import "./style/dark.scss";

// formSource.js
import { userInputs } from "./formSource";



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  

  return (
    <div>
      <BrowserRouter >
        <Routes >
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>

            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
            </Route>

          </Route>
          <Route path="/techlead">
              <Route index element={<Techlead/>}/>
          </Route>
          <Route path="/sales">
              <Route index element={<Sales/>}/>
          </Route>
          <Route path="/talent">
              <Route index element={<Talent/>}/>
          </Route>
          <Route path="/customer">
              <Route index element={<Customer/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
