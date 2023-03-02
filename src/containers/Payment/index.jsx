// Importar los módulos necesarios de React y otros paquetes
import React, { useContext } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom'; // Importar el hook de navegación
import AppContext from '../../context/AppContext'; // Importar el contexto de la aplicación
import '../../styles/components/Payment.css'; // Importar los estilos del componente

// Definir el componente de pago
function Payment() {
  // Almacenar los hooks y el contexto en variables
  const navigate = useNavigate();
  const { state, addNewOrder } = useContext(AppContext); // Obtener los datos del estado global
  const { cart, buyer } = state; // Obtener el carrito y la información del comprador

  // Crear las opciones de PayPal
  const paypalOtions = {
    clientID: process.env.CLIENT_ID_PP, // Identificador de cliente de PayPal
    intent: 'capture', // Modo de captura de pago
    currency: 'USD', // Moneda de la transacción
  };

  // Establecer los estilos del botón de PayPal
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }

  // Calcular el total del carrito
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        Product: cart,
        Payment: data,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del Pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-item">
          <h3>Total:</h3>
          <span><strong>$ {handleSumTotal()}</strong></span>
        </div>
        <div className="Payment-button">
          <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons
              paypalOptions={paypalOtions}
              buttonStyles={buttonStyles}
              amount={handleSumTotal()}
              onClick={() => console.log('Start Payment')}
              onApprove={data => handlePaymentSuccess(data)}
              onError={error => console.log(error)}
              onCancel={data => console.log(data)}
              style={{ layout: "horizontal" }} />
          </PayPalScriptProvider>
        </div>
      </div>
    </div >
  );
};

export default Payment;