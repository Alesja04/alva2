import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default class Order extends Component {
  render() {
    //console.log(this.props.item.name);
    return (
      <div className="item">
        <img src={this.props.item.img} alt="logo" width={220} height={200} />
        <p> {this.props.item.name}</p>
        <p>{this.props.item.price} €</p>
        <p
          style={{ float: 'right', marginTop: '-50px', color: 'red', cursor: 'pointer' }}
          onClick={() => this.props.onDelete(this.props.item.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </p>
      </div>
    );
  }
}
