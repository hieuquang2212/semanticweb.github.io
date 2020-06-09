import React, { Component } from 'react'
import { Header, Grid, List}  from'semantic-ui-react'
import { Link, Switch, Route} from 'react-router-dom'
import PersonalProfile from '../Content/PersonalProfile'
import Address from '../Content/Address'
export default class Account extends Component {
    
    render() {
        const { url,path } = this.props.match
        return (
            <div style={{width: '85%',margin: '0 auto'}}>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                    <Grid.Column width={3} style={{ padding: '15px 15px 40px 15px'}}>
                        <p>Hello, Ngô Quang Hiếu</p>
                        <List>
                            <List.Item>
                                <Header as='a'><Link to={`${url}`}>Quản lí tài khoản của tôi</Link></Header>
                                <List.List style={{fontSize: '15px'}}>
                                    <List.Item as='a' style={{marginBottom: '10px'}}><Link to={`${url}/user`}>Thông tin cá nhân</Link></List.Item>
                                    <List.Item as='a' style={{marginBottom: '10px'}}><Link to={`${url}/address`}>Danh sách địa chỉ</Link></List.Item>
                                    <List.Item as='a' style={{marginBottom: '10px'}}>Phương thức giao hàng</List.Item>
                                </List.List>
                            </List.Item>
                            <List.Item>
                                <Header as='a'><Link to={`${url}`}>Đơn hàng của tôi</Link></Header>
                                <List.List style={{fontSize: '15px'}}>
                                    <List.Item as='a' style={{marginBottom: '10px'}}><Link to={`${url}/user`}>Đơn hàng trả</Link></List.Item>
                                    <List.Item as='a' style={{marginBottom: '10px'}}><Link to={`${url}/address`}>Đơn hàng hủy</Link></List.Item>
                                </List.List>
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={12} style={{ padding: '15px 15px 40px 15px',marginLeft: '12px'}}>
                        <Switch>
                            <Route path={`${url}/user`} render={(props) => <PersonalProfile {...props}/>}/>
                            <Route path={`${url}/address`} render={(props) => <Address {...props}/>}/>
                            <Route path={`${url}`}>
                                <div style={{width: '100%'}}>
                                    <Grid divided='vertically'>
                                        <Grid.Column width={5} style={{backgroundColor: '#f0f0f0', padding: '15px 15px 40px 15px'}}>
                                            <p style={{fontSize: '17px', marginBottom: '10px'}}>Thông tin cá nhân | <Link to={`${url}/user/edit`}><span style={{fontSize: '14px',color: '#4682B4',cursor: 'pointer'}}>Chỉnh sửa</span></Link></p>
                                            <p style={{fontSize: '15px', marginBottom: '8px'}}>Ngô Quang Hiếu</p>
                                            <p style={{fontSize: '15px'}}>hieuquang2212@gmail.com</p>
                                        </Grid.Column>
                                        <Grid.Column width={10} style={{backgroundColor: '#f0f0f0', padding: '15px 15px 40px 15px',marginLeft: '12px'}}>
                                            <p style={{fontSize: '17px', marginBottom: '10px'}}>Địa chỉ giao hàng | <Link to={`${url}/address/edit`}><span style={{fontSize: '14px',color: '#4682B4',cursor: 'pointer'}}>Chỉnh sửa</span></Link></p>
                                            <div style={{fontSize: '15px', marginBottom: '8px',display: 'inline-block', width:'45%',borderRight:'2px solid #D3D3D3'}}>
                                                <p style={{fontSize: '13px'}}>ĐỊA CHỈ GIAO HÀNG MẶC ĐỊNH</p>
                                                <strong style={{fontSize: '14px',letterSpacing: '1px'}}>Ngô Quang Hiếu</strong>
                                                <p style={{fontSize: '12px',letterSpacing: '1px',marginTop:'10px',marginBottom:'5px'}}>88 Trương Văn Thành</p>
                                                <p style={{fontSize: '12px',letterSpacing: '1px',marginBottom:'5px'}}>Hồ Chí Minh - Quận 9 - Phường Hiệp Phú</p>
                                                <p style={{fontSize: '12px',letterSpacing: '1px'}}>(+84) 0776447291</p>
                                            </div>
                                            <div style={{fontSize: '15px', marginBottom: '8px', display: 'inline-block', width:'45%', marginLeft:'20px'}}>
                                                <p style={{fontSize: '13px'}}>ĐỊA CHỈ HÓA ĐƠN MẶC ĐỊNH</p>
                                                <strong style={{fontSize: '14px',letterSpacing: '1px'}}>Ngô Quang Hiếu</strong>
                                                <p style={{fontSize: '12px',letterSpacing: '1px',marginTop:'10px',marginBottom:'5px'}}>88 Trương Văn Thành</p>
                                                <p style={{fontSize: '12px',letterSpacing: '1px',marginBottom:'5px'}}>Hồ Chí Minh - Quận 9 - Phường Hiệp Phú</p>
                                                <p style={{fontSize: '12px',letterSpacing: '1px'}}>(+84) 0776447291</p>
                                            </div>
                                        </Grid.Column>
                                    </Grid>
                                </div>
                            </Route>
                        </Switch>
                        
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}
