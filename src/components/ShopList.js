import React from 'react';
import dummy from "../db/data.json";
import Goods from './Goods';
import { useHistory } from 'react-router';


function ShopList({type,title}) {

    let data = dummy.sales;
    let history = useHistory();

    if(title==="New" || title ==="Best"){
        data = data.filter( d =>(d.type.indexOf(title.toLowerCase()) !== -1))
    }

    if(type === "main"){ //상품 8개만 표시
        data = data.slice(0,8);
    }

    return (
        <div className="container shoppage"> 

        <h1>{title}</h1>
        <p className="more" onClick={()=>{history.push(`/React-app-shop/${title}`)}}>more</p>
        <hr/>
            <div className="row">
                {
                    data.map(data => (
                        <Goods data={data} key={data.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ShopList
