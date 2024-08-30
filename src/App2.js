
//jsx 안에서 자바스크립트 표현식을 사용할 때는 중괄호로 감싸준다.
function App2() {
    const name = '리액트';
    return (
        <div>

            <h1>{name} 안녕</h1>
            <h1>{name} world</h1>

        </div>
    );
}

export default App2;