import Image from 'next/image';
import { ConsoleForm } from './_components/console-form';

export default function ConsoleSignin() {
  return (
    <section className='flex flex-col justify-center items-center h-[100vh] gap-3'>
      <Image src='/logo.png' alt='Logo' width='50' height='50' />

      <ConsoleForm />
    </section>
  );
}
