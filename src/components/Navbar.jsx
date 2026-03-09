import { useEffect, useState } from 'react';

function Navbar({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsShrunk(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleItemClick = () => setIsOpen(false);

  return (
    <nav id="navbar" className={isShrunk ? 'navbar navbar--shrunk' : 'navbar'}>
      <a href="#hero" className="logo" onClick={handleItemClick}>
        Irish<span>Stack</span>
      </a>

      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={item.isCta ? 'nav-cta' : ''}
              onClick={handleItemClick}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="hamburger"
        aria-label="Menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Navbar;
