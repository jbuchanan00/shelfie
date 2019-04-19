import React, {Component} from "react"
import Product from "./Product"
import axios from "axios"
import Form from "./Form"

export default class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
          inventory: []
        }
        this.addProduct = this.addProduct.bind(this)
      }
      componentDidMount(){
        axios.get("/api/inventory").then((res) => 
        this.setState({
          inventory: res.data
        })
        ).catch(err => console.log("There was an error in didMount", err))
      }
      addProduct(newProduct){
        axios.post("/api/inventory", newProduct).then((res) => {
          this.setState({
            inventory: res.data
          })
        }).catch(err => console.log("There was an error in addProduct", err))
      }
      deleteProduct = (id) => {
        axios.delete(`/api/inventory/${id}`).then((res) => {
          this.setState({
            inventory: res.data
          })
        })
    }
    updateProduct = (id, updatedProduct) => {
      axios.put(`/api/inventory/${id}`, updatedProduct).then((res) => {
        this.setState({
          inventory: res.data
      })
      })
    }
    handleClick = (e) => {
        console.log(e.target.id)
        this.props.deleteProduct(e.target.id)
    }
    render(){
        
        return(
            <div className="body">
                {this.state.inventory.map((item) => {
           return(
             <div className="itemDisplay">
           <img src={item.image_url} alt={"Missing"}/>
              <h3 key={item.id}>Item: {item.name} <br/>${item.price}</h3>
              <button className="deleteButton" onClick={this.handleClick} id={this.state.inventory.id}>Delete</button>
              <Product id={this.state.inventory.id} name={this.state.inventory.name} price={this.state.inventory.price} image_url={this.state.inventory.image_url} updateProduct={this.state.inventory.updateProduct}/>
              </div>)
        })}
        <Form addProduct={this.addProduct}/>
            </div>
        )
    }
}