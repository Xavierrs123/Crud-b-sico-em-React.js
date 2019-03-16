import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddProduct from './AddProduct';
import ProductItem from './ProductItem';
import {button} from 'react-bootstrap';

const products = [
{
  name:'Mi 8 Pro',
  price: 'R$ 3100,00'
},
{
  name:'Mi Pad',
  price: 'R$ 1200,00'
},
{
  name:'Mi Amazfit Bip',
  price:'R$ 400,00'
},
{
  name:'Mi Drone',
  price:'R$ 3.500,00'
}
];

localStorage.setItem('products',JSON.stringify(products));




class App extends Component {
constructor(props){
  super(props);

  this.state = {
    products: JSON.parse(localStorage.getItem('products'))
  }; 
  this.onAdd = this.onAdd.bind(this);
  this.onDelete = this.onDelete.bind(this);
  this.onEditSubmit = this.onEditSubmit.bind(this);
}

  componentWillMount(){
    const products = this.getProducts(); 

    this.setState({products});
  }
  
  getProducts(){
    return this.state.products; 
  }
  
 onAdd(name, price ){
const products = this.getProducts();

products.push({
  name,
  price
});

this.setState({ products });
 }



  onDelete(name) {
   const products = this.getProducts();

   const filteredProducts = products.filter(product => {
     return product.name !== name;
   });
   
   this.setState({ products: filteredProducts });
  }
onEditSubmit(name,price , _originalName){
  let products = this.getProducts();

  products = products.map(product => {
    if(product.name === _originalName) {
      product.name = name;
      product.price = price;
    }
    return product;
  });
 this.setState({ products});
}

  render(){

    return(
      <div className="App">
     <h1>Gerenciador de Produtos</h1>
    <button bsStyle="primary">Check Out My gun </button>
     <AddProduct
         onAdd={this.onAdd}
     />
        {
          this.state.products.map(product => {
            return (
              <ProductItem 
                key={product.name}
                {...product}
                onDelete = {this.onDelete}
                onEditSubmit = {this.onEditSubmit}
              />
            );
          })
        }
         
         </div>


    ); 
      }
    }
   

export default App;
