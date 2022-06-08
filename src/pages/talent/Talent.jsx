import "./talent.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Button from '@mui/material/Button';
import { useState,useEffect } from "react";
import {DataGrid} from '@mui/x-data-grid';
import axios from '../../commons/axios';
//使用useNavigate 轉址
import { useNavigate } from "react-router-dom";

const Talent = () => {

  // async function dataAxios(){
  //    const data = await axios.get('/sales').then((re)=>{
  //       return re.data
  //    })
  //    return data;
  //   }

  //   dataAxios().then((data)=>{
  //     console.log('data',data)//返回資料
  //   })

  
  
  // 重新轉址
  const navigate = useNavigate()
  
  const check = global.auth.getUser() || {};
  if(check.account === 'techlead' || 
  check.account ==='sales' 
  ){
    // navigate('/talent')
  }else{
    navigate('/notFound')
  }
  
  const [row, setRow] = useState([]);

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
      }else{
        setRow([]);
      }
  
   }).catch((err)=>{
     console.log(err.response);
   })

   
}, [])




const renderDetailsButton = (params) => {
  return (
          <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() => {
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
      width: 70
    }, {
      field: 'number',
      headerName: 'number',
      width: 70
    }, {
      field: 'name',
      headerName: 'name',
      width: 100
    }, {
      field: 'name-en',
      headerName: 'name-en',
      width: 90
    }, {
      field: 'sys-number',
      headerName: 'sys-number',
      type: 'number',
      width: 90
    }, {
      field: 'sys-email',
      headerName: 'sys-email',
      width: 200
    }, {
      field: 'level',
      headerName: 'level',
      width: 50
    }, {
      field: 'birthday',
      headerName: 'birthday',
      width: 100
    }, {
      field: 'gender',
      headerName: 'gender',
      width: 70
    }, {
      field: 'role',
      headerName: 'role',
      width: 100
    }, {
      field: 'school',
      headerName: 'school',
      width: 130
    }, {
      field: 'department',
      headerName: 'department',
      width: 100
    }, {
      field: 'phone',
      headerName: 'phone',
      sortable: false,
      width: 100
    }, {
      field: 'onboard',
      headerName: 'onboard',
      width: 100
    }, {
      field: 'status',
      headerName: 'status',
      width: 70
    },{
      field: "action",
      headerName: "Action",
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