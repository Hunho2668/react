
function App30() {
    let state = '';
    const login = 'y';
    if (login === 'n') {
        state = '로그인 성공';
    } else {
        state = '로그인 실패';
    }
    return (
        <div>
            {state}
        </div>
    )
}

export default App30;