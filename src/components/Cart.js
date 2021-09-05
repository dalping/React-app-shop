import React from 'react'
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';
import '../Cart.scss'; //CSS파일을 여기에 적용

function Cart(props) {
    
    return (
        <div className="cart">
            <h1>장바구니</h1>
            <Table responsive="sm" className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>상품금액</th>
                </tr>
                </thead>
                <tbody>
                    {props.store.map((data,idx) =>(
                        <tr key={idx}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td><button onClick={()=>{ props.dispatch({type:'add', id:data.id})}}>+</button> 
                                {data.quan} 
                            <button onClick={()=>{ props.dispatch({type:'minus', id:data.id})}}>-</button></td>
                            <td>{data.price * data.quan}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

function func(state){ //state를 props화 하기
    return {
        store : state
    }
}

export default connect(func)(Cart)
// export default Cart  
