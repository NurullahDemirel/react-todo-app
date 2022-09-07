import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Home = ({isDarkMode}) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('username') !== null){
            navigate('/todos');
        }
    },[])
    return (
        <div className={`w-full h-screen flex items-center justify-center flex-col ${!isDarkMode ? '' : 'text-white'}`}>
            <div className={''}>
                Todoları görmek için kayıt olun
            </div>
            <Link to='signup'>
                <h2 className={`${!isDarkMode ? '' : 'text-white'}`}>Sign up</h2>
            </Link>
        </div>

    )
}
export default Home;