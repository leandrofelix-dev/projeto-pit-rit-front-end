import Image from 'next/image'
import ifceLogo from '/public/ifce-logo.png'
import MenuItem from '../menu-item'

export default function Header() {
  return (
    <header className='bg-white opacity-90 flex flex-col items-center justify-between border-b border-b-zinc-200 px-10 py-2 fixed w-full md:flex-row'>
      <Image 
        src={ifceLogo} 
        alt={'LOGO DO IFCE CAMPUS CEDRO'} 
        width={200}
      />
      <nav>
        <ul className='flex items-center space-x-8 text-zinc-200'>
          <MenuItem name="Inicio" state="active" url="/reports/"/>
          <MenuItem name="PIT" state="active" url="/reports/pit"/>
          <MenuItem name="Ajuda" state="disabled" url="/reports/help"/>
        </ul>
      </nav>
    </header>
  )
}
