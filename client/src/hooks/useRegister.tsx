import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function useRegister(){
    const navigate = useNavigate();

    const registerUser = async (dataForm: any)=>{
        try {
            await axios.post('http://localhost:3000/user/signup',{
                name : dataForm.username,
                email: dataForm.email,
                password : dataForm.password,
            });
            alert('Register Success');
            navigate('/login');
        } catch (error) {
            console.error('Register gagal');
        }
    }
    return {registerUser};
}