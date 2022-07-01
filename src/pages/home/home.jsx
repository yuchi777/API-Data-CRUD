import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
//使用useNavigate 轉址
// import {useNavigate} from "react-router-dom";
// import {useEffect} from "react";
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





const Home = () => {
  
  // const navigate = useNavigate();
  // const isLogin = global.auth.isLogin();
  
  //useEffect 有兩個參數，第一個參數是 Effect function，第二個則是 depandancy array。 根據不同 depandancy 決定何時要執行 Effect function
  //第二個參數是用來限定當哪些變數被改變時useEffect要觸發 
  //after every render

  // useEffect(() => {
  //   if(isLogin){
  //     navigate('/')
  //   }else{
  //     navigate('/login')
  //   }
  // }, [isLogin,navigate]);


  const [row,setRow] = useState([]);
  const [rowBtn,setRowBtn] = useState([]);
  const [sourceRow, setSourcerow] = useState([]);
  const [sourceRowBtn, setSourceRowBtn] = useState([]);
  
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


const renderContractButton = (params) => {
  return (
          <IconButton 
              variant="contained"
              color="primary"
              size="small"
              // style={{ marginLeft: 16 }}
              onClick={()=>{
                //console.log('Contract params.row',params.row.contract); //array[object{}]
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
                  
                  return dt1>=today //小於是歷史//大於是現況
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
    headerName: '客戶資料',
    width: 170,
    cellClassName:'super-app-theme--header',
    renderCell:(params)=>(
      <ul className="">
        {/* {console.log('params.value',params.value)} */}
        {params.value.map((customer,id)=>(
          <p key={id}>
            <li>{customer.name}</li>
            {/* <li>{customer.place}</li> */}
          </p>
        ))}

      </ul>
    ),
    type:'string'
  },
  // {
  //   field: 'customer',
  //   headerName: '地點',
  //   width: 170,
  //   cellClassName:'super-app-theme--header',
  //   renderCell:(params)=>(
  //     <ul className="">

  //       {params.value.map((p,id)=>(
  //           <li key={id}>{p.place}</li>
  //       ))}

  //     </ul>
  //   ),
  //   type:'string'
  // },
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
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="salesTable">
          <Toolbox search={search}/>
          <h2>人才外派現況</h2>
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
            height: '100%',
            width: '90%',
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

export default Home