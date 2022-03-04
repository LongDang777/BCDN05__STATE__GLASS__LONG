import React, { Component } from 'react';
import dataGlasses from '../../src/DataGlasses/dataGlasses.json';

export default class HomePage extends Component {

  dataGlasses = dataGlasses;

  state = {
    glassCurrent: {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  }

  renderGlassesList = () => {
    return dataGlasses.map((glassItem, index) => {
      return (
        <img onClick={() => { this.changGlass(glassItem) }} className='border border-width-1 ml-2 p-2' style={{ width: '110px', cursor: 'pointer' }} key={index} src={glassItem.url} />
      )
    })
  }

  changGlass = (newGlass) => {
    this.setState({
      glassCurrent: newGlass
    })
  }


  render() {
    const keyFrame = `@keyframes animationChangeGlass${Date.now()} {
      from{
          opacity: 0;
      }
      to{
          opacity:0.7
      }
  }`
    const styleGlasses = {
      width: '160px',
      top: '96px',
      right: '139px',
      opacity: '0.7',
      animation: `animationChangeGlass${Date.now()} 1s`,

    }
    const info = {
      width: '300px',
      top: '260px',
      left: '369px',
      textAlign: 'left',
      paddingLeft: '10px',
      backgroundColor: 'rgba(139, 69, 19, 0.53)',
      height: '106px'
    }
    const keyFrameName = `@keyframes animationName${Date.now()} {
      from{
          opacity : 0
      }
      to{
          opacity : 1
      }
  }`
    const nameStyle = {
      color: '#3b48d5',
      fontSize: '20px',
      animation: `animationName${Date.now()} .5s linear`
    }

    let glass = this.state.glassCurrent;

    return (
      <div className='container-fluid' style={{ backgroundImage: 'url(./glassesImage/background.jpg)', backgroundSize: 'cover' }}>
        <style>
          {keyFrame} {/* animation */}
          {keyFrameName}
        </style>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <h2 className='header'>TRY GLASSES APP ONLINE</h2>
          <div className='row text-center'>
            <div className='col-6 mt-5'>
              <div className='position-relative' >
                <img className='position-absolute' style={{ width: '300px' }} src="./glassesImage/model.jpg" alt="" />
                <img style={styleGlasses} className='glassStyle position-absolute' src={glass.url} alt="" />
                <div style={info} className='position-relative'>
                  <span style={nameStyle} className='font-weight-bold'>{glass.name}</span>
                  <p className='mt-2' style={{ fontSize: '14px', fontWeight: '500', color: '#fff' }}>{glass.desc}</p>
                </div>
              </div>
            </div>
            <div className='col-6 mt-5 text-left mb-4'>
              <img style={{ width: '300px' }} src="./glassesImage/model.jpg" alt="" />
            </div>
            <div className='p-3 bg-light container text-center mt-5 mb-5 d-flex justify-content-center'>
              {/* Div chứa các kính được chọn */}
              {this.renderGlassesList()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
