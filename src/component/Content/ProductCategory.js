import React, { Component } from 'react'
import { Breadcrumb, Icon, Grid, Image, Header,Card, Button, Form, Checkbox} from 'semantic-ui-react'
import categoryList from '../../data/categories.json'
import productList from '../../data/products.json'
import {Link} from 'react-router-dom'
const number_format = require("number_format-php");
export default class ProductCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numOfPages: 8,
            filterList: {}
        }
    } 
    componentWillReceiveProps = () => {
        this.setState({
            numOfPages: 8
        })
    }
    loadMoreProduct = (list, e) => {
        if (this.state.numOfPages + 8 <= list.length) {
            this.setState({
                numOfPages: this.state.numOfPages + 8
            })
        } else {
            this.setState({
                numOfPages: list.length
            })
        }
    }
    getCategoryNameBySlug = (slug) => {
        var name = categoryList.filter(item => item.slug === slug)
        return name[0]
    }

    filterProductByUrl = (slug) => {
        var category = categoryList.filter(item => item.slug === slug)
        var subCategory = categoryList.filter(item => item.parent_id ===  category[0].id)
        if (subCategory.length === 0) {
            var list = productList.filter(item => item.category_id === category[0].id)
            return list
        } else {
            var listProduct = []
            subCategory.forEach(item => {
                var list = this.filterProductByUrl(item.slug)
                listProduct = listProduct.concat(list)
            })
            return listProduct
        }
        
    }
    filterProductBySth = (listProduct) => {
        if (Object.keys(this.state.filterList).length === 0) return listProduct;
        else {
            if (this.state.filterList.hasOwnProperty('price')) {
                var tmp = this.state.filterList.price.split('-');
                listProduct = listProduct.filter(item => item.price >= parseInt(tmp[0])*1000000 && item.price <= parseInt(tmp[1])*1000000)
            };
            if (this.state.filterList.hasOwnProperty('cpu')) {
                listProduct = listProduct.filter(item => item.discription.toLowerCase().indexOf(this.state.filterList.cpu) > 0)
            };
            if (this.state.filterList.hasOwnProperty('ram')) {
                listProduct = listProduct.filter(item => item.discription.toLowerCase().indexOf(this.state.filterList.ram) > 0)
            };
            if (this.state.filterList.hasOwnProperty('func')) {
                listProduct = listProduct.filter(item => item.type === this.state.filterList.func)
            };
            console.log(listProduct)
            return listProduct
        }
    }
    handleChange = (e, data) => {
        this.setState(state => ({
            filterList: {...state.filterList, [data.name]: data.value}
        }))
    }
    handleDeleteClick = (e, data) => {
        var newList = Object.assign({}, this.state.filterList)
        delete newList[data.content];
        this.setState({
            filterList: newList
        })
    }
    handleDeleteAll = (e, data) => {
        this.setState({
            filterList: {}
        })
    }
    renderFilterButton = (filterList) => {
        var listButton = []
        for (var i in filterList) {
            listButton.push(<Button color='primary' content={i} onClick={this.handleDeleteClick}>{filterList[i]}<Icon name="delete" style={{marginLeft: '10px'}}/></Button>)
        }
        listButton.push(<Button color='red' onClick={this.handleDeleteAll}>Xóa tất cả<Icon name="delete" style={{marginLeft: '10px'}}/></Button>)
        return listButton
    }
    render() {
        const url = this.props.location.pathname.replace("/category/","")
        var suburl = url.split('/');
        var urlLink = '/category';
        var listProduct = this.filterProductByUrl(suburl[suburl.length-1])
        var filterProduct = this.filterProductBySth(listProduct)
        const { price , cpu, ram, func} = this.state.filterList
        console.log(listProduct)
        console.log('The url', urlLink)
        return (
            <div style={{width: '90%',margin: '0 auto'}}>
                <Breadcrumb style={{marginLeft: '50px', fontSize:'15px',marginBottom: '50px'}}>
                    <Breadcrumb.Section link><Icon name="home"></Icon>Home</Breadcrumb.Section>
                    {suburl.map((url, index) => {
                        urlLink = urlLink + `/${url}`
                        if (index === suburl.length - 1) {
                            return [
                                <Breadcrumb.Divider>/</Breadcrumb.Divider>,
                                <Link to={`${urlLink}`}><Breadcrumb.Section active>{this.getCategoryNameBySlug(url).name}</Breadcrumb.Section></Link>
                            ]
                        } else {
                            return [
                                <Breadcrumb.Divider>/</Breadcrumb.Divider>,
                                <Link to={`${urlLink}`}><Breadcrumb.Section>{this.getCategoryNameBySlug(url).name}</Breadcrumb.Section></Link>
                            ]
                        }
                    })}
                </Breadcrumb>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                    <Grid.Column width={3}>
                            <Header as='h3'>Giá <b>{price}</b></Header>
                            <Checkbox
                                radio
                                label='5 Triệu - 7 Triệu'
                                value='5-7'
                                name="price"
                                checked={price === '5-7'}
                                onChange={this.handleChange}
                            />
                            <Checkbox
                                radio
                                label='7 Triệu - 10 Triệu'
                                value='7-10'
                                name="price"
                                checked={price === '7-10'}
                                onChange={this.handleChange}
                            />
                            <Checkbox
                                radio
                                label='10 Triệu - 15 Triệu'
                                name='checkboxRadioGroup'
                                value='10-15'
                                name="price"
                                checked={price === '10-15'}
                                onChange={this.handleChange}
                            />
                            <Checkbox
                                radio
                                label='15 Triệu - 20 Triệu'
                                name='checkboxRadioGroup'
                                value='15-20'
                                name="price"
                                checked={price === '15-20'}
                                onChange={this.handleChange}
                            />
                            <Checkbox
                                radio
                                label='20 Triệu - 25 Triệu'
                                name='checkboxRadioGroup'
                                value='20-25'
                                name="price"
                                checked={price === '20-25'}
                                onChange={this.handleChange}
                            />
                            <Header as='h3'>Bộ vi xử lí <b>{cpu}</b></Header>
                            <Checkbox
                                radio
                                label='Intel Core I3'
                                value='i3'
                                name="cpu"
                                checked={cpu === 'i3'}
                                onChange={this.handleChange}
                            /><br/>
                            <Checkbox
                                radio
                                label='Intel Core I5'
                                value='i5'
                                name="cpu"
                                checked={cpu === 'i5'}
                                onChange={this.handleChange}
                            /><br/>
                            <Checkbox
                                radio
                                label='Intel Core I7'
                                value='i7'
                                name="cpu"
                                checked={cpu === 'i7'}
                                onChange={this.handleChange}
                            /><br/>
                            <Checkbox
                                radio
                                label='Intel Pentium'
                                value='pentium'
                                name="cpu"
                                checked={cpu === 'pentium'}
                                onChange={this.handleChange}
                            /><br/>
                            <Checkbox
                                radio
                                label='Intel Celeron'
                                value='celeron'
                                name="cpu"
                                checked={cpu=== 'celeron'}
                                onChange={this.handleChange}
                            /><br/>
                            <Header as='h3'>Ram <b>{ram}</b></Header>
                            <Checkbox
                                radio
                                label='2GB'
                                value='2g'
                                name="ram"
                                checked={ram === '2g'}
                                onChange={this.handleChange}
                            /><br/>
                            <Checkbox
                                radio
                                label='4GB'
                                value='4g'
                                name="ram"
                                checked={ram === '4g'}
                                onChange={this.handleChange}
                            /><br/>
                            <Checkbox
                                radio
                                label='8GB'
                                value='8g'
                                name="ram"
                                checked={ram === '8g'}
                                onChange={this.handleChange}
                            /><br/>
                            <Checkbox
                                radio
                                label='16GB'
                                value='16g'
                                name="ram"
                                checked={ram === '16g'}
                                onChange={this.handleChange}
                            /><br/>
                            <Header as='h3'>Nhu cầu sử dụng <b>{func}</b></Header>
                            <Checkbox
                                radio
                                label='Chơi game khủng'
                                value='Chơi game khủng'
                                name="func"
                                checked={func=== 'Chơi game khủng'}
                                onChange={this.handleChange}
                            /><br/>
                            <Checkbox
                                radio
                                label='Học tập- Văn phòng'
                                value='Học tập - Văn phòng'
                                name="func"
                                checked={func === 'Học tập - Văn phòng'}
                                onChange={this.handleChange}
                            /><br/>
                            <Checkbox
                                radio
                                label='Đồ họa - Kỹ thuật'
                                value='Đồ họa - Kỹ thuật'
                                name="func"
                                checked={func === 'Đồ họa - Kỹ thuật'}
                                onChange={this.handleChange}
                            /><br/>
                            <Checkbox
                                radio
                                label='Cao cấp - Sang trọng'
                                value='Cao cấp - Sang trọng'
                                name="func"
                                checked={func === 'Cao cấp - Sang trọng'}
                                onChange={this.handleChange}
                            /><br/>
                            <Checkbox
                                radio
                                label='Mỏng nhẹ - Thời ttrang'
                                value='Mỏng nhẹ - Thời trang'
                                name="func"
                                checked={func === 'Mỏng nhẹ - Thời trang'}
                                onChange={this.handleChange}
                            /><br/>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        {Object.keys(this.state.filterList).length !== 0 ? 
                            this.renderFilterButton(this.state.filterList).map(item => item): null
                        }
                        <Header as='h2'>{this.getCategoryNameBySlug(suburl[suburl.length-1]).name}</Header>
                        {filterProduct.length !== 0 ? <Header as='h4'>Có {filterProduct.length} sản phẩm tìm thấy</Header> : <Header  as='h3' style={{textAlign: 'center'}}>Không tìm thấy sản phẩm nào</Header>}
                        <Grid divided='vertically'>
                            <Grid.Row columns={4}>
                                {/*{listProduct.map((item,index) => {
                                //     if (index < this.state.numOfPages) 
                                //     return (
                                //         <Grid.Column>
                                //             <Card style={{width: '100%', marginBottom: '50px', height: '380px'}} href='#'>
                                //                 <Image src={`/images/products/${item.image}`} wrapped ui={false} style={{padding: '20px',background: 'none'}} />
                                //                 <Card.Content>
                                //                 <Card.Header>
                                //                     <Link to={{ pathname: `/product/${item.slug_name}`,state: item}}>{item.name}</Link>
                                //                 </Card.Header>
                                //                 <Card.Meta>
                                //                     <span className='date'>{item.brand}</span>
                                //                 </Card.Meta>
                                //                 <Card.Description>
                                //                     {number_format(item.price,0,',','.')} VND
                                //                 </Card.Description>
                                //                 </Card.Content>
                                //             </Card>
                                //         </Grid.Column>  
                                //     )
                                // })} */}
                                {filterProduct.map((item,index) => {
                                    if (index < this.state.numOfPages) 
                                    return (
                                        <Grid.Column>
                                            <Card style={{width: '100%', marginBottom: '50px', height: '380px'}} href='#'>
                                                <Image src={`/images/products/${item.image}`} wrapped ui={false} style={{padding: '20px',background: 'none'}} />
                                                <Card.Content>
                                                <Card.Header>
                                                    <Link to={{ pathname: `/product/${item.slug_name}`,state: item}}>{item.name}</Link>
                                                </Card.Header>
                                                <Card.Meta>
                                                    <span className='date'>{item.brand}</span>
                                                </Card.Meta>
                                                <Card.Description>
                                                    <b style={{fontSize: '18px',float:'right'}}>{number_format(item.price,0,',','.')} VND</b><br/>
                                                    <span style={{float: 'right'}}>{item.type}</span>
                                                </Card.Description>
                                                </Card.Content>
                                            </Card>
                                        </Grid.Column>  
                                    )
                                })}
                            </Grid.Row>
                        </Grid>
                        <div>{filterProduct.length !== 0 && this.state.numOfPages !== filterProduct.length ? <Button style={{borderRadius: 'inherit', marginLeft: '45%'}} onClick={e => this.loadMoreProduct(filterProduct,e)}>Xem thêm</Button> : null}</div>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}
