import React, { Component } from 'react'
import { Header , Tab, Menu, Label, Grid, Image, Button,Icon, Form, Checkbox, List, Segment} from 'semantic-ui-react'
export default class Payment extends Component {
    render() {
        const styles = {
            iconStyle: {
                  padding: '20px'
            }
        }
        const panes = [
            {
              menuItem: { key: 'money', icon: 'money bill alternate', content: 'Thanh toán khi nhận hàng' },
              render: () => 
                <Tab.Pane>
                     <div style={{padding: '20px'}}>
                        You can only open the package after payment. Only agree to receive the package if "Out for Delivery" status has been updated for your order.
                     </div>
                    <Button color='orange' style={{padding: '15px'}}>Xác nhận đơn hàng</Button>
                </Tab.Pane>,
            },
            {
              menuItem: { key: 'credit', icon: 'credit card', content: 'Thanh toán qua thẻ nội địa' },
              render: () => 
                <Tab.Pane style={{padding: '50px'}}>
                    <div>
                        <Icon name='cc visa' size='large' style={styles.iconStyle}/>
                        <Icon name='cc mastercard' size='large' style={styles.iconStyle} />
                        <Icon name='cc jcb' size='large' style={styles.iconStyle}/>
                    </div>
                    <Form style={{marginTop: '20px', width: '50%'}}>
                        <Form.Field required>
                            <label>Card Number</label>
                            <input placeholder='Card Number' />
                        </Form.Field>
                        <Form.Field required>
                            <label>Name on card</label>
                            <input placeholder='Name on card' />
                        </Form.Field>
                        <Form.Group widths='equal'>
                            <Form.Field required>
                                <label>Expiration date</label>
                                <input placeholder='MM/YY' />
                            </Form.Field>
                            <Form.Field required>
                                <label>CVV</label>
                                <input placeholder='CVV' />
                            </Form.Field>
                        </Form.Group>
                        <Form.Field>
                            <Checkbox label='Save Card' color='orange'/>
                        </Form.Field>
                        <Button type='submit' color='orange'>Xác nhận đơn hàng</Button>
                    </Form>
                </Tab.Pane>,
            },
            {
                menuItem: { key: 'credit', icon: 'cc mastercard', content: 'Thanh toán qua thẻ ngân hàng' },
                render: () => 
                <Tab.Pane style={{padding: '50px'}}>
                    <div>Hãy chuẩn bị sẵn sàng:</div>
                    <List ordered>
                        <List.Item>Thẻ ngân hàng ATM</List.Item>
                        <List.Item>Đăng kí dịch vụ thanh toán online hoặc Internet Banking</List.Item>
                        <List.Item>Số dư tài khoản phải lớn hơn tổng tiền của đơn hàng</List.Item>
                    </List>

                    <Button color='orange'>Tiến hành thanh toán</Button>
                    <Button color='grey' >Tiến hành đặt hàng</Button>
                </Tab.Pane>,
            },
          ]

        return (
            
            <div style={{backgroundColor:'#f9fafb', padding: '30px'}}>
                <div style={{width: '80%', margin: 'auto'}}>
                    <Header as='h2'>Chọn hình thức thanh toán</Header>
                    <Grid divided='vertically'>
                        <Grid.Row columns={2}>
                            <Grid.Column width='11'>
                                <Tab panes={panes} />
                            </Grid.Column>
                            <Grid.Column width='5'>
                                <Segment>
                                    <Header style={{marginTop: '10px'}}>Đơn hàng</Header>
                                    <Header as='h5'>Tạm tính 
                                        <span style={{float:'right'}}>36,590,000đ</span>
                                    </Header>
                                    <div className='meta'>(3 sản phẩm và phí vận chuyển)</div>
                                    <Header as='h3' color='orange'>Tổng tiền: 
                                        <span style={{display:'inline-block', float:'right'}}>36,590,000đ</span>
                                    </Header>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        )
    }
}
