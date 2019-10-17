import React, { Component } from 'react';


export class Calculate extends Component {
    render() {
        return (
            <div className="calculator">

                
                
                
                <div className="calculator-buttons" style={gridStyle}>
                <button name="C" onClick={e => this.props.onClick(e.target.name) } style={clearButtonStyle}>C</button>
                <button name="D" onClick={e => this.props.onClick(e.target.name) }  style={delButtonStyle}>DEL</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name) }  style={buttonStyle}>/</button>
                
                

                <button name="7" onClick={e => this.props.onClick(e.target.name) }  style={buttonStyle}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name) }  style={buttonStyle}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name) }  style={buttonStyle}>9</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name) }  style={buttonStyle}>*</button>

                <button name="4" onClick={e => this.props.onClick(e.target.name) }  style={buttonStyle}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name) }  style={buttonStyle}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name) }  style={buttonStyle}>6</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name) }  style={buttonStyle}>-</button>

                <button name="1" onClick={e => this.props.onClick(e.target.name) }  style={buttonStyle}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name) }  style={buttonStyle}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name) }  style={buttonStyle}>3</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name) }  style={buttonStyle}>+</button>
                
                <button name="0" onClick={e => this.props.onClick(e.target.name) }  style={zeroButtonStyle}>0</button>
                
                
                <button name="(" onClick={e => this.props.onClick(e.target.name) }  style={buttonStyle}>(</button>
                <button name=")" onClick={e => this.props.onClick(e.target.name) }  style={buttonStyle}>)</button>

                <button name="." onClick={e => this.props.onClick(e.target.name) }  style={buttonStyle}>.</button>
                

                
                <button name="=" onClick={e => this.props.onClick(e.target.name) }  style={equalsButtonStyle}>=</button>
                
                
                </div>                
                
                
                
            </div>
        )
    }
}




const buttonStyle = {
  background: 'rgba(0, 0, 0, 0.5)', /* light background with opacity 50% */
  border: '1px solid #111', /* black border */
  padding: '20px',
  borderRadius: '5px', /* rounded corners */
  fontSize: '22px', /* larger fonts */
  cursor: 'pointer', /* make it look clickable */
  color: '#EEE', /* white text */
  
}

const clearButtonStyle = {
  gridColumn: 'span 2',
  background: '#3572DB',
  borderRadius: '5px',
  fontSize: '22px', /* larger fonts */
  cursor: 'pointer', /* make it look clickable */
  color: '#EEE', /* white text */
  border: '1px solid #111'
}

const equalsButtonStyle = {
  gridColumn: 'span 3',
  border: '1px solid #111',
  borderRadius: '5px',
  fontSize: '22px', /* larger fonts */
  cursor: 'pointer', /* make it look clickable */
  color: '#EEE', /* white text */
background: '#28D060'
}

const delButtonStyle = {
  border: '1px solid #111',
  borderRadius: '5px',
  fontSize: '22px', /* larger fonts */
  cursor: 'pointer', /* make it look clickable */
  color: '#EEE', /* white text */
background: 'rgba(255, 0, 0, 0.5)'
}

const zeroButtonStyle = {
  gridColumn: 'span 2',
  border: '1px solid #111',
  borderRadius: '5px',
  fontSize: '22px', /* larger fonts */
  cursor: 'pointer', /* make it look clickable */
  color: '#EEE', /* white text */
  background: 'rgba(0, 0, 0, 0.5)'
  
}


const gridStyle = {
    /* small spacing within our container */
    padding: '20px',
  
    /* the grid stuff! */
    display: 'grid',
    
  
    /* create 4 columns */
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    
    gridGap: '5px'
  }

export default Calculate
