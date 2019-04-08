import React ,{ Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom'
// import Footer from '../common/footer'
import Header from '../common/header'
import Sidebar from '../common/sidebar'
import Home from '../pages/Home';  
import Detail from '../pages/Detail';
import Category from '../pages/category';
import Rooms from '../pages/Rooms';


export default class Root extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return (
            <Router>
                <div className="content">
                    <Header />
                    <Sidebar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Detail/:roomId" component={Detail} />
                        <Route path="/Category/:id" component={Category} />
                        <Route path="/Rooms/:name" component={Rooms} />
                    </Switch>
                    
                    {/* <Footer/> */}
                </div>
            </Router>
        )
    }
}