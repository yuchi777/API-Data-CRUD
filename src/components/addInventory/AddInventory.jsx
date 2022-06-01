//增加站點清單 (Panel子組件)
import React, { Component } from 'react';
import axios from '../../commons/axios';
import { toast } from 'react-toastify';
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
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name] : value
        })
    }

    //Submit
    submit = (e) => {
        e.preventDefault();
        const card = {...this.state};
        axios.post('location',card).then((res)=>{
            console.log('AddInventory data:',res.data);
            // AddInventory => Cards => Panel.open()
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
                        <label className='label label-flex'>Img</label>
                        <div className="control">
                            <input type="text"  name='img' className="input" value={this.state.img} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>Name</label>
                        <div className="control">
                            <input type="text" name="name" className="input" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>Area</label>
                        <div className="control">
                            <input type="text" name="area" className="input" value={this.state.area} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>Place</label>
                        <div className="control">
                            <input type="text" name="place" className="input" value={this.state.place} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>Contact</label>
                        <div className="control">
                            <input type="text" name="contact" className="input" value={this.state.contact} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>Status</label>
                        <div className="control">
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