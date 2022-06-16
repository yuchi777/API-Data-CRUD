//增加站點清單 (Panel子組件)
import React, { Component } from 'react';
import axios from '../../commons/axios';
import { toast } from 'react-toastify';
import "./AddInventorySalesContract.scss";
//使用toast //index.js載入toastContainer&ReactToastify.css

class AddInventorySales extends Component {

    state = {
        id:'',
        project:'',
        sysName:'',
        dateOn:'',
        dateOff:'',
        price:''
    }

    //資料綁定
    handleChange = (e) => {
        const value = e.target.value; //輸入的值
        const name = e.target.name; //input的name提供state對應 

        this.setState({
            [name] : value //輸入的值替換state的值(改變狀態)
        })
    }

    //Submit
    submit = (e) => {
        e.preventDefault();//阻止預設提交行為
        const card = {...this.state};
        axios.post('contract',card).then((res)=>{
            console.log('Add data:',res.data);
            this.props.close(res.data);
            toast.success('Add Success');
        })
    }


    render() {
        return (
            <div className="inventory">
                <p className="title has-text-centered">新增</p>

                <form onSubmit={this.submit}>
                    <div className="field">
                        <div className="control">
                            <label className='label label-flex'>專案名稱</label>
                            <input type="text" name="project" className="input" value={this.state.project} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>系統名稱</label>
                        <div className="control">
                            <input type="text" name="sysName" className="input" value={this.state.sysName} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>派駐起日</label>
                        <div className="control">
                            <input type="date" name="dateOn" className="input" value={this.state.dateOn} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>派駐迄日</label>
                        <div className="control">
                            <input type="date" name="dateOff" className="input" value={this.state.dateOff} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>報價</label>
                        <div className="control">
                            <input type="text" name="price" className="input" value={this.state.price} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <br />
                    <div className="field is-grouped is-grouped-centered">
                        <div className="control">
                            <button className="button is-link ">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button" type='button' onClick={()=>{this.props.close()}}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddInventorySales;