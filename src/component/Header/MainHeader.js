import React, { Component } from 'react'
import { Header, Input, Icon, Label, Dropdown, Item, Button, Confirm} from 'semantic-ui-react'
import {UserContext} from '../Context/UserContext'
import {Link} from 'react-router-dom'
import productList from '../../data/products.json'
const number_format = require("number_format-php");

export default class MainHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            searchContent: ''
        }
    }
    static contextType = UserContext
    show = () => this.setState({ open: true })
    handleConfirm = (e, data, idx) => {
        var newShoppingCart = this.context.shoppingCart.filter((item, index) => index !== idx)
        this.setState({
          listProduct: newShoppingCart,
          open: false
        })
        this.context.handleChangeInput(newShoppingCart)
    }
  handleCancel = () => this.setState({ open: false })
    getItem = () => {
        var sum = 0
        this.context.shoppingCart.forEach(element =>{
            sum += element.quantity
        })
        return sum
    }
    getProductById = (id) => {
        var result = productList.filter(item => item.id  === id)
        return result[0]
    }
    handleClick = (e)=> {
        console.log('Hello world')
    }
    handleInputChange = (e) => {
        this.setState({
            searchContent: e.target.value
        })
    }
    getSlugFromString = (st) => {
        while (st.indexOf(' ') > 0) st = st.replace(' ','+')
        return st
    }
    render() {
        const dropdownStyle = {
            display: 'inline-block', 
            marginLeft: '140px',
            marginTop:'30px'
        }
        return (
            <div>
            <Header as='h2' style={{marginTop: '30px', display: 'inline-block'}}>
                <Link to='/' style={{marginLeft: '50px'}}><Icon name='laptop' style={{display:'inline-block',marginLeft:'50px'}} size='large'/> My Shop</Link>
                {/*<Link to={'/shoppingcart'} style={{marginLeft:'300px'}}><Icon name='shop' style={{'display':'inline-block'}}/></Link>
                <Label color='red' style={{position: 'absolute', right: '545px'}}>
                    {this.getItem()}
        </Label>*/}
            </Header>
            <Input type='text' placeholder='Search...' action style={{marginLeft: '200px'}} size='large'>
                <input onChange={this.handleInputChange} />
                <Button>
                    <Link to={{ pathname: `/search/${this.getSlugFromString(this.state.searchContent)}`, state : {searchContent: this.state.searchContent}}}>
                    <Icon name='search'/>
                    </Link>
                </Button>
            </Input>
            <Dropdown 
                text='Giỏ hàng'
                icon='shop'
                floating
                labeled
                button
                className='icon'
                size='mini'
                style={dropdownStyle}
                pointing='top right'
                >
                    {this.context.shoppingCart.length !== 0 ?
                        <Dropdown.Menu style={{width: '500px', padding: '10px'}}>
                            <Item.Group>
                        {this.context.shoppingCart.map((item, index) =>
                            {
                                const product = this.getProductById(item.id)
                                return (
                                    <Item key={index}>
                                        <Item.Image size='tiny' src={`/images/products/${product.image}`} />
                                        <Item.Content verticalAlign='middle'>
                                            <div style={{display: 'inline-block'}}>
                                                <Link to={`/product/${product.slug_name}`}><p style={{color: '#696969'}}>{product.name}</p></Link>
                                                <p style={{color: '#C0C0C0'}}>Quantity: {item.quantity}</p>
                                                <p style={{color: '#B22222'}}>{number_format(product.price,0,",",".")} đ</p>
                                            </div>
                                            <Button icon='remove' style={{display: 'inline-block', float: 'right',color: 'darkgrey',background: 'none'}}
                                                onClick={this.show}
                                            />
                                            <Confirm
                                            open={this.state.open}
                                            onCancel={this.handleCancel}
                                            onConfirm={(e,data) => this.handleConfirm(e, data, index)}
                                            header='Notice'
                                            size='mini'
                                            content='Are you sure to want to delete this item?'
                                             />
                                        </Item.Content>
                                    </Item>
                                )
                            }
                        )}
                            </Item.Group>
                            <Link to='/shoppingcart'>
                                <Button content='PROCEED TO CHECKOUT' icon='chevron right' labelPosition='right' fluid color='orange' style={{padding: '15px 0'}}
                                />
                            </Link>
                        </Dropdown.Menu>: 
                        <Dropdown.Menu>
                            <Header as='h5'>Không có sản phẩm nào</Header>
                        </Dropdown.Menu>
                    }
                
            </Dropdown>
            <Label color='red' style={{position: 'absolute', right: '510px', top: '60px',borderRadius: '50%'}}>
                    {this.getItem()}
            </Label>
            </div>
        )
    }
}
