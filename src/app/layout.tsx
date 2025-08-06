import '../styles/globals.css'
import Image from 'next/image'

export const metadata = {
  title: 'Fast Brain Game',
  description: 'משחק מהיר לילדים'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body style={{ margin: 0 }}>
        {children}

        <footer
          style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            textAlign: 'center',
            background: 'rgba(0, 0, 0, 0.3)', // רקע שקוף חלקית
            backdropFilter: 'blur(5px)', // טשטוש עדין
            fontSize: '.6rem',
            zIndex: 100
          }}
        >
          <a
            href="https://brotechstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#00FFFF', // כחול ניאון
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'opacity 0.3s',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              direction: 'rtl'
            }}
          >
            <Image
              src="/BroTechLogoF.png"
              alt="הלוגו שלי"
              width={40}
              height={40}
              style={{
                verticalAlign: 'middle',
                marginInlineStart: '4px',
                filter: 'drop-shadow(0 0 2px #00ffff)'
              }}
            />
            BroTech
          </a>
        </footer>
      </body>
    </html>
  )
}
