var React = require('react');
var data = require('../data');

var Order = React.createClass({
    getInitialState: function() {
        var info = data.getData('info') || {};

        return {
            customer: {
                name: '',
                email: '',
                num: '',
                street: '',
                city: '',
                phone: '',
                postal: ''
            },


        };
    },
    handleChange: function(value, ev) {
        var newCustomer = this.state.customer;
        newCustomer[value] = ev.target.value;
        this.setState({
            customer: newCustomer
        });
        this.checkData();

    },
    checkData: function() {


    },
    continueOrder: function() {
        data.setData('info', this.state);

        // this way of programmatically navigating is deprecated. it still works in the current react-router version but will become unavailable soon
        this.props.history.push('/choose');
    },

    render: function() {
        var disabled;
        var checkedNums = 0;
        for (var prop in this.state.customer) {
            if (this.state.customer.hasOwnProperty(prop)) {
                if (this.state.customer[prop].length > 0) {
                    checkedNums++;
                }
                else {
                    checkedNums--;
                }
            }
        }
        if (checkedNums === 7) {

            disabled = false;

        }
        else {

            disabled = true;

        }

        return (


            <div className='content-order'>
        <h1>Order MINI pizzas!</h1>
        <div>
            <p>Your name:</p>
            <input type='text' placeholder='Enter your firsName' ref='firstName' value={this.state.firstName} onChange={this.handleChange.bind(this, 'firstName')}/>
            <input type='text' placeholder='Enter your lastName' ref='lastName' value={this.state.lastName} onChange={this.handleChange.bind(this, 'lastName')}/>
        </div>
        <div>
          <p>Where we delivery your order:</p>
          <input type='text' placeholder='Num' ref='num-add' onChange={this.handleChange.bind(this, 'num')}/>
          
          <input type='text' placeholder='Street' ref='street-add' onChange={this.handleChange.bind(this, 'street')}/>
          
          <input type='text' placeholder='City' ref='city-add' onChange={this.handleChange.bind(this, 'city')}/>
          
          <input type='text' placeholder='Postal Code' ref='postalCode-add' onChange={this.handleChange.bind(this, 'postal')}/>
        </div>
        
        <div>
            <p>How can you contact you?</p>
            <input type='text' placeholder='Phone Number' ref='phone' onChange={this.handleChange.bind(this, 'phone')}/>
            
            <input type='text' placeholder='Email' ref='email' onChange={this.handleChange.bind(this, 'email')}/>
        </div>  
        
        <button className='order' onClick={this.continueOrder} type="button" disabled={disabled}>I'm ready to order!</button>
        
      </div>
        );
    }
});

module.exports = Order;