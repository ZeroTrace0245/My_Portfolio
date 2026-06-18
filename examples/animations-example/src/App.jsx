import React, { useState } from 'react'
import AnimatedButton from './components/AnimatedButton'
import AnimatedCard from './components/AnimatedCard'

export default function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="space-y-6">
        <div className="flex justify-center">
          <AnimatedButton onClick={() => setShow(s => !s)}>
            Toggle Card
          </AnimatedButton>
        </div>
        <div className="flex justify-center">
          <AnimatedCard show={show}>
            <h2 className="text-xl font-semibold">Animated Card</h2>
            <p className="text-gray-600 mt-2">This card fades and slides using Tailwind utilities and conditional classes.</p>
          </AnimatedCard>
        </div>
      </div>
    </div>
  )
}
