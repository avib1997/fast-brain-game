// src/components/GameEngine.tsx
'use client'

import { useEffect, useState } from 'react'
import { questions as allQuestions, Question } from '@/data/questions'
import styles from '@/styles/game.module.scss'
import { useRouter } from 'next/navigation'

type Props = {
  selectedCategory: string
  onGameOver?: (score: number, total: number) => void
  onContactClick?: () => void // ✅ הוסף את זה
  onRestart?: () => void
}

const QUESTION_TIME = 3

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => 0.5 - Math.random())
}

function getSmartMessage(score: number) {
  if (score >= 9) return '⚡ מהיר מחשבה! מתאים לך להיות שחקן שחמט מקצועי.'
  if (score >= 7) return '🧠 ביצועים גבוהים. אתה בדרך להיות מומחה קוגניטיבי.'
  if (score >= 5) return '🙂 יש לך בסיס טוב. אפשר לשפר עם עוד תרגול!'
  if (score >= 3) return '🧘 חשוב לחזק את היכולות הקוגניטיביות. אולי יוגה תעזור :)'
  return '💤 נראה שיכולת הריכוז שלך ירדה – אולי תנומה קטנה תעזור 😴'
}

export default function GameEngine({ selectedCategory, onGameOver, onContactClick, onRestart }: Props) {
  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(QUESTION_TIME)
  const [gameOver, setGameOver] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const router = useRouter()

  useEffect(() => {
    const filtered = allQuestions.filter((q) => q.category === selectedCategory)
    setQuestions(shuffle(filtered)) // בלי .slice(0, 10)
  }, [selectedCategory])

  useEffect(() => {
    if (gameOver || questions.length === 0) return // ⚡ הוסיפו פה את הבדיקה
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown)
          handleAnswer(false, true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(countdown)
  }, [step, questions.length, gameOver])

  const restartGame = () => {
    const filtered = allQuestions.filter((q) => q.category === selectedCategory)
    setQuestions(shuffle(filtered).slice(0, 10))
    setStep(0)
    setScore(0)
    setTimer(QUESTION_TIME)
    setGameOver(false)
  }

  useEffect(() => {
    if (gameOver && onGameOver) {
      onGameOver(score, questions.length)
    }
  }, [gameOver, onGameOver, score, questions.length])

  const handleAnswer = (answer: boolean, timeout = false) => {
    // רק אם ענית נכון ומדובר במענה (לא timeout) – נגדיל ניקוד
    if (!timeout && answer === questions[step].correct) {
      setScore((s) => s + 1)
    }

    // אם לא הגענו לשאלה האחרונה – נתקדם ונסיט את הטיימר
    if (step < questions.length - 1) {
      setStep(step + 1)
      setTimer(QUESTION_TIME)
    } else {
      // אחרת – סיימנו את כל השאלות, סיים משחק
      setGameOver(true)
    }
  }

  if (questions.length === 0)
    return (
      <div className={styles.gameWrapper}>
        <div className={styles.stars}></div>
        <div className={styles.gameContainer}>
          <p className={styles.question}>טוען שאלות…</p>
        </div>
      </div>
    )

  if (gameOver)
    return (
      <div className={styles.gameWrapper}>
        <div className={styles.stars}></div>
        <div className={styles.gameContainer}>
          <h2 className={styles.question}>✅ סיימת!</h2>
          <p className={styles.timer}>
            צברת {score} מתוך {questions.length}
          </p>
          <p className={styles.smartMessage}>{getSmartMessage(score)}</p>
          <div className={styles.restartWrapper}>
            <button onClick={onRestart} className={styles.restartBtn}>
              התחל משחק מחדש
            </button>
          </div>
        </div>
        <div className={styles.ctaWrapper}>
          <p className={styles.ctaHeadline}>
            רוצה משחק שמשפר חינוך, מהירות וחדות?
            <br />
            <strong>דבר איתי – נבנה משהו מדהים יחד!</strong>
          </p>
          {gameOver && onContactClick && (
            <button onClick={onContactClick} className={styles.contactBtn}>
              דבר איתי <br /> נבנה משהו יחד!
            </button>
          )}
        </div>
      </div>
    )

  const q = questions[step]

  if (gameOver)
    return (
      <div className={styles.gameWrapper}>
        <div className={styles.stars}></div>
        <div className={styles.gameContainer}>
          <div className={styles.questionDone}>
            <h2 className={styles.question}>✅ סיימת!</h2>
          </div>
          <p className={styles.timer}>
            צברת {score} מתוך {questions.length}
          </p>
          <p className={styles.smartMessage}>{getSmartMessage(score)}</p>
          <div className={styles.restartWrapper}>
            <button onClick={onRestart} className={styles.restartBtn}>
              התחל משחק מחדש
            </button>
          </div>
        </div>
        <div className={styles.ctaWrapper}>
          <p className={styles.ctaHeadline}>
            רוצה משחק שמשפר חינוך, מהירות וחדות?
            <br />
            <strong>דבר איתי – נבנה משהו מדהים יחד!</strong>
          </p>
          {onContactClick && (
            <button onClick={onContactClick} className={styles.contactBtn}>
              דבר איתי – נבנה משהו יחד!
            </button>
          )}
        </div>
      </div>
    )

  // ✅ אל תציג את ממשק המשחק אם q לא מוגדר
  if (!q)
    return (
      <div className={styles.gameWrapper}>
        <div className={styles.stars}></div>
        <div className={styles.gameContainer}>
          <p className={styles.question}>טוען שאלות…</p>
        </div>
      </div>
    )

  return (
    <div className={styles.gameWrapper}>
      <div className={styles.stars}></div>

      {/* ✅ מוצג רק אם q קיים */}
      <h2 className={styles.categoryTitle}>{q.category}</h2>
      <p className={styles.questionNumber}>שאלה {step + 1}</p>

      <div className={styles.gameContainer}>
        {q.category === 'כללי' ? (
          <div className={styles.question} style={{ color: q.color }}>
            האם השאלה בצבע {q.text}?
          </div>
        ) : (
          <div className={styles.question} style={{ color: q.color }}>
            {q.text}
          </div>
        )}

        <div className={styles.timer}>⏱ {timer} שניות</div>

        <div className={styles.buttons}>
          <button onClick={() => handleAnswer(true)} className={`${styles.btn} ${styles.yes}`}>
            כן
          </button>
          <button onClick={() => handleAnswer(false)} className={`${styles.btn} ${styles.no}`}>
            לא
          </button>
        </div>
        <p className={styles.scoreDisplay}>נקודות: {score}</p>
      </div>
    </div>
  )
}
