import Image from 'next/image';
import { ConsoleForm } from './_components/console-form';
import Link from 'next/link';

export default function ConsoleSignin() {
  return (
    <section className='flex flex-col justify-center items-center h-[100vh] gap-3'>
      <Link href='/'>
        <Image src='/logo.png' alt='Logo' width='50' height='50' />
      </Link>

      <ConsoleForm />
    </section>
  );
}
