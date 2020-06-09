import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import categories from '../../data/categories.json'
export default class LeftBar extends Component {
    state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    createDropdownMenu = (data, id ) => {
        var result =  data.filter(item => item.parent_id === id)
        return result
    }
    
    render() {
        const { activeItem } = this.state
        return (
            
            <Menu pointing vertical style={{backgroundColor:'#e5e5e5', marginLeft: '0px', width:'100%',borderRadius: 'inherit'}}>
                {this.createDropdownMenu(categories, 0).map((cateName, index) =>
                    
                    <Dropdown text={
                            <Link to={{pathname:`/category/${cateName.slug}`}}
                                style={{display:'block'}}>{cateName.name}</Link>} pointing='left' className='link item' simple item style={{display:'block'}} key={index}>
                        <Dropdown.Menu open>
                            {this.createDropdownMenu(categories, cateName.id).map((item,index) =>
                                    <Dropdown.Item content={<Link to={`/category/${cateName.slug}/${item.slug}`} style={{display:'block'}}>{item.name}</Link>} key={index}></Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                )}
            </Menu>
        )
    }
}
