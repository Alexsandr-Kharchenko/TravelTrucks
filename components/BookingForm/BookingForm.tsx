'use client';

import { useState } from 'react';
import styles from './BookingForm.module.css';

export default function BookingForm() {
  const [success, setSuccess] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    e.currentTarget.reset(); // очищаємо форму
    setSuccess(true);

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <>
      <form onSubmit={submit} className={styles.form}>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>

        <input type="text" placeholder="Name*" required aria-label="Name" />

        <input type="email" placeholder="Email*" required aria-label="Email" />

        <input type="date" required aria-label="Booking date" />

        <textarea placeholder="Comment" rows={4} aria-label="Comment" />

        <button type="submit" disabled={success}>
          Send
        </button>
      </form>

      {success && (
        <div className={styles.toast} role="status" aria-live="polite">
          Booking successful! Our manager will contact you shortly. 🎉
        </div>
      )}
    </>
  );
}
