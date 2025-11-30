import { Link } from 'react-router-dom';

/**
 * Footer component.
 * Uses design tokens for consistent styling.
 */
const Footer = () => {
  return (
    <footer className="bg-bg-surface border-t border-bg-default mt-auto">
      <div className="container-lg py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <Link to="/" className="text-lg font-semibold text-primary-variant">
              Open<span className="text-text-primary">Intern</span>
            </Link>
            <p className="text-sm text-text-secondary mt-1">
              Connect students with internship opportunities
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <Link to="/colleges" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              Colleges
            </Link>
            <Link to="/interns/new" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              Apply
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-bg-default text-center">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} OpenIntern. Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
