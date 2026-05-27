'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  label?: string
  title?: string
  description?: string
}

export function Section({ 
  id, 
  children, 
  className = '',
  label,
  title,
  description 
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {(label || title) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            {label && (
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
                {label}
              </span>
            )}
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-muted-foreground max-w-2xl">
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
