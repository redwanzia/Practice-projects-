import React, { Component } from 'react'
import  './tour.scss'
import "@fortawesome/fontawesome-free/css/all.min.css";



 class Tour extends Component {

  state = {
    showInfo: false  
  }
  handleInfo = ()=>{

    this.setState({

      showInfo: !this.state.showInfo
    })
  }



  render() {
   const {id,city,img,name,info} = this.props.tour
   const {removeTour} = this.props
    return (
<article className='tour' >
    <div className = 'img-container' >
      <img src={img} alt="city image"/>
      <span className = 'close-btn' >
      <a className='closeIcon' href="#">x</a>
      </span>
    </div>
    <div className="tour-info">
      <h3>{city}</h3>
      <h4>{name}</h4>
      <h5>info <span onClick = {this.handleInfo} ><a className='info-btn' href="#">show Info</a> </span></h5>
      {this.state.showInfo && <p>{info}</p>}
      
    </div>
    

</article>
    )
  }
}

export default Tour
