import React, { Component } from 'react';

class Button extends Component {
    state = {  }
    render() { 
        return ( 

            <button type="button" class={this.props.Class}>{this.props.buttonContent}</button>
                            
         );
    }
}
 
export default Button;