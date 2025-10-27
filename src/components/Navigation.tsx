'use client'

import Link from "next/link"
import { useState } from "react"

interface NavigationProps {
  variant?: 'home' | 'smp' | 'wiki' | 'staff'
  showBackButton?: boolean
  backLink?: string
  backText?: string
}

export default function Navigation({
  variant = 'home',
  showBackButton = false,
  backLink = '/',
  backText = '← Back to Home'
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const getLogoConfig = () => {
    switch (variant) {
      case 'smp':
        return { className: 'nav-logo-towny', icon: '⚔️', title: 'Enhanced SMP' }
      case 'wiki':
        return { className: 'nav-logo-wiki', icon: '📚', title: 'SMP Wiki' }
      case 'staff':
        return { className: 'nav-logo-staff', icon: '👥', title: 'Staff Team' }
      default:
        return {
          className: 'nav-logo-home',
          icon: <img src="/logo.png" alt="Server Logo" width="32" height="32" />,
          title: 'KasadyaCraft'
        }
    }
  }

  const logo = getLogoConfig()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="nav-container">
      <div className="container">
        <div className="nav-flex">
          <div className="nav-left">
            {showBackButton && (
              <Link href={backLink} className="nav-back">
                {backText}
              </Link>
            )}
            <div className={`nav-logo ${logo.className}`}>
              {logo.icon}
            </div>
            <div>
              <h1 className="nav-title">{logo.title}</h1>
              <p className="nav-subtitle-mono">play.kasadyacraft.online</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-right nav-desktop">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/smp" className={variant === 'smp' || variant === 'wiki' ? 'nav-link-towny' : 'nav-link'}>SMP</Link>
            {(variant === 'smp' || variant === 'wiki') && (
              <Link href="/smp/wiki" className={variant === 'wiki' ? 'nav-link-wiki' : 'nav-link'}>Wiki</Link>
            )}
            <Link href="/staff" className="nav-link">Staff</Link>
            <a href="https://discord.gg/8DY3eXHnAg" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              💬 Discord
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link href="/" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link
            href="/smp"
            className={(variant === 'smp' || variant === 'wiki') ? 'mobile-menu-link active' : 'mobile-menu-link'}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            SMP
          </Link>
          {(variant === 'smp' || variant === 'wiki') && (
            <Link
              href="/smp/wiki"
              className={variant === 'wiki' ? 'mobile-menu-link active' : 'mobile-menu-link'}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Wiki
            </Link>
          )}
          <Link href="/staff" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>
            Staff
          </Link>
          <a
            href="https://discord.gg/8DY3eXHnAg"
            className="btn btn-secondary mobile-menu-btn"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            💬 Discord
          </a>
        </div>
      </div>
    </nav>
  )
}
