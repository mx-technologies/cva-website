const GoogleMap = () => {
  return (
    <div className='w-full'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0005824185237!2d3.3967011754205276!3d6.521607123184442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cfc4747708d%3A0x26216b05d608656d!2sUnilag%20Guest%20house!5e0!3m2!1sen!2sng!4v1743969204336!5m2!1sen!2sng'
        className='w-full h-[300] lg:h-screen'
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default GoogleMap;
