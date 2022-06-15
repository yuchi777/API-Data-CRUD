import "./sales.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import {useState, useEffect} from "react";
import {DataGrid} from '@mui/x-data-grid';
import axios from '../../commons/axios';
// import EditIcon from '@mui/icons-material/Edit';
import Toolbox from '../../components/toolbox/Toolbox';

//使用useNavigate 轉址
// import {useNavigate} from "react-router-dom";

const Sales = () => {

  const [row,setRow] = useState([]);
  const [sourceRow, setSourcerow] = useState([]);
  // const [row2,setRow2] = useState([]);


  useEffect(() => {


    axios.get(`/customer`).then((re) => {
        // console.log('customer data:',re.data[0].customer);
        const user = global.auth.getUser() || {}
        if (user.account === 'techlead' || user.account === 'sales' || user.account === 'hr' || user.account === 'director') {
          // console.log('ID:', user.account);
          console.log('customer data:',re.data);
          setRow(re.data);
          setSourcerow(re.data);
        } else {
          setRow([]);
          setSourcerow([]);
        }

      })
      .catch((err) => {
        // handleNavigate();
        console.log(err.response);
      })

    //Contract Data
    // axios.get(`/sales`).then((re) => {
    //     console.log('sales data:',re.data[0].contract);
    //     const user = global.auth.getUser() || {}
    //     if (user.account === 'techlead' || user.account === 'sales' || user.account === 'hr' || user.account === 'director') {
    //       setRow2(re.data[0].contract);
    //     } else {
    //       setRow2([]);
    //     }

    //   })
    //   .catch((err) => {
    //     // handleNavigate();
    //     console.log(err.response);
    //   })

  }, [])


//搜尋
const search = (text) => {
  let _row = [...sourceRow];
  _row = _row.filter((p)=>{
      const matchArray = p.name.match(new RegExp(text,'gi'));
      const matchArray2 = p.client.match(new RegExp(text,'gi'));
      return matchArray !==null ||  matchArray2 !==null ;
  })

  setRow(_row);
}





//   const renderDetailsButton = (params) => {
//   return (
//           <IconButton 
//               variant="contained"
//               color="primary"
//               size="small"
//               // style={{ marginLeft: 16 }}
//               onClick={()=>{
//                 // toEdit(params);
//                 console.log(params.row)
//               }}
//           >
//           <EditIcon/>
//           </IconButton>
//   )
// }

  const columnsCustomer = [
    // {
    //   field: "action",
    //   headerName: "編輯",
    //   width: 60,
    //   renderCell: renderDetailsButton,
    //   disableClickEventBubbling: true
    // },
    {
      field: 'id',
      headerName: 'ID',
      width: 60
    }, {
      field: 'name',
      headerName: '客戶名稱',
      width: 250
    }, {
      field: 'client',
      headerName: '終端客戶名稱',
      width: 250
    }, {
      field: 'contact',
      headerName: '客戶窗口',
      width: 170
    }, {
      field: 'place',
      headerName: '派駐地點',
      width: 170
    }
  ];

  // const columnsCustomer2 = [
  //   {
  //     field: 'id',
  //     headerName: 'ID',
  //     width: 70
  //   }, {
  //     field: 'project',
  //     headerName: '專案名稱',
  //     width: 150
  //   }, {
  //     field: 'sys-name',
  //     headerName: '系統名稱',
  //     width: 150
  //   }, {
  //     field: 'date-on',
  //     headerName: '派駐起日',
  //     width: 100
  //   }, {
  //     field: 'date-off',
  //     headerName: '派駐迄日',
  //     width: 100
  //   }, {
  //     field: 'price',
  //     headerName: '報價',
  //     width: 100
  //   }, {
  //     field: "action",
  //     headerName: "編輯",
  //     width: 200,
  //     renderCell: renderDetailsButton,
  //     disableClickEventBubbling: true
  //   }
  // ];

  return (
    <div className="sales">
      <Sidebar/>
      <div className="salesContainer">
        <Navbar/>
        <Toolbox search={search}/>
        <div className="salesTable">
          <h2>業務管理 / 人才外派資料</h2>
          {/* <button className="add-btn button is-info" >新增</button> */}
          <div style={{
            height: 400,
            width: '100%'
          }}>
            <DataGrid 
            rows={row} 
            columns={columnsCustomer} 
            pageSize={5} 
            rowsPerPageOptions={[5]
            } // checkboxSelection
            />
          </div>
          {/* <hr />
          <h2>業務管理 / 客戶合約資料</h2>
          <div style={{
            height: 400,
            width: '100%'
          }}>
            <DataGrid 
            rows={row2} 
            columns={columnsCustomer2} 
            pageSize={5} 
            rowsPerPageOptions={[5]
            } // checkboxSelection
            />
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default Sales