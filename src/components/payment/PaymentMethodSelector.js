'use client';

import React from 'react';

const PaymentMethodSelector = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div>
      <h2 className="text-lg font-medium mb-2">Payment Method</h2>
      <div className="flex space-x-4">
        <button
          className={`py-2 px-4 border ${paymentMethod === 'COD' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setPaymentMethod('COD')}
        >
          Cash on Delivery
        </button>
        <button
          className={`py-2 px-4 border ${paymentMethod === 'QR' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setPaymentMethod('QR')}
        >
          QR Code
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodSelector;
