import {useState} from "react";
import "./App01.css"

function App(){
    const [lotto, setLotto] = useState([]);

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const now = `${year}년 ${month}월 ${date}일`;

    return<div className="container">
        <div className="lotto">
            <h3><span>{now}</span>로또 번호</h3>
            <div className="numbers">
                {lotto.map((num, idx) => {
                    return <div className="eachnum" key={idx}>{num}</div>
                })}
            </div>
            <button onClick={() => {
                const temp = [];
                while(temp.length < 6){
                    let number = Math.floor(Math.random() * 45) + 1;
                    if(temp.indexOf(number) === -1){
                        temp.push(number);
                    }
                }
                setLotto(temp);
            }}>추첨</button>
            <button onClick={() => {
                setLotto([]);
            }}>리셋</button>
        </div>
    </div>
}

export default App;