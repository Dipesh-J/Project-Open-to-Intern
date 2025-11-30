import PropTypes from 'prop-types';

/**
 * Reusable API Error component for displaying error states.
 * Uses design tokens for consistent styling.
 */
const APIError = ({
  message = 'Something went wrong. Please try again.',
  onRetry,
  className = '',
}) => {
  return (
    <div
      className={`
        flex flex-col items-center justify-center
        p-8 bg-bg-surface rounded-lg
        text-center
        ${className}
      `}
    >
      <svg
        className="w-16 h-16 text-accent-error mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <h3 className="text-lg font-semibold text-text-primary mb-2">
        Oops! Something went wrong
      </h3>
      <p className="text-text-secondary mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-variant transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

APIError.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func,
  className: PropTypes.string,
};

export default APIError;
