export default function Button({ children, isTextOnly, className, ...props }) {
  const buttonClasses = isTextOnly
    ? `text-button ${className}`
    : `button ${className}`;
  return (
    <button {...props} className={buttonClasses}>
      {children}
    </button>
  );
}
