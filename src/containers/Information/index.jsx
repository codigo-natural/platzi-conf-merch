import React from 'react';
import '../../styles/components/Information.css'

function Information() {
  return (
    <div className='Information'>
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de Contacto</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" placeholder='Nombre Completo' name="name" />
            <input type="text" placeholder='Correo Electronico' name="email" />
            <input type="text" placeholder='Direccion' name="address" />
            <input type="text" placeholder='Apto' name="apto" />
            <input type="text" placeholder='Ciudad' name="city" />
            <input type="text" placeholder='Pais' name="country" />
            <input type="text" placeholder='Estado' name="state" />
            <input type="text" placeholder='Codigo Postal' name="name" />
            <input type="text" placeholder='Telefono' name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            Regresar
          </div>
          <div className="Information-next">
            Pagar
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>ITEM NAME</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information;
