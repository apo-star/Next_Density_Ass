import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <div className='mt-24 border-t-2 border-grey-500 w-full'>
      <div className='mt-6 w-full gap-6 flex flex-col items-center justify-center'>
        <img src={'/header.jpg'} width={65} />
        <p className='text-2xl font-bold text-[#6448D6]'>ahead</p>
        <div className='flex gap-8'>
          <div className='flex items-center justify-center'>
            <img src={'/assets/map.png'} />
            <div>Auguststrabe 26, 10117 Berlin</div>
          </div>
          <div className='flex items-center justify-center'>
            <img src={'/assets/mail.png'} />
            <div>hello@join.com</div>
          </div>
        </div>
        <Image className='' height={100} width={150} src={'/assets/mac.png'} />
        <p>© 2023 Ahead app. All Right reserved</p>
      </div>
    </div>
  );
}

export default Footer;
