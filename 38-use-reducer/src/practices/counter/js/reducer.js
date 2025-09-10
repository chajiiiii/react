// --------------------------------------------------------------------------
// 초기화(init) 함수
// - 초기에 리듀서 함수의 초기 상태 값을 설정
export const init = (initialValue = 0) => ({
  count: initialValue,
})

// 초기 상태 값 어떤 형태일까? (타입 지정)
const initialState = {
  count: 0,
}

// --------------------------------------------------------------------------
// 리듀서(reducer) 함수 (순수 함수: 동일 입력 -> 동일 출력)
// - 카운트 증가 로직
// - 카운트 감소 로직
export function reducer(state, action) {
  switch (action.type) {
    case ACTION.PLUS: {
      // 변경된 상태 값 반환
      const { max, step } = action.payload
      const nextCount = state.count + step
      return { count: nextCount > max ? max : nextCount }
    }

    case ACTION.MINUS: {
      // 변경된 상태 값 반환
      const { min, step } = action.payload
      const nextCount = state.count - step
      return { count: nextCount < min ? min : nextCount }
    }

    default: {
      // 기본 상태 값 반환
      return state
    }
  }
}

// --------------------------------------------------------------------------
// 액션(action) 타입
// - 카운트 증가
// - 카운트 감소
const ACTION = {
  PLUS: '@counter/plus', // '카운트 값 증가'
  MINUS: '카운트 값 감소', // '카운트 값 감소'
}

// --------------------------------------------------------------------------
// 액션 크리에이터(action creator): 함수
// - 카운트 증가 액션 생성 { type: ACTION.PLUS, payload: { max, step } }
// - 카운트 감소 액션 생성 { type: ACTION.MINUS, payload: { min, step } }

export const plusAction = (step, max) => ({
  type: ACTION.PLUS,
  payload: { step, max },
})

export const minusAction = (step, min) => ({
  type: ACTION.MINUS,
  payload: { step, min },
})
