import logo from './math_app_logo.jpg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    20x5=<input type={'number'} />
                </p>
            </header>
        </div>
    );
}

export default App;
