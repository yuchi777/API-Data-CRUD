import "./cardItem.scss";
import React, {Component} from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import Panel from '../panel/Panel';
import EditInventory from "../editInventory/EditInventory";

// import axios from "../../commons/axios";
import sysImg from "../../img/systex-logo.jpg"
import fubonImg from "../../img/fubon-logo.png"

export default class Card extends Component {

  //修改資料
  toEdit = () => {
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

    const { img, name, area, place, contact, status } = this.props.card;
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
            <figure className="image is4by3">
              <img src={(img === 'sysImg')?sysImg:fubonImg} alt={name}/>
            </figure>
            <p className="name">{name}</p>
            <p className="p-tags">{area}</p>
            <p className="p-name">{place}</p>
            <p className="">聯絡: {contact}</p>
          </div>
        </div>

        <div className="p-footer">
          <button className="footer-btn" disabled={status === 'unavailable'} >
            <span>SIGN</span>
          </button>
          <button className="footer-btn" disabled={status === 'unavailable'} >
            <span>REPORT</span>
          </button>
        </div>

      </div>
    )
  }
}
