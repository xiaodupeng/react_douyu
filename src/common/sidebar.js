import React, { Component } from 'react';
import '../style/sidebar.scss'
import PropTypes from 'prop-types';
import {classify} from '../api/mobile'
import emitter from '../untils/ev';


class Sidebar extends Component {
  constructor(props){
    super(props)
    this.state = {
        sidebarList:[],
        sideBarState:''
    }
}
    static contextTypes = {
        router: PropTypes.object
    }
  async componentDidMount(){
    await classify().then(res=>{
        this.setState({
            sidebarList:res.data.cate1Info
        })
    })

    emitter.addListener('openSide', (msg) => {
		this.setState({
			sideBarState: msg
		})
	})
  }
  close(){
    this.setState({
        sideBarState:false
    })
  }
  goCateGory(e,item){
    this.close()
    this.context.router.history.push('/Category/' + item.cate1Id)
  } 
  render() {
    return (
        <div className="application-sidebar">
            <div className={`sidebar-container ${this.state.sideBarState?"show-sidebar":null}`}>
                <nav>
                    <ul className="sidebar-list">
                        {
                            this.state.sidebarList.map((item,index)=>{
                                return (
                                    <li className="sidenav" key={index} onClick={(e)=>this.goCateGory(e,item)}>
                                        <span>{item.cate1Name}</span>
                                        <i className="fa fa-chevron-right"></i>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
            <div className={`${this.state.sideBarState?"sidebar-overlay":null}`} onClick={(e)=>this.close(e)}></div>
        </div>

    );
  }
}

export default Sidebar;
