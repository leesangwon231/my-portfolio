import React from 'react';
import "./Home.css"
const Home = () => {
  return (
    <div className={"contents_home"}>
      <div className={"contents_title"}>
          <h1>이상원</h1>
          <h1>리엑트 포트폴리오</h1>
      </div>
      <div className={"contents_description"}>
          <h1>안녕하세요</h1>
          <h1>개발자, 이상원 입니다.</h1>
      </div>
      <div className={"contents_more"}></div>
        <div className={"contents_more_button"}>더 알아보기</div>
    </div>
  );
}

export default Home;