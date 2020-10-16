import React, { Component } from 'react';

class FormSearch extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Search</label>
                    <input type="text" class="form-control" placeholder="Search here...."/>
                </div>
            </div>
        );
    }
}

class RangeSlider extends Component {
    state = { }
    render() {
        return (
            <form>
                <div class="form-group">
                    <label for="formControlRange">Select Range</label>
                    <input type="range" class="form-control-range"/>
                </div>
            </form>
        )
    }
}
 
export default FormSearch;
export { RangeSlider };