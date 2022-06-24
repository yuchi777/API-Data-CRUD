import "./salesContract.scss";
import Panel from '../../components/panel/Panel';
import EditInventorySales from '../../components/editInventorySales/EditInventorySales';
// import EditInventorySalesContract from '../../components/editInventorySalesContract/EditInventorySalesContract';
import EditInventorySalesContract2 from '../../components/editInventorySalesContract2/EditInventorySalesContract2';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {useState, useEffect} from "react";
import {DataGrid} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import axios from '../../commons/axios';
import EditIcon from '@mui/icons-material/Edit';
import Toolbox from '../../components/toolbox/Toolbox';

//使用useNavigate 轉址
// import {useNavigate} from "react-router-dom";

const SalesContract = () => {

  const [row,setRow] = useState([]);
  // const [row2,setRow2] = useState([]);
  const [rowBtn,setRowBtn] = useState([]);
  const [sourceRow, setSourcerow] = useState([]);
  // const [sourceRow2, setSourcerow2] = useState([]);
  // const [sourceRow3, setSourcerow3] = useState([]);


  useEffect(() => {

    //Customer Data
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
    // axios.get(`/contract`).then((re) => {
    //     console.log('contract data:',re.data);
    //     const user = global.auth.getUser() || {}
    //     if (user.account === 'techlead' || user.account === 'sales' || user.account === 'hr' || user.account === 'director') {
    //       setRow2(re.data);
    //       setSourcerow2(re.data)
    //     } else {
    //       setRow2([]);
    //       setSourcerow2([]);
    //     }

    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //   })

  }, [])


//修改資料
const toEdit = (params) => {
  Panel.open({
    component: EditInventorySales, 
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
//修改資料
// const toEdit2 = (params) => {
//   Panel.open({
//     component: EditInventorySalesContract, 
//     props:{
//       card: params.row,
//       deleteCard: deleteData
//     },
//     callback: data => {
//       // console.log('Contract:',data);
//       if(data){
//         update(data) 
//       }
//     }
//   })
// }
//修改資料
const toEdit3 = (params) => {
  Panel.open({
    component: EditInventorySalesContract2, 
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

//刪除資料,使用filter過濾不要的id項目,返回不相同的id項目, 相同id則過濾刪除
const deleteData = (id) =>{
  const _row = row.filter((p)=>p.id !== id);
  const _srow = sourceRow.filter((p)=>p.id !== id);

  setRow(_row);
  setSourcerow(_srow);
}




//搜尋
const search = (text) => {
  let _row = [...sourceRow];
  console.log('sourceRow',sourceRow);
  _row = _row.filter((p)=>{
      const matchArray = p.name.match(new RegExp(text,'gi'));
      const matchArray2 = p.client.match(new RegExp(text,'gi'));
      // const matchArray3 = p.contract.filter((re)=>{
      //   const match =  re.project.match(new RegExp(text,'gi'));
      //   return match;
      // });
      return matchArray !==null ||  matchArray2 !==null   ;
  })

  setRow(_row);
}

// const search2 = (text) => {
//   let _row2 = [...sourceRow2];
//   _row2 = _row2.filter((p)=>{
//       const matchArray = p.project.match(new RegExp(text,'gi'));
//       const matchArray2 = p.sysName.match(new RegExp(text,'gi'));
//       return matchArray !==null ||  matchArray2 !==null ;
//   })

//   setRow2(_row2);
// }




// const search3 = (text) => {
//   let _row3 = [...sourceRow3];
//   _row3 = _row3.filter((p)=>{
//       const matchArray = p.project.match(new RegExp(text,'gi'));
//       const matchArray2 = p.sysName.match(new RegExp(text,'gi'));
//       return matchArray !==null ||  matchArray2 !==null ;
//   })

//   setRowBtn(_row3);
// }

  const renderDetailsButton = (params) => {
  return (
          <IconButton 
              variant="contained"
              color="primary"
              size="small"
              // style={{ marginLeft: 16 }}
              onClick={()=>{
                toEdit(params);
                console.log('params.row',params)
              }}
          >
          <EditIcon/>
          </IconButton>
  )
}
//   const renderDetailsButton2 = (params) => {
//   return (
//           <IconButton 
//               variant="contained"
//               color="primary"
//               size="small"
//               // style={{ marginLeft: 16 }}
//               onClick={()=>{
//                 toEdit2(params);
//                 console.log('params.row',params)
//               }}
//           >
//           <EditIcon/>
//           </IconButton>
//   )
// }
  const renderDetailsButton3 = (params) => {
  return (
          <IconButton 
              variant="contained"
              color="primary"
              size="small"
              // style={{ marginLeft: 16 }}
              onClick={()=>{
                toEdit3(params);
                console.log('params.row',params)
              }}
          >
          <EditIcon/>
          </IconButton>
  )
}
  const renderContractButton = (params) => {
  return (
          <IconButton 
              variant="contained"
              color="primary"
              size="small"
              // style={{ marginLeft: 16 }}
              onClick={()=>{
                console.log('params.row',params.row.contract);
                setRowBtn(params.row.contract)
                // setSourcerow3(params.row.contract)
              }}
          >
          <AddBoxIcon/>
          </IconButton>
  )
}

const columnsCustomer = [
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
  }, {
    field: 'contract',
    headerName: '合約',
    width: 60,
    renderCell: renderContractButton,
    disableClickEventBubbling: true
  }
];

  // const columnsCustomer2 = [
  //   {
  //     field: "action",
  //     headerName: "編輯",
  //     width: 60,
  //     renderCell: renderDetailsButton2,
  //     disableClickEventBubbling: true
  //   },
  //   {
  //     field: 'id',
  //     headerName: 'ID',
  //     width: 60
  //   }, {
  //     field: 'project',
  //     headerName: '專案名稱',
  //     width: 200
  //   }, {
  //     field: 'sysName',
  //     headerName: '系統名稱',
  //     width: 200
  //   }, {
  //     field: 'dateOn',
  //     headerName: '派駐起日',
  //     width: 150
  //   }, {
  //     field: 'dateOff',
  //     headerName: '派駐迄日',
  //     width: 150
  //   }, {
  //     field: 'price',
  //     headerName: '報價',
  //     width: 120
  //   }
  // ];

  const columnsCustomer3 = [
    {
      field: "action",
      headerName: "編輯",
      width: 60,
      renderCell: renderDetailsButton3,
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
        <div className="salesTable">
          <Toolbox search={search}/>
          <h2>業務管理 / 客戶合約資料 / 查詢</h2>
          <h2>客戶資料</h2>
          {/* <button className="add-btn button is-info" >新增</button> */}
          <div style={{
            height: 400,
            width: '100%'
          }}>
            <Box
            sx={{
              height:400
            }}
            >
              <DataGrid 
              rows={row} 
              columns={columnsCustomer} 
              pageSize={5} 
              rowsPerPageOptions={[5]
              } 
              rowHeight={70}
              />
            </Box>
          </div>
          <br />
          <br />
          {/* <Toolbox search={search3}/> */}
          <h2>載入合約資料(+)</h2>
          <div style={{
            height: 400,
            width: '100%'
          }}>
            <DataGrid 
            rows={rowBtn} 
            columns={columnsCustomer3} 
            pageSize={5} 
            rowsPerPageOptions={[5]
            } 
            />
          </div>
          <br />
          {/* <br />
          <hr />
          <Toolbox search={search2}/>
          <h2>所有合約資料</h2>
          <div style={{
            height: 650,
            width: '100%'
          }}>
            <DataGrid 
            rows={row2} 
            columns={columnsCustomer2} 
            pageSize={10} 
            rowsPerPageOptions={[10]
            } 
            />
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default SalesContract