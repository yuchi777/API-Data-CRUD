// import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import ValueData from "./pages/valueData/ValueData";
import NotFound from "./pages/notFound/NotFound";
import '../node_modules/bulma/bulma.sass';
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
          {/* <Route path="/"  element={<Home/>}/> */}
          <Route path="login" element={<Login/>}/>
          <Route path="valueData">
            <Route index element={<ValueData/>}/>
          </Route>
          <Route path="notFound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
