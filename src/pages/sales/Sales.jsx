import "./sales.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
// import Button from '@mui/material/Button';
import {useState, useEffect} from "react";
import {DataGrid} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import axios from '../../commons/axios';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';
import EditIcon from '@mui/icons-material/Edit';
import Toolbox from '../../components/toolbox/Toolbox';

//使用useNavigate 轉址
// import {useNavigate} from "react-router-dom";

const Sales = () => {

  const [row,setRow] = useState([]);
  const [rowBtn,setRowBtn] = useState([]);
  const [sourceRow, setSourcerow] = useState([]);
  // const [sourceRow3, setSourcerow3] = useState([]);
  // const [row2,setRow2] = useState([]);


  useEffect(() => {


    axios.get(`/talent`).then((re) => {
        // console.log('talent data:',re.data[0].talent);
        const user = global.auth.getUser() || {}
        if (user.account === 'techlead' || user.account === 'sales' || user.account === 'hr' || user.account === 'director') {
          // console.log('ID:', user.account);
          console.log('talent data:',re.data);
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
    // axios.get(`/sales`).then((re) => {
    //     console.log('sales data:',re.data[0].contract);
    //     const user = global.auth.getUser() || {}
    //     if (user.account === 'techlead' || user.account === 'sales' || user.account === 'hr' || user.account === 'director') {
    //       setRow2(re.data[0].contract);
    //     } else {
    //       setRow2([]);
    //     }

    //   })
    //   .catch((err) => {
    //     // handleNavigate();
    //     console.log(err.response);
    //   })

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





  const renderDetailsButton = (params) => {
  return (
          <IconButton 
              variant="contained"
              color="primary"
              size="small"
              // style={{ marginLeft: 16 }}
              onClick={()=>{
                // toEdit(params);
                console.log(params.row)
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

  

  const columnsTalent = [
    {
      field: "edit",
      headerName: "編輯",
      width: 60,
      renderCell: renderDetailsButton,
      disableClickEventBubbling: true
    },
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
    {
      field: "action",
      headerName: "合約客戶資料",
      width: 200,
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
      renderCell:(params)=>(
        <ul 
        className=" is-fullwidth" 
        name="customer" 
        defaultValue="customer">

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
          <h2>業務管理 / 人才外派資料</h2>
          {/* <button className="add-btn button is-info" >新增</button> */}
          <div style={{
            height: 650,
            width: '80%'
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
          {/* <Toolbox /> */}
          <h2>載入合約資料(+)</h2>
          <div style={{
            height: 500,
            width: '80%'
          }}>
            <Box
            sx={{
              height:500
            }}>
            <DataGrid 
            rows={rowBtn} 
            columns={columnsContract} 
            pageSize={10} 
            rowsPerPageOptions={[10]
            } 
            />
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sales