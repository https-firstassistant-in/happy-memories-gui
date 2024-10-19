import React, { useRef, useState } from 'react';
import { Segmented } from 'antd';

const Payment = () => {
    const cardNumberRef = useRef();
    const validThroughRef = useRef();
    const cvvRef = useRef();
    const nameOnCardRef = useRef();
    const amountRef = useRef();
    const upiRef = useRef();
    const [formData, setFormData] = useState({
        paymentMethod: 'creditCard', 
        cardNumber: '',
        validThrough: '',
        cvv: '',
        nameOnCard: '',
        amount: '',
        upi: '', 
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePayment = () => {
        console.log("Payment data", formData);
    };

    const handlePaymentMethodChange = (e) => {
        setFormData({
            ...formData,
            paymentMethod: e
        });
    };

    return (
        <div className="container">
            <div className="payment-method-selection">
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-5'>
                        <div className="form-group">
                        <div style={{ padding: '20px', backgroundColor: '#f0f2f5', borderRadius: '8px',margin: '0 auto' }}>
                                <h3 style={{ color: '#1890ff', marginBottom: '20px' }}>Select Payment Method</h3>
                                <Segmented
                                    options={[
                                        {
                                            label: '💳 Credit Card',
                                            value: 'creditCard',
                                        },
                                        {
                                            label: '💵 UPI',
                                            value: 'upi',
                                        },
                                    ]}
                                    onChange={handlePaymentMethodChange} // Handler
                                    style={{
                                        width: '100%',
                                        textAlign: 'center',
                                        backgroundColor: '#e6f7ff',
                                        borderRadius: '25px',
                                        padding: '10px',
                                        color: '#1890ff',
                                        borderColor: '#1890ff',
                                        width: '350px',
                                    }}
                                />
                                <p style={{ textAlign: 'center', color: '#1890ff', marginTop: '20px' }}>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'></div>
                </div>
            </div>
            {
                formData.paymentMethod === 'creditCard' ?
                (
                    <div className='row'>
                        <div className='col-4'></div>
                            <div className='col-5'>
                                <div className="credit-card-box">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="cardNumber">Card Number</label>
                                            <input 
                                                type="text" 
                                                ref={cardNumberRef}
                                                maxLength="16"
                                                name="cardNumber"
                                                className="form-control" 
                                                placeholder="Enter 16-digit card number"
                                                onChange={handleInputChange}
                                                value={formData.cardNumber}
                                            />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="validThrough">Valid Through</label>
                                                <input 
                                                    type="text" 
                                                    ref={validThroughRef}
                                                    name="validThrough"
                                                    className="form-control" 
                                                    placeholder="MM/YY"
                                                    onChange={handleInputChange}
                                                    value={formData.validThrough}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="cvv">CVV</label>
                                                <input 
                                                    type="text" 
                                                    ref={cvvRef}
                                                    maxLength="3"
                                                    name="cvv"
                                                    className="form-control" 
                                                    placeholder="CVV"
                                                    onChange={handleInputChange}
                                                    value={formData.cvv}
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* New input for Name on Card */}
                                        <div className="form-group">
                                            <label htmlFor="nameOnCard">Name on Card</label>
                                            <input 
                                                type="text" 
                                                ref={nameOnCardRef}
                                                name="nameOnCard"
                                                className="form-control" 
                                                placeholder="Enter name as it appears on card"
                                                onChange={handleInputChange}
                                                value={formData.nameOnCard}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="amount">Amount</label>
                                            <input 
                                                type="number" 
                                                step="0.01" 
                                                ref={amountRef}
                                                name="amount"
                                                className="form-control" 
                                                placeholder="Enter amount"
                                                onChange={handleInputChange}
                                                value={formData.amount}
                                            />
                                        </div>
                                    </form>
                                    <button 
                                        type="button" 
                                        className="pay-button" 
                                        onClick={handlePayment}
                                    >
                                        Pay
                                    </button>
                                </div>
                            </div>
                        <div className='col-3'></div>
                    </div>
                ) 
                :
                (
                    <div className='row'>
                        <div className='col-4'></div>
                            <div className='col-6'>
                                    <div className="credit-card-box">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="upi">Enter UPI ID</label>
                                                <input 
                                                    type="text" 
                                                    ref={upiRef}
                                                    name="upi"
                                                    className="form-control" 
                                                    placeholder="Enter your UPI ID"
                                                    onChange={handleInputChange}
                                                    value={formData.upi}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="amount">Amount</label>
                                                <input 
                                                    type="number" 
                                                    step="0.01" 
                                                    ref={amountRef}
                                                    name="amount"
                                                    className="form-control" 
                                                    placeholder="Enter amount"
                                                    onChange={handleInputChange}
                                                    value={formData.amount}
                                                />
                                            </div>
                                        </form>
                                        <button 
                                            type="button" 
                                            className="pay-button" 
                                            onClick={handlePayment}
                                        >
                                            Pay
                                        </button>
                                    </div>
                                </div>
                        <div className='col-2'></div>
                    </div>
                )    
            }
        </div>
    );
};

export default Payment;
