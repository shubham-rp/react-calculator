import React, { Component } from 'react'

export class Result extends Component {
    render() {
 
        return (
            
            <div>
                <input value={this.props.result} readOnly={true} style={inputStyle}/>
            </div>
        )
    }
}


  
const inputStyle =   {
    /* reset basic form styles */
    background: '#D3D3D3',
    border: 'none',
    boxShadow: 'none',
    outline: 'none',
    
  
    padding: '10px',
    width: '85%',
    borderBottom: '2px solid #111',
    borderTop: '2px solid #111',
    borderLeft: '2px solid #111',
    borderRight: '2px solid #111',
    color: '#333',
    textAlign: 'right',
    fontSize: '40px',
    borderRadius: '0',
    
  
   
  }  
export default Result
