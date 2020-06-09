import React, { Component } from 'react'
import { Header, Grid, Image, Form, Button}  from'semantic-ui-react'
import {Link} from 'react-router-dom'
const options = [
    { key: 'm', text: 'Nam', value: 'male' },
    { key: 'f', text: 'Nữ', value: 'female' },
    { key: 'o', text: 'Khác', value: 'other' },
  ]
export default class PersonalProfile extends Component {
    
    state = {}
    handleChange = (e, { value }) => this.setState({ value })
    renderUserInfo() {
        return (
            <div style={{width: '100%'}}>
                <Header as='h1'>Thông tin tài khoản</Header>
                <Grid divided='vertically' style={{padding: '20px'}}>
                    <Grid.Row columns={3}>
                        <Grid.Column style={{borderRight:'1px solid #d1d1d1'}}>
                            <Header as='h5' style={{marginBottom: '0px', color: '#999999'}}>Tên đầy đủ</Header>
                            <h5 style={{marginTop: '7px', letterSpacing: '1px'}}>Ngô Quang Hiếu</h5>
                            <Header as='h5' style={{marginBottom: '0px', color: '#999999'}}>Ngày sinh</Header>
                            <h5 style={{marginTop: '7px', letterSpacing: '1px'}}>22 - 12 - 1998</h5>
                        </Grid.Column>
                        <Grid.Column style={{borderRight:'1px solid #d1d1d1'}}>
                            <Header as='h5' style={{marginBottom: '0px', color: '#999999'}}>Địa chỉ email</Header>
                            <h5 style={{marginTop: '7px', letterSpacing: '1px'}}>hieuquang2212@gmail.com</h5>
                            <Header as='h5' style={{marginBottom: '0px', color: '#999999'}}>Giới tính</Header>
                            <h5 style={{marginTop: '7px', letterSpacing: '1px'}}>Nam</h5>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h5' style={{marginBottom: '0px', color: '#999999'}}>Số điện thoại</Header>
                            <h5 style={{marginTop: '7px', letterSpacing: '1px'}}>0776447291</h5>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Link to={`${this.props.location.pathname}/edit`}><Button color="linkedin" style={{borderRadius: 'inherit', padding: '15px', letterSpacing: '1px',width: '250px',marginBottom:'10px'}}>CHỈNH SỬA THÔNG TIN</Button></Link><br/>
                <Link to={`${this.props.location.pathname}/edit/changePassword`}><Button color="linkedin" style={{borderRadius: 'inherit', padding: '15px', letterSpacing: '1px',width: '250px'}}>THAY ĐỔI MẬT KHẨU</Button></Link>
            </div>
        )
    }
    renderUserEditForm() {
        return (
            <div style={{width: '100%'}}>
                <Header as='h1'>Chỉnh sửa thông tin</Header>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Tên đầy đủ' placeholder='Nhập tên đầy đủ'/>
                        <Form.Input fluid label='Địa chỉ email' placeholder='Nhập địa chỉ email' />
                        <Form.Input fluid label='Số điện thoại' placeholder='Nhập số điện thoại' />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Ngày sinh' placeholder='Nhập tên đầy đủ' type='date'/>
                        <Form.Select
                            fluid
                            label='Giới tính'
                            options={options}
                            placeholder='Chọn giới tính'
                        />
                        <Form.Input fluid label='Mã số thuế' placeholder='Nhập mã số thuế' />
                    </Form.Group>
                    <Form.Button color="orange">Lưu thay đổi</Form.Button>
                </Form>
            </div>
        )
    }

    renderChangePassword() {
        return (
            <div style={{width: '100%'}}>
                <Header as='h1'>Thay đổi mật khẩu</Header>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column width={7}>
                            <Form>
                                <Form.Field>
                                    <label>Mật khẩu hiện tại</label>
                                    <input placeholder='Mật khẩu hiện tại' type="password"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Mật khẩu mới</label>
                                    <input placeholder='Mật khẩu mới' type="password"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Nhập lại mật khẩu mới</label>
                                    <input placeholder='Nhập lại mật khẩu mới' type="password"/>
                                </Form.Field>
                                <Button type='submit' style={{borderRadius: 'inherit',width:'200px',padding: '15px'}} color="orange">Lưu thay đổi</Button>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
    renderAccountPage() {
        const { url } = this.props.match
        return (
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
       
        )
    }
    render() {
        const { value } = this.state
        let { pathname } = this.props.location
        if (pathname === '/account/user/edit/changePassword') return (this.renderChangePassword())
        else if (pathname === '/account/user/edit') return (this.renderUserEditForm())
        else  if (pathname === '/account') return (this.renderAccountPage())
        else return (this.renderUserInfo())
    }
}
