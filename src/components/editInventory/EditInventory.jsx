import React, { Component } from 'react';
import {toast} from 'react-toastify';
import axios from '../../commons/axios';


class EditInventory extends Component {

    state = {
        id:'',
        img:'',
        name:'',
        area:'',
        place:'',
        contact:'',
        status:'available'
    }

    componentDidMount(){
        const {id, img, name, area, place, contact, status} = this.props.card;
        this.setState({
            id:id,
            img:img,
            name:name,
            area:area,
            place:place,
            contact:contact,
            status:status
        })
    }

    //資料綁定
    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name] : value
        })
    }

    // Submit
    submit = (e) => {
        e.preventDefault();
        const card = {...this.state};
        axios.put(`location/${this.state.id}`,card).then((res)=>{
            console.log('EditInventory data:',res.data);
            this.props.close(res.data);
            toast.success('Edit Success');
        })
    }

    //Delete
    onDelete = () =>{
        axios.delete(`location/${this.state.id}`).then(()=>{
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
                        <label className='label label-flex'>Img</label>
                        <div className="control">
                            <input type="text" name='img' className="input"  value={this.state.img} onChange={this.handleChange}/>
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

export default EditInventory;
