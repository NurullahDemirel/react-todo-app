import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Signup = ({isDarkMode}) => {
    const [userName,setUserName] = useState('')
    const navigate = useNavigate();
    const onsubmit  = e => {
        e.preventDefault();
        localStorage.setItem('username',userName);
        navigate('/todos');
    }
  return (
      <div className={'w-full h-screen flex items-center justify-center'}>
          <form action="src/components/pages/Signup" className={'w-full flex justify-center flex-col'} onSubmit={onsubmit}>
              <input type="text" placeholder={'Enter an username'} className={`w-[75%] m-auto h-[50px] p-5 ${!isDarkMode ? 'border border-gray-800 rounded' : ''}`} value={userName} onChange={e => setUserName(e.target.value)} />
              <button className={'mt-4 w-[10%] bg-red-600 m-auto rounded'}>Submit</button>
          </form>
      </div>
  )
}
export default Signup;