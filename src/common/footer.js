import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/footer.scss'

class Footer extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentIndex:0,
            footList : [{name:"职位",icon:"fa fa-home",url:"/"},{name:"搜索",icon:"fa fa-search",url:"Search"},{name:"我的",icon:"fa fa-user-o",url:"Mine"}]
        }
    }
    static contextTypes = {
        router: PropTypes.object
    }
    goUrl(e,item,index){
        this.context.router.history.replace(item.url)
        this.setState({
            currentIndex : index
        })
    }
    render() {
        return (
            <ul className="footer">
                {this.state.footList.map((item,index)=>{
                    return (
                    <li className={index === this.state.currentIndex?"active":null} key={index} onClick={(e) => this.goUrl(e,item,index)}><i className={item.icon}></i>{item.name}</li>
                    )
                })}
            </ul>
        );
    }     
}

export default Footer;