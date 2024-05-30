import { forwardRef } from "react";
import PropTypes from "prop-types";
const Button = forwardRef(({ children, className, ...props }, ref) =>(
        <button ref={ref} className={`flex-inline px-2 rounded-full ${className}`} {...props} >
            {children}
        </button>

));
Button.displayName = 'Button';
Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default Button;
