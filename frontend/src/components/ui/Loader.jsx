import PropTypes from 'prop-types';

/**
 * Reusable Loader component for loading states.
 * Uses design tokens for consistent styling.
 */
const Loader = ({ size = 'md', className = '', fullScreen = false }) => {
  const sizes = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-3',
    xl: 'h-16 w-16 border-4',
  };

  const spinner = (
    <div
      className={`
        animate-spin rounded-full
        border-primary border-t-transparent
        ${sizes[size]}
        ${className}
      `}
    />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-bg-default/80 backdrop-blur-sm flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

Loader.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
  fullScreen: PropTypes.bool,
};

export default Loader;
