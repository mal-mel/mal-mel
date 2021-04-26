import './error-indicator.css';


const ErrorIndicator = () => {
    return (
        <div className="error-section text-center">
            <h3>Something went wrong</h3>
            <span>but</span>
            <h3 className="fix-message">We already fix this</h3>
        </div>
    );
};


export default ErrorIndicator;
