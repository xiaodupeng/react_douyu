import React ,{ Component } from 'react';
import {rooms} from '../api/mobile'
import PropTypes from 'prop-types';
import '../style/rooms.scss'

class Rooms extends Component {
    constructor(props){
        super(props)
        this.state = {
           roomId:"",
           roomList:[]
        }
    }
    static contextTypes = {
        router: PropTypes.object
    }
    componentDidMount(){
        this.fetchData(this.props.match.params.name)
    }

    async fetchData(name){
        await rooms({ page:0, type: name }).then((res)=>{
            console.log(res)
            this.setState({
                roomList:res.data.list
            })
        })
    }

    goDetail(e,item1){
        this.context.router.history.push('/Detail/' + item1.rid)
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
            </div>
        )
    }
}

export default Rooms;