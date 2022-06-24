import React, { Component } from 'react';
import {toast} from 'react-toastify';
import axios from '../../commons/axios';


class EditInventorySalesTalent extends Component {

    state = {
        id:'',
        contract:[],
        // contractId:'',
        // project:'',
        // sysName:'',
        // dateOn:'',
        // dateOff:'',
        // price:'',
        // customer:[],
        // customerId:'',
        // name:'',
        // client:'',
        // contact:'',
        // place:''
    }

    //因為修改所以要取出值,解構附值
    componentDidMount(){
        
        const {id, contract} = this.props.card;
        // const { id:contractId, project,sysName,dateOn,dateOff,price,customer} = contract;
        // const { id:customerId,name,client,contact,place } = customer;
        this.setState({
            id:id,
            contract:contract,
            // contractId:contractId,
            // project:project,
            // sysName:sysName,
            // dateOn:dateOn,
            // dateOff:dateOff,
            // price:price,
            // customer:contract.customer,
            // customerId:customer.id,
            // name:customer.name,
            // client:customer.client,
            // contact:customer.contact,
            // place:customer.place
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
            // console.log('EditInventorySalesTalent data:',res.data);
            this.props.close(res.data);
            toast.success('Add Success');
        })
    }
    // Submit
    submit2 = (e) => {
        e.preventDefault();
        const card = {...this.state};
        axios.put(`customer/${this.state.id}`,card).then((res)=>{
            // console.log('EditInventorySalesTalent data:',res.data);
            this.props.close(res.data);
            toast.success('Add Success');
        })
    }

    //Delete
    // onDelete = () =>{
    //     axios.delete(`talent/${this.state.id}`).then(()=>{
    //         this.props.deleteCard(this.state.id)
    //         this.props.close();
    //         toast.success('Delete Success');
    //     })
    // }


    render() {
        return (
            <div className="inventory">
                <p className="title has-text-centered">新增合約</p>

                <form onSubmit={this.submit}>
                    <div className="field">
                    <label className='label label-flex'>專案名稱</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            name="project" 
                            list="projectList" 
                            onChange={this.handleChange} 
                            // value={this.state.project}
                            />
                            <datalist id="projectList">
                                {
                                    this.state.contract.map((contract,id)=>(
                                    <option 
                                    key={id}
                                    name="project"
                                    // value={this.state.project}
                                    >
                                        {contract.project}
                                    </option>
                                    ))
                                }
                            </datalist>
                        </div>
                    </div>
                    <div className="field">
                    <label className='label label-flex'>系統名稱</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            name="sysName" 
                            list="sysNameList" 
                            onChange={this.handleChange} 
                            // value={this.state.sysName}
                            />
                            <datalist id="sysNameList">
                                {
                                    this.state.contract.map((contract,id)=>(
                                    <option 
                                    key={id}
                                    name="sysName"
                                    // value={this.state.sysName}
                                    >
                                        {contract.sysName}
                                    </option>
                                    ))
                                }
                            </datalist>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>派駐起日</label>
                        <div className="control">
                            <input 
                            type="date" 
                            name="dateOn" 
                            className="input" 
                            // value={this.state.dateOn} 
                            onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>派駐迄日</label>
                        <div className="control">
                            <input 
                            type="date" 
                            name="dateOff" 
                            className="input" 
                            // value={this.state.dateOff} 
                            onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="field">
                    <label className='label label-flex'>報價</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            name="price" 
                            list="priceList" 
                            onChange={this.handleChange} 
                            // value={this.state.price}
                            />
                            <datalist id="priceList">
                                {
                                    this.state.contract.map((contract,id)=>(
                                    <option 
                                    key={id}
                                    name="price"
                                    // value={this.state.price}
                                    >
                                        {contract.price}
                                    </option>
                                    ))
                                }
                            </datalist>
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
                <hr />
                <p className="title has-text-centered">新增客戶</p>

                <form onSubmit={this.submit}>
                    <div className="field">
                            <label className='label label-flex'>客戶名稱</label>
                            <div className="control">
                            <input 
                            type="text" 
                            name="name" 
                            list="nameList" 
                            className="input" 
                            // value={this.state.customer} 
                            onChange={this.handleChange}/>
                            <datalist id="nameList">
                                {
                                    this.state.contract.map((contract,id)=>(
                                        <option 
                                        key={id}
                                        name="name"
                                        // value={this.state.customer}
                                        >
                                            {/* {console.log('contract.customer',contract.customer)} */}
                                            {contract.customer.map((customer,id)=>(
                                                <React.Fragment key={id}>
                                                    {customer.name}
                                                </React.Fragment>
                                            ))}
                                        </option>
                                        ))
                                }
                            </datalist>
                        </div>
                    </div>

                    <div className="field">
                        <label className='label label-flex'>終端客戶名稱</label>
                        <div className="control">
                            <input 
                            type="text" 
                            name="client" 
                            list="clientList"
                            className="input" 
                            // value={this.state.client} 
                            onChange={this.handleChange}/>
                            <datalist id="clientList">
                                {
                                    this.state.contract.map((contract,id)=>(
                                        <option 
                                        key={id}
                                        name="client"
                                        // value={this.state.customer}
                                        >
                                            {/* {console.log('contract.customer',contract.customer)} */}
                                            {contract.customer.map((customer,id)=>(
                                                <React.Fragment key={id}>
                                                    {customer.client}
                                                </React.Fragment>
                                            ))}
                                        </option>
                                        ))
                                }
                            </datalist>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>客戶窗口</label>
                        <div className="control">
                            <input 
                            type="text" 
                            name="contact" 
                            list="contactList"
                            className="input" 
                            // value={this.state.contact} 
                            onChange={this.handleChange}/>
                            <datalist id="contactList">
                                {
                                    this.state.contract.map((contract,id)=>(
                                        <option 
                                        key={id}
                                        name="contact"
                                        // value={this.state.customer}
                                        >
                                            {/* {console.log('contract.customer',contract.customer)} */}
                                            {contract.customer.map((customer,id)=>(
                                                <React.Fragment key={id}>
                                                    {customer.contact}
                                                </React.Fragment>
                                            ))}
                                        </option>
                                        ))
                                }
                            </datalist>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label label-flex'>派駐地點</label>
                        <div className="control">
                            <input 
                            type="text" 
                            name="place" 
                            list="placeList"
                            className="input" 
                            // value={this.state.place} 
                            onChange={this.handleChange}/>
                            <datalist id="placeList">
                                {
                                    this.state.contract.map((contract,id)=>(
                                        <option 
                                        key={id}
                                        name="place"
                                        // value={this.state.customer}
                                        >
                                            {/* {console.log('contract.customer',contract.customer)} */}
                                            {contract.customer.map((customer,id)=>(
                                                <React.Fragment key={id}>
                                                    {customer.place}
                                                </React.Fragment>
                                            ))}
                                        </option>
                                        ))
                                }
                            </datalist>
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

export default EditInventorySalesTalent;
