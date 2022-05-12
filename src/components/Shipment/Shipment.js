import React, {useState} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    const handleShipping = (e) => {
        e.preventDefault()
        const shipping = {name, phone, address}
        console.log(shipping)
    }
    return (
        <div className={'form-container'}>
            <div className={'input-field'}>
                <h4 className={'login-text'}>Login</h4>
                <form onSubmit={handleShipping}>
                    <div className={'input-group'}>
                        <label htmlFor="name">Your name</label>
                        <input onBlur={handleName} type="text" name="name" id="" required/>
                    </div>

                    <div className={'input-group'}>
                        <label htmlFor="email">Your phone</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required/>
                    </div>

                    <div className={'input-group'}>
                        <label htmlFor="phone">Your phone</label>
                        <input onBlur={handlePhone} type="text" name="phone" id="" required/>
                    </div>

                    <div className={'input-group'}>
                        <label htmlFor="address">Your Address</label>
                        <input onBlur={handleAddress} type="text" name="address" id=""/>
                    </div>
                    <input className={'form-submit'} type="submit" value="Shipping" required/>
                </form>
            </div>
        </div>
    );
};

export default Shipment;