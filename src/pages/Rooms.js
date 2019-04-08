import React ,{ Component } from 'react';
import {rooms} from '../api/mobile'
import PropTypes from 'prop-types';
import '../style/rooms.scss'


class Rooms extends Component {
    constructor(props){
        super(props)
        this.state = {
            page:1,
            roomId:"",
            roomList:[]
        }
    }
    static contextTypes = {
        router: PropTypes.object
    }
    componentDidMount(){
        this.addMore()
    }

    async fetchData(page,name){
        await rooms({ page:page, type: name }).then((res)=>{
            if(res.data.list.length !==0){
                this.setState({
                    roomList:this.state.roomList.concat(res.data.list)
                })
            }else{
                alert("没有更多数据了")
            }
        })
    }

    goDetail(e,item1){
        this.context.router.history.push('/Detail/' + item1.rid)
    }

    async addMore(){
        this.fetchData(this.state.page++,this.props.match.params.name)
    }

    render(){
        return (
            <div className="rooms">
                {
                    this.state.roomList.map((item1,index)=>{
                        return (
                            <div className="live" key={index} onClick={(e)=>this.goDetail(e,item1)}>
                                <img alt="" src={item1.roomSrc} />
                                <div className="info">
                                    <span>{item1.nickname}</span>
                                    <span>{item1.hn}</span>
                                </div>
                                <div className="live_title">{item1.roomName}</div>
                            </div>
                        )
                    })
                }

                <div className="addMore" onClick={()=>this.addMore()}>
                    加载更多
                </div>
            </div>
        )
    }
}

export default Rooms;