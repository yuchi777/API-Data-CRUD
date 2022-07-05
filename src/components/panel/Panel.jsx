import React, { Component } from 'react';
import "./panel.scss";
import {render} from 'react-dom';

class Panel extends Component {

    state = {
        active:false,
        component:null,
        callback: ()=>{}
    };


    close = (data) =>{
        
        this.setState({
            active:false
        })
        console.log('close data',data);
        this.state.callback(data);
    }

    open = ( re = {
        props:{},
        component:null,
        callback:()=>{}
    }) =>{

        const { props, component, callback } = re;
        
        const _key = new Date().getTime();

        const _component = React.createElement(component,{

            ...props,
            close:this.close,
            key:_key 
            
        })

        this.setState({
            active:true,
            component:_component,
            callback: callback
        })

    }



    render() {


        const _class = {
            true : "panel-wrapper active",
            false: "panel-wrapper"
        }



        return (
            <div className={_class[this.state.active]}>
                <div className="over-layer" onClick={()=>{this.close()}}></div>
                <div className="panel">
                    <div className="head">
                        <span className="close" onClick={()=>{this.close()}}>X</span>
                        {this.state.component}
                    </div>
                </div>
            </div>
        );
    }
}



const _div = document.createElement('div');
document.body.appendChild(_div);


const _panel = render(<Panel/>, _div)
console.log(_panel);









export default _panel;