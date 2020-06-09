import React, { Component } from 'react'
import { Grid, Image, Segment, Header, Card, Label, Item, Divider, Button, Icon, Input} from 'semantic-ui-react'
export default class Shipping extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#f9fafb', padding: '30px'}}>
                <div style={{width: '80%', margin: 'auto'}}>
                    <Grid divided='vertically'>
                        <Grid.Row columns={2}>
                            <Grid.Column width='10'>
                                <Segment>
                                    <Grid divided='vertically'>
                                        <Grid.Row columns={3} style={{paddingBottom: '0', backgroundColor: '#fafafa'}}>
                                            <Grid.Column width='10'>
                                                <Header as='h5'>1 MẶT HÀNG</Header>
                                            </Grid.Column>
                                            <Grid.Column width='3'>
                                                <Header as='h5'>ĐƠN GIÁ</Header>
                                            </Grid.Column>
                                            <Grid.Column width='3'>
                                                <Header as='h5'>SỐ LƯỢNG</Header>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                                <Segment>
                                    <Header as='h5' style={{float: 'right'}}>
                                            Giao bởi BÙI VĂN BẮC
                                    </Header>
                                    <Header as='h5'>
                                            Chọn phương thức giao hàng
                                    </Header>
                                    <Card.Group>
                                    <Card style={{width:'30%',display: 'inline-block'}} as='button'>
                                        <Card.Content header='đ11,000' />
                                        <Card.Content description='Giao hàng tiêu chuẩn'/>
                                        <Card.Meta content='Dự kiến: 16-23 Nov'/>
                                    </Card>
                                    <Card style={{width:'30%',display: 'inline-block'}} as='button'>
                                        <Card.Content header='đ50.000' />
                                        <Card.Content description='Giao hàng nhanh'/>
                                        <Card.Meta content='Dự kiến: 16-17 Nov'/>
                                    </Card>
                                    </Card.Group>
                                    <Item.Group>
                                           
                                        <Item>
                                            <Item.Image size='tiny' src='%PUBLIC_URL%/images/asus2.jpg' />
                                            <Item.Content>
                                                <Grid divided='vertically'>
                                                    <Grid.Row columns={2}>
                                                        <Grid.Column width='9'>
                                                            <Header as='h3' style={{margin: '0'}}>LAPTOP ACER NITRO 5 AN515-51-59SF</Header>
                                                            <div className='meta'>
                                                                Hãng: Acer, phụ kiện đi kèm: Tai nghe, Sạc, Chuột
                                                            </div>
                                                        </Grid.Column>
                                                        <Grid.Column width='4'>
                                                            <Header as='span' style={{marginRight: '10px'}} color='orange'>19.950.00đ</Header>
                                                            <div className='meta'>
                                                                Đơn vị: Sản phẩm
                                                            </div>
                                                        </Grid.Column>
                                                        <Grid.Column width='3'>
                                                            <Header as='span'>Qty:1</Header>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </Item.Content>
                                        </Item>
                                        <Divider/>
                                        <Item>
                                            <Item.Image size='tiny' src='%PUBLIC_URL%/images/asus2.jpg' />
                                            <Item.Content>
                                                <Grid divided='vertically'>
                                                    <Grid.Row columns={2}>
                                                        <Grid.Column width='9'>
                                                            <Header as='h3' style={{margin: '0'}}>LAPTOP ACER NITRO 5 AN515-51-59SF</Header>
                                                            <div className='meta'>
                                                                Hãng: Acer, phụ kiện đi kèm: Tai nghe, Sạc, Chuột
                                                            </div>
                                                        </Grid.Column>
                                                        <Grid.Column width='4'>
                                                            <Header as='span' style={{marginRight: '10px'}} color='orange'>19.950.00đ</Header>
                                                            <div className='meta'>
                                                                Đơn vị: Sản phẩm
                                                            </div>
                                                        </Grid.Column>
                                                        <Grid.Column width='3'>
                                                            <Header as='span'>Qty:1</Header>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </Item.Content>
                                        </Item>
                                    </Item.Group>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width='6'>
                                <Segment raised>
                                    <Button color='orange' fluid style={{padding: '15px 0'}}>PROCEED TO PAYMENT</Button>
                                    <Header as='h3' style={{marginTop: '15px'}}>Giao hàng và đơn hàng</Header>
                                    <div>
                                        <Header as='h5' style={{marginTop: '15px',display:'inline-block'}}>
                                            <Icon name='map marker alternate' color='teal' size='mini'/>
                                            Ngô Quang Hiếu
                                        </Header>
                                        <Header style={{display:'inline-block',float:'right',marginTop: '12.5px'}} as='a' href='#' color='teal'>
                                            Edit
                                        </Header>
                                    </div>
                                    <div className='meta' style={{fontSize: '16px'}}>
                                        <Label color='teal' style={{margin: '10px'}}>
                                            <Icon name='home' /> Nhà riêng
                                        </Label>
                                        88 Trương Văn Thành, Phường Hiệp Phú, Quận 9, Hồ Chí Minh
                                    </div>
                                    <div>
                                        <Header as='h5' style={{marginTop: '15px',display:'inline-block'}}>
                                            <Icon name='file' color='teal' size='mini'/>
                                            Địa chỉ trên hóa đơn
                                        </Header>
                                        <Header as='h6' style={{display:'inline-block',float:'right',marginTop: '12.5px'}} as='a' href='#' color='teal'>
                                            Edit
                                        </Header>
                                    </div>
                                    <div>
                                        <Header as='h5' style={{marginTop: '15px',display:'inline-block'}}>
                                            <Icon name='phone' color='teal' size='mini'/>
                                            0776447291
                                        </Header>
                                        <Header as='h6' style={{display:'inline-block',float:'right',marginTop: '12.5px'}} as='a' href='#' color='teal'>
                                            Edit
                                        </Header>
                                    </div>
                                    <div>
                                        <Header as='h5' style={{marginTop: '15px',display:'inline-block'}}>
                                            <Icon name='mail' color='teal' size='mini'/>
                                            hieuquang2212@gmail.com
                                        </Header>
                                        <Header as='h6' style={{display:'inline-block',float:'right',marginTop: '12.5px'}} as='a' href='#' color='teal'>
                                            Edit
                                        </Header>
                                    </div>
                                    <Header as='h3' style={{marginTop: '15px'}}>Tóm tắt đơn hàng</Header>
                                    <Divider/>
                                    <Header as='h4' color='grey'>
                                        Tổng phụ (2 sản phẩm)
                                        <Header as='span' style={{float:'right'}}>36,590,000đ</Header>
                                    </Header>
                                    <Header as='h4' color='grey'>
                                        Phí vận chuyển
                                        <Header as='span' style={{float:'right'}}>11,000đ</Header>
                                    </Header>
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
                                    <Header as='h3'>
                                        Tổng cộng
                                        <Header as='span' style={{float:'right'}} color='orange'>35,000,000đ</Header>
                                    </Header>
                                    <div className='meta' style={{textAlign:'right',marginTop: '-5px'}}>(Đã bao gồm VAT nếu có)</div>
                                    <Button fluid color='orange' style={{marginTop:'10px', padding: '15px 0'}}>Đặt hàng</Button>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        )
    }
}
