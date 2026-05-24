import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export function useLogin(){
    const navigate = useNavigate();
    const {login} = useAuth();

    const loginUser = async (dataForm:any) => {
        try{
            const response = await axios.post('http://localhost:3000/user/signin',{
                email: dataForm.email,
                password: dataForm.password,
            });
            
            const userData = response.data;
            login(userData);

            alert('login Success');
            navigate("/");

        }catch(error : any){
            console.error('Login gagal:', error);
        }
    };

    return { loginUser };
}