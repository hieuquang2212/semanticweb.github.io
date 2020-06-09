import React, { Component } from 'react'
import { Grid, Image, Menu, Dropdown} from 'semantic-ui-react'
import Slider from "react-slick";
import LeftBar from './LeftBar'
import { Link} from 'react-router-dom'
import categories from '../../data/categories.json'
export default class Navigation extends Component {
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    clickCategory = (text) => {
        console.log('clickCategory',text)
    }
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        const { activeItem } = this.state
        return (
            <Grid divided='vertically' style={{marginTop: '10px'}}>
                <Grid.Row columns={2}>
                    <Grid.Column width='3'>
                        {/*<Menu pointing secondary vertical style={{backgroundColor:'#e5e5e5', marginLeft: '0px', width:'100%'}}>
                                {categories.map(item => 
                                            <Dropdown text={<Link to={`/category/${item.slug}`}>{item.name}</Link>} pointing='left' simple item>
                                                <Dropdown.Menu style={{top: '0', display: 'block'}}>
                                                    {item.child.map(child => 
                                                      <Link to={`/category/${item.slug}/${child.slug}`}>
                                                        <Dropdown.Item>{child.name}</Dropdown.Item>
                                                        </Link>
                                                    )}
                                                </Dropdown.Menu>    
                                        </Dropdown>

                                                    )} 
                            {this.getCategoryById(categories,0)}
                            
                        </Menu>*/}
                        <LeftBar/>
                    </Grid.Column>
                    <Grid.Column width='13'>
                        <Slider {...settings} style={{width:'96%', height: '100%'}}>
                            <div>
                                <h3><Image src='/images/banner.png'/></h3>
                            </div>
                            <div>
                                <h3><Image src='/images/banner2.jpg'/></h3>
                            </div>
                            <div>
                                <h3><Image src='/images/banner3.jpg'/></h3>
                            </div>
                            <div>
                                <h3><Image src='/images/banner.png'/></h3>
                            </div>
                            <div>
                                <h3><Image src='/images/banner.png'/></h3>
                            </div>
                            <div>
                                <h3><Image src='/images/banner.png'/></h3>
                            </div>
                        </Slider>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
