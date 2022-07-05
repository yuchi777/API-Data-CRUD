import "./AddInventory.scss";
import React, { Component } from 'react';
import axios from '../../commons/axios';
import { toast } from 'react-toastify';

class AddInventory extends Component {

    state = {
        COLNAME:'',
        COLLEN:'',
        COLCNAME:'',
        COLNO:'',
        COLSCALE:'',
        COLTYPE:'',
        MODIFY_NO:'',
        TBNAME:'',
    }

    
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
        axios.post('values',card).then((res)=>{
            console.log('add submit callback data ', res);
            this.props.close(res.data);
            toast.success('Add Success');
        })

        setTimeout(() => {
            window.location.reload()
        }, 500);
    }


    render() {
        return (
            <div className="inventory">
                <p className="title has-text-centered">新增</p>

                <form onSubmit={this.submit}>

                    <div className="field">
                        <label className='label label-flex'>TBNAME</label>
                        <div className="control">
                            <input type="text" name="TBNAME" className="input" value={this.state.TBNAME} onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className='label label-flex'>COLNO</label>
                        <div className="control">
                            <input type="number" name="COLNO" className="input" value={this.state.COLNO} onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className='label label-flex'>COLNAME</label>
                            <input type="text" name="COLNAME" className="input" value={this.state.COLNAME} onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className='label label-flex'>COLCNAME</label>
                        <div className="control">
                            <input type="text" name="COLCNAME" className="input" value={this.state.COLCNAME} onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className='label label-flex'>COLTYPE</label>
                        <div className="control">
                            <input type="text" name="COLTYPE" className="input" value={this.state.COLTYPE} onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className='label label-flex'>COLLEN</label>
                        <div className="control">
                            <input type="number" name="COLLEN" className="input" value={this.state.COLLEN} onChange={this.handleChange}/>
                        </div>
                    </div>
                    
                    
                    <div className="field">
                        <label className='label label-flex'>COLSCALE</label>
                        <div className="control">
                            <input type="number" name="COLSCALE" className="input" value={this.state.COLSCALE} onChange={this.handleChange}/>
                        </div>
                    </div>
                    
                    <div className="field">
                        <label className='label label-flex'>MODIFY_NO</label>
                        <div className="control">
                            <input type="number" name="MODIFY_NO" className="input" value={this.state.MODIFY_NO} onChange={this.handleChange}/>
                        </div>
                    </div>
                    
                
                    
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