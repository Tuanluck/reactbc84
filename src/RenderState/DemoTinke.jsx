import React, { useState } from 'react';

const DemoTinke = () => {
    let [imgSrc,setImgSrc] = useState('https://i.pravatar.cc?u=1');
    const random = () =>{
        let number = Math.floor(Math.random() * 70)
        setImgSrc(`https://i.pravatar.cc?u=${number}`)
    }
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imgSrc} className="card-img-top" alt="Car" />
      <div className="card-body">
        <h5 className="card-title">Bob</h5>
        <p className="card-text">
          Love hiking and outdoors
        </p>
        <h5 className='mb-4'>Age: 19</h5>

        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-success" onClick={()=>{
            random()
          }}>
            ❤️ Like
          </button>
          <button className="btn btn-outline-danger" onClick={random}>
            💔 Dislike
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoTinke;
