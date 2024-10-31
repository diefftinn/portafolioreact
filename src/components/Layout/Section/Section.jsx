import React from 'react';
import './section.css'

export const Section = ({children, styleSection}) => {
  return (
    <section className={styleSection}>
    {children} 
    
  </section>
  )
}
