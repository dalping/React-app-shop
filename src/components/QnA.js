import React from 'react'
import {Table} from 'react-bootstrap';

function QnA() {
    return (
        <div className="qna">
            <h4 style={{marginTop:"20px"}}>QnA</h4>
            <button className="btn btn-danger qna_button">문의하기</button> 
            <Table className="qna_table">
                <thead>
                    <tr>
                        <th>답변상태</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>답변완료</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr className="answer">
                        <td colSpan="4">
                            <h5>안녕하세요</h5>
                            <p>오늘 배송 출고했나요?</p>
                            <hr/>
                            <p>고객님, 오늘 주문하신 상품 출고 완료했습니다^^</p>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>Larry the Bird</td>
                        <td>{String(new Date())}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default QnA
