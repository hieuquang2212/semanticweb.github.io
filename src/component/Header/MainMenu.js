import React, { Component } from 'react'
import { Menu, Dropdown,  Button } from 'semantic-ui-react'
import categories from '../../data/categories.json'
export default class MainMenu extends Component {
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
        
            <Menu>
                <Menu.Menu style={{margin: 'auto'}}>
                <Menu.Item href='/'>Home</Menu.Item>
                {categories.map(cateName => 
                    <Dropdown item text={cateName.name} className='link item' simple item href={`/${cateName.slug}`}>
                        <Dropdown.Menu>
                            {cateName.child.map(item =>
                                <Dropdown.Item href={`/${cateName.slug}/${item.slug}`}>{item.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                )}
                </Menu.Menu>
                
            </Menu>
        )
    }
}
