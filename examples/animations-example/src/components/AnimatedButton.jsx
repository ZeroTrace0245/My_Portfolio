import React from 'react'

export default function AnimatedButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
    >
      {children}
    </button>
  )
}
