import React, {Component} from 'react';
import {connect} from 'react-redux';
import {menuLoaded, menuRequested, menuError, addedToCart} from '../../actions';
import WithRestoService from '../hoc/';
import Spinner from '../spinner';
import Error from '../error';

import './item-page.css';

class ItemPage extends Component {

    componentDidMount() {
        const {menuItems, menuRequested, menuLoaded, menuError, RestoService} = this.props;
        if (menuItems.length === 0) {
            menuRequested();
            RestoService.getMenuItems()
                .then(res => menuLoaded(res))
                .catch(() => menuError());
        }
    }
    
    render() {
        const {loading, error, menuItems, match} = this.props;
        if (error) {
            return (
                <div className = "item_page">
                    <Error/>
                </div>
            )
        }
        if (loading) {
            return (
                <div className = "item_page">
                    <Spinner/>
                </div>
            )
        }
        const item = menuItems.find(element => +element.id === +match.params.id);
        const{ category, id, url, title, price, } = item;
        console.log(menuItems);

        return (
            <div className = "item_page">
                <div className="menu__item item_block">
                     <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}></img>
                    <div className="menu__category">Category: <span>{category}</span></div>
                    <div className="menu__price">Price: <span>{price} рублей</span></div>
                    <button onClick = {()=>this.props.addedToCart(id)} className="menu__btn">Add to cart</button>
                    <span className = {`menu__category_Img ${category}`}></span> 
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded: menuLoaded,
    menuRequested,
    menuError,
    addedToCart
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));