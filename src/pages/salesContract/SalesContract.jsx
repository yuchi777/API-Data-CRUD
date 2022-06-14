import "./salesContract.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Button from '@mui/material/Button';
import {useState, useEffect} from "react";
import {DataGrid} from '@mui/x-data-grid';
import axios from '../../commons/axios';
//使用useNavigate 轉址
// import {useNavigate} from "react-router-dom";

const Sales = () => {



  // const [row,setRow] = useState([]);
  const [row2,setRow2] = useState([]);

  useEffect(() => {

    // axios.get(`/sales`).then((re) => {
    //     console.log('sales data:',re.data[0].customer);
    //     const user = global.auth.getUser() || {}
    //     if (user.account === 'techlead' || user.account === 'sales' || user.account === 'hr' || user.account === 'director') {
    //       console.log('ID:', user.account);
    //       // console.log('talent data:',re.data);
    //       setRow(re.data[0].customer);
    //     } else {
    //       setRow([]);
    //     }

    //   })
    //   .catch((err) => {
    //     // handleNavigate();
    //     console.log(err.response);
    //   })

    axios.get(`/sales`).then((re) => {
        console.log('sales data:',re.data[0].contract);
        const user = global.auth.getUser() || {}
        if (user.account === 'techlead' || user.account === 'sales' || user.account === 'hr' || user.account === 'director') {
          setRow2(re.data[0].contract);
        } else {
          setRow2([]);
        }

      })
      .catch((err) => {
        // handleNavigate();
        console.log(err.response);
      })

  }, [])

  const renderDetailsButton = (params) => {
    return (
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{
        marginLeft: 16
      }}
        onClick={() => {
        console.log(params.row)
      }}>
        More
      </Button>
    )
  }

  // const columnsCustomer = [
  //   {
  //     field: 'id',
  //     headerName: 'ID',
  //     width: 70
  //   }, {
  //     field: 'name',
  //     headerName: '客戶名稱',
  //     width: 250
  //   }, {
  //     field: 'client',
  //     headerName: '終端客戶名稱',
  //     width: 250
  //   }, {
  //     field: 'contact',
  //     headerName: '客戶窗口',
  //     width: 100
  //   }, {
  //     field: 'place',
  //     headerName: '派駐地點',
  //     width: 100
  //   }, {
  //     field: "action",
  //     headerName: "編輯",
  //     width: 200,
  //     renderCell: renderDetailsButton,
  //     disableClickEventBubbling: true
  //   }
  // ];

  const columnsCustomer2 = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70
    }, {
      field: 'project',
      headerName: '專案名稱',
      width: 150
    }, {
      field: 'sys-name',
      headerName: '系統名稱',
      width: 150
    }, {
      field: 'date-on',
      headerName: '派駐起日',
      width: 150
    }, {
      field: 'date-off',
      headerName: '派駐迄日',
      width: 150
    }, {
      field: 'price',
      headerName: '報價',
      width: 150
    }, {
      field: "action",
      headerName: "編輯",
      width: 200,
      renderCell: renderDetailsButton,
      disableClickEventBubbling: true
    }
  ];

  return (
    <div className="sales">
      <Sidebar/>
      <div className="salesContainer">
        <Navbar/>
        <div className="salesTable">
          {/* <h2>業務管理 / 人才外派資料</h2>
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
          <hr /> */}
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
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sales