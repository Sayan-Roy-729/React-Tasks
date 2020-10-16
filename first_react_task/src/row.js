import React, { Component } from 'react';
import Card from './card';
import Button from './Button';

// For displaying Cards items
class CardRow extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="row mt-4">
                <Card SRC = "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" title = "OnePlus7" Value = "35000"/>

                <Card SRC = "https://images.unsplash.com/photo-1533022139390-e31c488d69e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" title = "iPhone 9" Value = "75000"/>

                <Card SRC = "https://images.unsplash.com/photo-1521939094609-93aba1af40d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" title = "Redmi A2" Value = "15000"/>

                <Card SRC = "https://images.unsplash.com/photo-1528795259021-d8c86e14354c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" title = "Reame 5" Value = "10000"/>

                <Card SRC = "https://images.unsplash.com/photo-1544866092-1935c5ef2a8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" title = "Nokia" Value = "20000"/>

                <Card SRC = "https://images.unsplash.com/photo-1510297182321-a75bdc5b1299?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1378&q=80" title = "Gionee 9" Value = "25000"/>
            </div>
         );
    }
}

// For filter Buttons
class SimpleRow extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="row">
                <strong>Sort By</strong>
                <Button buttonContent = "Price High to Low" Class ="btn btn-secondary"/>
                <Button buttonContent = "Price Low to High" Class ="btn btn-secondary"/>
                <Button buttonContent = "Alphabetically Low to High" Class ="btn btn-secondary"/>
                <Button buttonContent = "Alphabetically High to Low" Class ="btn btn-secondary"/>
            </div>
         );
    }
}
 

 
export default CardRow;
export { SimpleRow };