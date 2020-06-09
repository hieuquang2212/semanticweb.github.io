import React, { Component } from 'react'
import {Card, Header, Label, Image,List, Button, Icon, Confirm} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {UserContext} from '../Context/UserContext'
const number_format = require("number_format-php");
export default class ProductCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open1 : false,
            quantity: 1
        }
    }
    static contextType = UserContext
    show = () => this.setState({ open1: true })
    handleConfirm = (e, data, id, price) => {
      this.setState({ 
         open1: false
      })
      this.context.addProductToCart({id: id, quantity: this.state.quantity, price: price})
    }
    handleCancel = () => this.setState({ open1: false })
    handleBuyClick = (e, data, id, price) => {
        this.context.addProductToCart({id: id, quantity: this.state.quantity, price: price})
        this.props.history.replace('/shoppingcart')
    }
    render() {
        const {detail} = this.props
        const { open1} = this.state
        return (
                <Card style={{'margin': '10px auto','width': '90%'}} link>
                    
                        <img src={`/images/products/${detail.image}`} wrapped ui={false} style={{width: '200px',height:'150px','margin': 'auto'}} />
                        <Card.Content>
                            <Card.Header><Link to={{ pathname: `/product/${detail.slug_name}`,state: {productName: detail.name }}}>{detail.name}</Link></Card.Header>
                        
                    <Card.Meta>
                        <span className='date'>{detail.brand}</span>
                    </Card.Meta>
                    <Card.Description>
                        <Label as='a' color='red' ribbon='right' style={{'position':'absolute','top':'5px','left':'280px'}}>
                            -{detail.discount_percent}%
                        </Label>
                        <List text>
                            <List.Item>CPU: {detail.detail.cpu}</List.Item>
                            <List.Item>VGA: {detail.detail.vga}</List.Item>
                            <List.Item>RAM: {detail.detail.ram}</List.Item>
                        </List>
                        <Header as='h3' textAlign='right'>{number_format(detail.price,0,",",".")} VND</Header>
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <Button color='green' style={{borderRadius:'initial'}} onClick={this.show}>
                        Add To Cart
                    </Button>
                    <Confirm
                        open={open1}
                        header='Add To Shopping Cart'
                        onCancel={this.handleCancel}
                        onConfirm={(e,data) => this.handleConfirm(e, data, detail.id, detail.price)}
                        content='Do you want to add this product to shopping cart ?'
                    />
                    <Button content='Buy Now' secondary style={{borderRadius:'initial', marginLeft: '10px'}}
                    onClick={(e,data) => this.handleBuyClick(e, data, detail.id, detail.price)}/>
                    </Card.Content>
                </Card>
        )
    }
}
