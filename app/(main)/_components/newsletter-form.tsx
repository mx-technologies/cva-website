export function NewsletterForm() {
  return (
    <>
      <form>
        <div className='flex items-center w-full md:w-[50%] lg:w-auto gap-3'>
          <input
            type='email'
            placeholder='Enter your email'
            className=' flex-grow px-4 py-2 border border-[#666666] rounded-full text-sm focus:outline-none'
          />
          <button
            type='submit'
            className='bg-primary-main rounded-full text-white px-6 py-2 text-sm hover:bg-primary-hover'
          >
            Send
          </button>
        </div>
      </form>
      <p className='text-gray-500 text-sm'>Join the Newsletter</p>
    </>
  );
}
