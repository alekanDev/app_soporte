import React from 'react'
import '../styles/formAddDevice.css'

const FormAddDevice = () => {
  return (
    <div className='formAddDevide'>
      <div className="title">
        <h1>Add device</h1>
      </div>
      <form className='formContent'>
        <h3>Data CubiQ</h3>
        <div className="inputs">
          <input type="text" placeholder='name' id='name'/>
          <select name='type' id='type'>
            <option value="cubiqOne">type</option>
            <optgroup label='CubiQ One'>
              <option value="cubiqOne">one</option>
              <option value="cubiqOneOcr">one_ocr</option>
            </optgroup>
            <optgroup label='CubiQ Line'>
              <option value="cubiqLine">line</option>
              <option value="cubiqLineOcr">line_ocr</option>
            </optgroup>
            <optgroup label='More CubiQs'>
              <option value="cubiqX">CubiQ X</option>
            </optgroup>
          </select>
          <input type="text" placeholder='pid'/>
          <input type="text" placeholder='city'/>
          <input type="text" placeholder='vpn'/>
          <input type="text" placeholder='anyDesk'/>
          <select name='board' id='board'>
            <option value="jetsonNano">board</option>
            <option value="jetsonNano">jetson nano 2GB</option>
            <option value="jetsonNano">jetson nano 4GB</option>
            <option value="jetsonNano">yahboom</option>
          </select>
          <h3>Data Cameras</h3>
          <select name='camera' id='camera'>
            <option value="jetsonNano">camera</option>
            <option value="jetsonNano">asus xtion pro</option>
            <option value="jetsonNano">orbeq femto</option>
            <option value="jetsonNano">lidar cube 1</option>
          </select>
          <input type="text" placeholder='serialCamera'/>
          <select name='ocrCamera' id='ocrCamera'>
            <option value="jetsonNano">ocr camera</option>
              <option value="jetsonNano">n/A</option>
            <optgroup label='hikRobot'>
              <option value="jetsonNano">id 5060</option>
              <option value="jetsonNano">id 6000</option>
            </optgroup>
          </select>
          <select name='externalCamera' id='externalCamera'>
            <option value="jetsonNano">external camera</option>
            <option value="jetsonNano">n/A</option>
            <option value="jetsonNano">dhajua</option>
            <option value="jetsonNano">elp</option>
          </select>
          <input type="text" placeholder='ipExternaCamera'/>
          <h3>Data Version</h3>
          <input type="text" placeholder='versionCubiQ'/>
          <input type="text" placeholder='versionCubiQ_one'/>
          <input type="text" placeholder='versionMiddleware'/>
          <h3>Keywords</h3>
          <input type="text" placeholder='keywords'/>
        </div>
        <div className='btnSubmit'>
          <button className='buttonSub' type='submit'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default FormAddDevice