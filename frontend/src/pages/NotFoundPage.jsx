import { Link } from 'react-router-dom';
import { Button } from '../components/ui';

/**
 * 404 Not Found page.
 */
const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-default">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
