import Link from "next/link";

type MenuState = 'active' | 'disabled';

interface IMenuItemProps {
  name: string
  state: MenuState
  url: string
}

export default function MenuItem({ name, state, url }: IMenuItemProps) {
  let border: string
  state === 'active' ? border = 'border-zinc-400' : border = 'border-transparent'
  
  return (
    <li className={`text-zinc-600 border p-2 rounded font-bold hover:border-zinc-600 ${border}`}>
      <Link href={url}>{name}</Link>
    </li>
  );
}
