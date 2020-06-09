import React, { Component } from 'react'
import { Segment, Grid, Form, Divider, Button, Icon , Header} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import listUsers from '../../data/users.json'
import { UserContext } from '../Context/UserContext'
import decode from 'jwt-decode';
import AuthService from '../Auth/AuthService'
import {Link} from 'react-router-dom'
var jwt = require('jsonwebtoken');
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            redirect: false
        }
        this.Auth = new AuthService()
    }
    static contextType = UserContext
    //check if there is a saved token and it's still valid
    componentWillMount() {
        document.title = 'My Shop - Đăng nhập'
        if (this.Auth.loggedIn()) {
            this.context.changeLoginStatus(true)       
        } else {
            this.context.changeLoginStatus(false)
        }
    }
    handleInputChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState({
            [name] : value
        })
    }
    handleSubmit = (e) => {
        const result = listUsers.map(user => user.username === this.state.username && user.password === this.state.password)
        if (result) {
            this.context.changeUsername(this.state.username)
            this.context.changeLoginStatus(true)
            const token = jwt.sign({ 
                username: this.state.username}, 
                'sercet key',
                { expiresIn: 900}
            )
            console.log(token)
            localStorage.setItem('id_token', token)
            this.context.changeLoginStatus(true)
            console.log(this.props.history)
        }
        e.preventDefault()
    }
    render() {
        if (this.context.loggedIn) {
            return <Redirect to='/'/>
        } else
        return [
                <Segment placeholder>
                    <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column>
                            <Header style={{textAlign:'center'}} as='h2'>Login to MyShop</Header>,
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Input
                                    icon='user'
                                    iconPosition='left'
                                    label='Username'
                                    placeholder='Username'
                                    name='username'
                                    onChange={this.handleInputChange}
                                />
                                <Form.Input
                                    icon='lock'
                                    iconPosition='left'
                                    label='Password'
                                    type='password'
                                    name='password'
                                    onChange={this.handleInputChange}
                                />
                                <Form.Checkbox
                                    type='checkbox'
                                    label='Remember me'
                                />
                                <Button content='Login' primary type='submit'/>
                            </Form>
                    </Grid.Column>

                    <Grid.Column verticalAlign='middle'>
                        <Link to='/register' style={{color: 'white'}}>
                            <Button color='grey' primary size='big' color='grey'><Icon name="signup"/>Sign Up</Button>
                        </Link>
                    </Grid.Column>
                    </Grid>
                    <Divider vertical>Or</Divider>
                </Segment>
        ]
        }
    }
