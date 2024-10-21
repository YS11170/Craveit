import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  // Function to handle app download click
  const handleAppDownload = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the device is iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // Redirect to App Store
      window.location.href = 'https://apps.apple.com/app/idYOUR_APP_ID'; 
    }
    // Check if the device is Android
    else if (/android/i.test(userAgent)) {
      // Redirect to Play Store
      window.location.href = 'https://play.google.com/store/apps/details?id=YOUR_APP_ID'; 
    }
    // Fallback for other devices
    else {
      alert('Your device is not supported for app download.');
    }
  };

  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br /> Cravelt App</p>
      <div className="app-download-platforms">
        <img 
          src={assets.app_store} 
          alt="Download on the App Store" 
          onClick={handleAppDownload} // Add onClick event to the App Store image
        />
        <img 
          src={assets.play_store} 
          alt="Get it on Google Play" 
          onClick={handleAppDownload} // Add onClick event to the Play Store image
        />
      </div>
    </div>
  );
};

export default AppDownload;
