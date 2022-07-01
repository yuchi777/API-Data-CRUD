import "./salesSearchHistory.scss";
// import Panel from '../../components/panel/Panel';
// import EditInventorySalesTalent from '../../components/editInventorySalesTalent/EditInventorySalesTalent';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
// import Button from '@mui/material/Button';
import {useState, useEffect} from "react";
import {DataGrid} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import axios from '../../commons/axios';
import IconButton from '@mui/material/IconButton';
// import AddBoxIcon from '@mui/icons-material/AddBox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';
// import EditIcon from '@mui/icons-material/Edit';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Toolbox from '../../components/toolbox/Toolbox';
// import { darken, lighten } from '@mui/material/styles';

//使用useNavigate 轉址
// import {useNavigate} from "react-router-dom";

const Sales = () => {

  const [row,setRow] = useState([]);
  const [rowBtn,setRowBtn] = useState([]);
  const [sourceRow, setSourcerow] = useState([]);
  const [sourceRowBtn, setSourceRowBtn] = useState([]);
  // const [row2,setRow2] = useState([]);




  useEffect(() => {


    axios.get(`/talent`).then((re) => {
        // console.log('talent data:',re.data[0].talent);
        const user = global.auth.getUser() || {}
        if (user.account === 'techlead' || user.account === 'sales' || user.account === 'hr' || user.account === 'director') {
          // console.log('ID:', user.account);
          // console.log('talent data:',re.data);
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

   
  }, [])


//修改資料
// const toEdit = (params) => {
//   console.log('params:',params);
//   Panel.open({
//     component: EditInventorySalesTalent, 
//     props:{
//       card: params,
//       deleteCard: deleteData
//     },
//     callback: data => {
//       if(data){
//         update(data) 
//       }
//     }
//   })
// }

//更新資料,重新渲染
// const update = (card) => {
//   const _row = [...row];
//   const _index = _row.findIndex(p=>p.id === card.id);
//   _row.splice(_index,1,card);

//   const _srow = [...sourceRow];
//   const _sIndex = _row.findIndex(p=>p.id === card.id);
//   _srow.splice(_sIndex,1,card);

//   setRow(_row);
//   setSourcerow(_srow);
// }

//刪除資料,使用filter過濾不要的id項目,返回不相同的id項目, 相同id則過濾刪除
// const deleteData = (id) =>{
//   const _row = row.filter((p)=>p.id !== id);
//   const _srow = sourceRow.filter((p)=>p.id !== id);

//   setRow(_row);
//   setSourcerow(_srow);
// }


//搜尋
const search = (text) => {
  let _row = [...sourceRow];
  _row = _row.filter((p)=>{
    const matchArray = p.name.match(new RegExp(text,'gi'));
    const matchArray2 = p.nameEn.match(new RegExp(text,'gi'));
    const matchArray3 = p.sysNumber.match(new RegExp(text,'gi'));
      return (matchArray !==null) ||  (matchArray2 !==null) ||  (matchArray3 !==null);
  })

  setRow(_row);
}
//搜尋
const search2 = (text) => {
  let _row = [...sourceRowBtn];
  _row = _row.filter((p)=>{
    const matchArray = p.project.match(new RegExp(text,'gi'));
    const matchArray2 = p.sysName.match(new RegExp(text,'gi'));
    const matchArray3 = p.dateOn.match(new RegExp(text,'gi'));
    const matchArray4 = p.dateOff.match(new RegExp(text,'gi'));
      return (matchArray !==null) ||  (matchArray2 !==null) ||  (matchArray3 !==null)||  (matchArray4 !==null);
  })

  setRowBtn(_row);
}





//   const renderDetailsButton = (params) => {
//   return (
//           <IconButton 
//               variant="contained"
//               color="primary"
//               size="small"
//               // style={{ marginLeft: 16 }}
//               onClick={()=>{
//                 toEdit(params.row);
//                 console.log('Edit params.row',params.row)
//               }}
//           >
//             <AddBoxIcon/>
//           </IconButton>
//   )
// }

const renderContractButton = (params) => {
  return (
          <IconButton 
              variant="contained"
              color="primary"
              size="small"
              // style={{ marginLeft: 16 }}
              onClick={()=>{
                console.log('Contract params.row',params.row.contract); //array[object{}]
                let contract = params.row.contract;
                contract = contract.filter((item)=>{

                  let dateOff = item.dateOff;
                  let dt1 = new Date(dateOff.replace("-","/"));
                  let dt2 = new Date();
                  let dt2Year = dt2.getFullYear();
                  let dt2Mon = dt2.getMonth()+1;
                  let dt2Date = dt2.getDate();
                  let mixtoday = dt2Year+'/'+dt2Mon+'/'+dt2Date;
                  let today = new Date(mixtoday);
                  // console.log('dt1',dt1);
                  // console.log('dt2',dt2);
                  // console.log('today',today);
                  
                  return dt1<today //小於是歷史//大於是現況
                })
                setRowBtn(contract)
                setSourceRowBtn(contract)

              }}
          >
          <SaveAltIcon/>
          </IconButton>
  )
}

  

  const columnsTalent = [
    
    {
      field: 'status',
      headerName: '媒合狀態',
      width: 90,
      cellClassName:(params)=>{
        if (params.value == null) {
          return '';
        }

        return clsx('super-app', {
          negative: params.value === 'unavailable',
          positive: params.value === 'available',
        });
      },
      renderCell: (params)=>{
        if (params.value === 'unavailable') {
          return (
            <IconButton 
              sx={{ color: 'white' }}
              variant="contained"
              // color="primary"
              size="small"
              // style={{ marginLeft: 16 }}
              // onClick={()=>{
              //   console.log(params.row)
              // }}
          >
            <DangerousIcon/>
          </IconButton>
          );
        }

        return (
          <div>
            <IconButton 
                sx={{ color: 'white' }}
                variant="contained"
                // color="primary"
                size="small"
                // style={{ marginLeft: 16 }}
                onClick={()=>{
                  console.log(params.row)
                }}
            >
              <CheckCircleIcon/>
            </IconButton>
            </div>
        )
      }
    },
    {
      field: 'id',
      headerName: 'ID',
      width: 70
    }, {
      field: 'number',
      headerName: '人才編號',
      width: 100
    }, {
      field: 'name',
      headerName: '姓名',
      width: 150
    }, {
      field: 'nameEn',
      headerName: '姓名(EN)',
      width: 100
    }, {
      field: 'gender',
      headerName: '性別',
      width: 100
    }, {
      field: 'sysNumber',
      headerName:'精誠工號',
      width: 100
    },
    // {
    //   field: "edit",
    //   headerName: "新增",
    //   width: 60,
    //   renderCell: renderDetailsButton,
    //   disableClickEventBubbling: true
    // },
    {
      field: "action",
      headerName: "合約客戶資料",
      width: 150,
      renderCell: renderContractButton,
      disableClickEventBubbling: true
    }
  ];



  const columnsContract = [
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
    }, 
    {
      field: 'customer',
      headerName: '客戶',
      width: 170,
      cellClassName:'super-app-theme--header',
      renderCell:(params)=>(
        <ul className="">

          {params.value.map((customer,id)=>(
              <li key={id}>{customer.name}</li>
          ))}

        </ul>
      ),
      type:'string'
    },
    {
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
      width: 150,
      cellClassName:(params)=>{
        let value = params.value;

        let dt1 = new Date();
        // console.log('newDate:dt1',dt1);

        let dt2 = new Date(value.replace("-","/"));
        // console.log('newDateParamsValue:dt2',dt2);
        

        if (value == null) {
          return '';
        }

        return clsx('search', {
          history: dt1 > dt2,
          now: dt1 < dt2 || dt1.toLocaleDateString() === dt2.toLocaleDateString(),
        });

      }
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
          {/* <h2>業務管理 / 人才外派資料 / 歷史查詢</h2> */}
          {/* <button className="add-btn button is-info" >新增</button> */}
          <div style={{
            height: 650,
            width: '90%'
          }}>
            <Box
            sx={{
              height: 650,
              '& .super-app.negative': {
                backgroundColor: '#d47483',
                color: 'white',
                fontWeight: '600',
              },
              '& .super-app.positive': {
                backgroundColor: '#1976d2',
                // backgroundColor: 'rgba(157, 255, 118, 0.49)',
                color: 'white',
                fontWeight: '600',
              }
            }}
            >
                <DataGrid 
                rows={row} 
                columns={columnsTalent} 
                pageSize={10} 
                rowsPerPageOptions={[10]
                } // checkboxSelection
                />
            </Box>
            
          </div>
          <br />
          <br />
          <Toolbox search={search2}/>
          <h2>人才/合約客戶資料</h2>
          <div style={{
            height: 500,
            width: '90%'
          }}>
            <Box
            sx={{
              height:500,
              '& .super-app-theme--header': {
                color: 'primary.main',
                // fontSize: 34,
                fontWeight: 'bold'
              },
              '& .search.history':{
                backgroundColor: '#d47483',
                color: 'white',
                fontWeight: '500',
              },
              '& .search.now':{
                backgroundColor: '#1976d2',
                color: 'white',
                fontWeight: '500',
              }
            }}>
            <DataGrid 
            rows={rowBtn} 
            columns={columnsContract} 
            pageSize={10} 
            rowsPerPageOptions={[10]} 
            // getRowClassName={}
            />
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sales