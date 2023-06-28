'use client'

import useParticipantStore from '@/store/use-participant';
import Link from 'next/link'

interface props {
    href: string;
    title: string;
}

export const SideBarItem: React.FC<props> = ({ href, title }) => {
    const { showSideBar } = useParticipantStore((state) => state);
    return (
        <Link href={href} className='py-2 px-4 hover:bg-gray-100 rounded-md' onClick={() => showSideBar(false)}>{title}</Link>
    )
}