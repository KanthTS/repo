import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [err, setErr] = useState(null);
    const nav = useNavigate();
    const [f, setF] = useState({
        name: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setF({ ...f, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(f);
        
        fetch(`http://localhost:3000/users?name=${f.name}&password=${f.password}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.error) { // Adjust this based on your API response structure
                    setErr({ message: "Incorrect credentials" });
                } else {
                    console.log("Success", data[0]);
                    nav('/Profile');
                }
            })
            .catch((error) => console.log(error));
    };

    return (
        <form onSubmit={handleSubmit} className="text-center p-5 bg-danger m-5" style={{ minHeight: '80vh' }}>
            <h3 className="text-white">Login Form</h3>
            {err && <p className="lead text-danger text-center">{err.message}</p>}
            <div className="p-3 form-label">
                <label>Name:
                    <input type="text" name="name" value={f.name} onChange={handleChange} />
                </label>
            </div>
            <div className="p-3 form-label">
                <label>Password:
                    <input type="password" name="password" value={f.password} onChange={handleChange} />
                </label>
            </div>
            <div>
                <button type="submit" className="btn btn-success">Login</button>
            </div>
        </form>
    );
}

export default Login;
