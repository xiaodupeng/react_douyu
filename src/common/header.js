import React, { Component } from 'react';
import '../style/header.scss'
import { Link } from 'react-router-dom'
import emitter from '../untils/ev';

class Footer extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }
    clickIcon(){
        emitter.emit('openSide', true);
    }

    
    render() {
        return (
            <div className="header">
                <div onClick={(e)=>this.clickIcon(e)} className="left"><i className="fa fa-bars"></i><span>直播分类</span></div>
                <div className="right"><Link to="/">斗鱼TV</Link></div>
            </div>
        );
    }     
}

export default Footer;