import React from "react";
import { useState } from "react";
import Error from './Error';
import { nanoid } from "nanoid";

export default function Form({onSubmit}) {
  const [form, setForm] = useState({
    name: '', 
    zone: '',
    error: '',
  })

  const handleSubmit = (evt) => {
    evt.preventDefault();

    
    if (form.name !== '' && form.zone !== '' && form.error === '') {
      const clock = {
        id: nanoid(),
        name: form.name,
        zone: form.zone
      }
      
      onSubmit(clock);
      setForm({
        name: '', 
        zone: '',
        error: '',
      });
    }
  }

  const handleChange = (evt) => {
    setForm(prevForm => ({...prevForm, error: ''}));
    console.log(form)

    const {name, value} = evt.target;
    
    if(name === 'zone' && (Number(value) > 12 || Number(value) < -12)) {
      setForm(prevForm => ({...prevForm, error: "Временная зона в промежутке от -12 до 12"}));
    }
    
    if(name === 'zone' && !Number(value)) {
      setForm(prevForm => ({...prevForm, error: "Временная зона только цифрами "}));
    } 
    
    if(name === 'name' && !value) {
      setForm(prevForm => ({...prevForm, error: "Укажите название часов"}));
    }
  
    setForm(prevForm => ({...prevForm, [name]: value}));
    console.log(form)
  }

  return (
    <div>
      <form className="form">
        <div className="input">
          <label htmlFor="name">Name</label>
          <input name="name" onChange={handleChange} value={form.name}></input>
        </div>
        <div className="input">
          <label htmlFor="zone">Zone</label>
          <input name="zone" onChange={handleChange} value={form.zone}></input>
        </div>
        <button className="button" onClick={handleSubmit}>add</button>
      </form>
      {form.error ? <Error string={form.error}></Error> : false}
    </div>
  ) 
}