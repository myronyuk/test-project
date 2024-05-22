import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row justify-content-center">
          <div className="col-sm-5">
            <label htmlFor="firstName" className="form-label"></label>
            <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Ім'я" value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="col-sm-5">
            <label htmlFor="lastName" className="form-label"></label>
            <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Прізвище" value={formData.lastName} onChange={handleChange} />
          </div>
        </div>
        <div className="mb-3 row justify-content-center">
          <div className="col-sm-5">
            <label htmlFor="phoneNumber" className="form-label"></label>
            <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Номер телефону" value={formData.phoneNumber} onChange={handleChange} />
          </div>
          <div className="col-sm-5">
            <label htmlFor="email" className="form-label"></label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Електронна пошта" value={formData.email} onChange={handleChange} />
          </div>
        </div>
        <div className="mb-3 row justify-content-center">
          <div className="col-sm-10">
            <label htmlFor="notes" className="form-label"></label>
            <textarea className="form-control" id="notes" name="notes" placeholder="Ваше питання :" value={formData.notes} onChange={handleChange} />
          </div>
        </div>
        <div className="mb-3 row justify-content-center">
          <div className="col-sm-5 text-center">
          <button type="submit" className="btn btn-warning">Відправити</button>

          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
