import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChaiAurCode from "./components/ChaiAurCode";
import Batches from "./pages/Batches";
import ManageBundle from "./pages/ManageBundle";
import OtpVerification from "./pages/OtpVerification";


function App() {
  const [otpValue, setOtpValue] = useState('');

  const handleOtpChange = (otp) => {
      console.log("Current OTP:", otp);
      setOtpValue(otp);
  };

  return (
    <div>
      <Routes>
        <Route path='/' element={<OtpVerification length={4} onChangeOtp={handleOtpChange}/>}
        />
        <Route path='/otp-form' element={<OtpVerification length={4} onChangeOtp={handleOtpChange}/>}
        />
        <Route path='/course-list' element={<ManageBundle />}
        />
        <Route
          path='/batches' element={<Batches/>}
        />
      </Routes>
      <ChaiAurCode/>
    </div>
    
  );
}

export default App;
