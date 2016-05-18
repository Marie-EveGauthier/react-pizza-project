var React = require('react');
var Link = require('react-router').Link;



var Order = React.createClass({
  getInitialState: function() {
    return {
      customer: {
        name : '',
        email: '',
        num: '',
        street: '',
        city: '',
        phone: '',
        postal: ''
      },
   
    disabled: true
    };
  },
   onChange: function(value, e) {
     var newCustomer = this.state.customer;
     newCustomer[value] = e.target.value
     this.setState({customer: newCustomer});
     this.checkData()
    
  },
  checkData: function(){
      var checkedNums = 0
      for(var prop in this.state.customer){
        if(this.state.customer.hasOwnProperty(prop)){
          console.log(this.state.customer[prop])
          if(this.state.customer[prop].length > 0){
            checkedNums++;
          } else {
            checkedNums--;
          }
        }
      }
      if(checkedNums === 7){
        this.setState({
        disabled: false
      })
      } else {
        this.setState({
          disabled: true
        })
      }
      
    },
  
  render: function() {
    
    
    return (
      <div>
        <h1>Order MINI pizzas!</h1>
        <input type='text' placeholder='Enter your name' ref='name' value={this.state.name} onChange={this.onChange.bind(this, 'name')}/>
        
        <div>
          <p>Your address:</p>
          <input type='text' placeholder='Num' ref='num-add' onChange={this.onChange.bind(this, 'num')}/>
          
          <input type='text' placeholder='Street' ref='street-add' onChange={this.onChange.bind(this, 'street')}/>
          
          <input type='text' placeholder='City' ref='city-add' onChange={this.onChange.bind(this, 'city')}/>
          
          <input type='text' placeholder='Postal Code' ref='postalCode-add' onChange={this.onChange.bind(this, 'postal')}/>
        </div>
        
        <input type='text' placeholder='Phone Number' ref='phone' onChange={this.onChange.bind(this, 'phone')}/>
        
        <input type='text' placeholder='Email' ref='email' onChange={this.onChange.bind(this, 'email')}/>
        
        <Link style={{pointerEvents: this.state.disabled ? 'none' : 'auto'}} to='/team'>CLICK ME</Link>
        
      </div>
    );
  }
});

module.exports = Order;