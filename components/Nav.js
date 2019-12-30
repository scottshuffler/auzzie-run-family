import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://scottshuffler.me', label: 'Portfolio' },
  { href: 'https://github.com/scottshuffler', label: 'GitHub' },
  { href: 'https://github.com/zeit/next.js', label: 'Resume' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          <a className="logo">AuzzieRun Family</a>
        </Link>
      </li>
      {/* {links.map(({ key, href, label }) => (
        <li className="subHead" key={key}>
          <a href={href}>{label}</a>
        </li>
      ))} */}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        // justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      .subHead {
        padding: 11px 6px;
      }
      a {
        color: black;
        text-decoration: none;
        font-size: 13px;
      }
      .logo {
        font-size: 1.2rem;
      }
    `}</style>
  </nav>
)

export default Nav
