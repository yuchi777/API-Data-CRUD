import "./salesContract.scss";
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

const SalesContract = () => {

  const [row,setRow] = useState([]);
  const [sourceRow, setSourcerow] = useState([]);

  useEffect(() => {
    //Contract Data
    axios.get(`/contract`).then((re) => {
        console.log('contract data:',re.data);
        const user = global.auth.getUser() || {}
        if (user.account === 'techlead' || user.account === 'sales' || user.account === 'hr' || user.account === 'director') {
          setRow(re.data);
          setSourcerow(re.data)
        } else {
          setRow([]);
          setSourcerow([]);
        }

      })
      .catch((err) => {
        console.log(err.response);
      })

  }, [])






  //搜尋
  const search = (text) => {
    let _row = [...sourceRow];
    _row = _row.filter((p)=>{
        const matchArray = p.project.match(new RegExp(text,'gi'));
        const matchArray2 = p.sysName.match(new RegExp(text,'gi'));
        return matchArray !==null ||  matchArray2 !==null;
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


  const columnsCustomer2 = [
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
      field: 'project',
      headerName: '專案名稱',
      width: 200
    }, {
      field: 'sysName',
      headerName: '系統名稱',
      width: 200
    }, {
      field: 'dateOn',
      headerName: '派駐起日',
      width: 150
    }, {
      field: 'dateOff',
      headerName: '派駐迄日',
      width: 150
    }, {
      field: 'price',
      headerName: '報價',
      width: 150
    }
  ];

  return (
    <div className="sales">
      <Sidebar/>
      <div className="salesContainer">
        <Navbar/>
        <Toolbox search={search}/>
        <div className="salesTable">
          <h2>業務管理 / 客戶合約資料</h2>
          <div style={{
            height: 400,
            width: '100%'
          }}>
            <DataGrid 
            rows={row} 
            columns={columnsCustomer2} 
            pageSize={5} 
            rowsPerPageOptions={[5]
            } 
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default SalesContract