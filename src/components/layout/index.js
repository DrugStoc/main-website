import { createContext, useEffect, useState } from 'react';
import AOS from 'aos';
import SkipToMain from 'components/a11y/skip-to-main';
import Footer from 'components/footer';
import Navbar from 'components/navbar';

export const ThemeContext = createContext();

const Layout = ({ children, noFooter = false, noNav = false }) => {
  const [theme, setTheme] = useState('dark');
  const [loaded, setLoaded] = useState(false);

  const loadTheme = () => localStorage.getItem('EZE_THEME');

  useEffect(() => {
    setLoaded(true);
    AOS.init({ duration: 300 });
    const savedTheme = loadTheme();
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const toggleTheme = mode => {
    setTheme(mode);
    localStorage.setItem('EZE_THEME', mode);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <SkipToMain content="main-content" />
      <div>
        {!noNav && <Navbar theme={theme} />}
        {!loaded && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: '#fff',
              zIndex: 9999,
            }}
          />
        )}
        <main className="margin__main" id="main-content">
          {children}
        </main>
        {!noFooter && <Footer />}
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
