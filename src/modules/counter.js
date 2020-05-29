
//Ducks 패턴 -> 리덕스의 일반적인 구조는 액션 컨탠츠 리듀서를 분류하여 기능별로 나눠놓고 쓴다 하지만
//덕스 패턴은 리덕스 패턴을 컴포넌트 별로 나눠놓는다.  분류하지않고서 말이다.
const INCREASE ='counter/INCREASE';
const DECREASE ='counter/DECREASE';

export const increase = () =>({type:INCREASE });
export const decrease = () =>({type:DECREASE });

const initialState={
  number:0
}


//reducer
function counter(state= initialState, action){
  switch (action.type) {
    case INCREASE:
    return{
          number:state.number+1
    };
    case DECREASE:
    return{
          number:state.number-1
    };
    default:
      return state;
  }
}
export default counter;
