import "./salesContractEdit.scss";
import Panel from '../../components/panel/Panel';
import EditInventorySalesContract from '../../components/editInventorySalesContract/EditInventorySalesContract';
import EditInventorySales from '../../components/editInventorySales/EditInventorySales';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {useState, useEffect} from "react";
import {DataGrid} from '@mui/x-data-grid';
import axios from '../../commons/axios';
import EditIcon from '@mui/icons-material/Edit';
// import Toolbox from '../../components/toolbox/Toolbox';

//使用useNavigate 轉址
// import {useNavigate} from "react-router-dom";

const Sales = () => {

  const [row,setRow] = useState([]);
  const [row2,setRow2] = useState([]);
  const [sourceRow, setSourcerow] = useState([]);
  const [sourceRow2, setSourcerow2] = useState([]);


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

      //Customer Data
      axios.get(`/customer`).then((re) => {
        // console.log('customer data:',re.data[0].customer);
        const user = global.auth.getUser() || {}
        if (user.account === 'techlead' || user.account === 'sales' || user.account === 'hr' || user.account === 'director') {
          // console.log('ID:', user.account);
          // console.log('customer data:',re.data);
          setRow2(re.data);
          setSourcerow2(re.data);
          
        } else {
          setRow2([]);
          setSourcerow2([]);
        }
  
      })
      .catch((err) => {
        // handleNavigate();
        console.log(err.response);
      })

  }, [])


//修改資料
const toEdit = (params) => {
  Panel.open({
    component: EditInventorySalesContract, 
    props:{
      card: params.row,
      deleteCard: deleteData
    },
    callback: data => {
      // console.log('Contract:',data);
      if(data){
        update(data) 
      }
    }
  })
}

const toEdit2 = (params) => {
  Panel.open({
    component: EditInventorySales, 
    props:{
      card: params.row,
      deleteCard: deleteData2
    },
    callback: data => {
      if(data){
        update2(data) 
      }
    }
  })
}

//更新資料,重新渲染
const update = (card) => {
  const _row = [...row];
  const _index = _row.findIndex(p=>p.id === card.id);
  _row.splice(_index,1,card);

  const _srow = [...sourceRow];
  const _sIndex = _row.findIndex(p=>p.id === card.id);
  _srow.splice(_sIndex,1,card);

  setRow(_row);
  setSourcerow(_srow);
}

const update2 = (card) => {
  const _row = [...row2];
  const _index = _row.findIndex(p=>p.id === card.id);
  _row.splice(_index,1,card);

  const _srow = [...sourceRow2];
  const _sIndex = _row.findIndex(p=>p.id === card.id);
  _srow.splice(_sIndex,1,card);

  setRow2(_row);
  setSourcerow2(_srow);
}

//刪除資料,使用filter過濾不要的id項目,返回不相同的id項目, 相同id則過濾刪除
const deleteData = (id) =>{
  const _row = row.filter((p)=>p.id !== id);
  const _srow = sourceRow.filter((p)=>p.id !== id);

  setRow(_row);
  setSourcerow(_srow);
}

const deleteData2 = (id) =>{
  const _row = row2.filter((p)=>p.id !== id);
  const _srow = sourceRow2.filter((p)=>p.id !== id);

  setRow2(_row);
  setSourcerow2(_srow);
}



  const renderDetailsButton = (params) => {
  return (
          <IconButton 
              variant="contained"
              color="primary"
              size="small"
              // style={{ marginLeft: 16 }}
              onClick={()=>{
                toEdit(params);
                console.log(params.row)
              }}
          >
          <EditIcon/>
          </IconButton>
  )
}
  const renderDetailsButton2 = (params) => {
  return (
          <IconButton 
              variant="contained"
              color="primary"
              size="small"
              // style={{ marginLeft: 16 }}
              onClick={()=>{
                toEdit2(params);
                // console.log(params.row)
              }}
          >
          <EditIcon/>
          </IconButton>
  )
}

  
const columnsCustomer = [
  {
    field: "action",
    headerName: "編輯",
    width: 60,
    renderCell: renderDetailsButton2,
    disableClickEventBubbling: true
  },
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

  const columnsContract = [
    {
      field: "action",
      headerName: "編輯",
      width: 60,
      renderCell: renderDetailsButton,
      disableClickEventBubbling: true
    },
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
      width: 120
    }
  ];

  return (
    <div className="sales">
      <Sidebar/>
      <div className="salesContainer">
        <Navbar/>
        {/* <Toolbox/> */}
        <div className="salesTable">
          <h2>業務管理 / 客戶資料</h2>
          <div style={{
            height: 400,
            width: '100%'
          }}>
            <DataGrid 
            rows={row2} 
            columns={columnsCustomer} 
            pageSize={5} 
            rowsPerPageOptions={[5]
            } // checkboxSelection
            />
          </div>
          <br />
          <h2>業務管理 / 合約資料</h2>
          <div style={{
            height: 400,
            width: '100%'
          }}>
            <DataGrid 
            rows={row} 
            columns={columnsContract} 
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