import React, { Component } from 'react';

class AddProduct extends Component {
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(event){
    event.preventDefault();

    this.props.onAdd(this.nameInput.value, this.priceInput.value);

    this.nameInput.value = '';
    this.priceInput.value = '';
    
    }
  
  render(){

    return(
              <form onSubmit={this.onSubmit}> 
            <h3>Adicionar Produto</h3>
              <input placeholder="Nome do Produto" ref={nameInput => this.nameInput = nameInput}/>
              <input placeholder="Preço" ref={priceInput => this.priceInput = priceInput}/>
              <button>Adicionar</button>
              <hr/>
              </form>
            );
          }
        }
         
export default AddProduct;