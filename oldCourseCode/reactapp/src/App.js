import './App.css';
import Home from './components/Home'
import NoData from './components/NoData';

const App = () => {

    const dynamicStyle = {
        color: 'red',
        backgroundColor: 'yellow'
    }

    const dynamicStyle1 = {
        color: 'black',
        backgroundColor: 'red'
    }

    const styleCondition = true;

    const str = 'Welcome to iCode Guru';
    const num =  4 + 7;
    const obj = {name: 'hamid', age: 50};
    const arr = ['hamid', 'raza', 'hassan', 40, 56];

    if(styleCondition) {
        return (
            <>
                <p style={{ color: 'red', backgroundColor: 'yellow' }}>
                    {str}
                </p>
                <p style={styleCondition ? dynamicStyle1 : dynamicStyle}>This is my Second Component {num}</p>
                <p className={styleCondition ? "component-style" : "global-css"}  >This is my Third Component {arr}</p>
                <p className="global-css">This is my Fourth Component {obj.name}, {obj.age}</p>
    
                 <Home heading={str} arr={arr} obj={obj}/> 
                 <NoData noDataHeading={"No Data!!!"} />
    
            </>
        );
    }
    else {
        return (
        <>
            <h1>Second Return</h1>
        </>
        )
    } 
    
}

export default App;