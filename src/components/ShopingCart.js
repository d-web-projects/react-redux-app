import React, { Component } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class ShoppingCart extends Component {

    constructor() {
        super();
        this.state = {
            products: [
                { id: 1, name: 'eraser', price: 5, quantity: 1 },
                { id: 2, name: 'pen', price: 10, quantity: 1 }
            ],
            cart: [],
            totalAmount: 0
        };
    }

    addToCartHandler = (p) => {
        const { id, name, price, quantity } = p;
        const item = this.state.cart.find(v => v.id === id);
        if (item) {
            toast.info('Product already exist on the cart.', {
                position: toast.POSITION.TOP_CENTER
            })
        } else {
            const product = {
                id, name, price, quantity, amount: price * quantity
            };
            this.setState((prevState) => {
                return {
                    ...prevState,
                    cart: [...prevState.cart, product]
                }
            });
            setTimeout(() => {
                const amount = this.state.cart.map(v => v.amount).reduce((t, c) => t += c);
                this.setState({ totalAmount: amount });
            }, 500);
        }
    }

    addQuantityHandler = (p, e) => {
        const index = this.state.cart.findIndex(v => v.id === p.id);
        const data = this.state.cart;
        const { id, name, price, quantity, amount } = p;
        const qnt = e.target.value < 1 ? 1 : e.target.value;
        const product = {
            id, name, price, quantity: qnt, amount: price * qnt
        }
        data.splice(index, 1, product);
        this.setState((prevState) => {
            return {
                ...prevState,
                cart: [...data]
            }
        })
        setTimeout(() => {
            const amount = this.state.cart.map(v => v.amount).reduce((t, c) => t += c);
            this.setState({ totalAmount: amount });
        }, 500);
    }

    deleteAllCartProduct = () => {
        if (window.confirm("Are you sure to delete all cart products?")) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    cart: [],
                    totalAmount: 0
                }
            })
        }
    }

    deleteCartProduct = (product) => {
        const msg = `Are you sure to delete ${product.name}?`;
        if (window.confirm(msg)) {
            const data = this.state.cart;
            const index = this.state.cart.findIndex(v => v.id === product.id);
            data.splice(index, 1);
            this.setState((prevState) => {
                return {
                    ...prevState,
                    cart: [...data]
                }
            });
            setTimeout(() => {
                const amount = this.state.cart.map(v => v.amount).reduce((t, c) => t += c);
                this.setState({ totalAmount: amount });
            }, 500);
        }
    }

    render() {
        return (
            <div className="container mt-5">
                <h2>Product List</h2>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.length > 0 && this.state.products.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button type="button" className="btn btn-primary btn-sm" onClick={() => this.addToCartHandler(item)} >Add to Cart</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <hr />


                <div className="d-flex justify-content-between align-items-center">
                    <p className="fs-25"><strong>Cart:</strong> {this.state.cart.length == 0 ? 'Please add to cart one product.' : null}</p>
                    {
                        this.state.cart.length > 0 && (
                            <div>
                                <button type="button" className="btn btn-sm btn-danger" onClick={this.deleteAllCartProduct} >Delete All</button>
                            </div>
                        )
                    }

                </div>

                {
                    this.state.cart.length > 0 && (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.cart.length > 0 && this.state.cart.map((item, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td>
                                                    <input type="number" className="form-control w-50" value={item.quantity} onChange={(e) => this.addQuantityHandler(item, e)} />
                                                </td>
                                                <td>{item.amount}</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-sm" onClick={() => this.deleteCartProduct(item)}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    )
                }


                <hr />

                {
                    this.state.cart.length > 0 && (
                        <div className="d-flex justify-content-between">
                            <div>
                                <strong>Total Products:</strong> {this.state.cart.length}
                            </div>
                            <div>
                                <strong>Total Amount:</strong> {this.state.totalAmount}
                            </div>
                        </div>
                    )
                }

            </div>
        )
    }

}

export default ShoppingCart;