import React, { useState,useEffect } from 'react'
import { useHistory,useParams } from 'react-router-dom';
import dummy from "../db/data.json";
import '../Detail.scss'; //CSS파일을 여기에 적용

function GoodsDetail() {
    let history = useHistory();
    let { id } = useParams();
    const [showAlert,setShowAlert] = useState(true);
    const data = dummy.sales.filter( num => {return num.id === Number(id)})[0]

    useEffect(() =>{
        const 타이머 = setTimeout(()=>{setShowAlert(false)},2000);
        return () => {clearTimeout(타이머)}
    }, [showAlert]);

    return (
        <div className="container detail">
            
            <div className ="title">
                <h4 className="red">상품 상세설명</h4>
            </div>
            {data.stock <= 5 && showAlert === true? 
            <div className="my_alert">
                <p>재고가 얼마 남지 않았습니다.</p>
            </div> : null}
            <div className="row">
                <div className="col-md-6">
                <img src={data.img} width="100%"/>
                </div>
                <div className="col-md-6 mt-4">
                <h4 className="pt-5">{data.name}</h4>
                <p>{data.desc}</p>
                <p>{data.price}원</p>
                <button className="btn btn-danger">주문하기</button> 
                &nbsp;
                <button className="btn btn-danger" onClick={()=>{
                    history.goBack();
                }}>돌아가기</button> 
                </div>
            </div>
        </div> 
    )
}

export default GoodsDetail
