import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import LogSearchReport from "./pages/logSearchReport/LogSearchReport";
import CheckReport from "./pages/checkReport/CheckReport"
import DayReport from "./pages/dayReport/DayReport"
import WeekReport from "./pages/weekReport/WeekReport"
import MonthReport from "./pages/monthReport/MonthReport"
import '../node_modules/bulma/bulma.sass';
import "./style/dark.scss";

import { userInputs,productInputs } from "./formSource";


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>

            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
            </Route>

            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productId" element={<Single/>}/>
              <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}/>
            </Route>
          </Route>
          <Route path="/logSearchReport">
              <Route index element={<LogSearchReport/>}/>
          </Route>
          <Route path="/checkReport">
              <Route index element={<CheckReport/>}/>
          </Route>
          <Route path="/dayReport">
              <Route index element={<DayReport/>}/>
          </Route>
          <Route path="/weekReport">
              <Route index element={<WeekReport/>}/>
          </Route>
          <Route path="/monthReport">
              <Route index element={<MonthReport/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
