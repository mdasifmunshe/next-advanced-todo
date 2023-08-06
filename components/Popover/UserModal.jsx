'use client';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const dropdownItems = [
  {
    name: 'Profile',
    href: '/profile',
    icon: <UserIcon className="h-6 w-6 text-gray-900" aria-hidden="true" />,
  },
  {
    name: 'Sign Out',
    href: '##',
    icon: (
      <ArrowRightOnRectangleIcon
        className="h-6 w-6 text-gray-900"
        aria-hidden="true"
      />
    ),
  },
];

export default function UserModal() {
  return (
    <div className="fixed -right-2 top-3 max-w-sm px-4 sm:right-2 lg:right-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                                    ${open ? '' : 'text-opacity-90'}
                                    group inline-flex items-center rounded-md bg-indigo-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-opacity-75`}
            >
              <span>User Name</span>
              <ChevronDownIcon
                className={`${open ? 'rotate-180 transform' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-indigo-300 transition duration-150 ease-in-out hover:text-white group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -right-24 z-10 mt-3 w-screen max-w-[12rem] -translate-x-1/2 transform sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-4 bg-gray-50 p-7 lg:grid-cols-1">
                    {dropdownItems.map((item) => (
                      <Popover.Button
                        as={Link}
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-10 sm:w-10">
                          {item.icon}
                        </div>
                        <div className="ml-2">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </Popover.Button>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
