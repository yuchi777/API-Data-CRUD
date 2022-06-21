import "./talentEdit.scss";
import Panel from '../../components/panel/Panel';
import EditInventory from "../../components/editInventory/EditInventory";
// import AddInventory from "../../components/addInventory/AddInventory";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState,useEffect } from "react";
import {DataGrid} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import axios from '../../commons/axios';
// import Toolbox from '../../components/toolbox/Toolbox';
//使用useNavigate 轉址
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';
// import { useNavigate } from "react-router-dom";

const Talent = () => {
  
  const [row, setRow] = useState([]);
  const [sourceRow, setSourcerow] = useState([]);

  useEffect(() => {
    axios.get(`/talent`).then((re)=>{
      const user = global.auth.getUser() || {}
      if(user.account === 'techlead' || user.account ==='sales' ){
        setRow(re.data);
        setSourcerow(re.data)
      }else{
        setRow([]);
        setSourcerow([]);
      }
  
    }).catch((err)=>{
      console.log(err.response);
    })
    
}, [])

//修改資料
const toEdit = (params) => {
  console.log('row:',row);
  console.log('row:',typeof(row));
  Panel.open({
    component: EditInventory, 
    props:{
      card: params.row,
      deleteCard: deleteData
    },
    callback: data => {
      console.log('talent toEdit:',data);
      if(data){
        update(data) 
      }
    }
  })
}



//搜尋
// const search = (text) => {
//   let _row = [...sourceRow];
//   _row = _row.filter((p)=>{
//       const matchArray = p.name.match(new RegExp(text,'gi'));
//       return matchArray !==null;
//   })

//   setRow(_row);
// }


//open Panel & 掛載子組件
// const toAdd = () => {
//   Panel.open({
//       component: AddInventory,
//       callback:(data) => {
//           console.log('Add:',data);
//           if(data){
//               add(data);
//           }
//       }
//   })
// }

//新增資料
// const add = (e) => {
//   const _row = [...row];
//   _row.push(e);
//   const _srow = [...sourceRow];
//   _srow.push(e);

//   setRow(_row);
//   setSourcerow(_srow);
// }


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




const renderDetailsButton = (params) => {
  return (
          <IconButton 
              variant="contained"
              color="primary"
              size="small"
              onClick={()=>{
                toEdit(params);
                console.log(params.row)
              }}
          >
          <EditIcon/>
          </IconButton>
  )
}






  const columns = [
    {
      field: "action",
      headerName: "編輯",
      width: 60,
      renderCell: renderDetailsButton,
      disableClickEventBubbling: true
    },
    {
      field: 'status',
      headerName: '媒合狀態',
      width: 100,
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
          //媒合狀態成功發送mail給sales作人才外派資料建立
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
            <IconButton
              sx={{ color: 'white' }}
              variant="contained"
              size="small">
              <MarkEmailReadIcon/>
            </IconButton>
          </div>
          
        )
      }
    },
    {
      field: 'id',
      headerName: 'ID',
      width: 50
    }, {
      field: 'number',
      headerName: '人才編號',
      width: 70
    }, {
      field: 'name',
      headerName: '姓名',
      width: 100
    }, {
      field: 'nameEn',
      headerName: '姓名(EN)',
      width: 90
    }, {
      field: 'sysNumber',
      headerName: '精誠工號',
      type: 'number',
      width: 90
    }, {
      field: 'sysEmail',
      headerName: '精誠Email',
      width: 150
    }, {
      field: 'level',
      headerName: '職等',
      width: 50
    }, {
      field: 'birthday',
      headerName: '生日',
      width: 120
    }, {
      field: 'gender',
      headerName: '性別',
      width: 70
    }, {
      field: 'role',
      headerName: '角色',
      width: 100
    }, {
      field: 'school',
      headerName: '學校',
      width: 130
    }, {
      field: 'department',
      headerName: '科系',
      width: 80
    }, {
      field: 'phone',
      headerName: '手機',
      sortable: false,
      width: 100
    }, {
      field: 'onboard',
      headerName: '報到日',
      width: 120
    }
  ];

  
  

  return (
    <div className="talent">
      <Sidebar/>
      <div className="talentContainer">
        <Navbar/>
        {/* <Toolbox search={search}/> */}
        <div className="talentTable">
          <h2>人才管理 / 人才資料</h2>
          {/* <button className="add-btn button is-info" onClick={toAdd}>新增</button> */}
          <div style={{
            height: 500,
            width: '100%'
          }}>
            <Box
            sx={{
              height: 500,
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
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                />
            </Box>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Talent