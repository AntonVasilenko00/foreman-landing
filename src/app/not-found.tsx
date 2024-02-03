import Section from '@/shared/components/layout/section'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <Section useDarkBackgroundImage>
    <div className='mt-36 section-container w-full h-[70vh] flex flex-col gap-4 items-center justify-center text-slate-200'>
      <h2 className='text-xl'>Упс!</h2>
      <p>Похоже вы ушли с главной страницы.</p>
      <a className='hover:scale-110 duration-300 border-b-2 w-fit border-b-orange-500 text-orange-500 text-lg' href="/">Домой</a>
    </div>
    </Section>
  )
}