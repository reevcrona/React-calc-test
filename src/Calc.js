import React,{useState} from 'react';

function Calc() {
    
    
    const [input, setInput] = useState(''); // State to hold input value



    const handleClick = (value) => {
        if (value === 'C') {
            setInput(''); // Clear the input field
        } 
         else {
            setInput((prevInput) => prevInput + value); // Append value to input
         }
            
        
    };
    
    
    
    
    
    
    return (
        <div>
            <div id="miniräknare-three" className="hover calc">
                <div className="top">
                    <div className="display display-bg display-bg-og">
                        <input className="input-three" type="text" placeholder="0" value={input} />
                    </div>
                </div>
                <div className="bottom-three">
                    <div className="buttons three">
                    {['00', '0', '.', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', 'x', '/', '+', '-', '%', '='].map(
                            (btnValue) => (
                                <button key={btnValue} onClick={() => handleClick(btnValue)}>
                                    {btnValue}
                                </button>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calc;
