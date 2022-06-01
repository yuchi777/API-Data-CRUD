import React, { Component } from 'react';
import "./cards.scss";
import Toolbox from '../toolbox/Toolbox';
import Card from '../cardItem/CardItem';
import axios from '../../commons/axios';
import Panel from '../panel/Panel';
import AddInventory from '../addInventory/AddInventory';
import AddCircleIcon from '@mui/icons-material/AddCircle';

// 子組件掛載
// import AddInventory from '../addinventory/Addinventory';

class Cards extends Component {

    state = {
        cards:[],
        sourceCards:[],
    }

    //生命週期函數,第一次渲染之後執行此函數
    componentDidMount(){
        axios.get('/location').then((re)=>{
            console.log('location data:',re.data);
            this.setState({
                cards: re.data,
                sourceCards: re.data
            })
        })
    }

    //搜尋
    search = (text) => {
        let _cards = [...this.state.sourceCards];
        _cards = _cards.filter((p)=>{
            const matchArray = p.name.match(new RegExp(text,'gi'));
            return matchArray !==null;
        })

        this.setState({
            cards: _cards
        })
    }

    //open Panel & 掛載子組件
    toAdd = () => {
        Panel.open({
            component: AddInventory,
            callback:(data) => {
                console.log('callback data:',data);
                console.log('cards data',data);
                if(data){
                    //新增資料
                    this.add(data);
                }
            }
        })
    }

    //新增資料
    add = (e) => {
        const _cards = [...this.state.cards];
        _cards.push(e);
        const _scards = [...this.state.sourceCards];
        _scards.push(e);

        this.setState({
            cards: _cards,
            sourceCards: _scards
        })
    }


    //更新資料,重新渲染
    update = (card) => {
        const _cards = [...this.state.cards];
        const _index = _cards.findIndex(p=>p.id === card.id);
        _cards.splice(_index,1,card);

        const _scards = [...this.state.sourceCards];
        const _sIndex = _cards.findIndex(p=>p.id === card.id);
        _scards.splice(_sIndex,1,card);

        this.setState({
            cards: _cards,
            sourceCards: _scards
        })
    }

    //刪除資料,使用filter過濾不要的id項目,返回不相同的id項目, 相同id則過濾刪除
    delete = (id) =>{
        const _cards = this.state.cards.filter((p)=>p.id !== id);
        const _scards = this.state.sourceCards.filter((p)=>p.id !== id);

        this.setState({
            cards: _cards,
            sourceCards: _scards
        })
    }




    render() {
        return (
            <div>
                <Toolbox search={this.search} />
                <div className='cards'>
                    <div className="columns is-multiline is-desktop">
                        
                        {
                            this.state.cards.map((p)=>{
                                return(
                                    <div className="column is-3">
                                        <Card 
                                        card={p}
                                        update={this.update}
                                        delete={this.delete}
                                        />
                                    </div>
                                )
                            })
                        }
                        {
                            (global.auth.getUser() || {}).type === 1 && (
                                <button className="button is-info add-btn" onClick={this.toAdd}>
                                    新增站點
                                    <AddCircleIcon className='add-btn-icon'/>
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;