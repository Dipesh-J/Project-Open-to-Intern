import PropTypes from 'prop-types';

/**
 * Reusable Badge/Tag component for labels and status indicators.
 * Uses design tokens for consistent styling.
 */
const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-md';

  const variants = {
    default: 'bg-bg-surface text-text-secondary',
    primary: 'bg-primary text-white',
    success: 'bg-accent-success text-white',
    warning: 'bg-accent-warning text-bg-default',
    error: 'bg-accent-error text-white',
    outline: 'border border-primary text-primary bg-transparent',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'error', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default Badge;
