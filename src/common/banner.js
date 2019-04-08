import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import '../style/banner.scss'

class Banner extends Component {
    constructor(props){
        super(props)
        this.state = {
            billboards: [
                {
                  imageUrl:
                    'https://staticlive.douyucdn.cn/storage/webpic_resources/upload/slide/2017/0828/201708281533217578.jpg'
                },
                {
                  imageUrl:
                    'https://staticlive.douyucdn.cn/storage/webpic_resources/upload/slide/2017/0907/201709071732053454.png'
                },
                {
                  imageUrl:
                    'https://staticlive.douyucdn.cn/storage/webpic_resources/upload/slide/2017/0915/201709151037285098.jpg'
                },
                {
                  imageUrl:
                    'https://staticlive.douyucdn.cn/storage/webpic_resources/upload/slide/2017/0918/201709181538588580.jpg'
                },
                {
                  imageUrl:
                    'https://staticlive.douyucdn.cn/storage/webpic_resources/upload/slide/2017/0810/201708101123152416.jpg'
                },
                {
                  imageUrl:
                    'https://staticlive.douyucdn.cn/storage/webpic_resources/upload/slide/2017/0908/201709082136105853.jpg'
                }
              ],
        }
    }
    componentDidMount(){
        new Swiper('.swiper-container', {
            loop : true,
            autoplay: {
                delay: 2000,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
    render() {
        return (
            <div className="banner">
                <div className='swiper-container'>
                    <div className='swiper-wrapper'>
                {
                    this.state.billboards.map((item,index)=>{
                        return(
                            <div className="swiper-slide" key={index}>
                                <img alt="" src={item.imageUrl} key={index}></img>
                            </div>  
                        )  
                    })
                }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        );
    }     
}

export default Banner;