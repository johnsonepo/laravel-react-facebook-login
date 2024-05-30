import { forwardRef } from "react";
import PropTypes from "prop-types";
const Input = forwardRef(({ className, placeholder, type, autocomplete, ...props }, ref) => (
    <input
        ref={ref}
        type={type}
        className={`text-lg px-2 border border-gray-300 focus:outline-none focus:border-transparent rounded-lg ${className}`}
        placeholder={placeholder}
        autoComplete={autocomplete}
        {...props}
    />
));
Input.displayName = 'Input';
Input.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    autocomplete: PropTypes.string,
    type: PropTypes.string
};
export default Input;
