import React from 'react'

export default function AnimatedCard({ show = true, children }) {
  return (
    <div className={`rounded-xl shadow-md p-6 bg-white max-w-md w-full transform transition-all duration-300 ${show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}`}>
      {children}
    </div>
  )
}
