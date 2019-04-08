import React, { Component } from 'react';
import '../style/detail.scss'

class Detail extends Component {
  constructor(props){
    super(props)
    this.state = {
        roomId:'',
    }
  }

  componentDidMount(){
    console.log(this.props.match.params.roomId)
    this.setState({
      roomId:'//m.douyu.com/' + this.props.match.params.roomId
    })
  }


  render() {
    return (
      <div>
          <iframe title="This is a unique title" className="dy-inframe" frameBorder="0" src={this.state.roomId}/>
      </div>

    );
  }
}

export default Detail;
