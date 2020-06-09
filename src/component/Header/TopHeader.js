import React, { Component } from 'react'
import { Header, List, Icon, Dropdown,Form, Input, Image} from 'semantic-ui-react'
import { UserContext} from '../Context/UserContext'
import AuthService from '../Auth/AuthService'
import {Link} from 'react-router-dom'
const Auth = new AuthService()
export default class TopHeader extends Component {
    static contextType = UserContext
    handleLogout = () => {
        Auth.logout()
        this.context.changeLoginStatus(false)
        alert("Đăng xuất thành công")
    }
    render() {
        const ListStyle = {
            paddingLeft: '10px',
            paddingRight: '10px'
        }
        const HeaderStyle = {
            backgroundColor: '#e5e5e5'
        }
        return (
            <Header attached='top' style={HeaderStyle}>
                <List horizontal>
                    <List.Item><Icon name='marker'/> Ho Chi Minh, Viet Nam</List.Item>
                    <List.Item><Icon name='phone'/> +84 77 644 7291</List.Item>
                </List>
                <List horizontal floated="right" link>
                    <List.Item style={ListStyle} as='a'>Customer Care</List.Item>
                    <List.Item style={ListStyle}
                        content = {
                            <Dropdown text="Track My Order" pointing className='link item' style={{color: 'black'}}>
                                <Dropdown.Menu style={{padding:'20px', width: '200px', left: '-70%'}}>
                                    {this.context.loggedIn ?
                                        <div>
                                        <Header as='h2' style={{marginTop: '0', marginBottom:'7px', fontSize:'14px', padding:'0'}}>MY LAST ORDER</Header>
                                        <List as='ul' style={{padding:'0', marginBottom: '20px'}}>
                                            <List.Item as='a' style={{padding:'7px', fontSize:'12px', color: '#a2e0f5 !important'}} href='order/view/'>14/11/2019 - Order 231628867056652</List.Item>
                                            <List.Item as='a' style={{padding:'7px',  fontSize:'12px', color: '#a2e0f5'}} href='order/view/'>17/11/2019 - Order 231628867056652</List.Item>
                                        </List>
                                        </div>
                                        :
                                        null
                                    }
                                    <Header as='h2' style={{marginTop: '0', marginBottom:'15px', fontSize:'14px', padding:'0'}}>Track my order</Header>
                                    <Form>
                                        <Form.Field>
                                        <label>Enter your order number</label>
                                        <Input
                                            icon={{ name: 'search', circular: true, link: true }}
                                            placeholder='eg:123456789'
                                        />
                                        </Form.Field>
                                    </Form>
                                </Dropdown.Menu>
                            </Dropdown>
                        }/>
                    {!this.context.loggedIn ? 
                       <List.Item style={ListStyle} content={<Link to='/login'>Login</Link>}/> 
                    : <List.Item style={ListStyle} 
                        content={
                            [
                            <Image src='/images/user.png' size='mini' circular style={{marginRight: '10px'}}/>,
                            <Dropdown text={
                                `Tài khoản ${this.context.username}`
                            } pointing className='link item' style={{color: 'black'}}
                            >
                                <Dropdown.Menu style={{left: '-27px', top: '21px'}}>
                                    <Dropdown.Item icon='user' text='Quản lí tài khoản' as='a' href='/account' />
                                    <Dropdown.Item icon='file' text='Đơn hàng của tôi' />
                                    <Dropdown.Item icon='bell' text='Thông báo' description='2'/>
                                    <Dropdown.Item icon='eye' text='Sản phẩm đã xem' />
                                    <Dropdown.Item icon='like' text='Sản phẩm yêu thích' />
                                    <Dropdown.Item icon='write' text='Đánh giá của tôi' />
                                    <Dropdown.Divider />
                                    <Dropdown.Item icon='log out' text='Đăng xuất' as='button' style={{width: '100%'}} onClick={this.handleLogout}/>
                                </Dropdown.Menu>
                            </Dropdown>
                            ]
                        }/>
                    }
                    {!this.context.loggedIn ? <List.Item style={ListStyle} content={<Link to='/register'>Sign Up</Link>}/> : null}
                </List>
            </Header>
            )}
}
