import { IconChat } from '@/components/icons/IconChat';
import { IconLock } from '@/components/icons/IconLock';
import Link from 'next/link';

export default function MyAccountSettingsPage() {
  const links = [
    {
      name: 'Support/Help',
      path: '/my-account/settings/support',
      icon: <IconChat color='header-100' />,
    },
    {
      name: 'Change Password',
      path: '/my-account/settings/change-password',
      icon: <IconLock color='header-100' />,
    },
  ];

  return (
    <section className='w-100 grid gap-6 lg:max-w-[516px]'>
      <ul className='grid gap-4'>
        {links.map((link) => (
          <li
            key={link.name}
            className='group flex items-center gap-1 py-2 text-base font-medium text-header-100'
          >
            <div className='p-2'>{link.icon}</div>

            <Link
              className='rounded-md px-4 group-hover:bg-header-100/10'
              href={link.path}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
