import React from "react";
import CardMenu from "./CardMenu";
import "./style.css"

const Menu = () => {
    return (
        <div className="menu">
            <h1 className="header">Carta Digital</h1>
            <nav className="nav">
                <ul className="nav_ul">
                    <li className="nav_li">Entrada</li>
                    <li className="nav_li">Plato Fuerte</li>
                    <li className="nav_li">Bebidas</li>
                    <li className="nav_li">Postres</li>
                </ul>
            </nav>
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <button
                className="hacer_pedido">
                Realizar Pedido
            </button>
        </div>
    );
};

export default Menu;
