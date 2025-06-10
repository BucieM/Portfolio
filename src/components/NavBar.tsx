import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'About', href: 'about' },
    { label: 'Experience', href: 'experience' },
    { label: 'Projects', href: 'projects' },
    { label: 'Education', href: 'education' },
    { label: 'Contact', href: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-primary cursor-pointer"
          >
            Busi Manzini
          </a>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 hover:text-primary transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block py-2 text-gray-600 hover:text-primary transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
