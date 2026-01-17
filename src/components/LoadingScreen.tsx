import { useEffect, useState } from 'react'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([])
  const [isComplete, setIsComplete] = useState(false)

  const bootSequence = [
    '> Initializing Yuki OS v1.0...',
    '> Checking Solana Chain Connection... [OK]',
    '> Loading Kawaii Modules... [OK]',
    '> Scanning for Jeets... [NONE DETECTED]',
    '> Blocking Paper Hands... [SUCCESS]',
    '> Loading Pump.fun Protocol... [OK]',
    '> Initializing Meme Generators... [OK]',
    '> Checking Liquidity... [BURNED 🔥]',
    '> Verifying Mint Authority... [REVOKED 🔒]',
    '> Loading Desktop Environment...',
    '',
    'Welcome to Yuki OS.',
    'Press any key to continue...',
  ]

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < bootSequence.length) {
        setLines((prev) => [...prev, bootSequence[currentIndex]])
        currentIndex++
      } else {
        clearInterval(interval)
        setIsComplete(true)
        setTimeout(() => {
          onComplete()
        }, 1500)
      }
    }, 200) // Speed of text appearance

    return () => clearInterval(interval)
  }, [])

  // Allow user to skip by pressing any key
  useEffect(() => {
    const handleKeyPress = () => {
      if (isComplete) {
        onComplete()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isComplete, onComplete])

  return (
    <div className="scanlines fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="terminal-text w-full max-w-4xl p-8">
        <div className="space-y-1">
          {lines.map((line, index) => (
            <div
              key={index}
              className="neon-glow animate-in fade-in font-mono text-sm md:text-base"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {line}
            </div>
          ))}
          {isComplete && (
            <div className="mt-4 animate-pulse text-primary">
              █
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
