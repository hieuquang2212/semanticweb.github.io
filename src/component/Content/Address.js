import React, { Component } from 'react'
import { Header, Table, Image, Button,Icon, Grid, Form, Select, Radio } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]
export default class Address extends Component {
    handleChange = (e, { value }) => this.setState({ value })
    renderAddressList() {
        return (
        <div>
            <Header as='h1' style={{marginBottom: '30px'}}>Danh sách địa chỉ</Header>
            <Table basic='very' celled collapsing style={{width: '100%'}}>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Tên đầy đủ</Table.HeaderCell>
                    <Table.HeaderCell>Tên đường</Table.HeaderCell>
                    <Table.HeaderCell>Thành phố - Quận - Phường</Table.HeaderCell>
                    <Table.HeaderCell>Số điện thoại</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                <Table.Row>
                    <Table.Cell>Ngô Quang Hiếu</Table.Cell>
                    <Table.Cell>88 Trương Văn Thành</Table.Cell>
                    <Table.Cell>Hồ Chí Minh - Quận 9 - Hiệp Phú</Table.Cell>
                    <Table.Cell>0776447291</Table.Cell>
                    <Table.Cell style={{color: '#4682B4'}}><Link to={`${this.props.match.url}/edit`}>EDIT</Link></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Ngô Quang Hiếu</Table.Cell>
                    <Table.Cell>88 Trương Văn Thành</Table.Cell>
                    <Table.Cell>Hồ Chí Minh - Quận 9 - Hiệp Phú</Table.Cell>
                    <Table.Cell>0776447291</Table.Cell>
                    <Table.Cell style={{color: '#4682B4'}}><Link to={`${this.props.match.url}/edit`}>EDIT</Link></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Ngô Quang Hiếu</Table.Cell>
                    <Table.Cell>88 Trương Văn Thành</Table.Cell>
                    <Table.Cell>Hồ Chí Minh - Quận 9 - Hiệp Phú</Table.Cell>
                    <Table.Cell>0776447291</Table.Cell>
                    <Table.Cell style={{color: '#4682B4'}}><Link to={`${this.props.match.url}/edit`}>EDIT</Link></Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
            <Link to={`${this.props.match.url}/add`}>
                <Button color='instagram' style={{borderRadius:'inherit',width:'200px',padding:'15px',float:'right'}}><Icon name='add'/>Thêm địa chỉ</Button>
            </Link>
        </div>
        )
    }
    renderAddAddressForm() {
        return (
            <div>
                <Header as='h1' style={{marginBottom: '30px'}}>Thêm địa chỉ mới</Header>
                <Grid columns='three'>
                    <Grid.Row>
                        <Grid.Column width={7}>
                            <Form>
                                <Form.Field>
                                    <label>Tên đầy đủ</label>
                                    <input placeholder='Nhập họ và tên' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Số điện thoại</label>
                                    <input placeholder='Nhập số điện thoại' />
                                </Form.Field>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Form>
                                <Form.Field>
                                    <label>Địa chỉ</label>
                                    <input placeholder='Nhập địa chỉ' />
                                </Form.Field>
                                <Form.Field
                                    control={Select}
                                    label='Tỉnh'
                                    options={options}
                                    placeholder='Chọn tỉnh'
                                />
                                <Form.Field
                                    control={Select}
                                    label='Quận'
                                    options={options}
                                    placeholder='Chọn quận'
                                />
                                <Form.Field
                                    control={Select}
                                    label='Phường'
                                    options={options}
                                    placeholder='Chọn phường'
                                />
                                <Form.Group inline>
                                <label>Chọn loại địa chỉ</label>
                                <Form.Field
                                    control={Radio}
                                    label='Cơ quan'
                                    value='1'
                                    // checked={value === '1'}
                                    // onChange={this.handleChange}
                                />
                                <Form.Field
                                    control={Radio}
                                    label='Nhà riêng'
                                    value='2'
                                    // checked={value === '2'}
                                    // onChange={this.handleChange}
                                />
                                </Form.Group>
                            </Form>
                            <Button style={{borderRadius: 'inherit', width: '150px', margin:'15px 15px 0px 0px'}} 
                                    onClick={() => this.props.history.replace('/account/address')}>
                                    Hủy
                            </Button>
                            <Link to=''><Button style={{borderRadius: 'inherit', width: '150px'}} color='orange'>Lưu thay đổi</Button></Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
    renderEditAddressForm() {
        return (
            <div>
                <Header as='h1' style={{marginBottom: '30px'}}>Sửa thông tin địa chỉ</Header>
                <Grid columns='three'>
                    <Grid.Row>
                        <Grid.Column width={7}>
                            <Form>
                                <Form.Field>
                                    <label>Tên đầy đủ</label>
                                    <input placeholder='Nhập họ và tên' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Số điện thoại</label>
                                    <input placeholder='Nhập số điện thoại' />
                                </Form.Field>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Form>
                                <Form.Field>
                                    <label>Địa chỉ</label>
                                    <input placeholder='Nhập địa chỉ' />
                                </Form.Field>
                                <Form.Field
                                    control={Select}
                                    label='Tỉnh'
                                    options={options}
                                    placeholder='Chọn tỉnh'
                                />
                                <Form.Field
                                    control={Select}
                                    label='Quận'
                                    options={options}
                                    placeholder='Chọn quận'
                                />
                                <Form.Field
                                    control={Select}
                                    label='Phường'
                                    options={options}
                                    placeholder='Chọn phường'
                                />
                                <Form.Group inline>
                                <label>Chọn loại địa chỉ</label>
                                <Form.Field
                                    control={Radio}
                                    label='Cơ quan'
                                    value='1'
                                    // checked={value === '1'}
                                    // onChange={this.handleChange}
                                />
                                <Form.Field
                                    control={Radio}
                                    label='Nhà riêng'
                                    value='2'
                                    // checked={value === '2'}
                                    // onChange={this.handleChange}
                                />
                                </Form.Group>
                            </Form>
                            <Link to=''><Button style={{borderRadius: 'inherit', width: '150px', margin:'15px 15px 0px 0px'}}>Hủy</Button></Link>
                            <Link to=''><Button style={{borderRadius: 'inherit', width: '150px'}} color='orange'>Lưu thay đổi</Button></Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
    render() {
        const { pathname } = this.props.location
        if (pathname === '/account/address/add') return (this.renderAddAddressForm());
        else if (pathname === '/account/address/edit') return (this.renderEditAddressForm());
        else if (pathname === '/account/address') return (this.renderAddressList());
        else return <div>Hello world</div>
    }
}
