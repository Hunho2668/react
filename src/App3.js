function App3() {
    const name = '리액트';
    return (
        <div>
            {name === '슈퍼맨' ? <h1>리액트입니다.</h1> : <h1>리액트가아닙니다.</h1>}
        </div>
    );
}

export default App3;