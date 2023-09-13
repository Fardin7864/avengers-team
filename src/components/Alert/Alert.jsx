import { useState, useEffect } from 'react';

const AutoDismissalAlert = ({ message, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <>
      {isVisible && (
        <div className="fixed top-0 right-0 m-4 p-4 bg-blue-500 text-white rounded-lg shadow-lg">
          <p>{message}</p>
        </div>
      )}
    </>
  );
};

export default AutoDismissalAlert;
