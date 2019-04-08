import React, { Component } from 'react';
import {classify} from '../api/mobile'
import {
    Link
  } from 'react-router-dom'
import '../style/category.scss' 


class Category extends Component {
  constructor(props){
    super(props)
    this.state = {
        gamelist:[],
    }
  }

  componentDidMount(){
      this.fetchData(this.props.match.params.id)
  }

  async fetchData(id){
    await classify().then((res)=>{
      const cate2Info = res.data.cate2Info
      const result = cate2Info.filter(item => Number(item.cate1Id) === Number(id))
      this.setState({
        gamelist:result
      })
    })
  }


  componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps.match.params.id)
  }

  render() {
    return (
      <div className="contentlist">
            {
              this.state.gamelist.map((item,index)=>{
                    return (
                        <div className="everyList" key={index}>
                            <Link to={'/Rooms/' + item.shortName}>
                                <img alt="" src={item.icon}/>
                                <p>{item.cate2Name}</p>
                            </Link> 
                        </div>  
                    )
              })
            }
      </div>
    );
  }
}

export default Category;
