import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Auction from "./Assests/Auction.png";
import Coffee from "./Assests/coffee.jpg";
import biryani from "./Assests/biryani.jpg";
import car from "./Assests/car.jpg";
import jacket from "./Assests/jacket.jpg";
import mobile from "./Assests/mobile.jpg";
import watch from "./Assests/watch.jpg";

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      bids : "current",
      current: true,
      upcoming:false,
      completedBids: false,
      timeout: "--:--"
    }
  }
  //call it after render

componentDidMount = () => {
  this.func();
}

  func(){
    // Set the date we're counting down to
    var countDownDate = new Date("Feb 30, 2019 15:37:25").getTime();
var th = this;
    // Update the count down every 1 second
     setInterval(function () {
        console.log("habiba");
        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        var timeout = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
th.setState({timeout: timeout});
        // If the count down is over, write some text 
        if (distance < 0) {
            // clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

  }

  
  render() {
    const {current,upcoming,completedBids}=this.state
    
    
    return (
      <div>
      <div>
      </div>
      <div>
        <div class="navbar">
          <div class="logo">
            <img src={Auction} width="350px" />
          </div>
          <div class="site-menu-div">
            <ul class="site-menu">
              <li>
              
                <a onClick={()=>{this.setState({current:true, upcoming:false, completedBids:false});
              
              console.log("clicked")}}>Current Bids</a>
              </li>

              <li>
              <a onClick={()=>{this.setState({current:false, upcoming:true, completedBids:false})}}>Upcoming Bids</a>
                
              </li>
              <li>
              <a onClick={()=>{this.setState({current:false, upcoming:false, completedBids:true})}}>Completed Bids</a>
              </li>
            </ul>
          </div>
        </div>
        <div class={current ? 'page divshow' : 'page  divhide'} id="myDiv1">
          <h1 class="heading">Current Bids</h1>
          <div class="images-group">
            <div class="images-group1">
              <img src={Coffee} />
              <p> Habiba 250 1 jan 15 jan</p>
            </div>
            <div class="images-group">
              <div class="images-group1">
                <img src={biryani} />
                <p> Habiba 250 1 jan 15 jan</p>
              </div>
            </div>

            <div class="images-group">
              <div class="images-group1">
                <img src={car} />
                <p> Habiba 250 1 jan 15 jan</p>
              </div>
            </div>
          </div>

          <div class="images-group">
            <div class="images-group1">
              <img src={jacket} />
              <p> Habiba 250 1 jan 15 jan</p>
            </div>

            <div class="images-group1">
              <img src={mobile} />
              <p> Habiba 250 1 jan 15 jan</p>
            </div>

            <div class="images-group1">
              <img src={watch} />
              <p> Habiba 250 1 jan 15 jan</p>
            </div>
          </div>
        </div>
       
        <div class={upcoming ? 'page divshow' : 'page  divhide'} id="myDiv2">
          <h1 class="heading">Upcoming Bids</h1>
          <div class="images-group">
            <div class="images-group1">
              <img src={Coffee} />
              <p> Habiba 250 1 jan 15 jan</p>
            </div>
            <div class="images-group">
              <div class="images-group1">
                <img src={biryani} />
                <p> Habiba 250 1 jan 15 jan</p>
              </div>
            </div>

            <div class="images-group">
              <div class="images-group1">
                <img src={car} />
                <p> Habiba 250 1 jan 15 jan</p>
              </div>
            </div>
          </div>

          <div class="images-group">
            <div class="images-group1">
              <img src={jacket} />
              <p> Habiba 250 1 jan 15 jan</p>
            </div>

            <div class="images-group1">
              <img src={mobile} />
              <p> Habiba 250 1 jan 15 jan</p>
            </div>

            <div class="images-group1">
              <img src={watch} />
              <p> Habiba 250 1 jan 15 jan</p>
            </div>
          </div>
        </div>
       
        <div class={completedBids ? 'page divshow' : 'page  divhide'} id="myDiv3">
          <h1 class="heading">Completed Bids</h1>
          <div class="images-group">
            <div class="images-group1">
              <img src={Coffee} />
              <p> Habiba 250 1 jan 15 jan</p>
            </div>
            <div class="images-group">
              <div class="images-group1">
                <img src={biryani} />
                <p> Habiba 250 1 jan 15 jan</p>
              </div>
            </div>

            <div class="images-group">
              <div class="images-group1">
                <img src={car} />
                <p> Habiba 250 1 jan 15 jan</p>
              </div>
            </div>
          </div>

          <div class="images-group">
            <div class="images-group1">
              <img src={jacket} />
              <p> Habiba 250 1 jan 15 jan</p>
            </div>

            <div class="images-group1">
              <img src={mobile} />
              <p> Habiba 250 1 jan 15 jan</p>
            </div>

            <div class="images-group1">
              <img src={watch} />
              <p> Habiba 250 1 jan 15 jan</p>
            </div>
          </div>
        </div>
      </div>

      <h1>{this.state.timeout}</h1>
      </div>
    )
    
  }
}
    

export default App;
