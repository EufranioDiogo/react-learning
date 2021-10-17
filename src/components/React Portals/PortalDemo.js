import React from 'react'
import ReactDOM from 'react-dom';

function PortalDemo({message, timer, startAnimation, changeAnimationState}) {
  const element = document.querySelector('.notification-popup');

  const startNotificationAnimationFunction = () => {
    element.classList.add('popup');
    element.classList.remove('remove-popup');
  }

  if (startAnimation) {
    startNotificationAnimationFunction();

    setTimeout(() => {
      element.classList.remove('popup');
      element.classList.add('remove-popup');
      changeAnimationState();
    }, timer)
  }
  
  return ReactDOM.createPortal((
    <div className="notification-popup">
      {message}
    </div>
  ), document.getElementById('portal-root'));
}

export default PortalDemo
