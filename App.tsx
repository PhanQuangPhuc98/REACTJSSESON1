import React, { Component,useState } from "react";
import './App.css';
import image from './Image/image';
import TextInput from './src/Components/TextInput/TextInput'
import Button from './src/Components/Button/Button'
import Languages from './src/Components/Languages/Languages'
const App =()=>
{
    const [showPass,setShowpass]=useState(true);
    const ChangeShow =()=>{
        setShowpass(!showPass)
    }
        return (
            <div id="FormLogin">
                <img src={image.ic_logo} alt="Logo Login"></img>
                <div id="Login">Đăng Nhập</div>
                <TextInput
                type="text"
                placeholder="Email"
                />
                <TextInput
                  type={showPass?"text":"password"}
                  placeholder="Mật khẩu"
                  EyePass="far fa-eye fa-2x"
                  onchange={ChangeShow}
                  ShowPass={showPass}
                  EyeShowPass="fas fa-eye-slash fa-2x"
                />
                <div className="ContainerCheckBox">
                    <div id="RememberPass">
                    <div>
                    <input 
                    type="checkbox"
                    />
                    <label className="RememberPass">Lưu mật khẩu</label>
                    </div>
                    <div>
                    <a href="#">Quên mật khẩu</a>
                    </div>
                    </div>
                </div>
                <Button/>
                <Languages></Languages>
            </div>
        );
}

export default App;