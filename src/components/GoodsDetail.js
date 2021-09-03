import React, { useState,useEffect } from 'react'
import { useHistory,useParams } from 'react-router-dom';
import dummy from "../db/data.json";
import {Nav} from 'react-bootstrap';
import '../Detail.scss'; //CSS파일을 여기에 적용
import {CSSTransition} from "react-transition-group";

function GoodsDetail() {
    let history = useHistory();
    let { id } = useParams();
    const [data, setData] = useState([]);
    const [showAlert,setShowAlert] = useState(true);
    const [onTap,setOnTap] = useState(0);
    const [tapSwitch,setTapSwitch] = useState(false);
    
    useEffect(() =>{
        const timer = setTimeout(()=>{setShowAlert(false)},2000);
        return () => {clearTimeout(timer)}
    }, [showAlert]);

    useEffect(()=>{
         setData(dummy.sales.filter( num => {return num.id === Number(id)})[0]);
    },[data]);

    if (data.length === 0) return null;

    
    function TapContent(props){

        useEffect(()=>{
            props.setTapSwitch(true);
        })

        if(props.onTap === 0){
            return <div>안녕하세요</div>
        } else if(props.onTap === 1){
            return <div>저는</div>
        }else{
            return <div>반가워용</div>
        }
    }

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

            {/* Tap */}
            <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={()=>{setTapSwitch(false); setOnTap(0)}}>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=>{setTapSwitch(false); setOnTap(1)}}>Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={()=>{setTapSwitch(false); setOnTap(2)}}>Option 3</Nav.Link>
                </Nav.Item>
            </Nav>

            <CSSTransition in={tapSwitch} classNames="ani" timeout={500}>
                <TapContent onTap={onTap} setTapSwitch={setTapSwitch}></TapContent>
            </CSSTransition>
           

        </div> 
    )


}

export default GoodsDetail
