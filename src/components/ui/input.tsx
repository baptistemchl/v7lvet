'use client'

import { forwardRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type = 'text', ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
      <div className="relative">
        {label && (
          <label className="block text-sm text-velvet-400 mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            type={type}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              'w-full px-4 py-3.5 rounded-xl',
              'bg-velvet-900/50 border border-velvet-800',
              'text-velvet-100 placeholder:text-velvet-600',
              'transition-all duration-300',
              'focus:outline-none focus:border-accent/50',
              error && 'border-red-500/50',
              className
            )}
            {...props}
          />
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            initial={false}
            animate={{
              boxShadow: isFocused
                ? '0 0 0 2px rgba(167, 139, 250, 0.2)'
                : '0 0 0 0px transparent',
            }}
            transition={{ duration: 0.2 }}
          />
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-400">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
      <div className="relative">
        {label && (
          <label className="block text-sm text-velvet-400 mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              'w-full px-4 py-3.5 rounded-xl resize-none',
              'bg-velvet-900/50 border border-velvet-800',
              'text-velvet-100 placeholder:text-velvet-600',
              'transition-all duration-300',
              'focus:outline-none focus:border-accent/50',
              error && 'border-red-500/50',
              className
            )}
            {...props}
          />
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            initial={false}
            animate={{
              boxShadow: isFocused
                ? '0 0 0 2px rgba(167, 139, 250, 0.2)'
                : '0 0 0 0px transparent',
            }}
            transition={{ duration: 0.2 }}
          />
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-400">{error}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
