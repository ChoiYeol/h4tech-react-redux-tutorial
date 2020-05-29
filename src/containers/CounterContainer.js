import React from 'react';
import {connect} from 'react-redux';
import Counter from '../components/Counter';
import {increase, decrease } from '../modules/counter';

const CounterContainer =({number, increase , decrease})=>{    //기존 카운터 의 온클릭하면 실행되는거에 컨테이너의 함수를 넣어쥼
  return (<Counter number={number} onIncrease={increase} onDecrease={decrease}/>);
};
ㄴㄴ
const mapStateToProps = state =>({   // state값같은건 없음 커넥트 하면서 state 값 사용가능한듯
  number:state.counter.number,
});

const mapDispatchToProps = dispatch =>(
  {
    increase:()=>{dispatch(increase());} ,    // 커넥트하면서 카운터 컨테이너의 increase 가 이겁니다 하는 json 형태의 익명함수구문으로 변경
    decrease:()=>{dispatch(decrease());} ,
});

export default connect(mapStateToProps, mapDispatchToProps,)(CounterContainer);
