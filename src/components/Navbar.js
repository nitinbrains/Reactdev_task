import React, { Component,Fragment } from 'react'
import logo from '../images/logo.jpg'
import {FaAlignJustify} from 'react-icons/fa'
import {Link} from 'react-router-dom'

 class Navbar extends Component {
     constructor(props){
         super(props);
         this.state={
            isOpen:false
         }
     }

     handleToggle=()=>{
         this.setState({isOpen:!this.state.isOpen})
     }
    render() {
        const{isOpen}=this.state;
        return (
            <Fragment>
                <div className='navbar'>
                    <div className='nav-center'>
                        <div className="nav-header">
                            <Link to="/home">
                                <img src={logo} alt="RoomsPie"/>
                            </Link>
                            <button type="button" className="nav-btn"  onClick={this.handleToggle}>
                             <FaAlignJustify className="nav-icon"/>
                            </button>
                        </div>
                        <ul style={{marginTop:'22px'}} className={isOpen ? "nav-links show-nav":"nav-links"}>
                            <li>
                                <Link to="/home">Services</Link>
                            </li>
                            <li>
                                <Link to="/rooms">Properties</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
                
        
        )
    }
}
export default Navbar;