import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.css'
const Cards = ({data}) => {
  return (
 <>
{
data.map((element,key)=> {
return (
<>

<Card style={{ width: '22rem',border:'none',background:'rgba(1, 32, 49, 0.342)' }} className='hove mb-4' >
      <Card.Img variant="top" className='cd' src={element.imgdata}/>
    
<div className='card_body' style={{background:'rgba(1, 32, 49, 0.342)' ,border:'10px',borderRadius:'10px'}} > 
    <div className='upper_data d-flex justify-content-between align-item-center'> 

    <h4 className='mt-2' style={{color:'white'}}> {element.rname}  </h4>
    <span > {element.rating} &nbsp; ★ </span>
    </div>
    <div className='lower_data d-flex  justify-content-between '>
        <h5 style={{color:'white'}}> {element.address}  </h5>
        <span style={{color:'white'}}>{element.price}   </span>
          </div>
<div className='extra' ></div>

<div className='last_data d-flex justify-content-between align-items-center'> 


  <img src={element.arrimg}  className="limg" />
    <p style={{color:'white'}}> {element.somedata} </p>

<img src={element.delimg}  className="laimg"/>  



  
    
    
      </div>

     </div>


    </Card>

</>


)


}  )
}




 
 
 </>
  )
}

export default Cards