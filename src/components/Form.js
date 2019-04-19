import React, {Component} from "react"

export default class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            price: 0,
            image_url: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }
    //handlechange
    handleChange(e){
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    //post new product
    handleClickAdd = () => {
        let newProduct = this.state
        this.props.addProduct(newProduct)
        this.setState({
            name: "",
            price: 0,
            image_url: ""
        })
    }
    //clearinputs
    cancelButton = (e) => {
        this.setState({
            name: "",
            price: 0,
            image_url: ""
        })
    }
    render(){
        
        return(
            <div>
            <input className="addInput" name="name" onChange={this.handleChange}></input>
            <input className="addInput" name="price" onChange={this.handleChange}></input>
            <input className="addInput" name="image_url" onChange={this.handleChange}></input>
            <button onClick={this.handleClickAdd}>Add to Inventory</button>
            <button onClick={this.cancelButton}>Cancel</button>
            </div>
        )
    }

}