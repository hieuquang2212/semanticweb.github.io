import React, { Component } from 'react'
import {Header, Image, Grid, Card, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import productList from '../../data/products.json'
const number_format = require("number_format-php");
export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numOfPages: 8
        }
    } 
    componentWillReceiveProps = () => {
        this.setState({
            numOfPages: 8
        })
    }
    componentWillMount = () => {
        document.title = `Tim kiem ${this.props.location.state.searchContent}`
    }
    getProductList = () => {
        var data = productList
        var searchList = this.props.location.state.searchContent.split(' ')
        console.log(searchList)
        searchList.forEach(item => {
                data = data.filter(item1 => item1.name.toLowerCase().indexOf(item.toLowerCase()) > 0)
                console.log(data)
            }
        )
        console.log(data)
        return data
    }
    loadMoreProduct = () => {
        if (this.state.numOfPages + 8 <= this.getProductList().length) {
            this.setState({
                numOfPages: this.state.numOfPages + 8
            })
        } else {
            this.setState({
                numOfPages: this.getProductList().length
            })
        }
    }
    render() {
        const productList = this.getProductList()
        return (
            <div style={{width: '80%', margin: '20px auto', padding: '30px'}}>
                <Header as='h1'>TÌM KIẾM : {this.props.location.state.searchContent}</Header>
                {
                    productList.length === 0 ? <Header>Không tìm thấy sản phẩm nào</Header>:
                    [ 
                        <Header>Tìm thấy {productList.length} sản phẩm</Header>,
                        <Grid columns={4}>
                        <Grid.Row>
                            {productList.map((item, index) => {
                                if (index < this.state.numOfPages)
                                return (
                                    <Grid.Column>
                                        <Card style={{width: '100%', marginBottom: '50px', height: '380px'}} href='#'>
                                            <Image src={`/images/products/${item.image}`} wrapped ui={false} style={{padding: '20px',background: 'none'}} />
                                            <Card.Content>
                                            <Card.Header>
                                                <Link to={{ pathname: `/product/${item.slug_name}`,state: item}}>{item.name}</Link>
                                            </Card.Header>
                                            <Card.Meta>
                                                <span className='date'>{item.brand}</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                {number_format(item.price,0,',','.')} VND
                                            </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    </Grid.Column>  
                                )
                            })}
                        </Grid.Row>
                    </Grid>,
                    <div>{this.state.numOfPages !== productList.length ? <Button style={{borderRadius: 'inherit', marginLeft: '45%'}} onClick={this.loadMoreProduct}>Xem thêm</Button> : null}</div>
                    ]
                }
            </div>
        )
    }
}
