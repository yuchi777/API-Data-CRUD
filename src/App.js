import Home from "./pages/home/home";
import Login from "./pages/login/Login";
// import List from "./pages/list/List";
// import Single from "./pages/single/Single";
// import New from "./pages/new/New";
import Talent from "./pages/talent/Talent";
import Sales from "./pages/sales/Sales"
import TalentSign from "./pages/talentSign/TalentSign"
import Customer from "./pages/customer/Customer"
import NotFound from "./pages/notFound/NotFound"
import '../node_modules/bulma/bulma.sass';
import "./style/dark.scss";


// 載入toastify套件
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// formSource.js
// import { userInputs } from "./formSource";




import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter >
        <Routes >
          <Route path="/" >
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="talent" element={<Talent/>}/>
            <Route path="sales" element={<Sales/>}/>
            <Route path="talentSign" element={<TalentSign/>}/>
            <Route path="customer" element={<Customer/>} />
            <Route path="/notFound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />

            {/* <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
