import React from 'react'

function Calculator() {
   
    const [celcius,setCelsius]=useState('');
    const [kelvin,setKelvin]=useState('');
    const [fahr,setFahr]=useState('');

    const handleChange = (event) =>{
        const value = event.target.value;
        if(!isNaN(value)){
            setCelsius(value);
        }
    };
    const ChangeKelvin = () => {
        const celciusFloat = parseFloat(celcius);
        if(!isNaN(celciusFloat)){
            const kelvinValue = celciusFloat + 273.15;
            setKelvin(kelvinValue.toFixed(2));
            setFahr('');
        }
    };
    const ChangeFahr = () => {
        const celciusFloat = parseFloat(celcius);
        if(!isNaN(celciusFloat)){
            const fahrenheitValue = celciusFloat * 1.8 + 32;
            setFahr(fahrenheitValue.toFixed(2));
            setKelvin('');
        }
        
    }

    
  return (
    <div style={{
        marginLeft: '200px',
        marginRight: '200px',
        marginTop: '100px',
        justifyContent: 'center',
        padding: '20px',
        border: '5px solid',
        borderColor: 'rgb(56,56,45)',
        borderRadius:'20px',
        backgroundColor: 'rgb(64,64,64)',
        }}>
        <h3 style={{
            color:'rgb(0,0,0)',
            textAlign:'center'
        }}>Temperature Conversion</h3>
        <label style={{
            display:'flex',
            flexDirection:'column',
            justifyContent: 'center',
            paddin:'30px',
        }}>
            <p style={{textAlign:'center',}}> Enter Celcius </p>
            <input
                id='input'
                type='integer'
                value={celcius}
                onChange={handleChange} 
            
            />
            <button id='kelbut' style={{
                backgroundColor: 'rgb(255,255,255)',
                marginTop:'15px',
                border:'3px solid',
                borderColor:'rgb(64,64,64)',
                height:'35px',
                borderRadius:'15px',
            }} 
            onClick={ChangeKelvin}>
                Convert to Kelvin
            </button>
            <button id='fahrbut' style={{
                backgroundColor: 'rgb(255,255,255)',
                marginTop:'15px',
                border:'3px solid',
                borderColor:'rgb(64,64,64)',
                height:'35px',
                borderRadius:'15px',
            }} 
            onClick={ChangeFahr}>
                Convert to Fahrenheit
            </button>
        </label>
        <h4 style={{textAlign:'center',}}>Result: {kelvin}{fahr}</h4>
        
        
    </div>
  )
}

export default Calculator