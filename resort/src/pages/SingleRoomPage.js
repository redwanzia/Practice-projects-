import React, { Component } from 'react'
import defaultBcg from '../images/details-1.jpeg'
import Hero from '../components/Hero'  
import Banner from '../components/Banner'  
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'
import StyledHero from '.././components/StyledHero'



export class SingleRoomPage extends Component {

  constructor(props){
    super(props);
    // console.log(this.props)
    this.state ={
    slug: this.props.match.params.slug,
    defaultBcg

    }
  }

  static contextType = RoomContext
  // componentDidMount(){}
  render() {
    const {getRoom} =this.context
    const room = getRoom(this.state.slug)
    if(!room){
      return (
        <div className='error'>
          <h3>No such room found</h3>
          <Link to='/rooms' className='btn-primary'> Back to rooms</Link>
        </div>
        
        )
      
      

    }
    const {name,description,capacity,size,price,extras,breakfast,pets,images} =room



    // displaying Images
    const [mainImg, ...defaultImgs] = images
  // ...................


    return (
      <React.Fragment>
        <StyledHero img={mainImg|| this.state.defaultBcg }>
          <Banner title={`${name} room `}>
            <Link to='/rooms' className='btn-primary'>
              Back to Rooms
            </Link>
          </Banner>
        </StyledHero>


        <section className="single-room">
          <div className="single-room-images">
            {defaultImgs.map((item,index) =>{
              return <img key={index} src={item} alt={name}/>}              
              )}
          </div>
          <div className="single-room-info">
              <article className="desc">
                <h3>Details</h3>
                <p>{description}</p>
              </article>
              <article className="info">
                <h3>Info</h3>
                <h6>Price : ${price}</h6>
                <h6>Size : {size} SQFt.</h6>
                <h6>
                max capacity : {
                  capacity > 1 ? `${capacity}people` : `${capacity} person `
                }
                </h6>
                <h6>
                  {pets ? 'pets allowed' : 'pets not allowed'}
                </h6>
                <h6> {breakfast && 'Breakfast included'} </h6>
            </article>
          </div>
        </section>
        <section className = 'room-extras' >
          <h6>extras</h6>
          <ul className="extras">
                {extras.map((item,index) => {
                  return <li key={index} > - {item}</li>

                })}
          </ul>
                
                
        </section>
      
      </React.Fragment>
    )
  }
}

export default SingleRoomPage
