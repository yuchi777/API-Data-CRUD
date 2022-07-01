import "./signItem.scss";
import React,{useState} from 'react';
//使用 React Hook Form 函式庫
// import { useForm } from "react-hook-form";
//使用useNavigate 轉址
// import { useNavigate } from "react-router-dom";
//Axios
import axios from '../../commons/axios';
//使用toast
import { toast } from 'react-toastify';
//Panel
// import Panel from '../panel/Panel';
//icon
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import TuneIcon from '@mui/icons-material/Tune';



const SignItem = () => {

  const [attendance_hours, SetAttendance_hours] = useState(8);
  const [ot_weekdays, SetOt_weekdays] = useState(0);
  const [ot_weekenddays, SetOt_weekenddays] = useState(0);
  const [leave_hours, SetLeave_hours] = useState(0);
  const [notes, SetNotes] = useState('');
  

  const weekNamesZh = [
    '星期一', '星期二', '星期三', '星期四', '星期五', '星期六','星期日', 
  ]
  
  let time = new Date();
  let timeYear = time.getFullYear();
  let timeMon = time.getMonth()+1;
  //天
  let timeDate = time.getDate();
  let date = timeYear+'/'+timeMon+'/'+timeDate;
  //星期
  let week = weekNamesZh[time.getDay()-1];
  
  
  let timeHours = time.getHours();
  let timeMinutes = time.getMinutes().toString().padStart(2,'0');
  //本地格式化
  // let timeFormat = time.toLocaleTimeString()
  //出勤時數
  // let onWorktime = 8 ;
  //上班時間
  let on_duty = timeHours + ' : ' + timeMinutes ;
  // let getOffwork = timeHours+attendance_hours + ' : ' + timeMinutes ;
  let getOffwork = `${timeHours+attendance_hours} : ${timeMinutes}` ;
  const [off_duty,setOff_duty] = useState(getOffwork);
  


  //重新轉址
  // const navigate = useNavigate()
  // const handleHistory = () => {
  //   navigate('/')
  // }


  const onSubmit =  async(data) => {
    data.preventDefault();

    try {
      //解構附值
      const grabData = {
        id:'',
        date,
        week, 
        on_duty, 
        off_duty, 
        attendance_hours,
        ot_weekdays,
        ot_weekenddays,
        leave_hours,
        notes
      }
      console.log('data:',grabData);
      
      //axios post
      const response = await axios.post('talentSign', grabData);
      console.log('response:',response);
      toast.success('Submit Success');
      

    } catch (error) {
      console.log('error:',error);
      // console.log(error.response.data);
      // const message = error.response.data.message;
      toast.error('Error');
    }  
    
  }




  const handleChange = (e) =>{
    SetAttendance_hours(parseInt(e.target.value));
    console.log('state',e.target.value);
    getOffwork = `${timeHours+parseInt(e.target.value)} : ${timeMinutes}` ;
    console.log('getOffwork',getOffwork);
    setOff_duty(getOffwork);
  }
  const handleChange_ot_weekdays = (e) =>{
    console.log('state',e.target.value);
    SetOt_weekdays(parseInt(e.target.value));
  }
  const handleChange_ot_weekenddays = (e) =>{
    console.log('state',e.target.value);
    SetOt_weekenddays(parseInt(e.target.value));
  }
  const handleChange_leave_hours = (e) =>{
    console.log('state',e.target.value);
    SetLeave_hours(parseInt(e.target.value));
  }
  const handleChange_notes = (e) =>{
    console.log('state',e.target.value);
    SetNotes(e.target.value);
  }

  let timeClock = new Date().toLocaleString();
  const[clock,setClock] = useState(timeClock);

  const IntervalTime = ()=>{
    timeClock = new Date().toLocaleString();
    setClock(timeClock);
  }

  setInterval(IntervalTime,100)


  return (
    <div>
      <form className="box-sign" onSubmit={onSubmit}>


        <div className="field is-horizontal">
          <div className="field-label  has-addons">
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control clock">
                <label 
                className="title clock"
                >
                  {clock}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label  has-addons">
            <label className="title">
              簽到打卡
            </label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control clock">
                {/* <label 
                className="title clock"
                >
                  {clock}
                </label> */}
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">日期</label>
          </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input 
              readOnly={true}
              type="text" 
              className="input"
              name="date"
              value={date}
              />
            </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">星期</label>
          </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input 
              readOnly={true}
              type="text" 
              className="input"
              value={week}
              />
            </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">上班時間</label>
          </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input 
              readOnly={true}
              type="text" 
              className="input"
              value={on_duty}
              />
            </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">下班時間</label>
          </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input 
              readOnly={true}
              type="text" 
              className="input"
              value={off_duty}
              />
            </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">出勤時數</label>
          </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
            <div className="select">
                <select 
                style={{minWidth:'150px'}}
                value={attendance_hours} 
                onChange={handleChange}>
                  <option value="0"> 0 小時</option>
                  <option value="1"> 1 小時</option>
                  <option value="2"> 2 小時</option>
                  <option value="3"> 3 小時</option>
                  <option value="4"> 4 小時</option>
                  <option value="5"> 5 小時</option>
                  <option value="6"> 6 小時</option>
                  <option value="7"> 7 小時</option>
                  <option value="8"> 8 小時</option>
                </select>
              </div>


              {/* <input 
              readOnly={true}
              type="text" 
              className="input"
              defaultValue={`${onWorktime} 小時`}
              /> */}
            </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">平日加班時數</label>
          </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <div className="select">
                <select 
                style={{minWidth:'150px'}} 
                value={ot_weekdays}
                onChange={handleChange_ot_weekdays} 
                >
                  <option value="0"> 0 小時</option>
                  <option value="1"> 1 小時</option>
                  <option value="2"> 2 小時</option>
                  <option value="3"> 3 小時</option>
                  <option value="4"> 4 小時</option>
                  <option value="5"> 5 小時</option>
                  <option value="6"> 6 小時</option>
                  <option value="7"> 7 小時</option>
                  <option value="8"> 8 小時</option>
                </select>
              </div>
              
              {/* <input 
              readOnly={true}
              type="text" 
              className="input"
              defaultValue="..."
              /> */}
            </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">假日加班時數</label>
          </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <div className="select">
                <select 
                style={{minWidth:'150px'}} 
                value={ot_weekenddays}
                onChange={handleChange_ot_weekenddays}
                >
                  <option value="0"> 0 小時</option>
                  <option value="1"> 1 小時</option>
                  <option value="2"> 2 小時</option>
                  <option value="3"> 3 小時</option>
                  <option value="4"> 4 小時</option>
                  <option value="5"> 5 小時</option>
                  <option value="6"> 6 小時</option>
                  <option value="7"> 7 小時</option>
                  <option value="8"> 8 小時</option>
                </select>
              </div>
              {/* <input 
              readOnly={true}
              type="text" 
              className="input"
              defaultValue="..."
              /> */}
            </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">請假時數</label>
          </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <div className="select">
                <select 
                style={{minWidth:'150px'}} 
                value={leave_hours}
                onChange={handleChange_leave_hours} 
                >
                  <option value="0"> 0 小時</option>
                  <option value="1"> 1 小時</option>
                  <option value="2"> 2 小時</option>
                  <option value="3"> 3 小時</option>
                  <option value="4"> 4 小時</option>
                  <option value="5"> 5 小時</option>
                  <option value="6"> 6 小時</option>
                  <option value="7"> 7 小時</option>
                  <option value="8"> 8 小時</option>
                </select>
              </div>
              {/* <input 
              readOnly={true}
              type="text" 
              className="input"
              defaultValue="..."
              /> */}
            </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">補充說明</label>
          </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea 
              className="textarea"
              value={notes}
              onChange={handleChange_notes}
              type="textarea"
              ></textarea>
            </div>
            </div>
          </div>
        </div>
        
        
        
        <div className="field btnBox">
            <button type="submit" className="button is-info">
              提交
            </button>
        </div>


      </form>
    </div>
  )
}

export default SignItem