import React from 'react'

const CardProduct = () => {
  return (
    <div className="card shadow-sm" style={{ width: '18rem' }}>
      <img
        src="https://via.placeholder.com/286x180"
        className="card-img-top"
        alt="Ảnh demo"
      />
      <div className="card-body">
        <h5 className="card-title">Nguyen anh tuan</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet.
        </p>
        <a href="#" className="btn btn-primary">
          Xem thêm
        </a>
      </div>
    </div>
  );
}

export default CardProduct
