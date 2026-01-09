import React from 'react'
import BaseBtn from './ui/BaseBtn'
import HelpCard from './help/HelpCard'

export default function Help() {
  return (
    <div>
        <div className="container">
            <div className="flex items-center justify-between ">
                <h2 className='text-[48px] font-medium leading-[62px] text-[#000000]'>Кому мы помогаем сейчас</h2>
                <BaseBtn text='See More' className='bg-black text-white px-[24px] py-[12px]'/>
            </div>

            <div className="flex items-center gap-[24px] mt-[32px] ">
                <HelpCard/>
            </div>
        </div>
    </div>
  )
}
