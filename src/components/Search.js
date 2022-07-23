import React, { useEffect, useState } from 'react'
import Fooddata from './FoodData'
import Form from 'react-bootstrap/Form'
import Cards from './Cards'

const Search = () => {

const [ fdata,setfdata] = useState(Fooddata);

const [ copydata,setcopydata] = useState([]);


const changee = (e) => {

let getchangedata = e.toLowerCase();
if(getchangedata == ''){
    setcopydata(fdata);
}
else{
    let storedata = copydata.filter((ele,k)=>{
return ele.rname.toLowerCase().match(getchangedata);

});
 setcopydata(storedata);

}

}

  
const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"


useEffect(()=>{

setTimeout(() => {
    setcopydata(Fooddata);
}, 3000);



},[] )


return (

   <>


   
   <div className='container d-flex justify-content-between align-item-center'> 
<img src='881137-200.png' style={{ width: "8rem", position: "relative", left: "2%", cursor: "pointer" }} alt=''/> 
<h2 style={{color: "#1b1464", cursor: "pointer"}} > Stitch Favorute Resturant  </h2>
   </div>
   
   <Form className='d-flex justify-content-center align-items-center mt-3'>
      <Form.Group className="mx-2 col-lg-4" controlId="formBasicEmail">
        
        <Form.Control type="text"
        onChange={(e)=>changee(e.target.value)}
        
        placeholder="Search restutrant" />
       
      </Form.Group>
<button className='btn text-light col-lg-1'  style={{background: "#ed4c67" }}> Search </button>
</Form>


<section className='item_section mt-4 container'> 

    <h2 className='px-4' style={{ fontWeight: 400 }}> You Will Find All What You Need Here      </h2>
 <div className="row mt-2 d-flex justify-content-around align-items-center"> 

{copydata && copydata.length ?<Cards  data={copydata} /> :'loading .... ' }

 </div>
</section>


   </>
  
  
  
    )
}

export default Search