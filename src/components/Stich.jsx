import React from 'react'
import Images from '../Images'

function Stich() {
  return (
    <div className='container'>
      <div className="row">
        <div className="card">
          <h3>Stich</h3>
          <img src={Images.img2} alt=""  className='card-img-top img-thumbnail'/>  
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nesciunt doloribus velit suscipit? Deserunt suscipit laboriosam sint qui, atque blanditiis dolorem itaque harum accusamus a dicta? Tenetur tempore praesentium explicabo?</p>
        </div>  
      </div>
      <div className="row">
        <div className="col-md-12 mt-2 mb-4  text-success">
        <ul className="list-group">
            <caption>Accessories</caption>
            <li className="list-group-item">
                <strong>Cufflinks</strong>
            </li>
            <li className="list-group-item">
                <strong>Pocket Square</strong>
            </li>
            <li className="list-group-item">
                <strong>Lapel Pin and Lapel Flower</strong>
            </li>

        </ul>
        </div>
    </div>
     
    </div>
  )
}

export default Stich