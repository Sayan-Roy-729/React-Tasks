import React, { Component } from 'react';

class Card extends Component {
    state = {  }
    render() { 
        return ( 

            <div class="col-md-2">
                <div class="card">
                    <img src={this.props.SRC} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.title}</h5>
                        <p class="card-text">Rs {this.props.Value} </p>
                    </div>
                </div>
            </div>
            
         );
    }
}
 
export default Card;