import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Detail.css";


const Detail = (props) =>{
    const navigate = useNavigate();
    return <div className='border' style={{paddingTop:20, textAlign:'center', color: 'white'}}>
      <div><img src='./sin.jpg'></img></div>
      <h2 className='font margin'>♬줄거리♬</h2>
      <h3 dangerouslySetInnerHTML={{__html: props.content.decription}}></h3>
      <h2 className='font margin'>♬예고편♬</h2>
      <h3 dangerouslySetInnerHTML={{__html: props.content.youtube}}></h3>
      <h2 className='font margin'>♬명대사♬</h2>
      <h3 dangerouslySetInnerHTML={{__html: props.content.main}}></h3>
      <h3 dangerouslySetInnerHTML={{__html: props.content.main01}}></h3>

      <button className='btn' onClick={() => navigate(-1)}>BACK</button>
    </div>
  }
  
  export default Detail