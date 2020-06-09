import { Form , Header} from 'semantic-ui-react'
import React, { Component } from 'react'
const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

export default class Register extends Component {
    state = {}
    componentWillMount() {
       document.title = 'My Shop - Đăng kí'
    }
    handleChange = (e, { value }) => this.setState({ value })
    
    render() {
        const { value } = this.state
        return (
          <div style={{backgroundColor:'#f9fafb', padding: '30px'}}>
          <div style={{width: '80%', margin: 'auto'}}>
              <Header as='h1' style={{textAlign: 'center'}}>Sign Up </Header>
              <Form style={{width: '60%', margin: '20px auto', padding: '20px', borderRadius: '5px'}}>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='First name' placeholder='First name' />
                  <Form.Input fluid label='Last name' placeholder='Last name' />
                  <Form.Select
                    fluid
                    label='Gender'
                    options={options}
                    placeholder='Gender'
                  />
                </Form.Group>
                <Form.Input type='date' fluid label='Birthday' placeholder='Ngày sinh' />
                <Form.Group widths='equal'>
                  <Form.Input fluid label='Email' placeholder='Email' />
                  <Form.Input fluid label='Phone Number' placeholder='Phone Number' />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='Password' placeholder='Password' />
                  <Form.Input fluid label='Repeat Password' placeholder='Repeat Password' />
                </Form.Group>
                <Form.Button color='green'>Sign Up</Form.Button>
              </Form>
                </div>
              </div>
        )
    }
}
