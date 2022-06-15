import React, { Component } from 'react';
import {toast} from 'react-toastify';
import axios from '../../commons/axios';


class EditInventorySalesContract extends Component {

    state = {
        id:'',
        project:'',
        sysName:'',
        dateOn:'',
        dateOff:'',
        price:''
    }

    //因為修改所以要取出值,解構附值
    componentDidMount(){
        const {id, project, sysName, dateOn, dateOff, price} = this.props.card;
        this.setState({
            id:id,
            project:project,
            sysName:sysName,
            dateOn:dateOn,
            dateOff:dateOff,
            price:price,
        })
    }

    //資料綁定
    handleChange = (e) => {
        const value = e.target.value; //輸入的值
        const name = e.target.name; //input的name提供state對應 

        this.setState({
            [name] : value //輸入的值替換state的值(改變狀態)
        })
    }

    // Submit
    submit = (e) => {
        e.preventDefault();
        const card = {...this.state};
        axios.put(`contract/${this.state.id}`,card).then((res)=>{
            console.log('EditInventorySalesContract data:',res.data);
            this.props.close(res.data);
            toast.success('Edit Success');
        })
    }

    //Delete
    onDelete = () =>{
        axios.delete(`contract/${this.state.id}`).then(()=>{
            this.props.deleteCard(this.state.id)
            this.props.close();
            toast.success('Delete Success');
        })
    }


    render() {
        return (
            <div className="inventory">
                <p className="title has-text-centered">Edit</p>
                <form onSubmit={this.submit}>
                    <div className="field">
                        <label className='label label-flex'>Project</label>
                        <div className="control">
                            <input type="text" name="project" className="input" value={this.state.project} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>SysName</label>
                        <div className="control">
                            <input type="text" name="sysName" className="input" value={this.state.sysName} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>DateOn</label>
                        <div className="control">
                            <input type="text" name="dateOn" className="input" value={this.state.dateOn} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>DateOff</label>
                        <div className="control">
                            <input type="text" name="dateOff" className="input" value={this.state.dateOff} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>Price</label>
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
                            <button className="button is-danger " type="button" onClick={this.onDelete}>Delete</button>
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

export default EditInventorySalesContract;
