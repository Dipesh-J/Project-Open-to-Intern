import PropTypes from 'prop-types';

/**
 * Reusable Card component for content containers.
 * Uses design tokens for consistent styling.
 */
const Card = ({
  children,
  title,
  subtitle,
  variant = 'default',
  className = '',
  onClick,
  hoverable = false,
  ...props
}) => {
  const baseStyles = `
    bg-bg-surface rounded-lg overflow-hidden
    transition-all duration-300 ease-in-out
  `;

  const variants = {
    default: '',
    elevated: 'shadow-navbar',
    bordered: 'border border-primary/20',
  };

  const hoverStyles = hoverable
    ? 'cursor-pointer hover:shadow-navbar hover:-translate-y-1'
    : '';

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {(title || subtitle) && (
        <div className="p-4 border-b border-bg-default">
          {title && (
            <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
          )}
          {subtitle && (
            <p className="text-sm text-text-secondary mt-1">{subtitle}</p>
          )}
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'elevated', 'bordered']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  hoverable: PropTypes.bool,
};

export default Card;
