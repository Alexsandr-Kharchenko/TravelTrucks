'use client';

import { useState } from 'react';
import styles from './BookingForm.module.css';

export default function BookingForm() {
  const [success, setSuccess] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <>
      <form onSubmit={submit} className={styles.form}>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>

        <input type="text" placeholder="Name*" required />
        <input type="email" placeholder="Email*" required />
        <input type="date" placeholder="Booking date*" required />
        <textarea placeholder="Comment" rows={4} />

        <button type="submit">Send</button>
      </form>

      {success && <div className={styles.toast}>Booking successful 🎉</div>}
    </>
  );
}
