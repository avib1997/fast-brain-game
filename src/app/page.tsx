'use client'

import { useState } from 'react'
import StartScreen from '@/components/StartScreen'
import GameEngine from '@/components/GameEngine'
import ContactForm from '@/components/ContactForm'
import styles from '@/styles/game.module.scss'

export default function HomePage() {
  const [category, setCategory] = useState<string | null>(null)
  const [gameFinished, setGameFinished] = useState(false)
  const [showContact, setShowContact] = useState(false)

  const handleGameOver = () => {
    setGameFinished(true)
  }

  const handleContactClick = () => {
    setShowContact(true)
  }

  let content = null

  if (showContact) {
    content = <ContactForm />
  } else if (category) {
    content = (
      <GameEngine
        selectedCategory={category}
        onGameOver={handleGameOver}
        onContactClick={handleContactClick}
        onRestart={() => {
          setGameFinished(false)
          setCategory(null) // ✅ מחזיר ל-StartScreen
        }}
      />
    )
  } else {
    content = <StartScreen onStart={(cat) => setCategory(cat)} />
  }

  return <div className={styles.gameWrapper}>{content}</div>
}
