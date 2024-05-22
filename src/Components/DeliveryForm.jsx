import React from 'react';

const DeliveryForm = ({ formValues, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 row justify-content-center text">
        <div className="col-sm-3">
          <p>Прізвище</p>
          <input type="text" name="lastname" value={formValues.lastname} onChange={handleChange} required />
        </div>
        <div className="col-sm-3">
          <p>Ім'я</p>
          <input type="text" name="firstname" value={formValues.firstname} onChange={handleChange} required />
        </div>
        <div className="col-sm-3">
          <p>Телефон</p>
          <input type="tel" name="phone" value={formValues.phone} onChange={handleChange} required />
        </div>
      </div>

      <div className="mb-3 row justify-content-center text">
        <div className="col-sm-3">
          <p>Класифікація товару</p>
          <select name="category" value={formValues.category} onChange={handleChange}>
            <option>Одяг</option>
            <option>Амуніції</option>
            <option>Техніка</option>
            <option>Інше</option>
          </select>
        </div>
        <div className="col-sm-3">
          <p>Кількість посилок / ящиків</p>
          <input type="number" name="numOfParcels" value={formValues.numOfParcels} onChange={handleChange} required />
        </div>
        <div className="col-sm-3">
          <p>Вага</p>
          <input type="number" name="weight" value={formValues.weight} onChange={handleChange} required />
        </div>
        <div className="col-sm-3">
          <p>Країна</p>
          <select name="country" value={formValues.country} onChange={handleChange}>
            <option>Німеччина</option>
            <option>Польща</option>
            <option>Велика Британія</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row justify-content-center">
        <div className="col-sm-3">
          <p>Отримувач</p>
          <select name="recipientType" value={formValues.recipientType} onChange={handleChange}>
            <option>Фіз. особа</option>
            <option>Фіз. особа підприємець</option>
            <option>Волонтер</option>
            <option>Військовий</option>
          </select>
        </div>
        <div className="col-sm-3">
          <p>Сума</p>
          <input type="text" name="total" value={formValues.total} readOnly />
        </div>
        <div className="box-style col-sm-3">
          <button type="submit" className="btn btn-warning">Оформити логістичну доставку</button>
        </div>
      </div>
    </form>
  );
};

export default DeliveryForm;
