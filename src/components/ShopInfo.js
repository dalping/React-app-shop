import React from 'react'

function ShopInfo() {
    return (
        <div className="shopinfo">
            <div className="shopinfo_list">
                <div>
                    <h4>Shop(주)</h4>
                    <p>사업자 등록번호. 220-12-12345</p>
                    <p>통신판매업신고번호. 2021-경기성남-0349호</p>
                    <p>Tel. 1234-5678</p>
                    <p>Email. romini@naver.com</p>
                </div>
                <div>
                    <h4>고객센터</h4>
                    <p>강원도 춘천시 퇴계로 12</p>
                    <p>Tel. 1234-5678</p>
                    <p>1:1문의 바로가기</p>
                </div>
                <div>
                    <h4>전자금융거래 분쟁처리</h4>
                    <p>1:1문의 바로가기</p>
                </div>
            </div>
            <h7 style={{'fontSize':'14px'}}>COPYRIGHT(C) ROMINI ALL RIGHTS RESERVED.</h7>
        </div>
    )
}

export default ShopInfo
