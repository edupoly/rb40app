import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
function Navbar(props) {
  return (
    <div>
        <ul className="d-flex list-unstyled flex-wrap justify-content-around">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/todolist">Todolist</Link></li>
            <li><Link to="/countries">Countries</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/addProduct">AddProduct</Link></li>
            <li>
              <Link to="/cart">
              <button type="button" class="btn btn-primary position-relative">
                Cart
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {props.cartItems.length}
                </span>
              </button>
              </Link>
            </li>

        </ul>
    </div>
  )
}
function mapStateToProps(state){return state.productsReducer}
function mapDispatchToProps(dispatch){return {}}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar)