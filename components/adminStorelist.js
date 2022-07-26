import React from 'react';
import Link from 'next/link';

export default function StoreList({store}) {
  return (
    <div className='mt-5'>
    <div className='card'>
        <Link href={`/${store.storename}`}>
            <a>
                <img src={store.img1} alt={store.name} className='round shadow-md' />
            </a>
        </Link>
    <div className='flex flex-col items-center justify-center p-5'>
        <Link href={'/'}>
            <a>
                <h2 className='text-lg'>{store.name}</h2>
            </a>
        </Link>
        <p className='mb-2'>https://ghanabraid.com/{store.storename}</p>
        <p >State : {store.state}</p>
        <Link href={`admin/byStoreId/${store._id}`}>
            <a>
        <button 
            className='primary-button text-blue-500' 
            type='button'
            >Advertising Status
        </button>
        </a>
        </Link>
    </div>
    </div>
    </div>
  )
}
