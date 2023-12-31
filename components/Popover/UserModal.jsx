'use client';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

export default function UserModal({ user }) {
  return (
    <div className="fixed -right-2 top-3 max-w-sm pr-4 sm:right-2 lg:right-4">
      <Popover className="relative mt-1">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                          ${open ? '' : 'text-opacity-90'}
                            group inline-flex items-center rounded-md bg-indigo-500 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-opacity-75`}
            >
              <UserCircleIcon className='h-8 w-8 fill-indigo-500' />
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
                    <Popover.Button
                      as={Link}
                      href={'/profile'}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-10 sm:w-10">
                        <UserIcon
                          className="h-6 w-6 text-gray-900"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-2">
                        <p className="text-sm font-medium text-gray-900">
                          {'Profile'}
                        </p>
                      </div>
                    </Popover.Button>
                    <Popover.Button
                      onClick={() => signOut()}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-10 sm:w-10">
                        <ArrowRightOnRectangleIcon
                          className="h-6 w-6 text-gray-900"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-2">
                        <p className="text-sm font-medium text-gray-900">
                          {'Sign Out'}
                        </p>
                      </div>
                    </Popover.Button>
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
