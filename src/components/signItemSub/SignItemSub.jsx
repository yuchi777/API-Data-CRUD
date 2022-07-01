import "./signItemSub.scss";
import React, {Component} from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import Panel from '../panel/Panel';
import EditInventory from "../editInventory/EditInventory";

// import axios from "../../commons/axios";
// import sysImg from "../../img/systex-logo.jpg"
// import fubonImg from "../../img/fubon-logo.png"

export default class SignitemSub extends Component {

  //修改資料
  toEdit = () => {
    // console.log('this.props.card:',this.props.card);
    // console.log('this.props.card:',typeof(this.props.card));
    Panel.open({
      component: EditInventory, // EditInventory 掛載=> CardItem 使用=> Panel.open()
      props:{
        card: this.props.card, //父組件<Card card={p}/>
        deleteCard: this.props.delete //父組件<Card delete={this.delete}/>
      },
      callback: data => {
        console.log('cardItem toEdit>Panel:',data);
        if(data){
          this.props.update(data) //用data.id更新 // 父組件<Card update={this.update}/>
        }
      }
    })
  }

  //判斷身分返回功能模組
  renderMangerBtn = () => {
    
    //獲取用戶資料,若無登入給空對象
    const user = global.auth.getUser() || {}
    if(user.type === 1){
      return(
        <div className="p-head has-text-right" onClick={this.toEdit}>
          <span className="icon edit-btn">
            <TuneIcon/>
          </span>
        </div>
      )
    }

  }


  render() {

    const { number, name, nameEn, sysNumber, sysEmail, level, birthday, gender, role, school, department, phone, onboard, status  } = this.props.card;
    const _pClass = {
      available: 'card',
      unavailable: 'card out-stock'
    };

    return (
      <div className={_pClass[status]}>

        
        {this.renderMangerBtn()}
        
        <div className="p-content">
          <div className="img-wrapper">
            <div className="out-stock-text">Unavailable</div>
            <h2>基本資料</h2>
            <p className="p-tags">人才編號: {number}</p>
            <p className="name">姓名: {name}</p>
            <p className="name">姓名(EN): {nameEn}</p>
            <p className="name">精誠工號: {sysNumber}</p>
            <p className="name">精誠EMAIL: </p>
            <p>{sysEmail}</p>
            <p className="name">職等: {level}</p>
            <p className="name">出生年: {birthday}</p>
            <p className="name">性別: {gender}</p>
            <p className="name">角色: {role}</p>
            <p className="name">學校: {school}</p>
            <p className="name">科系: {department}</p>
            <p className="name">手機: {phone}</p>
            <p className="p-tags">報到日: {onboard}</p>
            <p className="p-name">媒合狀態: {status}</p>
          </div>
        </div>

        <div className="p-footer">
          <button className="footer-btn" disabled={status === 'unavailable'} onClick={this.toEdit}>
            <span>打卡</span>
          </button>
          <button className="footer-btn" disabled={status === 'unavailable'} >
            <span>查詢</span>
          </button>
        </div>

      </div>
    )
  }
}
