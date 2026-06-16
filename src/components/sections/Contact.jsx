import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <section id="contact" className="contact">
      <SectionTitle title="Contact" subtitle="Parlons de votre projet" />
      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Votre nom" value={form.name} onChange={handleChange} />
        <input name="email" type="email" placeholder="Votre email" value={form.email} onChange={handleChange} />
        <textarea name="message" placeholder="Votre message" value={form.message} onChange={handleChange} />
        <Button type="submit">Envoyer</Button>
      </form>
    </section>
  );
};

export default Contact;
