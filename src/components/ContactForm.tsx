'use client'

import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import styles from '../styles/game.module.scss'

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return

    emailjs
      .sendForm('service_i77wi5q', 'template_gxz00ik', form.current, 'hO3mRGe148VPmSC_J')
      .then(() => {
        alert('💌 ההודעה נשלחה בהצלחה!')
        form.current?.reset()
      })
      .catch(() => {
        alert('❌ שליחה נכשלה, נסה שוב.')
      })
  }

  return (
    <div className={styles.gameWrapper}>
      <div className={styles.stars}></div>
      <div className={styles.contactContainer}>
        <h2 className={styles.ctaHeadline}>רוצה לקדם את העסק שלך בדרך שאף אחד לא שוכח?</h2>
        <p className={styles.ctaParagraph}>
          דמיין לקוחות <strong>משחקים, נהנים – וזוכרים את המותג שלך לנצח.</strong>
          <br />
          בין אם אתה סופר שכונתי, חנות טמבור, רשת קמעונאית או עסק קטן עם חלום גדול –
          <br />
          <strong>משחק מותאם אישית</strong> הוא הכלי המושלם להכניס עניין, להגביר חשיפה ולהשאיר חותם.
        </p>

        <p className={styles.ctaParagraph}>
          משחקים שיווקיים יוצרים <strong>מעורבות רגשית, סקרנות, וחיבור ישיר למותג שלך</strong> –
          <br />
          <strong>מילדים ועד מבוגרים, מכל תחום, בכל רמת קושי.</strong>
          <br />
          זה לא רק משחק. <strong>זה מנוע שיווקי. זה בידול. זה ויראלי.</strong>
        </p>

        <p className={styles.ctaCall}>השאר פרטים – ונבנה יחד חוויה שהעסק שלך עוד לא חווה.</p>

        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <input name="name" type="text" placeholder="שם מלא" required />
          <input name="phone" type="tel" placeholder="מספר טלפון" required />
          <input name="email" type="email" placeholder="אימייל" required />
          <textarea name="message" rows={4} placeholder="מה הרעיון שלך או איך נוכל לעזור?" required />
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString('he-IL', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          />
          <button type="submit">שלח הודעה</button>
        </form>
        <p className={styles.ctaCallend}>או שלח הודעה ישר לוואצאפ 0545665166</p>
      </div>
    </div>
  )
}
