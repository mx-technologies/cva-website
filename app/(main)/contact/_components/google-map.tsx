const GoogleMap = () => {
  return (
    <div className='w-full'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.033521041384!2d3.39720441007627!3d6.517441123207508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d9b7878e6f9%3A0x8ee67a79e30377fc!2sRahman%20Bello%20Auditorium!5e0!3m2!1sen!2sng!4v1735936605522!5m2!1sen!2sng'
        className='w-full h-[300] lg:h-screen'
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default GoogleMap;
