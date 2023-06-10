import React from 'react'

function Home() {
  return (
    <div className="container-fluid ">
        <div className="row">
            <div className="card mt-2 mb-2">
                <div className="card-body">
                    <div className="col-md-6 mt-3 mb-2">
                        <h3>TRICK & STICK</h3>
                        <p>This page is all about Trick And Stick</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 mt-2 mb-2">
                <div className="card">
                    <img src="https://picsum.photos/id/357/1200/800" alt="no image" className='card-img-top img-thumbnail' />
                    <h3>Watch</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quos sunt a recusandae repudiandae esse? Ut vero velit quia aspernatur cumque, quibusdam, itaque neque rem tempora earum nam consequuntur exercitationem.</p>
                </div>
            </div>
            {/* <div className="col-md-6 mt-2 mb-2">
                <div className="card">
                    <img src="https://picsum.photos/id/357/1200/800" alt="no image" className='card-img-top img-thumbnail' />
                    <h3>Watch</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quos sunt a recusandae repudiandae esse? Ut vero velit quia aspernatur cumque, quibusdam, itaque neque rem tempora earum nam consequuntur exercitationem.</p>
                </div>
            </div> */}
        </div>
        
    </div>
  )
}

export default Home