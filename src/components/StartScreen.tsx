// src/components/StartScreen.tsx
'use client'

import { useState } from 'react'
import styles from '@/styles/game.module.scss'

const categories = [
  { label: 'כללי 🎲', value: 'כללי' },
  { label: 'חינוך 📚', value: 'חינוך' },
  { label: 'דתי ✡️', value: 'דתי' },
  { label: 'עסקים 💼', value: 'עיסקי' },
  { label: 'משאבי אנוש 👥', value: 'משאבי אנוש' }
]

export default function StartScreen({ onStart }: { onStart: (category: string) => void }) {
  const [selected, setSelected] = useState('כללי')

  return (
    <div className={styles.gameWrapper}>
      <div className={styles.stars}></div>
      <div className={styles.gameContainerStart}>
        <h1 className={styles.question}>🎯 משחק מהר מהראש</h1>
        <p className={styles.timer}>בחר נושא שאתה רוצה לשחק בו:</p>

        <div className={styles.buttons}>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelected(cat.value)}
              className={styles.btn} // נשאר קבוע
              style={{
                backgroundColor: selected === cat.value ? '#4CD964' : '#AF52DE',
                color: selected === cat.value ? '#fff' : '#fff',
                border: selected === cat.value ? '2px solid #4CD964' : '2px solid #1C1C1E',
                transform: selected === cat.value ? 'scale(1.1)' : 'scale(1.0)' // אם תרצה קלה
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => onStart(selected)}
          className={styles.btnstart}
          
        >
          התחל משחק
        </button>
      </div>
    </div>
  )
}
