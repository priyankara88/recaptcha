import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'


const App = () => {
  const reChaptchaRef=useRef<ReCAPTCHA|null>(null);



  const Submit=()=>{
    const captchaValue=reChaptchaRef.current?.getValue();
    console.log("captcha vaölue",captchaValue);
  }
  
  return (
    <div className="w-full h-screen flex flex-col bg-green-600 items-center justify-center">
      {/* UserName Input */}
      <div className="flex flex-col items-center gap-2">
        <label htmlFor="username" className="text-white font-semibold">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-80 h-12 border rounded-md border-amber-950 px-3"
          placeholder="Enter your username"
        />
      </div>

      {/* Password Input */}
      <div className="flex flex-col items-center gap-2 mt-4">
        <label htmlFor="password" className="text-white font-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-80 h-12 border rounded-md border-amber-950 px-3"
          placeholder="Enter your password"
        />
      </div>

      {/* Submit Button */}
      <button onClick={Submit} className="w-32 h-12 mt-6 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-600 transition duration-300">
        Submit
      </button>
      <ReCAPTCHA ref={reChaptchaRef} className="mt-5" sitekey="6LdHzM8qAAAAAEAZMGroj9jx_OUrX_JvT3BRK6Em" />

    </div>
  );
};

export default App;
