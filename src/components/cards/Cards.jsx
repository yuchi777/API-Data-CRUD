import React, { Component } from 'react';
import "./cards.scss";
import Toolbox from '../toolbox/Toolbox';
import Card from '../card/Card';



class Cards extends Component {





    render() {
        return (
            <div>
                <Toolbox />
                <div className='cards'>
                    <div className="columns is-multiline is-desktop">
                        <div className="column is-3">
                            <Card/>
                        </div>
                        <div className="column is-3">
                            <Card/>
                        </div>
                        <div className="column is-3">
                            <Card/>
                        </div>
                        <div className="column is-3">
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;