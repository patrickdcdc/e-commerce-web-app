import React, {useState} from 'react';

const Monitors = () => {
    const specifications = [
        { id: 1, name: 'HP', size: '32 inch',  billingWeekly: 3000, inStock:24 },
        { id: 2, name: 'Dell', size: '32 inch',  billingWeekly: 3500, inStock:24  },
        { id: 3, name: 'Lenovo', size: '32 inch',  billingWeekly: 3200, inStock:24 },

       
    ]

    const [value, setValue] = useState(0);

    const handleLeaseNow = () => {
        alert("Item added to cart")
    }

    
    return (
        <>
            <h1 style={{textAlign:'center'}}>Monitors</h1>
            {specifications.map((specs) => {
                const { id, name, size,  billingWeekly, inStock } = specs;
                return (
            
                    <div key={id} className='container-fluid'>
                        <div className='col-lg-6'>
                            <div className='card m-3'>
                                <div className='card-header'></div>
                            <div className='card-body'>
                                <h6>Name: {name}</h6>
                                <h6>Size: {size} inches</h6>
                                    <h6>Billing/Week: { billingWeekly}</h6>
                                    <h6>In stock: {inStock}</h6>
                                    
                                </div>
                                <div className='card-footer'>
                                    <button onClick={() => setValue(value + 1)}>+</button> <button onClick={() => setValue(value - 1)}>-</button><br/>
                                    <h6>Units Seeking: {value}</h6>
                                    
                                    
                                    <button className='btn btn-success mt-2' onClick={handleLeaseNow}>Add to cart</button>
                                    
                                    
                                </div>
                        </div>
                        
                        
                        </div>
                        </div>
                    
                )
            })}
        </>
    )
    
}

export default Monitors;