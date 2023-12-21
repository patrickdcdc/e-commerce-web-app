import React, { useState } from 'react';

const General = () => {

    const accessories = [
        { id: 1, name: 'Macbook Retina 2019',processor:'core i5', RAM: '16 GB', ROM: '250 SSD',  billingWeekly:5000, inStock:14 },
        { id: 2, name: 'HP Spectre',processor:'core i7',  RAM: '32 GB', ROM: '500 SSD', billingWeekly:5000, inStock:7  },
        { id: 3, name: 'Dell Alien',processor:'core i7',  RAM: '32 GB', ROM: '1 TB HDD', billingWeekly:5000, inStock:19  },
        { id: 4, name: 'Lenovo Thinkpad',processor:'core i9',  RAM: '32 GB', ROM: '500 SSD', billingWeekly:5000, inStock:24  },
        
    ]

    const [count, setCount] = useState(0);

    return (
        <>
            <h1 style={{textAlign:'center'}}>Home</h1>
            {accessories.map((access) => {
                 const {id, name, processor, RAM, ROM, billingWeekly, inStock} = access;
                return (
                    <section key={id}>
                        <div className='container-fluid'>
                            <div className='col-lg-6'>
                                <div className='card m-3'>
                                    <div className='card-header'></div>
                                    <div className='card-body'>
                                        <h6>Name: {name}</h6>
                                        <h6>Processor: {processor}</h6>
                                        <h6>RAM: {RAM}</h6>
                                        <h6>ROM: {ROM}</h6>
                                        <h6>Billing/Week: {billingWeekly}</h6>
                                        <h6>In stock: {inStock}</h6>
                                    </div>
                                    <div className='card-footer'>
                                        <button onClick={() => { setCount(count + 1) }}>+</button> <button onClick={() => setCount(count - 1)}>-</button><br />
                                        <p>Units Seeking: {count}</p> 
                                        <button className='btn btn-success mt-2' onClick={()=>(alert('Added to cart'))}>Add to cart</button>
                                        
                                
                                    </div>
                                </div>
                            </div>
                       </div>

                    </section>
                )
                
            })}
        </>
    );
};

export default General;