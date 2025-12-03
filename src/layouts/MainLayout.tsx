import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { useTheme } from '../hooks/useTheme';

/**
 * MainLayout component.
 * Wraps all pages with the Navbar and Footer.
 * Manages the dark/light theme state.
 */

export function MainLayout() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Subtle grain texture overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navbar isDark={isDark} onThemeToggle={toggleTheme} />

      {/* Main content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}


