import React from 'react'
import '../styles/formAddDevice.css'

const FormAddDevice = () => {
  return (
    <div className=''>
      <div className="title">
        <h1>Add device</h1>
      </div>
      <form className='formContent' action="http://localhost:5000/api/devices/" method='POST' >
        <h3>Data CubiQ</h3>
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
          <option value="jetsonNano" disabled>camera</option>
          <option value="jetsonNano">asus xtion pro</option>
          <option value="jetsonNano">orbeq femto</option>
          <option value="jetsonNano">lidar cube 1</option>
        </select>
        <input type="text" placeholder='serialCamera'/>
        <select name='ocrCamera' id='ocrCamera'>
          <option value="jetsonNano">ocr camera</option>
          <optgroup label='hikRobot'>
            <option value="jetsonNano">id 5060</option>
            <option value="jetsonNano">id 6000</option>
          </optgroup>
        </select>
        <select name='externalCamera' id='externalCamera'>
          <option value="jetsonNano">external camera</option>
          <option value="jetsonNano">dhajua</option>
          <option value="jetsonNano">elp</option>
        </select>
        <input type="text" placeholder='ipExternaCamera'/>
        <h3>Data Version</h3>
        <select name="versionCubiQ" id="versionCubiQ">
          <option value="versionCubiQ">version cubiq</option>
          <option value="V3.0.40">V3.0.40</option>
          <option value="V3.0.41 -no save">V3.0.41 -no save</option>
        </select>
        <select name="versionCubiQ_one" id="versionCubiQ_one">
          <option value="versionCubiQ_one">version cubiq-one</option>
          <option value="specialVersion">3.7.3 Beta-19-14-22</option>
          <option value="specialVersion">special version</option>
        </select>
        <select name="versionMiddleware" id="versionMiddleware">
          <option value="versionMiddleware">version middleware</option>
          <option value="versionMiddleware">3.2.4</option>
          <option value="versionMiddleware">3.3.2 Beta-18-04-22</option>
          <option value="versionMiddleware">3.3.3 Beta-21-04-22</option>
        </select>
        <h3>Keywords</h3>
        <input type="text" placeholder='keywords'/>
        <div className='btnSubmit'>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default FormAddDevice