import React, { Component } from 'react'
import { Header, Breadcrumb, Divider, List, Icon, Grid, Image, Button, Segment, Tab, Menu, Card, 
        Table, Rating, Progress, Form, TextArea, Input, Comment,Pagination, Confirm
    } from 'semantic-ui-react'
import Slider from 'react-slick'
import {UserContext} from '../Context/UserContext'
import productList from '../../data/products.json'
const number_format = require("number_format-php");
export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false, 
            open1: false,
            quantity: 1
        }   
    }
    static contextType = UserContext
    componentWillMount = () => {
        document.title = this.props.location.state.name
    }
    getProductInfo = () => {
         var productName = this.props.location.pathname.split('/')[2]
         var productInfo = productList.filter(item => item.slug_name === productName)
         return productInfo[0]
    }
    
    handleOpen = () => this.setState({ open: true })
    handleClose = () => this.setState({ open: false })
    show = () => this.setState({ open1: true })
    handleConfirm = (e, data, id, price) => {
      this.setState({ 
         open1: false
      })
      this.context.addProductToCart({id: id, quantity: this.state.quantity, price: price})
    }
    handleCancel = () => this.setState({ open1: false })
    handleChangeQuantity = (e, data) => {
        this.setState({
            quantity: parseInt(data.value)
        })
    }
    handleBuyClick = (e, data, id, price) => {
        this.context.addProductToCart({id: id, quantity: this.state.quantity, price: price})
        this.props.history.replace('/shoppingcart')
    }
    render() {

        const { open } = this.state
        const image = this.props.location.state.image
          const settings = {
            customPaging: function(i) {
                return (
                  <Image src={`/images/products/${image}`}/>
                );
              },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
          const settings2 = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
          };
          const panes = [
            { 
                menuItem: (
                    <Menu.Item key='messages'>
                           <Header as='h4'>Sản phẩm tương tự</Header>
                    </Menu.Item>
                ), 
                render: () => 
                <Tab.Pane>
                    <Slider {...settings2}>
                        <div>
                            <Card style={{'margin': '10px auto','width':'90%'}} href='/product/detail'>
                                <Image src='/images/asus1.jpg' wrapped ui={false} style={{'width': '70%','margin': 'auto'}} />
                                <Card.Content>
                                <Card.Header>LAPTOP ASUS ROG STRIX G G531-VAL218T</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Asus</span>
                                </Card.Meta>
                                <Card.Description>
                                    <Header as='h3' textAlign='right'>10.000.000 VND</Header>
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                        <div>
                            <Card style={{'margin': '10px auto','width':'90%'}} href='/product/detail'>
                                <Image src='/images/asus1.jpg' wrapped ui={false} style={{'width': '70%','margin': 'auto'}} />
                                <Card.Content>
                                <Card.Header>LAPTOP ASUS ROG STRIX G G531-VAL218T</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Asus</span>
                                </Card.Meta>
                                <Card.Description>
                                    <Header as='h3' textAlign='right'>10.000.000 VND</Header>
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                        <div>
                            <Card style={{'margin': '10px auto','width':'90%'}} href='/product/detail'>
                                <Image src='/images/asus1.jpg' wrapped ui={false} style={{'width': '70%','margin': 'auto'}} />
                                <Card.Content>
                                <Card.Header>LAPTOP ASUS ROG STRIX G G531-VAL218T</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Asus</span>
                                </Card.Meta>
                                <Card.Description>
                                    <Header as='h3' textAlign='right'>10.000.000 VND</Header>
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                        <div>
                            <Card style={{'margin': '10px auto','width':'90%'}} href='/product/detail'>
                                <Image src='/images/asus1.jpg' wrapped ui={false} style={{'width': '70%','margin': 'auto'}} />
                                <Card.Content>
                                <Card.Header>LAPTOP ASUS ROG STRIX G G531-VAL218T</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Asus</span>
                                </Card.Meta>
                                <Card.Description>
                                    <Header as='h3' textAlign='right'>10.000.000 VND</Header>
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                        <div>
                            <Card style={{'margin': '10px auto','width':'90%'}} href='/product/detail'>
                                <Image src='/images/asus1.jpg' wrapped ui={false} style={{'width': '70%','margin': 'auto'}} />
                                <Card.Content>
                                <Card.Header>LAPTOP ASUS ROG STRIX G G531-VAL218T</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Asus</span>
                                </Card.Meta>
                                <Card.Description>
                                    <Header as='h3' textAlign='right'>10.000.000 VND</Header>
                                </Card.Description>
                                </Card.Content>
                            </Card>       
                        </div>
                        <div>
                            <Card style={{'margin': '10px auto','width':'90%'}} href='/product/detail'>
                                <Image src='/images/asus1.jpg' wrapped ui={false} style={{'width': '70%','margin': 'auto'}} />
                                <Card.Content>
                                <Card.Header>LAPTOP ASUS ROG STRIX G G531-VAL218T</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Asus</span>
                                </Card.Meta>
                                <Card.Description>
                                    <Header as='h3' textAlign='right'>10.000.000 VND</Header>
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                    </Slider>
                </Tab.Pane> 
            },
            { 
                menuItem: (
                    <Menu.Item key='messages'>
                        <Header as='h4'>Sản phẩm cùng hãng</Header>
                    </Menu.Item>
                ), 
                render: () => 
                <Tab.Pane>
                    <Slider {...settings2}>
                        <div>
                            <Card style={{'margin': '10px auto','width':'90%'}} href='/product/detail'>
                                <Image src='/images/asus1.jpg' wrapped ui={false} style={{'width': '70%','margin': 'auto'}} />
                                <Card.Content>
                                <Card.Header>LAPTOP ASUS ROG STRIX G G531-VAL218T</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Asus</span>
                                </Card.Meta>
                                <Card.Description>
                                    <Header as='h3' textAlign='right'>10.000.000 VND</Header>
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                        <div>
                            <Card style={{'margin': '10px auto','width':'90%'}} href='/product/detail'>
                                <Image src='/images/asus1.jpg' wrapped ui={false} style={{'width': '70%','margin': 'auto'}} />
                                <Card.Content>
                                <Card.Header>LAPTOP ASUS ROG STRIX G G531-VAL218T</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Asus</span>
                                </Card.Meta>
                                <Card.Description>
                                    <Header as='h3' textAlign='right'>10.000.000 VND</Header>
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                        <div>
                            <Card style={{'margin': '10px auto','width':'90%'}} href='/product/detail'>
                                <Image src='/images/asus1.jpg' wrapped ui={false} style={{'width': '70%','margin': 'auto'}} />
                                <Card.Content>
                                <Card.Header>LAPTOP ASUS ROG STRIX G G531-VAL218T</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Asus</span>
                                </Card.Meta>
                                <Card.Description>
                                    <Header as='h3' textAlign='right'>10.000.000 VND</Header>
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                        <div>
                            <Card style={{'margin': '10px auto','width':'90%'}} href='/product/detail'>
                                <Image src='/images/asus1.jpg' wrapped ui={false} style={{'width': '70%','margin': 'auto'}} />
                                <Card.Content>
                                <Card.Header>LAPTOP ASUS ROG STRIX G G531-VAL218T</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Asus</span>
                                </Card.Meta>
                                <Card.Description>
                                    <Header as='h3' textAlign='right'>10.000.000 VND</Header>
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                        <div>
                            <Card style={{'margin': '10px auto','width':'90%'}} href='/product/detail'>
                                <Image src='/images/asus1.jpg' wrapped ui={false} style={{'width': '70%','margin': 'auto'}} />
                                <Card.Content>
                                <Card.Header>LAPTOP ASUS ROG STRIX G G531-VAL218T</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Asus</span>
                                </Card.Meta>
                                <Card.Description>
                                    <Header as='h3' textAlign='right'>10.000.000 VND</Header>
                                </Card.Description>
                                </Card.Content>
                            </Card>       
                        </div>
                        <div>
                            <Card style={{'margin': '10px auto','width':'90%'}} href='/product/detail'>
                                <Image src='/images/asus1.jpg' wrapped ui={false} style={{'width': '70%','margin': 'auto'}} />
                                <Card.Content>
                                <Card.Header>LAPTOP ASUS ROG STRIX G G531-VAL218T</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Asus</span>
                                </Card.Meta>
                                <Card.Description>
                                    <Header as='h3' textAlign='right'>10.000.000 VND</Header>
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                    </Slider>
                </Tab.Pane> 
            },
          ]
          const panes1 = [
            {
              menuItem: (
                <Menu.Item key='messages'>
                    <Header as='h4'>Thông số kỹ thuật</Header>
                </Menu.Item>
              ),
              render: () => 
                <Tab.Pane attached={false}>
                    <Header as='h4'>Thông số kỹ thuật LAPTOP ASUS ROG STRIX G G531-VAL218T</Header>
                    <Table celled striped style={{width: '95%', margin: 'auto'}}>
                        <Table.Row warning>
                            <Table.Cell  colSpan='2'>
                                <Header as='h4'>Bộ vi xử lý (CPU)</Header>
                            </Table.Cell>
                            <Table.Cell  colSpan='2'>
                                <Header as='h4'>Kết nối (Network)  </Header>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell collapsing>
                                Tên bộ vi xử lý
                            </Table.Cell>
                            <Table.Cell>Intel® Core™ i7-9750H Processor </Table.Cell>
                            <Table.Cell>Wireless </Table.Cell>
                            <Table.Cell>Intel ® 802.11ac </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Tốc độ
                            </Table.Cell>
                            <Table.Cell>2.60GHz up to 4.50GHz</Table.Cell>
                            <Table.Cell>Lan </Table.Cell>
                            <Table.Cell>10/100/1000 Mbps </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Bộ nhớ đệm
                            </Table.Cell>
                            <Table.Cell>12MB Cache</Table.Cell>
                            <Table.Cell>Bluetooth</Table.Cell>
                            <Table.Cell>Bluetooth 5.0</Table.Cell>
                        </Table.Row>
                        <Table.Row warning>
                            <Table.Cell colSpan='2'>
                                <Header as='h4'>Bộ nhớ trong (RAM Laptop)</Header>
                            </Table.Cell>
                            <Table.Cell colSpan='2'>
                                <Header as='h4'>Hiển thị (Màn hình Laptop) </Header>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Dung lượng
                            </Table.Cell>
                            <Table.Cell>8GB DDR4 2666MHz</Table.Cell>
                            <Table.Cell>Màn hình</Table.Cell>
                            <Table.Cell>15.6” inch Full HD (1920x1080) IPS-level panel 120Hz, 100% sRGB</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            Số khe cắm
                            </Table.Cell>
                            <Table.Cell>2 slot Ram, Max 32GB</Table.Cell>
                            <Table.Cell>Độ phân giải</Table.Cell>
                            <Table.Cell>Full HD (1920x1080)</Table.Cell>
                        </Table.Row>
                        <Table.Row warning>
                            <Table.Cell colSpan='2'>
                                <Header as='h4'>Ổ cứng (HDD Laptop) </Header>
                            </Table.Cell>
                            <Table.Cell colSpan='2'>
                                <Header as='h4'>Đồ Họa (VGA)  </Header>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            Dung lượng
                            </Table.Cell>
                            <Table.Cell>512GB SSD M.2 PCIe3x4 + 1 slot HDD</Table.Cell>
                            <Table.Cell>Bộ xử lý</Table.Cell>
                            <Table.Cell>NVIDIA GeForce RTX 2060 6GB GDDR6 + Intel UHD Graphics 630</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            Số khe cắm
                            </Table.Cell>
                            <Table.Cell>2 slot Ram, Max 32GB</Table.Cell>
                            <Table.Cell>Công nghệ</Table.Cell>
                            <Table.Cell>Tự động chuyển card</Table.Cell>
                        </Table.Row>
                        <Table.Row warning>
                            <Table.Cell colSpan='2'>
                                <Header as='h4'>Hiển thị (Màn hình Laptop) </Header>
                            </Table.Cell>
                            <Table.Cell colSpan='2'>
                                <Header as='h4'>Hệ điều hành (Operating System)  </Header>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            Màn hình
                            </Table.Cell>
                            <Table.Cell>15.6” inch Full HD (1920x1080) IPS-level panel 120Hz, 100% sRGB</Table.Cell>
                            <Table.Cell>Hệ điều hành đi kèm</Table.Cell>
                            <Table.Cell>Windows 10 Home Single Language 64-bit</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            Độ phân giải
                            </Table.Cell>
                            <Table.Cell>Full HD (1920x1080)</Table.Cell>
                            <Table.Cell>Hệ điều hành tương thích</Table.Cell>
                            <Table.Cell>Windows 10</Table.Cell>
                        </Table.Row>
                    </Table>
                </Tab.Pane>,
            },
            {
              menuItem: (
                <Menu.Item key='messages'>
                    <Header as='h4'>Đánh giá và nhận xét</Header>
                </Menu.Item>
              ),
              render: () => 
                <Tab.Pane attached={false}>
                    <Header as='h3'>Đánh giá DELL INSPIRON 3280B</Header>
                    <Grid divided='vertically'>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Header as='h1' style={{textAlign: 'center'}}>4.9 
                                    <Header as='h3' style={{color: '#8c8c89',display:'inline'}}> /5</Header>
                                </Header>
                                <Rating maxRating={5} defaultRating={5} icon='star' size='huge' style={{marginLeft: '80px'}} color='yellow'/>
                                <Header as='h5' style={{marginTop: '10px', textAlign: 'center'}} color='grey'>7 đánh giá và nhận xét </Header>
                            </Grid.Column>
                            <Grid.Column width={4} style={{marginBottom: '0px'}}>
                                <List>
                                    <List.Item>
                                        <Rating maxRating={5} defaultRating={5} icon='star' size='large' disabled/>
                                        <Progress percent={90} size='small' style={{marginBottom: '0px', width:'30%', display:'inline-block', marginLeft: '10px'}} color='yellow'/>
                                        <Header as='h4' style={{marginTop: '0px',  display:'inline-block', marginLeft: '10px'}}>6</Header>
                                    </List.Item>
                                    <List.Item>
                                        <Rating maxRating={5} defaultRating={4} icon='star' size='large' disabled/>
                                        <Progress percent={80} size='small' style={{marginBottom: '0px', width:'30%', display:'inline-block', marginLeft: '10px'}} color='yellow'/>
                                        <Header as='h4' style={{marginTop: '0px',  display:'inline-block', marginLeft: '10px'}}>6</Header>
                                    </List.Item>
                                    <List.Item>
                                        <Rating maxRating={5} defaultRating={3} icon='star' size='large' disabled />
                                        <Progress percent={70} size='small' style={{marginBottom: '0px', width:'30%', display:'inline-block', marginLeft: '10px'}} color='yellow'/>
                                        <Header as='h4' style={{marginTop: '0px',  display:'inline-block', marginLeft: '10px'}}>6</Header>
                                    </List.Item>
                                    <List.Item>
                                        <Rating maxRating={5} defaultRating={2} icon='star' size='large' disabled />
                                        <Progress percent={30} size='small' style={{marginBottom: '0px', width:'30%', display:'inline-block', marginLeft: '10px'}} color='yellow'/>
                                        <Header as='h4' style={{marginTop: '0px',  display:'inline-block', marginLeft: '10px'}}>6</Header>
                                    </List.Item>
                                    <List.Item>
                                        <Rating maxRating={5} defaultRating={1} icon='star' size='large' disabled/>
                                        <Progress percent={10} size='small' style={{marginBottom: '0px', width:'30%', display:'inline-block', marginLeft: '10px'}} color='yellow'/>
                                        <Header as='h4' style={{marginTop: '0px',  display:'inline-block', marginLeft: '10px'}}>6</Header>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                    <Header as='h4'>Đánh giá sản phẩm này </Header>
                                    <Form>
                                        <TextArea placeholder='Tell us more' style={{marginTop: '10px'}} />
                                        <Header as='h4'>Đánh giá: 
                                            <Rating maxRating={5} defaultRating={5} icon='star' size='large' />
                                        </Header>
                                        <Header as='h4'>Họ và tên: 
                                            <Input  placeholder='Name' size='small' style={{width: '500px'}} />
                                        </Header>
                                        <Header as='h4'>Email: 
                                            <Input  placeholder='Email' size='small' style={{width: '500px', marginLeft: '20px'}} />
                                        </Header>
                                        <Button color='red'>Gửi đánh giá của bạn</Button>
                                    </Form>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Comment.Group>
                        <Header as='h3'>
                        Comments
                        </Header>
                        <Divider/>
                        <Comment>
                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                        <Comment.Content>
                            <Comment.Author as='a'>Matt</Comment.Author>
                            <Comment.Metadata>
                            <div>Today at 5:42PM</div>
                            </Comment.Metadata>
                            <Comment.Text>How artistic!</Comment.Text>
                            <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                        </Comment>

                        <Comment>
                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                        <Comment.Content>
                            <Comment.Author as='a'>Elliot Fu</Comment.Author>
                            <Comment.Metadata>
                            <div>Yesterday at 12:30AM</div>
                            </Comment.Metadata>
                            <Comment.Text>
                            <p>This has been very useful for my research. Thanks as well!</p>
                            </Comment.Text>
                            <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                        <Comment.Group>
                            <Comment>
                            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                            <Comment.Content>
                                <Comment.Author as='a'>Jenny Hess</Comment.Author>
                                <Comment.Metadata>
                                <div>Just now</div>
                                </Comment.Metadata>
                                <Comment.Text>Elliot you are always so right :)</Comment.Text>
                                <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                                </Comment.Actions>
                            </Comment.Content>
                            </Comment>
                        </Comment.Group>
                        </Comment>

                        <Comment>
                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                        <Comment.Content>
                            <Comment.Author as='a'>Joe Henderson</Comment.Author>
                            <Comment.Metadata>
                            <div>5 days ago</div>
                            </Comment.Metadata>
                            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                            <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                        </Comment>

                        <Form reply>
                        <Form.TextArea />
                        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                        </Form>
                    </Comment.Group>
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={10}
                        style={{}}
                    />
                </Tab.Pane>,
            },
            {
                menuItem: (
                  <Menu.Item key='messages'>
                      <Header as='h4'>Hình ảnh</Header>
                  </Menu.Item>
                ),
                render: () => 
                <Tab.Pane attached={false}>
                    <Image.Group size='small'>
                        <Image src={'/images/asus1.jpg'} />
                        <Image src={'/images/asus2.jpg'} />
                        <Image src={'/images/asus3.jpg'} />
                        <Image src={'/images/asus4.jpg'} />
                    </Image.Group>
                </Tab.Pane>,
              },
          ]
          const { open1, result } = this.state
          const productInfo = this.getProductInfo()
          console.log(productInfo)
        return (
            <div style={{width: '80%', margin: 'auto'}}>
                <Divider />
                <Header as='h2'>{productInfo.name} ({productInfo.discription})</Header>
                <List horizontal>
                    <List.Item>
                        <Icon disabled name='star' style={{'margin-bottom':'7px'}} /> 
                        <Icon disabled name='star' style={{'margin-bottom':'7px'}} />
                        <Icon disabled name='star' style={{'margin-bottom':'7px'}}/>
                        <Icon disabled name='star' style={{'margin-bottom':'7px'}}/>
                        <Icon disabled name='star' style={{'margin-bottom':'7px'}}/>
                        <h5 style={{'display':'inline'}}>  (0 lượt đánh giá)</h5>
                    </List.Item>
                    <List.Item>Tình trạng: Còn hàng</List.Item>
                    <List.Item>Bảo hành: 12 tháng</List.Item>
                    <List.Item>Hãng: {productInfo.brand.toUpperCase()}</List.Item>
                </List>
                <Grid divided='vertically'>
                    <Grid.Row columns={3}>
                        <Grid.Column width={6}>
                            <Slider {...settings}>
                                <div>
                                    <Image src={`/images/products/${image}`}  style={{margin: 'auto',padding: '30px'}}/>
                                </div>
                                <div>
                                    <Image src={`/images/products/${image}`} style={{margin: 'auto',padding: '30px'}}/>
                                </div>
                                <div>
                                    <Image src={`/images/products/${image}`} style={{margin: 'auto',padding: '30px'}}/>
                                </div>
                                <div>
                                    <Image src={`/images/products/${image}`} style={{margin: 'auto',padding: '30px'}}/>
                                </div>
                            </Slider>
                            <Grid divided='vertically' style={{'margin-top':'50px'}}>
                                <Grid.Row columns={3}>
                                    <Grid.Column width={8}>
                                        <List as='ul'>
                                            <List.Item as='li'>CPU: Ryzen 7 3750H</List.Item>
                                            <List.Item as='li'>Ổ cứng: 512GB SSD M.2 PCIE</List.Item>
                                            <List.Item as='li'>Màn hình: 17.3" FHD</List.Item>
                                        </List>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <List as='ul'>
                                            <List.Item as='li'>RAM: 8GB DDR4 2666MHz</List.Item>
                                            <List.Item as='li'>VGA: NVIDIA GTX 1650 4GB</List.Item>
                                            <List.Item as='li'>OS: Windows 10 Home SL 64-bit</List.Item>
                                        </List>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column width={5}  style={{'margin-top':'50px','margin-left':'50px'}}>
                            <Header as='h3'>Giá bán: 
                                <Header as='h2' style={{'display':'inline', 'color': 'red'}}> {number_format(productInfo.price,0,',','.')} đ</Header>
                            </Header>
                            <Header as='h4' inverted color='white'  style={{'background-color':'red','padding': '15px'}}>
                                Khuyến mãi - Quà Tặng
                            </Header>
                            <List bulleted>
                                <List.Item>Túi xách</List.Item>
                                <List.Item>Chuột không dây Newmen F266 trị giá 185.000 đ</List.Item>
                                <List.Item>Bộ vệ sinh máy tính</List.Item>
                                <List.Item>Lót chuột</List.Item>
                            </List>
                            <Header as='h3'>Số lượng: <Input type='number' name='quantity' value={this.state.quantity} onChange={this.handleChangeQuantity} min='1' max='1000'/> </Header>
                            <Button color='orange' fluid style={{padding: '20px 0'}} 
                                onClick={(e,data) => this.handleBuyClick(e, data, productInfo.id, productInfo.price)}>
                                Buy now
                            </Button>
                            <Button color='red' style={{marginTop: '10px'}} onClick={this.show}>
                                <Icon name='shopping cart'/>Add To Shopping Cart
                            </Button>
                            <Confirm
                                open={open1}
                                header='Add To Shopping Cart'
                                onCancel={this.handleCancel}
                                onConfirm={(e,data) => this.handleConfirm(e, data, productInfo.id, productInfo.price)}
                                content='Do you want to add this product to shopping cart ?'
                            />
                            <Button color='green' style={{marginTop: '10px'}}><Icon name='heart outline'/> Thêm vào mục yêu thích</Button>
                            <Header as='h3'>
                                 GỌI NGAY <span style={{color: 'red'}}>02363 888 000</span> ĐỂ GIỮ HÀNG
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header as='h3'>Trợ giúp</Header>
                            <List as='ul'>
                                <List.Item as='li'>Hướng dẫn mua hàng nhanh chóng</List.Item>
                                <List.Item as='li'>Chính sách bảo hành tại Phi Long</List.Item>
                                <List.Item as='li'>Chính sách đổi, trả lại hàng</List.Item>
                            </List>
                            <Header as='h3'>Điện thoại tư vấn - Đặt hàng</Header>
                            <List as='ul'>
                                <List.Item as='li'>Tố Nga - 0911 300 307</List.Item>
                            </List>
                            <Header as='h3'>Địa chỉ mua hàng:</Header>
                            <List as='ul'>
                                <List.Item as='li'>52 Nguyễn Văn Linh, Hải Châu, TP. Đà Nẵng</List.Item>
                                <List.Item as='li'>48 Hùng Vương, Phú Hội, TP. Huế</List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Tab panes={panes} />
                <Tab menu={{ pointing: true, color: 'red' }} panes={panes1} style={{marginTop: '30px'}}/>
            </div>
        )
    }
}
