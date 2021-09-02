import React from 'react'
import { useHistory } from 'react-router-dom'

function Goods({data,sendData}) {

    let history = useHistory();

    return (
        <div className="col-md-3 goods" onClick={()=>{history.push(`/detail/${data.id}`)}}>
            <img src={data.img} width="100%"/>
            <h6>신상품</h6>
            <h4>{data.name}</h4>
            <p>{data.desc}</p>
            <p>{data.price}</p>
        </div>
    )
}

export default Goods
