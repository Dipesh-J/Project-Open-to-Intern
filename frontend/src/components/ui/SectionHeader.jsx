import PropTypes from 'prop-types';

/**
 * Reusable Section Header component.
 * Uses design tokens for consistent styling.
 */
const SectionHeader = ({
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-8 ${alignments[align]} ${className}`}>
      <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string,
};

export default SectionHeader;
