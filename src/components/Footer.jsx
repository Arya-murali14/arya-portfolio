import { FaBug, FaHeart, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-green to-neon-cyan flex items-center justify-center">
              <FaBug className="text-dark-950 text-sm" />
            </div>
            <span className="font-bold text-white text-sm">Aryamol M M</span>
          </div>

          {/* Center */}
          <p className="text-gray-600 text-xs flex items-center gap-1.5">
            Crafted with <FaHeart className="text-fail text-[10px]" /> and rigorous testing
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/aryamol-m-m-95b310147"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-500 hover:text-neon-green hover:border-neon-green/30 transition-all"
            >
              <FaLinkedin size={14} />
            </a>
            <a
              href="mailto:aryammurali996@gmail.com"
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-500 hover:text-neon-green hover:border-neon-green/30 transition-all"
            >
              <FaEnvelope size={14} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-700 text-[11px] font-mono">
            © {new Date().getFullYear()} Aryamol M M. All rights reserved.
            <span className="text-neon-green/40 mx-2">|</span>
            <span className="text-gray-600">Senior QA Engineer</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
