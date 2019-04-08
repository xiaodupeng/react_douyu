import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Banner from '../common/banner'

import '../style/home.scss'
import {list} from '../api/mobile'


class APP extends Component {
  constructor(props){
        super(props)
        this.state = {
            list:[],
        }
    }
    static contextTypes = {
        router: PropTypes.object
    }
    async componentDidMount(){
        await list().then(res=>{
            this.setState({
                list:res.data
            })
        })
    }

    goDetail(e,item1){
        this.context.router.history.push('/Detail/' + item1.rid)
    }
  
  render() {
    return (
      <div className="contentHome">
        <Banner/>
        <div className="list">
            {
                this.state.list.map((item,index)=>{
                    return (
                        <div className="items" key={index}>
                            <div className="items_title">
                                <img alt="" src={item.icon} className="icon"/>
                                <span>{item.tabName}</span>

                                <div className="live_list">
                                    {
                                        item.list.map((item1,number) => {  
                                            return (
                                                <div className="live" key={number} onClick={(e)=>this.goDetail(e,item1)}>
                                                    <img alt="" src={item1.roomSrc} />
                                                    <div className="info">
                                                        <span>{item1.nickname}</span>
                                                        <span>{item1.hn}</span>
                                                    </div>
                                                    <div className="live_title">{item1.roomName}</div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    );
  }
}

export default APP;
