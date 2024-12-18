import { useCallback } from 'react';
import ShippingForm from './ShippingForm';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    console.log('handle submit render')
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);

  // const handleSubmit = (orderDetails) => {
  //   console.log('handle submit render')
  //   post('/product/' + productId + '/buy', {
  //     referrer,
  //     orderDetails,
  //   });
  // };


  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

function post(url, data) {
  // Imagine this sends a request...
  console.log('POST /' + url);
  console.log(data);
}