/*
리덕스 사용이 권장되는 서비스
- 대부분의 컴포넌트(또는 페이지)에서 공통적으로 사용하는 상태가 있을 때!
=> 로그인 정보 : 로그인 여부, 닉네임, 계정정보
=> 테마
=> 작성 중이던 입력 데이터
*/

import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

function reducer(currentState, action) {
  if (currentState === undefined) {// 상태가 없을땐
    return {
      isSignIn: false,//로그인을 하지 않았다 즉 기본 상태
    };
  }
  const newState = { ...currentState };
  if (action.type === 'SignIn') {//로그인을 시도를 한다
    newState.isSignIn = true//맞다면
    newState.userName = action.userName// 사용자가 직접 입력한 네임이 추가된다
  }
  return newState;
}
const store = createStore(reducer);
export default function App() {
  return (
    <div>
      <h1>아주아주 멋진 웹 서비스입니다. 로그인 필수!</h1>
      <div>
        <Provider store={store}>
          <Form></Form> {/*로그인 폼*/}
          <Service />{/*사용자에게 제공하는 서비스 컴포넌트*/}
        </Provider>
      </div>
    </div>
  );
}

const Form = () => {
  const dispatch = useDispatch();//로그인 여부를 바꿀거다
  return <form onSubmit={e => {
    e.preventDefault()
    dispatch({
      type: "SignIn",
      userName: e.target.userName.value//추가한 유저네임의 값을 키에 넣겠다
    })
  }}>
    <input name="userName" placeholder="사용자 이름을 입력하세요" />
    <button type="submit">Sign In</button>
  </form>
}

const Service = () => {
  const userName = useSelector((state) => state.userName);

  return <>{userName ? <p>{userName}님! 환영합니다!</p> : <p>로그인 후 이용할 수 있습니다</p>}</>
}