import React, { useState } from 'react';

interface FrocontactProps {
  onNotify: (message: string) => void;
}

const Frocontact: React.FC<FrocontactProps> = ({ onNotify }) => {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    tel: '',
    email: '',
    objet: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3002/demande', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();
        onNotify('Form successfully submitted!');
        // Reset form after successful submission
        setForm({
          nom: '',
          prenom: '',
          tel: '',
          email: '',
          objet: '',
          description: '',
        });
      } else {
        onNotify('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      onNotify('An error occurred while submitting the form.');
    }
  };

  const styles: { [key: string]: React.CSSProperties } = {
    formContainer: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    formTitle: {
      textAlign: 'center',
      fontSize: '3em',
      marginBottom: '20px',
      color: '#C59A00',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
      color: '#555',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '16px',
    },
    select: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '16px',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '16px',
      height: '150px',
      resize: 'vertical',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
    },
  };

  return (
    <div>
      <h2 style={styles.formTitle}>Formulaire de Contact</h2>
      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={form.nom}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="prenom">Prénom</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={form.prenom}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="tel">Téléphone</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={form.tel}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="objet">Objet</label>
          <select
            id="objet"
            name="objet"
            value={form.objet}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="">Choisissez un objet</option>
            <option value="omra">Omra</option>
            <option value="visa">Visa</option>
            <option value="voyage">Voyage</option>
            <option value="voyage_personnalise">Voyage Personnalisé</option>
            <option value="croisiere">Croisière</option>
            <option value="soire">Soirée</option>
            <option value="gala">Gala</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="description">Message</label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
        </div>
        <button
          type="submit"
          style={styles.button}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Frocontact;
