import React, { useState, useEffect } from 'react';
import './Delivery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import sendNotification from '../../sendNotification';
import DeliveryForm from '../../Components/DeliveryForm';  // Імпортуємо компонент форми

const Delivery = () => {
  const [formValues, setFormValues] = useState({
    lastname: '',
    firstname: '',
    phone: '+380',
    category: 'Одяг',
    numOfParcels: '',
    weight: '',
    country: 'Німеччина',
    recipientType: 'Фіз. особа',
    total: 0
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    calculateDelivery();
  }, [formValues.category, formValues.numOfParcels, formValues.weight]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      const phoneValue = '+380' + numericValue.slice(3, 12);
      setFormValues({ ...formValues, [name]: phoneValue });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const calculateDelivery = () => {
    let total = 0;

    if (formValues.category === 'Одяг' || formValues.category === 'Амуніції') {
      total += 20;
    } else if (formValues.category === 'Техніка') {
      total += 40;
    }

    const numOfParcels = parseInt(formValues.numOfParcels);
    if (numOfParcels === 1) {
      total += 10;
    } else if (numOfParcels === 2) {
      total += 8;
    } else if (numOfParcels === 3) {
      total += 6;
    } else if (numOfParcels >= 4) {
      total += 5;
    }

    const weight = parseInt(formValues.weight);
    if (weight <= 30) {
      total += 10;
    } else {
      total += 8;
    }

    total += 10;

    setFormValues({ ...formValues, total });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `
      Нове замовлення ->
      Прізвище: ${formValues.lastname}
      Ім'я: ${formValues.firstname}
      Телефон: ${formValues.phone}
      Класифікація товару: ${formValues.category}
      Кількість посилок / ящиків: ${formValues.numOfParcels}
      Вага: ${formValues.weight}
      Країна: ${formValues.country}
      Отримувач: ${formValues.recipientType}
      Сума за доставку: ${formValues.total} 
    `;

    try {
      await sendNotification(message);
      alert('Дякую замовлення оформлено');
    } catch (error) {
      alert('Не вдалося надіслати повідомлення');
    }

    setFormValues({
      lastname: '',
      firstname: '',
      phone: '+380',
      category: 'Одяг',
      numOfParcels: '',
      weight: '',
      country: 'Німеччина',
      recipientType: 'Фіз. особа',
      total: 0
    });
  };

  return (
    <div className='Delivery'>
      <div className='container container-box'>
        <div className='Delivery-text'>
          <h2>Розрахунок доставки</h2>
          <p>Зверніть увагу! Після оформлення логістичної доставки з вами зв'яжеться менеджер для уточнення вашого замовлення</p>
          {submitted && <p className="thank-you">Дякуємо за замовлення, з вами зв'яжеться менеджер</p>}
        </div>
        <DeliveryForm formValues={formValues} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Delivery;
