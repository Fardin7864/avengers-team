import { useEffect } from 'react';
import PropTypes from 'prop-types'
import './Alert.css'

const AutoDismissalAlert = ({isVisible}) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        
      }, 1500);
  
      return () => {
        clearTimeout(timer);
      };
    }, []);
  
    return (
      <>
        {isVisible && (
             <div className={`fixed top-0 right-0 m-4 bg-blue-500 text-white rounded-lg shadow-lg`}>
                <div className="h-2 bg-green-400 mt-0 rounded-tr-lg rounded-tl-lg">
                    <div className="h-full w-0 bg-green-600 animate-timer rounded-tr-lg rounded-tl-lg"></div>
                </div>
                
                <p className='p-2'>You are out of budget!</p>
                </div>
        )}
      </>
    );
  };

  AutoDismissalAlert.propTypes = {
    isVisible: PropTypes.bool
  }
  

export default AutoDismissalAlert;
