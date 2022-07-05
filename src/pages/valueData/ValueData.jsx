import "./valueData.scss";
import axios from '../../commons/axios';
import Panel from '../../components/panel/Panel';
import { useState,useEffect } from "react";

// import { useNavigate } from "react-router-dom";
import {DataGrid} from '@mui/x-data-grid';
import Box from '@mui/material/Box';

import Sidebar from "../../components/sidebar/Sidebar";
import EditInventory from "../../components/editInventory/EditInventory";
import AddInventory from "../../components/addInventory/AddInventory";
//icon
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';




const Talent = () => {
  
  const [row, setRow] = useState([]);
  const [sourceRow, setSourcerow] = useState([]);

  useEffect(() => {

    axios.get('values').then((re)=>{
      console.log('values data',re.data);
      if( re.data ){
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
  // console.log('row:',row);
  // console.log('row:',typeof(row));
  Panel.open({
    component: EditInventory, 
    props:{
      card: params.row,
      deleteCard: deleteData
    },
    callback: data => {
      if(data){
        console.log('edit callback data',data);
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


const toAdd = () => {
  Panel.open({
      component: AddInventory,
      callback:(data) => {
          if(data){
              add(data);
          }
      }
  })
}

//新增資料
const add = (e) => {
  const _row = [...row];
  _row.push(e);
  const _srow = [...sourceRow];
  _srow.push(e);

  setRow(_row);
  setSourcerow(_srow);
}


//更新資料,重新渲染
const update = (card) => {
  const _row = [...row];
  const _index = _row.findIndex( (p) => (p.COLNO === card.COLNO));
  _row.splice(_index,1,card);

  const _srow = [...sourceRow];
  const _sIndex = _row.findIndex( (p) => (p.COLNO === card.COLNO));
  _srow.splice(_sIndex,1,card);

  setRow(_row);
  setSourcerow(_srow);
}

//刪除資料
const deleteData = (COLNO,TBNAME) =>{
  const _row = row.filter(
    (p)=> (p.COLNO !== COLNO) || (p.TBNAME !== TBNAME)
    );
  const _srow = sourceRow.filter(
    (p)=> (p.COLNO !== COLNO) || (p.TBNAME !== TBNAME)
    );

  setRow(_row);
  setSourcerow(_srow);
}




const renderDetailsButton = (params) => {
  return (
          <div>
            <IconButton 
              variant="contained"
              color="primary"
              size="small"
              onClick={()=>{
                toEdit(params);
                // console.log('toEditBtn',params);
              }}
            ><EditIcon/>
            </IconButton>
          </div>
          
  )
}






  const columns = [
    {
      field: "action",
      headerName: "修改",
      width: 60,
      renderCell: renderDetailsButton,
      disableClickEventBubbling: true
    },
    {
      field: 'TBNAME',
      headerName: 'TBNAME',
      width: 100
    },
    {
      field: 'COLNO',
      headerName: 'COLNO',
      width: 100
    },
    {
      field: 'COLNAME',
      headerName: 'COLNAME',
      width: 200
    }, {
      field: 'COLCNAME',
      headerName: 'COLCNAME',
      width: 150
    },
    {
      field: 'COLTYPE',
      headerName: 'COLTYPE',
      width: 100
    }, 
    {
      field: 'COLLEN',
      headerName: 'COLLEN',
      width: 100
    }, 
    {
      field: 'COLSCALE',
      headerName: 'COLSCALE',
      width: 100
    }, {
      field: 'MODIFY_NO',
      headerName: 'MODIFY_NO',
      width: 100
    }
  ];

  
  

  return (
    <div className="valueData">
      <Sidebar/>
      <div className="valueDataContainer">
        <div className="valueDataTable">
          <h2>資料處理</h2>
          <button className="add-btn button is-info" onClick={toAdd}>新增</button>
          <div style={{
            height: 550,
            width: '100%'
          }}>
            <Box
            sx={{
              height: 550,
            }}
            >
              <DataGrid
                rows={row}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                // getRowId={row => row.COLNO}
                getRowId={()=> Math.random()}
              />
            </Box>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Talent