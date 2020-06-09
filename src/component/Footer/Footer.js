import React, { Component } from 'react'
import { List,Grid, Image, Header, Item } from 'semantic-ui-react'

export default class Footer extends Component {
    render() {
        return (
        <div style={{marginTop: '20px'}}>
            <div style={{backgroundColor:'#f9fafb', padding: '30px'}}>
                <div style={{width: '80%', margin: 'auto'}}>
                    <Grid divided='vertically'>
                        <Grid.Row columns={4}>
                        <Grid.Column width='4'>
                            <Header as='h3'>LIÊN HỆ</Header>
                            <List>
                                <List.Item  as='a' href='#'>
                                    Mon - Sun: 9am - 6pm(Hotline), 7am-10pm (Online chat)
                                </List.Item>
                                <List.Item  as='a' href='#'>Help Center</List.Item>
                                <List.Item  as='a' href='#'>How to Buy</List.Item>
                                <List.Item  as='a' href='#'>Shipping & Delivery</List.Item>
                                <List.Item  as='a' href='#'>International Product Policy</List.Item>
                                <List.Item  as='a' href='#'>How to Return</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width='4'>
                        <Header as='h3'>VỀ CÔNG TY</Header>
                            <List>
                                <List.Item  as='a' href='#'>
                                   Giới thiệu về công ty
                                </List.Item>
                                <List.Item  as='a' href='#'>Quá trình phats triển</List.Item>
                                <List.Item  as='a' href='#'>Đội ngũ nhân viên</List.Item>
                                <List.Item  as='a' href='#'>Chính sách mua bán và giao hàng</List.Item>
                                <List.Item  as='a' href='#'>Thành tựu</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width='3'>
                            <Item.Group>
                                <Item>
                                    <Item.Image size='tiny' src='/images/asus1.jpg' />
                                    <Item.Content>
                                        <Item.Header>Download this app</Item.Header>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Grid.Column>
                        <Grid.Column width='5'>
                            <Image.Group size='small'>
                                <Image src='/images/appstore.png' />
                                <Image src='/images/googleplay.png' />
                            </Image.Group>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
            <div style={{padding: '30px'}}>
                <div style={{width: '80%', margin: 'auto'}}>
                    <Grid divided='vertically'>
                        <Grid.Row columns={2}>
                        <Grid.Column>
                            <Header as='h3'>Phương thức thanh toán</Header>
                            <Image.Group size='tiny'>
                                <Image src='/images/visa.png' />
                                <Image src='/images/master.png' />
                                <Image src='/images/jcb.png' />
                                <Image src='/images/delivery.jpg' />
                                <Image src='/images/napas.png' />
                            </Image.Group>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h3'>Dịch vụ giao hàng</Header>
                            <Image.Group size='tiny'>
                                <Image src='/images/grab.png' />
                                <Image src='/images/vnpost.jpg' />
                                <Image src='/images/ghn.png' />
                                <Image src='/images/viettelpost.jpeg' />
                                <Image src='/images/ghtk.png' />
                                <Image src='/images/dhl.png' />
                            </Image.Group>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
            <div style={{backgroundColor:'#f9fafb', padding: '30px'}}>
                <div style={{width: '80%', margin: 'auto'}}>
                    <div className='meta' style={{fontSize: '20px'}}>Follow us</div>
                    <Image.Group size='mini' style={{marginTop:'20px'}}>
                        <Image src='/images/facebook.png' as='a' href='https://www.facebook.com/'/>
                        <Image src='/images/twitter.png' as='a' href='https://twitter.com/'/>
                        <Image src='/images/linkedin.png' as='a' href='https://vn.linkedin.com/'/>
                        <Image src='/images/google-.png' as='a' href='https://plus.google.com/'/>
                        <Image src='/images/youtobe.png' as='a' href='https://www.youtube.com/'/>
                        <Image src='/images/pinterest.png' as='a' href='https://www.pinterest.com/'/>
                        <Image src='/images/instagram.png' as='a' href='https://www.instagram.com/'/>
                    </Image.Group>
                    <Header as='h5' textAlign='center'>
                        Copyright ©2019 Laptop Online Store
                    </Header>
                </div>
            </div>
        </div>
        )
    }
}
