import React, { useRef } from 'react'
import '../styles/formAddDevice.css'

const FormAddDevice = () => {

  const formAddDevice = useRef(null)

  const submitAddDevice = (e) => {
    e.preventDefault()
    const fdAddDevice = new FormData(formAddDevice.current)
    
    let newDevice = {}
  
    fdAddDevice.forEach((value,key) => {
      newDevice[key] = value
    })
    console.log(newDevice)
  }

  return (
    <div className='formAddDevice'>
      <div className="title">
        <h1>Add device</h1>
      </div>
      <form ref={formAddDevice} onSubmit={submitAddDevice} className='formContentAddDevice'>
        <h3>Data CubiQ</h3>
        <div className="inputs">
          <input name='name' type="text" placeholder='name'/>
          <select name='type' id='type'>
            <option value="cubiqOne">type</option>
            <optgroup label='CubiQ One'>
              <option value="cubiqOne" >one</option>
              <option value="cubiqOneOcr">one</option>
            </optgroup>
            <optgroup label='CubiQ Line'>
              <option value="cubiqLine">line</option>
              <option value="cubiqLineOcr">line_ocr</option>
            </optgroup>
            <optgroup label='More CubiQs'>
              <option value="cubiqX">CubiQ X</option>
            </optgroup>
          </select>
          <input name='pid' type="text" placeholder='pid'/>
          <input name='city' type="text" placeholder='city'/>
          <input name='vpn' type="text" placeholder='vpn'/>
          <input name='anyDesk' type="text" placeholder='anyDesk'/>
          <select name='board' id='board'>
            <option >board</option>
            <option >jetson nano 2GB</option>
            <option >jetson nano 4GB</option>
            <option >yahboom</option>
          </select>
          <h3>Data Cameras</h3>
          <select name='camera' id='camera'>
            <option >camera</option>
            <option >asus xtion pro</option>
            <option >orbeq femto</option>
            <option >lidar cube 1</option>
          </select>
          <input name='serialCamera' type="text" placeholder='serialCamera'/>
          <select name='ocrCamera' id='ocrCamera'>
            <option >ocr camera</option>
              <option >n/A</option>
            <optgroup label='hikRobot'>
              <option >id 5060</option>
              <option >id 6000</option>
            </optgroup>
          </select>
          <select name='externalCamera' id='externalCamera'>
            <option >external camera</option>
            <option >n/A</option>
            <option >dhajua</option>
            <option >elp</option>
          </select>
          <input name='ipExternalCemera' type="text" placeholder='ipExternaCamera'/>
          <h3>Data Version</h3>
          <input name='versionCubiQ' type="text" placeholder='versionCubiQ'/>
          <input name='versionCubiQ_one' type="text" placeholder='versionCubiQ_one'/>
          <input name='versionMiddleware' type="text" placeholder='versionMiddleware'/>
          <h3>Keywords</h3>
          <input name='keywords' type="text" placeholder='keywords'/>
        </div>
        <div className='btnSubmitAddDevice'>
          <button className='buttonSub' type='submit'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default FormAddDevice