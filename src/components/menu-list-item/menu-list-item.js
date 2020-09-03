import React from 'react';
import { Link } from 'react-router-dom';
import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddToCart}) => {
    const {category, url, price, title, weight} = menuItem;
    return (
        <li className="menu__item">
            <Link style={{ textDecoration: 'none' }} to = {`/${menuItem.id}`} >
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Категория: <span>{category}</span></div>
                <div className="menu__price">Цена/грамм: <span>{price} рублей/{weight} гр.</span></div>
                <button onClick={(e) => {
                            e.preventDefault();
                            onAddToCart();
                        }} className="menu__btn"><span>Добавить в корзину</span></button>
                <span className = {`menu__category_Img ${category}`}></span>
            </Link>
        </li>
    )
}

export default MenuListItem;