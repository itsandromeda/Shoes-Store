import React, {Component} from 'react';
import { connect } from 'react-redux';
import { showCart } from '../actions/cartActions';
import '../index.css';

class Navbar extends Component {
    render() {
        const items = this.props.cart.reduce((accumulator, item) => accumulator + (item.quantity),0);
        return (
            <div>
                <nav className="nav">
                    <div>
                        <div className="logo">
                            <img src="https://raw.githubusercontent.com/itsandromeda/Shoes-Store/master/src/img/store_logo.png" alt="Dollskill logo" />
                        </div>
                        <div className="cart-btn" onClick={() => this.props.showCart(this.props.cart)}>
                        <img src="https://cdn-cf.dollskill.com/skin/frontend/dollskill/dollskill/images/icons/dk_original/cart_pink_new.svg" alt="Dollskill bag" />
                        <div className="nav-total">{items}</div></div>
                    </div>
                </nav>
                <header className="header">
                    <img src="https://raw.githubusercontent.com/itsandromeda/Shoes-Store/master/src/img/store_banner.jpg" alt="Dollskill" />
                </header>
            </div>
        );    
    }
};

const mapStateToProps = (state) => ({
    cart: state.cart
});

export default connect(mapStateToProps, { showCart })(Navbar);