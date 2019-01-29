import React, { Component } from 'react';
import "./Auction.css";
import watch from "../../Assests/watch.jpg"
import Auction from "../../Assests/Auction.png";
import car from "../../Assests/car.jpg"
import biryani from "../../Assests/biryani.jpg";
import coffee from "../../Assests/coffee.jpg";
import jacket from "../../Assests/jacket.jpg";
import mobile from "../../Assests/mobile.jpg";
import tv12 from "../../Assests/watch.jpg";

class Auction extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <div className="navbar">
            <div className="logo">
                <img src={Auction} width="350px" />
    
            </div>
            <div className="site-menu-div">
                <ul className="site-menu">
    
                    <li>
                        <a href="./auction1.html" onclick="hide('div1')">Current Bids</a>
                    </li>
    
    
    
                    <li>
                        <a href="javascrit:void(0)" onclick="hide('div2')">Upcoming Bids</a>
    
                    </li>
                    <li>
                        <a href="#completedbids" onclick="hide('div3')">Completed Bids</a>
                    </li>
    
                </ul>
            </div>
        </div>
        <div className="page" id="myDiv" style={{display: "block"}}>
            <h1 className="heading">Bidding</h1>
            <div className="images-group">
    
                <div className="images-group1">
                    <img src={coffee} />
                    <p style={{display:"block"}}> Habiba
                        250
                        1 jan
                        15 jan</p>
                </div>
    
                <div className="images-group1">
                        <img src={biryani} />
                        <p style={{display:"block"}}> biryani</p>
                    </div>
                   
                <div className="images-group1">
                    <img src={mobile} />
                    <p style={{display:"block"}}> biryani</p>
                </div>
               
    
            </div>
            <div className="images-group">
    
                    <div className="images-group1">
                            <img src={tv12} />
                            <p style={{display:"block"}}> biryani</p>
                        </div>
                       
                        
                           
                            <div className="images-group1">
                                    <img src={jacket} />
                                    <p style={{display:"block"}}> biryani</p>
                                </div>
    
                                <div className="images-group1">
                                        <img src={watch} />
                                        <p style={{display:"block"}}> biryani</p>
                                    </div>
                               
              
               
            </div>
    
        </div>
        <div id="myDiv2" style={{display: "none"}}>
            <h1 className="heading">Upcoming Bids</h1>
            <div className="images-group">
                <img src={biryani}/>
                <img src={coffee} />
                <img src={mobile} />
    
            </div>
            <div className="images-group">
                <img src={tv} />
                <img src={watch} />
                <img src={jacket} />
            </div>
        </div>
        <div>
                <div id="myDiv3" style={{display: "none"}}>
                        <h1 className="heading">Completed Bids</h1>
                        <div className="images-group">
                                <img src={biryani}/>
                            <img src={coffee} />
                            <img src={mobile} />
                
                        </div>
                        <div className="images-group">
                            <img src={tv} />
                            <img src={watch} />
                            <img src={jacket} />
                        </div>
            </div>
            <div>
    
    
    
        </div>
        </div>
            </div>
         );
    }
}
 
export default Auction;
