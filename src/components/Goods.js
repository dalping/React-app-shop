import React from 'react'
import { useHistory } from 'react-router-dom'

function Goods({data,sendData}) {

    let history = useHistory();

    return (
        <div className="col-md-3 goods" onClick={()=>{history.push(`/React-app-shop/detail/${data.id}`)}}>
            <img src={data.img} width="100%"/>
            &nbsp;
            <div className="icons">
                {data.type.indexOf('best') !== -1 ? 
                <div className="icons_best">best</div>:null}
                &nbsp;
                {data.type.indexOf('new') !== -1 ? 
                <div className="icons_new">new</div>:null}
            </div>
            {/* <h6>신상품</h6> */}
            <h4>{data.name}</h4>
            <p style={{color:"grey"}}>{data.desc}</p>
            <p>{data.price}</p>
        </div>
    )
}

export default Goods
