import * as React from 'react';
import "./materialTable.scss";
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 20 },
  { field: 'status', headerName: '連線狀況', width: 100 },
  { field: 'group', headerName: '群組', width: 130 },
  { field: 'hostname', headerName: '主機名稱', width: 130 },
  { field: 'owner', headerName: '保管者', width: 130 },
  { field: 'cpu', headerName: 'cpu', width: 20 },
  { field: 'mem', headerName: 'mem', width: 20 },
  { field: 'swap', headerName: 'swap', width: 20 },
  { field: 'lasttime', headerName: '最後時間', width: 100 },
  { field: 'alertmsg', headerName: '告警訊息', width: 130 },
  { field: 'info', headerName: '資訊', width: 130 }
];

const rows   = [
  { id:1,status: 'on', group: 'Snow', hostname: 'Jon', owner: 35,cpu:5, mem:'16g',swap:523,lasttime:1200,alertmsg:'良好',info:'無訊息' },
  { id:2,status: 'on', group: 'Lannister', hostname: 'Cersei', owner: 42,cpu:52, mem:'162g',swap:5232,lasttime:12002,alertmsg:'良好2',info:'無訊息2' },
  { id:4,status: 'of', group: 'Lannister', hostname: 'Jaime', owner: 45,cpu:5, mem:'16g',swap:523,lasttime:1200,alertmsg:'良好',info:'無訊息' },
  { id:5,status: 'of', group: 'Stark', hostname: 'Arya', owner: 16,cpu:5, mem:'16g2',swap:5232,lasttime:12002,alertmsg:'良好2',info:'無訊息2' },
  { id:6,status: 'on', group: 'Targaryen', hostname: 'Daenerys', owner:23,cpu:5, mem:'16g',swap:523,lasttime:1200,alertmsg:'良好',info:'無訊息' },
  { id:7,status: 'of', group: 'Melisandre', hostname: null, owner: 15,cpu:56, mem:'166g',swap:5236,lasttime:12006,alertmsg:'良好6',info:'無訊息6' },
  { id:8,status: 'on', group: 'Clifford', hostname: 'Ferrara', owner: 44,cpu:5, mem:'16g',swap:523,lasttime:1200,alertmsg:'良好',info:'無訊息' },
  { id:9,status: 'of', group: 'Frances', hostname: 'Rossini', owner: 36,cpu:65, mem:'166g',swap:5236,lasttime:12006,alertmsg:'良好6',info:'無訊息6' },
  { id:10,status: 'on', group: 'Roxie', hostname: 'Harvey', owner: 65,cpu:5, mem:'16g',swap:523,lasttime:1200,alertmsg:'良好',info:'無訊息' },
];

export default function MaterialTable() {



  return (

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        />
      </div>
    
  );
}
