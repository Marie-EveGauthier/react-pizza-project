var React = require('react');
var Link = require('react-router').Link
var Pizza = require('./Pizza');

var data = require('../data.js');

var pizzas = [{
  photo: '../image/pizzas/tomato-mozzarella-egg.jpg',
  name: 'Egg',
  cheese: 'mozzarella',
  toppings: ['sauce', 'tomatoes', 'egg'],
  price: 7
}, {

  photo: '../image/pizzas/tomato-cheddar-broccoli.jpg',
  name: 'Broccoli',
  cheese: 'cheddar',
  toppings: ['sauce', 'tomatoes', 'broccolis'],
  price: 7
}, {
  photo: '../image/pizzas/spicy-sausage.jpg',
  name: 'Spicy-sausage',
  cheese: 'mozzarella',
  toppings: ['sauce', 'spicy sausages'],
  price: 10
}, {
  photo: '../image/pizzas/chicken-mozzarella-avocado.jpg',
  name: 'Chicken-avocado',
  cheese: 'mozzarella',
  toppings: ['sauce', 'chicken', 'avocados'],
  price: 11
}, {
  photo: '../image/pizzas/bakedPotato-bacon-cheddar-sourCream-chives.jpg',
  name: 'Potato-bacon',
  cheese: 'cheddar',
  toppings: ['sour cream', 'baked potatoes', 'bacon', 'chives'],
  price: 12
}];



var Choose = React.createClass({
  getInitialState: function() {
    var choice = data.getData('choice') || {};
    return {
      selectedPizzas: []
    };
  },

  handleChoice: function(ev) {
    var that = this;
    var pizzaChosen = {
      name: ev.target.name,
      checked: ev.target.checked,
      value: ev.target.value
    };


    if (this.state.selectedPizzas.length === 0) {
      data.setData('pizza', that.state.selectedPizzas.concat([pizzaChosen]))
      this.setState({
        selectedPizzas: this.state.selectedPizzas.concat([pizzaChosen])
      });

    }
    else {

      var index = this.state.selectedPizzas.findIndex(function(i) {

        if (i.name === pizzaChosen.name) {
          return i
        }
      })

      var oldState = this.state.selectedPizzas;
      if(index !== -1){
         
         oldState.splice(index, 1)
         data.setData('pizza', oldState)
         this.setState({
           selectedPizzas: oldState
         })
      } else {
        
        data.setData('pizza', that.state.selectedPizzas.concat([pizzaChosen]))
        this.setState({
          selectedPizzas: this.state.selectedPizzas.concat([pizzaChosen])
        })
      }

    }
  },

  render: function() {
console.log(this.state.selectedPizzas, "HERE IS PIZZA")


    var that = this;
    var lis = pizzas.map(function(pizza) {
      return (
        <Pizza onHandleChoice={that.handleChoice} photo={pizza.photo} name={pizza.name} description={[pizza.toppings.join(', '), pizza.cheese].join(', ')} price={pizza.price} />
      );
    });
    return (
      <div>
        <section className='pizzas-ours'>
          <h1>Choose your pizza</h1>
          <h2>Do you prefer our own selection...</h2>
          <ul>
            {lis}
          </ul>
        </section>  
        <section className='pizzas-custom'>
          <h2>..or do you custom yours?</h2>
          <Link to='/custom'><img src='/image/ingredients.jpg'/></Link>
        </section>
      </div>
    );
  }
});

module.exports = Choose;