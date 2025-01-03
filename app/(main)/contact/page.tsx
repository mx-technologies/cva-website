import ContactForm from './_components/contact-form';
import GoogleMap from './_components/google-map';

export default function Contact() {
  return (
    <main className='flex flex-col-reverse md:flex-row lg:h-[100vh]'>
      <ContactForm />
      <GoogleMap />
    </main>
  );
}
