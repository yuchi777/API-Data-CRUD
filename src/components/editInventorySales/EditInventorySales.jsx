import React, { Component } from 'react';
import {toast} from 'react-toastify';
import axios from '../../commons/axios';


class EditInventorySales extends Component {

    state = {
        id:'',
        number:'',
        name:'',
        nameEn:'',
        sysNumber:'',
        sysEmail:'',
        level:'',
        birthday:'',
        gender:'',
        role:'',
        school:'',
        department:'',
        phone:'',
        onboard:'',
        status:'available'
    }

    //因為修改所以要取出值,解構附值
    componentDidMount(){
        const {id, number,name, nameEn, sysNumber, sysEmail, level, birthday, gender, role, school,department,phone, onboard,status} = this.props.card;
        this.setState({
            id:id,
            number:number,
            name:name,
            nameEn:nameEn,
            sysNumber:sysNumber,
            sysEmail:sysEmail,
            level:level,
            birthday:birthday,
            gender:gender,
            role:role,
            school:school,
            department:department,
            phone:phone,
            onboard:onboard,
            status:status
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
        axios.put(`talent/${this.state.id}`,card).then((res)=>{
            console.log('EditInventorySales data:',res.data);
            this.props.close(res.data);
            toast.success('Edit Success');
        })
    }

    //Delete
    onDelete = () =>{
        axios.delete(`talent/${this.state.id}`).then(()=>{
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
                        <label className='label label-flex'>Number</label>
                        <div className="control">
                            <input type="text" name="number" className="input" value={this.state.number} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>Name</label>
                        <div className="control">
                            <input type="text" name="name" className="input" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>NameEn</label>
                        <div className="control">
                            <input type="text" name="nameEn" className="input" value={this.state.nameEn} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>SysNumber</label>
                        <div className="control">
                            <input type="text" name="sysNumber" className="input" value={this.state.sysNumber} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>sysEmail</label>
                        <div className="control">
                            <input type="text" name="sysEmail" className="input" value={this.state.sysEmail} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>level</label>
                        <div className="control">
                            <input type="text" name="level" className="input" value={this.state.level} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>birthday</label>
                        <div className="control">
                            <input type="text" name="birthday" className="input" value={this.state.birthday} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>gender</label>
                        <div className="control">
                            <input type="text" name="gender" className="input" value={this.state.gender} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>role</label>
                        <div className="control">
                            <input type="text" name="role" className="input" value={this.state.role} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>school</label>
                        <div className="control">
                            <input type="text" name="school" className="input" value={this.state.school} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>department</label>
                        <div className="control">
                            <input type="text" name="department" className="input" value={this.state.department} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>phone</label>
                        <div className="control">
                            <input type="text" name="phone" className="input" value={this.state.phone} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>onboard</label>
                        <div className="control">
                            <input type="text" name="onboard" className="input" value={this.state.onboard} onChange={this.handleChange}/>
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

export default EditInventorySales;
