import React from 'react';
import { useState } from 'react';

const Systemunits = () => {

    const system_units = [
        { id: 1, name: 'Dell Optiplex 7090MT', processor: 'i7-10700', RAM: '8GB', ROM: '1 TB HDD', billingWeekly:5000, inStock:9  },
        { id: 2, name: 'Dell Inspiron GTX1650S', processor: 'i5', RAM: '16GB', ROM: '1 TB SSD', billingWeekly:7500, inStock:19  },
        { id: 3, name: 'Dell Inspiron GTX1670S', processor: 'i9', RAM: '32GB', ROM: '1 TB HDD', billingWeekly: 3600, inStock: 10 },
        { id: 4, name: 'Dell Optiplex 7090MT', processor: 'i7-10700', RAM: '8GB', ROM: '1 TB HDD', billingWeekly:5000, inStock:9  },
        { id: 5, name: 'Dell Inspiron GTX1650S', processor: 'i5', RAM: '16GB', ROM: '1 TB SSD', billingWeekly:7500, inStock:19  },
        { id: 6, name: 'Dell Inspiron GTX1670S', processor: 'i9', RAM: '32GB', ROM: '1 TB HDD', billingWeekly:3600, inStock:10  }
        
    ]

    const [count, setCount] = useState(0)
    return (
        <React.Fragment>
            <h1 style={{ textAlign: 'center' }}>System units</h1>
            {system_units.map((items => {

                const { id, name, processor, RAM, ROM, billingWeekly, inStock } = items;
                
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
                                        <button onClick={() => setCount(count + 1)}>+</button> <button onClick={() => setCount(count - 1)}>-</button> <br />
                                        <p>Units Seeking: {count}</p>
                                            <button className='btn btn-success mt-2' onClick={() => alert('Added to cart')}>Add to cart</button>
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

export default Systemunits;



