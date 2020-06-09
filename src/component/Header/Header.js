import React, { Component } from 'react'
import TopHeader from './TopHeader'
import MainHeader from './MainHeader'
import Navigation from './Navigation'
export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <TopHeader/>
                <MainHeader/>
            </div>
        )
    }
}
