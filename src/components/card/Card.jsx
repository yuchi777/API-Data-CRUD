import React, {Component} from 'react'
import "./card.scss";
import Img from "../../img/systex-logo.jpg"

export default class Card extends Component {
  render() {
    return (
      <div className="card">

        <div className="p-head">
            地點
        </div>

        <div className="p-content">

          <div className="img-wrapper">
            <figure className="image is4by3">
              <img src={Img} alt="img"/>
            </figure>

            <p className="p-tags">內湖區</p>
            <p className="p-name">sys辦公大樓</p>

          </div>

        </div>

        <div className="p-footer">

          <p className="price"></p>

          <button className="add-cart">
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-exclamation	"></i>
          </button>

        </div>

      </div>
    )
  }
}
