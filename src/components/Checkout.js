import React from 'react';

function Checkout() {
    return (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h1>Checkout</h1>
            <form noValidate>
                <div>
                    <label htmlFor="name">Full Name</label>
                    <input
                        style={{ display: 'block', width: '100%', padding: '10px' }}
                        id="name"
                        name="name"
                        required
                        autoFocus
                    />
                </div>
                {/* Add more input elements for additional fields */}
                <button style={{ display: 'block', width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', marginTop: '10px' }}>
                    Purchase
                </button>
            </form>
        </div>
    );
}

export default Checkout;
