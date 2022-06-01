import React, {Component} from 'react'
import "./toolbox.scss";
import CancelIcon from '@mui/icons-material/Cancel';

//使用toast
// import { toast } from 'react-toastify';
//search icon
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default class Toolbox extends Component {

  state = {
    searchText:''
  };

  //綁定資料 //input onChange
  handleChange = (e)=>{
    const value = e.target.value;
    this.setState({
        searchText:value
    });

    //從父組件獲取函數並帶入input獲取輸入的值value
    this.props.search(value)

  }

  //清除資料 //button onClick
  clearSearchText = ()=>{
      this.setState({
          searchText:''
      });

      //從父組件獲取函數帶入空值
      this.props.search('')
  }

  render() {
    return (
      <div className="tool-box">
        <div className="logo-text">站點</div>

        <div className="search-box">
          <div className="field	has-addons">
            
            <div className="control">
              <input
              type="text" 
              placeholder='Search' 
              className="input search-input" 
              value={this.state.searchText}
              onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <button className="button" onClick={this.clearSearchText}>
                <CancelIcon />
              </button>
            </div>
          </div>
        </div>

        {/* <div className="cart-box">
          <i className="fas	fa-shopping-cart"></i>
          <span className="cart-num">(0)</span>
        </div> */}

      </div>
    )
  }
}
