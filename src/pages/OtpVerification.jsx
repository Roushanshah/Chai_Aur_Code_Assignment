import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChaiAurCodeHeading from '../components/ChaiAurCodeHeading';

const otpVerification = ({length , onChangeOTP}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [otp, setOTP] = useState(new Array(length).fill(''));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inputsRef = useRef([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    

    const handleChange = (element, index) => {
        var numberRegex = /^\d+$/;
        if(numberRegex.test(element.value)){
            const newOTP = [...otp];
            newOTP[index] = element.value.substring(element.value.length-1);
            setOTP(newOTP);
            if (element.nextSibling && element.value) {
                element.nextSibling.focus();
            }
            onChangeOTP(newOTP.join(''));
        }
        else{
            element.value = '';
        }
        
    };

    const handleBackSpace = (event, index) => {
        if(event.key === 'Backspace'){
            if(otp[index] === ''){
                if(index !== 0){
                    inputsRef.current[index-1].focus();
                }
            }
            else {
                const newOTP = [...otp];
                newOTP[index] = '';
                setOTP(newOTP);
            }
        }
    }
    const otpValue = otp.join('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (otpValue === '1234') {
        navigate('/course-list');
        }
    }
  return (
    <div className="relative w-screen min-h-screen bg-bg-blue flex flex-col font-inter">
        <ChaiAurCodeHeading color='#FFFFFF'/>

        <div className='w-[756px] h-[460px] mt-[60px] ml-[378px] bg-white-100 rounded-[18px] flex flex-col items-center'>
            <div className='mt-[30px] text-black-500 text-[38px] font-sans font-bold leading-[52.08px] text-center tracking-[-5%]'>
                Mobile Phone Verification
            </div>
            <div className='mt-4 mx-20 text-white-400 text-[25px] font-sans text-center leading-[32.55px]'>
                Enter the 4-digit verification code that was sent to your phone number.
            </div>

            <form onSubmit={handleSubmit}>
                <div className='flex gap-4'>
                    {
                        otp.map((data, index) => (
                        <input
                            type='text' 
                            inputMode='numeric' 
                            maxLength="1" 
                            className={`w-[90px] h-[100px] mt-8 bg-blue-100 rounded-[12px] text-black-500 aspect-square text-center text-[48px] border ${otpValue.length === 4 ? otpValue === '1234' ? 'border-green-400' : 'border-red-400' : ''} `}
                            onChange={(e) => handleChange(e.target, index)}
                            ref={(el) => inputsRef.current[index] = el}
                            onKeyDown={(e) => handleBackSpace(e, index)}
                            />
                        ))
                    }
                </div>
                <button type='submit'
                    className={`w-[417px] h-[64px] bg-blue-800 py-[12px] px-[12px] rounded-[8px] mt-6 text-[25px] text-white font-sans ${otpValue.length === 4 ? otpValue === '1234' ? 'bg-green-400' : 'bg-red-400' : ''} `}
                    >
                        Verify Account
                </button>

                {otpValue !== '1234' ? <p className='text-[25px] text-white-400 mt-3 text-center'> Didn’t receive code? <span className='text-blue-800'>Resend</span> 
                </p> : ''}
                
            </form>
        </div>
    </div>
  )
}

export default otpVerification;