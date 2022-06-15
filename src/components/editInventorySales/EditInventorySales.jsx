import React, { Component } from 'react';
import {toast} from 'react-toastify';
import axios from '../../commons/axios';


class EditInventorySales extends Component {

    state = {
        id:'',
        name:'',
        client:'',
        contact:'',
        place:''
    }

    //因為修改所以要取出值,解構附值
    componentDidMount(){
        const {id, name, client, contact, place} = this.props.card;
        this.setState({
            id:id,
            name:name,
            client:client,
            contact:contact,
            place:place
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
        axios.put(`customer/${this.state.id}`,card).then((res)=>{
            console.log('EditInventorySales data:',res.data);
            this.props.close(res.data);
            toast.success('Edit Success');
        })
    }

    //Delete
    onDelete = () =>{
        axios.delete(`customer/${this.state.id}`).then(()=>{
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
                        <label className='label label-flex'>Name</label>
                        <div className="control">
                            <input type="text" name="name" className="input" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>Client</label>
                        <div className="control">
                            <input type="text" name="client" className="input" value={this.state.client} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>Contact</label>
                        <div className="control">
                            <input type="text" name="contact" className="input" value={this.state.contact} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>Place</label>
                        <div className="control">
                            <input type="text" name="place" className="input" value={this.state.place} onChange={this.handleChange}/>
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

export default EditInventorySales;