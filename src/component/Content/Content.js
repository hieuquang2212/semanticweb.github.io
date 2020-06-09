import React, { Component } from 'react'
import { Header, Card, Icon, Image, Label, List, Button, Segment, Divider }  from 'semantic-ui-react'
import Slider from "react-slick";
import './style.css'
import productData from '../../data/products.json'
import ProductCard from '../Product/ProductCard'
import categoryData from '../../data/categories.json'
import {Link} from 'react-router-dom'
const number_format = require("number_format-php");
export default class Content extends Component {
  componentWillMount = () => {
    document.title = 'My Shop - Cửa hàng mua bán laptop chính hãng'
    }
     getBrand = () => {
       var result = categoryData.filter(item => item.parent_id === 0)
       return result
     }
     getProductByType = (typeName) => {
       var result = productData.filter(item => item.type === typeName)
       return result
     }
    render() {
        var settings = {
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
        };
        var settings1 = {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true
        };
        const extra = (
          <a>
            <Icon name='user' />
            16 Friends
          </a>
        )
        const imageStyle = {
          opacity:0.75,
          width: '280px',
          height:'150px',
          marginRight:'50px',
        }
        const wrapperStyle = {
          display: 'inline-block'
        }
        const topDiscount = productData.filter(product => product.discount_percent  >= 5)
        console.log(topDiscount)
        return (
            <div style={{'width': '80%','margin':'auto'}}>
                  <Header as='h2'>
                      Top Discount Product
                      <a href='#' style={{float: 'right', fontSize: '17px', color: 'blue'}}>See more</a>
                  </Header>
                <Slider {...settings}>
                  {topDiscount.map(product => 
                      <ProductCard detail={product} {...this.props}/>
                  )}
                </Slider>
                <Header as='h2'>
                      Top Brand Best Seller
                </Header>
                <Divider/>
                <Image.Group size='small'style={{'margin':'auto','textAlign':'center'}} >
                    <div style={wrapperStyle}>
                      <Link to='/category/dell'>
                          <Image src={'images/inspiron-7000-2-in-1-2016-3936-002.webp'} style={imageStyle} />
                      </Link>
                      <Header as='h3' style={{'margin':'auto'}}>Dell</Header>
                      <Header as='h3' style={{'margin':'auto'}}>200 sản phẩm</Header>
                    </div>
                    <div style={wrapperStyle}>
                      <Link to='/category/asus'>
                        <Image src={'images/628674-meet-the-asus-zenbook-13.jpg'} style={imageStyle}/>
                      </Link>
                      <Header as='h3' style={{'margin':'auto'}}>Asus</Header>
                      <Header as='h3' style={{'margin':'auto'}}>200 sản phẩm</Header>
                    </div>
                    <div style={wrapperStyle}>
                      <Link to='/category/hp'>
                          <Image src={'images/a494f75fbeec29a982fa79b7352cc6f8.jpg'} style={imageStyle}/>
                      </Link>
                      <Header as='h3' style={{'margin':'auto'}}>HP</Header>
                      <Header as='h3' style={{'margin':'auto'}}>200 sản phẩm</Header>
                    </div>
                  </Image.Group>
                  <Segment clearing>
                    <Header as='h2' floated='right'>
                    <div style={{'width':'280px'}}>
                      <Slider {...settings1}>
                          {this.getBrand().map(item => 
                            <div>
                                <h3 style={{textAlign: 'center'}}><Link to={`/category/${item.slug}`}>{item.slug.toUpperCase()}</Link></h3>
                            </div>
                          )}
                    </Slider>
                    </div>
                    </Header>
                    <Header as='h2' floated='left'>
                      LAPTOP GAMING
                    </Header>
                  </Segment>
                 
                  <Slider {...settings}>
                    {this.getProductByType("Chơi game khủng").map((product,index) => {
                           if (index < 10)
                           return (
                            <ProductCard detail={product}/>
                           )
                     }   
                    )}
                 </Slider>
            </div>
        )
    }
}
