import PropTypes from 'prop-types';

/**
 * Reusable Input component for form fields.
 * Uses design tokens for consistent styling.
 */
const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  required = false,
  className = '',
  ...props
}) => {
  const baseInputStyles = `
    w-full px-4 py-3 bg-bg-surface text-text-primary
    border border-bg-surface rounded-md
    placeholder:text-text-secondary
    transition-all duration-300 ease-in-out
    focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const errorStyles = error
    ? 'border-accent-error focus:border-accent-error focus:ring-accent-error'
    : '';

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-text-primary"
        >
          {label}
          {required && <span className="text-accent-error ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`${baseInputStyles} ${errorStyles}`}
        {...props}
      />
      {error && (
        <span className="text-sm text-accent-error">{error}</span>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default Input;
