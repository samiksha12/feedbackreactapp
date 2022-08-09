import React from 'react'

function Footer({footerClass,text}) {
  return (
    <footer className={footerClass}>{text}</footer>
  )
}

export default Footer