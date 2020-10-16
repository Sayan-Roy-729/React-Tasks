import React, { Component } from 'react';
import CardRow, { SimpleRow } from './row';
import FormSearch, { RangeSlider } from './form.js';
import Button from './Button';


class MainContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="container">
                <div class="row mt-5">
                    <div class="col-md-2">
                        <FormSearch/>
                        <Button Class = "btn btn-danger" buttonContent = "Search"/>
                        <br/>
                        <br/>
                        <br/>
                        <h5><b>Select Tags</b></h5>
                        <Button Class = "btn btn-primary" buttonContent = "Redmi"/>
                        <Button Class = "btn btn-primary" buttonContent = "Apple"/>
                        <Button Class = "btn btn-primary" buttonContent = "Oppo"/>
                        <Button Class = "btn btn-primary" buttonContent = "Samsung"/>
                        <Button Class = "btn btn-primary" buttonContent = "Realme"/>
                        <Button Class = "btn btn-primary" buttonContent = "OnePlus"/>
                        <br/>
                        <br/>
                        <RangeSlider/>
                    </div>
                    <div class="col-md-10">
                        <SimpleRow/>
                        <hr />
                        <CardRow/>
                        <CardRow/>
                    </div>
                </div>
            </div>
            
         );
    }
}
 
export default MainContainer;