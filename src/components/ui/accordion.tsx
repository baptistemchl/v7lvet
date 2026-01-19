'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: AccordionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        'border-b border-velvet-800/50',
        'transition-colors duration-300',
        isOpen && 'border-velvet-700/50'
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            'text-lg font-medium transition-colors duration-300',
            isOpen ? 'text-white' : 'text-velvet-200 group-hover:text-white'
          )}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className={cn(
            'flex-shrink-0 ml-4 p-2 rounded-full',
            'transition-colors duration-300',
            isOpen ? 'bg-accent text-surface' : 'bg-velvet-800 text-velvet-400'
          )}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-velvet-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

interface AccordionProps {
  items: { question: string; answer: string }[]
  className?: string
  allowMultiple?: boolean
}

export function Accordion({
  items,
  className,
  allowMultiple = false,
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      )
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]))
    }
  }

  return (
    <div className={className}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  )
}
