import React from 'react'

function ShopInfo() {
    return (
        <div className="shopinfo">
            <div className="shopinfo_list">
                <div>
                    <p className="info_title">사업자 정보</p>
                    <p>사업자 등록번호 : 220-12-12345 <br/>통신판매업신고번호 : 2021-경기성남-1234호</p>
                    <p>Tel : 1234-5678 / Email : romini@naver.com</p>
                </div>
  
                <div>
                    <p className="info_title">고객센터</p>
                    <p>경기도 부천시 원미구 부일로 223 (상동) 투나빌딩 9층</p>
                    <p>Tel : 1588-1234 (평일 09:00 ~ 18:00)</p>
                    <p>Fax : 02-123-1234 / EMail : romini@naver.com</p>
                </div>
            </div>
            <p style={{'fontSize':'0.7em'}}>허니베리 사이트의 상품/판매자/쇼핑정보, 컨텐츠, UI 등에 대한 무단 복제, 전송, 배포, 스크래핑 등의 행위는 저작권법, 콘텐츠산업 진흥법 등에 의하여 엄격히 금지됩니다.</p>
            <p style={{'fontSize':'0.7em'}}>COPYRIGHT(C) ROMINI ALL RIGHTS RESERVED.</p>
        </div>
    )
}

export default ShopInfo
