import './style.css'

export default function ManageArrayState() {
  // 실습 코드 작성
  // ...
  const arrayState = 'A, B, C'

  return (
    <section className="manage-array-state">
      <h2>배열 상태 관리 실습</h2>

      <output>
        <strong>배열 상태</strong> : {arrayState}
      </output>

      <div role="group">
        <button type="button">첫 번째 요소 제거</button>
        <button type="button">'B' 제거</button>
        <button type="button">맨 앞에 'X' 추가</button>
        <button type="button">맨 뒤에 'Y' 추가</button>
        <button type="button">모두 제거</button>
        <button type="button">초기화</button>
        <button type="button">모든 'A'를 'H'로 변경</button>
      </div>

      <div role="group" data-layout-row>
        <input type="text" placeholder="추가할 값" />
        <button type="button">맨 앞에 추가</button>
      </div>

      <div role="group" data-layout-row>
        <input type="text" placeholder="추가할 값" />
        <input type="number" placeholder="인덱스" min={0} max={10} />
        <button type="button">원하는 위치에 추가</button>
      </div>
    </section>
  )
}
