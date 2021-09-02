import React from 'react';
import dummy from "../db/data.json";
import Goods from './Goods';

function ShopList() {

    const data = dummy.sales;

    return (
        <div className="container shoppage"> 
        <h1>Best</h1>
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
