import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
    onLogin: () => void;
  }


const Login: React.FC<LoginProps> = ({ onLogin }) =>{
    const [name, setName] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    
    const navigate = useNavigate()
  


    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const userDetails = {
            name,
            number,
            email,
        };

        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        alert('Your details are saved in your local storage');
        console.log(userDetails)
        onLogin();
        navigate('/protected/second')
  
    };


    return (
        <div className='login'>
            <h1>Fill your details</h1>

            <form onSubmit={onSubmit}>
                <TextField
                    value={name}
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                    id='outlined-basic'
                    label='Name'
                    variant='outlined'
                    required
                />{' '}
                <br /> <br />
                <TextField
                    value={number}
                    type='number'
                    onChange={(e) => setNumber(e.target.value)}
                    id='outlined-basic'
                    label='Phone Number'
                    variant='outlined'
                    required
                />{' '}
                <br />
                <br />
                <TextField
                    value={email}
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    id='outlined-basic'
                    label='Email'
                    variant='outlined'
                    required
                />{' '}
                <br />
                <br />

                <Button variant='contained' type='submit'>
                    Go to second Page
                </Button>
            </form>
        </div>
    );
}

export default Login;