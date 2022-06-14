import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import Talent from "./pages/talent/Talent";
import TalentAdd from "./pages/talentAdd/TalentAdd";
import TalentEdit from "./pages/talentEdit/TalentEdit";
import Sales from "./pages/sales/Sales"
import SalesContract from "./pages/salesContract/SalesContract"
import TalentSign from "./pages/talentSign/TalentSign"
import Customer from "./pages/customer/Customer"
import NotFound from "./pages/notFound/NotFound"
import '../node_modules/bulma/bulma.sass';
import "./style/dark.scss";

// formSource.js
// import { userInputs } from "./formSource";
// import List from "./pages/list/List";
// import Single from "./pages/single/Single";
// import New from "./pages/new/New";


// 載入toastify套件
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
          <Route path="/"  element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="talent">
            <Route index element={<Talent/>}/>
            <Route path="talentAdd" element={<TalentAdd/>}/>
            <Route path="talentEdit" element={<TalentEdit/>}/>
          </Route>
          <Route path="sales">
            <Route index element={<Sales/>}/>
            <Route path="salesContract" element={<SalesContract/>}/>
          </Route>
          <Route path="talentSign" element={<TalentSign/>}/>
          <Route path="customer" element={<Customer/>} />
          <Route path="notFound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/"  element={((global.auth.getUser())?<Home/>:<NotFound />)}/> */}
          {/* <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
          </Route> */}
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
