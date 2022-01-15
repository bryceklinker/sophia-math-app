import logo from './math_app_logo.jpg';
import './App.css';
import {useState} from 'react';

function App() {
    const [awnser, setAwnser] = useState(0)
    const[inCorrect, setIsCorrect] = useState(null)
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <form onSubmit={evt=>{
                    if (awnser == 100){
                        setIsCorrect(true)
                    }else{setIsCorrect(false)}
                }}>
                    20x5=<input onChange={evt => setAwnser(evt.target.value)} value={awnser} className={'answer-input'} type={'number'} />
                </form>
            </header>
        </div>
    );
}

export default App;
