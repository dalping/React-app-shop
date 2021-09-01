import React from 'react'

function Goods({data}) {

    return (
        <div className="col-md-3 goods">
            <img src={data.img} width="100%" alt="" />
            <h6>신상품</h6>
            <h4>{data.name}</h4>
            <p>{data.desc}</p>
            <p>{data.price}</p>
        </div>
    )
}

export default Goods
