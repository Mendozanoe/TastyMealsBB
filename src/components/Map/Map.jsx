import React from 'react';
import "../Map/map.css"

const Map = () => {
  return (
    <div className='map-container'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.2758595771043!2d-65.41471309999996!3d-24.78600580000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3d0d7c7f581%3A0xd95e1ee4250ceb89!2sTasty%20Meals!5e0!3m2!1ses-419!2sar!4v1722183821379!5m2!1ses-419!2sar"

        className='map-iframe'
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"

      ></iframe>
    </div>
  );
};

export default Map;
