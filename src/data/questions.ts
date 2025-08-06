export type Question = {
  text: string
  color: string
  correct: boolean
  category: 'כללי' | 'חינוך' | 'דתי' | 'עיסקי' | 'משאבי אנוש'
}

// 🎨 צבעים ילדותיים מותאמים לרקע כהה
const neonBlue = '#00E5FF'
const limeGreen = '#00FF90'
const brightOrange = '#FFA726'
const hotPink = '#FF4081'
const lightYellow = '#FFD600'

export const questions: Question[] = [
  // כללי 🎲
  { text: 'אדום', color: brightOrange, correct: true, category: 'כללי' },
  { text: 'כחול', color: limeGreen, correct: false, category: 'כללי' },
  { text: 'ירוק', color: neonBlue, correct: false, category: 'כללי' },
  { text: 'צהוב', color: lightYellow, correct: true, category: 'כללי' },
  { text: 'כתום', color: brightOrange, correct: true, category: 'כללי' },
  { text: 'שחור', color: hotPink, correct: true, category: 'כללי' },
  { text: 'אפור', color: neonBlue, correct: true, category: 'כללי' },
  { text: 'לבן', color: limeGreen, correct: true, category: 'כללי' },
  { text: 'סגול', color: hotPink, correct: true, category: 'כללי' },
  { text: 'ורוד', color: hotPink, correct: true, category: 'כללי' },

  // חינוך 📚
  { text: '3 + 4 = 7', color: limeGreen, correct: true, category: 'חינוך' },
  { text: 'A is a vowel', color: brightOrange, correct: true, category: 'חינוך' },
  { text: '2 x 5 = 12', color: lightYellow, correct: false, category: 'חינוך' },
  { text: 'B comes before A', color: neonBlue, correct: false, category: 'חינוך' },
  { text: '9 - 3 = 6', color: limeGreen, correct: true, category: 'חינוך' },
  { text: '100 > 99', color: brightOrange, correct: true, category: 'חינוך' },
  { text: 'Cat = כלב', color: hotPink, correct: false, category: 'חינוך' },
  { text: 'Dog = כלב', color: neonBlue, correct: true, category: 'חינוך' },
  { text: 'Zebra = זברה', color: limeGreen, correct: true, category: 'חינוך' },
  { text: 'Sun = ירח', color: hotPink, correct: false, category: 'חינוך' },

  // דתי ✡️
  { text: 'שבת = יום חול?', color: lightYellow, correct: false, category: 'דתי' },
  { text: 'כשר וחלב = מותר?', color: brightOrange, correct: false, category: 'דתי' },
  { text: 'תפילין ביום חול', color: limeGreen, correct: true, category: 'דתי' },
  { text: 'תענית ביום שמחה?', color: neonBlue, correct: false, category: 'דתי' },
  { text: 'אכילת מצה בפסח', color: hotPink, correct: true, category: 'דתי' },
  { text: 'צום ביום שבת רגיל?', color: brightOrange, correct: false, category: 'דתי' },
  { text: 'שופר בראש השנה', color: limeGreen, correct: true, category: 'דתי' },
  { text: 'קידוש בליל שבת', color: lightYellow, correct: true, category: 'דתי' },
  { text: 'חנוכה עם תפילין', color: neonBlue, correct: false, category: 'דתי' },
  { text: 'מגילה בפורים', color: hotPink, correct: true, category: 'דתי' },

  // עיסקי 💼
  { text: 'הכנסה היא הפסד?', color: brightOrange, correct: false, category: 'עיסקי' },
  { text: 'ROI = החזר השקעה', color: limeGreen, correct: true, category: 'עיסקי' },
  { text: 'מכירות = הוצאה', color: hotPink, correct: false, category: 'עיסקי' },
  { text: 'הון עצמי = כסף אישי', color: neonBlue, correct: true, category: 'עיסקי' },
  { text: 'חשבון רווח והפסד', color: lightYellow, correct: true, category: 'עיסקי' },
  { text: 'שיווק = תוצאה מיידית', color: hotPink, correct: false, category: 'עיסקי' },
  { text: 'ניהול זמן חשוב', color: limeGreen, correct: true, category: 'עיסקי' },
  { text: 'שוק ההון = קזינו', color: brightOrange, correct: false, category: 'עיסקי' },
  { text: 'תקציב = תכנון', color: neonBlue, correct: true, category: 'עיסקי' },
  { text: 'מיסוי = בונוס', color: hotPink, correct: false, category: 'עיסקי' },

  // משאבי אנוש 👥
  { text: 'צריך לחשוב מהר במיון?', color: limeGreen, correct: true, category: 'משאבי אנוש' },
  { text: 'שקר זה טוב בראיון?', color: brightOrange, correct: false, category: 'משאבי אנוש' },
  { text: 'תקשורת בין-אישית חשובה', color: neonBlue, correct: true, category: 'משאבי אנוש' },
  { text: 'איחור זה יתרון?', color: hotPink, correct: false, category: 'משאבי אנוש' },
  { text: 'משוב בונה עוזר', color: limeGreen, correct: true, category: 'משאבי אנוש' },
  { text: 'קורות חיים = אמת בלבד', color: lightYellow, correct: true, category: 'משאבי אנוש' },
  { text: 'כישורים רכים = מיותרים', color: hotPink, correct: false, category: 'משאבי אנוש' },
  { text: 'סבלנות למועמד = חובה', color: brightOrange, correct: true, category: 'משאבי אנוש' },
  { text: 'מגייס = אויב', color: neonBlue, correct: false, category: 'משאבי אנוש' },
  { text: 'ניסיון = יתרון', color: limeGreen, correct: true, category: 'משאבי אנוש' }
]
