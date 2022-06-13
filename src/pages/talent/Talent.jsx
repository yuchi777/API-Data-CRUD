import "./talent.scss";
import Panel from '../../components/panel/Panel';
import EditInventory from "../../components/editInventory/EditInventory";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Button from '@mui/material/Button';
import { useState,useEffect } from "react";
import {DataGrid} from '@mui/x-data-grid';
import axios from '../../commons/axios';
import Toolbox from '../../components/toolbox/Toolbox';
//使用useNavigate 轉址
// import { useNavigate } from "react-router-dom";

const Talent = () => {
  
  const [row, setRow] = useState([]);
  const [sourceRow, setSourcerow] = useState([]);
  

  useEffect(() => {
    //渲染 => 判斷身分(控制資源) => 取資源  
    //依據${user.account} = techlead 判別身分獲取資料
    // axios.get(`/${user.account}`)
    
    axios.get(`/talent`).then((re)=>{
      const user = global.auth.getUser() || {}
      if(user.account === 'techlead' || user.account ==='sales' ){
        // console.log('ID:',user.account);
        // console.log('talent data:',re.data);
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
    component: EditInventory, // EditInventory 掛載=> CardItem 使用=> Panel.open()
    props:{
      card: params.row
    },
    callback: data => {
      console.log('talent toEdit:',data);
      if(data){
        update(data) //用data.id更新 // 父組件<Card update={this.update}/>
      }
    }
  })
}

//更新資料,重新渲染
const update = (card) => {
  const _row = [...row];
  const _index = _row.findIndex(p=>p.id === card.id);
  _row.splice(_index,1,card);

  setRow(_row);
}

//搜尋
const search = (text) => {
  let _row = [...sourceRow];
  _row = _row.filter((p)=>{
      const matchArray = p.name.match(new RegExp(text,'gi'));
      return matchArray !==null;
  })

  setRow(_row);
}



const renderDetailsButton = (params) => {
  return (
          <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={()=>{
                toEdit(params);
                console.log(params.row)
              }}
          >
              More
          </Button>
  )
}

  const columns = [
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
      width: 100
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
      width: 100
    }, {
      field: 'phone',
      headerName: '手機',
      sortable: false,
      width: 100
    }, {
      field: 'onboard',
      headerName: '報到日',
      width: 100
    }, {
      field: 'status',
      headerName: '媒合狀態',
      width: 70
    },{
      field: "action",
      headerName: "編輯",
      width: 90,
      renderCell: renderDetailsButton,
      disableClickEventBubbling: true
    },
  ];

  
  // const rows = [
  //   {
  //     id: 1,
  //     lastName: 'Snow',
  //     firstName: 'Jon',
  //     age: 35
  //   }, {
  //     id: 2,
  //     lastName: 'Lannister',
  //     firstName: 'Cersei',
  //     age: 42
  //   }, {
  //     id: 3,
  //     lastName: 'Lannister',
  //     firstName: 'Jaime',
  //     age: 45
  //   }, {
  //     id: 4,
  //     lastName: 'Stark',
  //     firstName: 'Arya',
  //     age: 16
  //   }, {
  //     id: 5,
  //     lastName: 'Targaryen',
  //     firstName: 'Daenerys',
  //     age: null
  //   }, {
  //     id: 6,
  //     lastName: 'Melisandre',
  //     firstName: null,
  //     age: 150
  //   }, {
  //     id: 7,
  //     lastName: 'Clifford',
  //     firstName: 'Ferrara',
  //     age: 44
  //   }, {
  //     id: 8,
  //     lastName: 'Frances',
  //     firstName: 'Rossini',
  //     age: 36
  //   }, {
  //     id: 9,
  //     lastName: 'Roxie',
  //     firstName: 'Harvey',
  //     age: 65
  //   }
  // ];

  return (
    <div className="talent">
      <Sidebar/>
      <div className="talentContainer">
        <Navbar/>
        <Toolbox search={search}/>
        <div className="talentTable">
          <h2>人才管理 / 人才資料</h2>

          <div style={{
            height: 500,
            width: '100%'
          }}>
            <DataGrid
              rows={row}
              columns={columns}
              pageSize={8}
              rowsPerPageOptions={[8]}
              // checkboxSelection
              />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Talent