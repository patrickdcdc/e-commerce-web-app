import React from 'react';
import { useState } from 'react';

const Keyboards = () => {

    const details = [
        { id: 1, name: 'Logitech', technology: 'wireless', YOM: '2023', billingWeekly:450, inStock:78 },
        { id: 2, name: 'Dell', technology: 'wired', YOM: '2020',  billingWeekly:550, inStock:54 },
        { id: 3, name: 'Apple', technology: 'wireless', YOM: '2023',  billingWeekly:750, inStock:13 }
        
    ]

    const [value, setValue] = useState(0)

    const handleLeaseNow = () => {
        alert('Added to cart')
    }
    
    return (
        <React.Fragment>
            <h1 style={{textAlign:'center'}}>Keyboards</h1>
            {details.map((item => {
                const { id, name, technology, YOM,  billingWeekly, inStock} = item;
                return (
                    <section key={id}>
                        <div className='container-fluid'>
                            <div className='col-lg-6'>
                                <div className='card m-3'>
                                    <div className='card-header'></div>
                                        <div className='card-body'>
                                            <p>Name: {name}</p>
                                            <p>Technology: {technology}</p>
                                        <p>Y.O.M: {YOM}</p>
                                        <p>Billing/Week: { billingWeekly}</p>
                                        <p>In stock: {inStock}</p>
                                            
                                        <div className='card-footer'>
                                            <button onClick={() => setValue(value + 1)}>+</button> <button onClick={() => setValue(value - 1)}>-</button>
                                            <p>Units Seeking: {value}</p>
                                            <button className='btn btn-success mt-2' onClick={handleLeaseNow}>Add to cart</button>
                                                
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }))}
        </React.Fragment>
    );
};

export default Keyboards;