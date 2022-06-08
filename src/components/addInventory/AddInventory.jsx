//增加站點清單 (Panel子組件)
import React, { Component } from 'react';
import axios from '../../commons/axios';
import { toast } from 'react-toastify';
import "./AddInventory.scss";
//使用toast //index.js載入toastContainer&ReactToastify.css

class AddInventory extends Component {

    state = {
        img:'',
        name:'',
        area:'',
        place:'',
        contact:'',
        status:'available'
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
        axios.post('location',card).then((res)=>{
            // console.log('Add data:',res.data);
            // Add => Cards => Panel.open()
            this.props.close(res.data);
            toast.success('Add Success');
        })
    }


    render() {
        return (
            <div className="inventory">
                <p className="title has-text-centered">Add</p>

                <form onSubmit={this.submit}>
                    <div className="field">
                        <div className="control">
                            <label className='label label-flex'>Img</label>
                            <input type="text"  name='img' className="input" value={this.state.img} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className='label label-flex'>Name</label>
                            <input type="text" name="name" className="input" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className='label label-flex'>Area</label>
                            <input type="text" name="area" className="input" value={this.state.area} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className='label label-flex'>Place</label>
                            <input type="text" name="place" className="input" value={this.state.place} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className='label label-flex'>Contact</label>
                            <input type="text" name="contact" className="input" value={this.state.contact} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className='label label-flex'>Status</label>
                            <div className="select is-fullwidth">
                                <select name="status" value={this.state.status} onChange={this.handleChange}>
                                    <option>available</option>
                                    <option>unavailable</option>
                                </select>
                            </div>
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

export default AddInventory;