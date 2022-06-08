import "./sales.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Button from '@mui/material/Button';
import {useState, useEffect} from "react";
import {DataGrid} from '@mui/x-data-grid';
import axios from '../../commons/axios';
//使用useNavigate 轉址
import {useNavigate} from "react-router-dom";

const Sales = () => {

  // 重新轉址
  const navigate = useNavigate()
  
  const check = global.auth.getUser() || {};
  if(check.account === 'techlead' || 
  check.account ==='sales' || 
  check.account ==='director' || 
  check.account ==='hr'  
  ){
    // navigate('/sales')
  }else{
    navigate('/notFound')
  }

  const [row,setRow] = useState([]);

  useEffect(() => {


    axios.get(`/sales`).then((re) => {
        console.log('sales data:',re.data[0].customer);
        const user = global.auth.getUser() || {}
        if (user.account === 'techlead' || user.account === 'sales' || user.account === 'hr' || user.account === 'director') {
          console.log('ID:', user.account);
          // console.log('talent data:',re.data);
          setRow(re.data[0].customer);
        } else {
          setRow([]);
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

  const columnsCustomer = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70
    }, {
      field: 'name',
      headerName: 'name',
      width: 250
    }, {
      field: 'client',
      headerName: 'client',
      width: 350
    }, {
      field: 'contact',
      headerName: 'contact',
      width: 120
    }, {
      field: 'place',
      headerName: 'place',
      width: 120
    }, {
      field: "action",
      headerName: "Action",
      width: 100,
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
          <h2>業務管理 / 人才外派(客戶)資料</h2>

          <div style={{
            height: 400,
            width: '100%'
          }}>
            <DataGrid 
            rows={row} 
            columns={columnsCustomer} 
            pageSize={5} 
            rowsPerPageOptions={[5]} // checkboxSelection
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sales