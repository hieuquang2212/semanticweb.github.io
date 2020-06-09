import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Segment, Header, Grid, Item , Input, Icon, Button, Divider, Image, Confirm} from 'semantic-ui-react'
import {UserContext} from '../Context/UserContext'
import productList from '../../data/products.json'
const number_format = require("number_format-php");
export default class ShoppingCart extends Component {
    
    static contextType = UserContext
    constructor(props) {
        super(props)
        this.state  = {
            listProduct: [],
            open: false
        }
    }
    componentDidMount = () => {
        document.title = 'My Shop - Giỏ hàng'
        this.setState({
            listProduct: this.context.shoppingCart
        })
    }
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
    getItemQuantity = () => {
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
    getTotalPrice = () => {
        var total = 0
        this.context.shoppingCart.forEach(element =>{
            total += element.quantity*element.price
        })
        return total
    }
    increaseQuantity = (e, data, idx) => {
        this.context.increaseQuantity(idx)
    }
    decreaseQuantity = (e, data, idx) => {
        this.context.decreaseQuantity(idx)
    }

    handleChange = (e, index) => {
        console.log(index)
        var newList = this.state.listProduct.slice()
        newList[index].quantity =(e.target.value !== "") ?  parseInt(e.target.value) : 0
        this.setState({
            listProduct: newList
        })
        this.context.handleChangeInput(newList)
    }
    removeProduct = (e, data, idx) => {
        var newShoppingCart = this.context.shoppingCart.filter((item, index) => index !== idx)
          this.setState({
            listProduct: newShoppingCart
          })
        this.context.handleChangeInput(newShoppingCart)
    }
    render() {
        var totalPrice = 0
        const ship_fee = 100000
        return (
            <div style={{backgroundColor:'#ebebeb', padding: '30px'}}>
                <div style={{width: '90%', margin: 'auto'}}>
                    <Header as='h3'>Shopping Cart {this.context.shoppingCart.length !== 0 ? <span>({this.getItemQuantity()} Products)</span> : null}
                    </Header>
                    <Grid divided='vertically'>
                        <Grid.Row columns={2}>
                        <Grid.Column width='11'>
                        <Segment raised>
                                {this.state.listProduct.length !== 0 ? 
                                     <Item.Group>
                                        {this.state.listProduct.map((item, index) => 
                                                {
                                                    const product = this.getProductById(item.id)
                                                    return [
                                                        index !== 0 ? <Divider/> : null,
                                                        <Item key={index}>
                                                            <Item.Image size='tiny' src={`images/products/${product.image}`} />
                                                            <Item.Content>
                                                                <Grid divided='vertically'>
                                                                    <Grid.Row columns={2}>
                                                                        <Grid.Column width='9'>
                                                                            <Link to={`/product/${product.slug_name}`}>
                                                                                <Header as='h3' style={{margin: '0'}}>{product.name}</Header>
                                                                            </Link>
                                                                            <div className='meta'>
                                                                                Còn 25 sản phẩm
                                                                            </div>
                                                                        </Grid.Column>
                                                                        <Grid.Column width='7'>
                                                                                <Header as='span' style={{marginRight: '10px', color: '	#B22222'}}>{number_format(product.price,0,",",".")} đ</Header>
                                                                            <Input type='text'size='mini'>
                                                                                <Button content='-' style={{marginRight: '0', borderRadius: 'inherit'}} size='mini' onClick={(event, data) => this.decreaseQuantity(event, data, index)}  disabled={item.quantity === 0}/>
                                                                                <input style={{width: '50px', borderRadius: 'inherit', fontSize:'12px'}} value={item.quantity} onChange={e => this.handleChange(e,index)}/>
                                                                                <Button content='+' style={{borderRadius: 'inherit'}} size='mini' onClick={(event, data) => this.increaseQuantity(event, data, index)}/>
                                                                            </Input>
                                                                            <Button icon='remove' size='mini' style={{marginLeft: '15px',color: 'darkgrey',background: 'none'}} 
                                                                            onClick={this.show}/>
                                                                            <Confirm
                                                                            open={this.state.open}
                                                                            onCancel={this.handleCancel}
                                                                            onConfirm={(e,data) => this.handleConfirm(e, data, index)}
                                                                            header='Notice'
                                                                            size='mini'
                                                                            content='Are you sure to want to delete this item?'
                                                                            />
                                                                        </Grid.Column>
                                                                    </Grid.Row>
                                                                </Grid>
                                                            </Item.Content>
                                                        </Item>
                                                    ]
                                                }
                                            )}
                                        </Item.Group>
                                        :
                                        <div style={{width:'50%', margin: 'auto'}}>
                                                <Image src={`images/null-gio-hang.png`} style={{margin: 'auto'}}/>
                                                <Header as='h2' style={{textAlign: 'center'}}>Không có sản phẩm nào trong giỏ hàng</Header>
                                                <Link to='/'>
                                                    <Button color='green' size='large' style={{borderRadius: '0',margin: '10px auto',display: 'block'}} icon labelPosition='left'>
                                                        <Icon name='shop'/>Mua hàng ngay
                                                    </Button>
                                                </Link>
                                        </div>
                                }
                            </Segment>
                            {this.state.listProduct.length !== 0 ? 
                                <Link to='/'>
                                    <Button color='green' size='large' style={{borderRadius: '0',margin: '10px auto',display: 'block'}} icon  labelPosition='left'>
                                        <Icon name='chevron left' />Tiếp tục mua hàng
                                    </Button>
                                </Link> : null
                            }
                        </Grid.Column>
                        <Grid.Column width='5'>
                            <Segment raised>
                                <Header as='h4' color='grey'>Vị trí</Header>
                                <Header as='h5' color='grey' style={{marginTop: '0px'}}><Icon name='marker'/>Hồ Chí Minh, Quận 9, phường Hiệp Phú</Header>
                                <Divider/>
                                <Header as='h3'>Tạm tính: <div className='span' style={{display:'inline-block', float:'right'}}>{number_format(this.getTotalPrice(),0,",",".")} đ</div></Header>
                                <Header as='h3'>Phí vận chuyển: <div className='span' style={{display:'inline-block', float:'right'}}>100.000đ</div></Header>
                                <Input
                                    action={{
                                    color: 'teal',
                                    labelPosition: 'lright',
                                    icon: 'cart',
                                    content: 'Áp dụng',
                                    }}
                                    actionPosition='right'
                                    placeholder='Nhập mã khuyến mãi'
                                    defaultValue=''
                                    fluid
                                />
                                <Header as='h2'>Thành tiền: <div className='span' style={{display:'inline-block', float:'right',color: 'rgb(178, 34, 34)'}}>{number_format(this.getTotalPrice()+ship_fee,0,",",".")} đ</div></Header>
                                <div className='meta' style={{textAlign:'right',marginTop: '-5px'}}>(Đã bao gồm VAT nếu có)</div>
                                <Link to='/shipping'><Button color='orange' fluid style={{padding: '20px', margin: '10px auto'}}>Tiến hành đặt hàng</Button></Link>
                            </Segment>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        )
    }
}
