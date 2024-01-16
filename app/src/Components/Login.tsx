import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [name, setName] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const[saved,setSaved] = useState<boolean>(false)


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
        setSaved(true);
        goto();

    };


    const navigate = useNavigate()
    const goto = ()=>{
        navigate('/protected')
    }


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
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default Login;