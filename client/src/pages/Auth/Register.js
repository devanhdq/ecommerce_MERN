import React, {useState} from "react";
import Layout from "../../components/Layout/Layout";
import {toast} from 'react-toastify'
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`/api/v1/auth/register`, {
                name,
                email,
                password,
                phone,
                address
            });
            if (res.data.success) {
                toast.success(res.data.message)
                navigate("/login")
            }else {
                toast.error(res.data.message)

            }
        } catch (e) {
            console.log(e)
            toast.error("Something went wrong")
        }

    }
    return (
        <Layout title="Register Ecommerce">
            <div className="register">
                <h1>Register Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            className="form-control"
                            id="exampleInputEmail1"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            value={password}
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">
                            Email
                        </label>
                        <input
                            value={email}
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">
                            Phone
                        </label>
                        <input
                            value={phone}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">
                            Address
                        </label>
                        <input
                            value={address}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />

                    </div>


                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </Layout>
    );
}

export default Register;
