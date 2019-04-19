import React, {Component} from "react"

export default class Product extends Component{
    constructor(props){
        super(props)
        this.state ={
            name: this.props.name,
            price: this.props.price,
            image_url: this.props.image_url
        }
    }
    handleClick = (e) => {
        console.log(e.target.id)
        // this.props.updateProduct()
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    handleSave = (e) => {
        const {id} = e.target
        const update = this.state
        this.props.updateProduct(id, update)
    }
    render(){
        console.log(this.state.name)
        return(
            <div>
                <button onClick={this.handleClick} id={this.props.id}>Edit</button>
                <input onChange={this.handleChange} name="name" value={this.state.name}></input>
                <input onChange={this.handleChange} name="price" value={this.state.price}></input>
                <input onChange={this.handleChange} name="image_url" value={this.state.image_url}></input>
                <button onClick={this.handleSave} id={this.props.id}>Save</button>
            </div>
        )
    }
}