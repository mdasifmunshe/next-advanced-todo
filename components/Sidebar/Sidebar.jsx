'use client'

import { createContext, useContext, useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DashboardIcon, AddTodoIcon, UserIcon } from '@/styles/icons'

const SidebarContext = createContext()

const sidebarLinks = [
    {
        id: 1,
        text: 'Dashboard',
        href: '/dashboard',
        path: 'dashboard',
        icon: <DashboardIcon className="h-6 w-6" />,
    },
    {
        id: 2,
        text: 'Add Todo',
        href: '/addtodo',
        path: 'addtodo',
        icon: <AddTodoIcon className="h-6 w-6" />,
    },
    {
        id: 3,
        text: 'Profile',
        href: '/profile',
        path: 'profile',
        icon: <UserIcon className="h-6 w-6" />,
    },
]

export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const pathname = usePathname()
    const trigger = useRef(null)
    const sidebar = useRef(null)
    return (
        <div>
            {/* Sidebar backdrop (mobile only) */}
            <div
                className={`fixed inset-0 z-40 bg-slate-900 bg-opacity-30 transition-opacity duration-200 lg:z-auto lg:hidden ${sidebarOpen
                    ? 'opacity-100'
                    : 'pointer-events-none opacity-0'
                    }`}
                aria-hidden="true"
            ></div>

            {/* Sidebar */}
            <div
                id="sidebar"
                ref={sidebar}
                className={`no-scrollbar absolute left-0 top-0 z-40 flex h-screen w-64 shrink-0 flex-col overflow-y-scroll bg-slate-800 py-4 pl-4 transition-all duration-200 ease-in-out lg:static lg:left-auto lg:top-auto lg:w-20 lg:translate-x-0 lg:overflow-y-auto lg:sidebar-expanded:!w-64 2xl:!w-64 ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'
                    }`}
            >
                {/* Sidebar header */}
                <div className="mb-10 flex justify-between pr-3 sm:px-2">
                    {/* Close button */}
                    <button
                        ref={trigger}
                        className="text-slate-500 hover:text-slate-400 lg:hidden"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-controls="sidebar"
                        aria-expanded={sidebarOpen}
                    >
                        <span className="sr-only">Close sidebar</span>
                        <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                        </svg>
                    </button>
                    {/* Logo */}
                    <Link href="/dashboard" className="block">
                        <div className="text-xl font-bold text-white">WT</div>
                    </Link>
                </div>
                {/* Links */}
                <div className="space-y-8">
                    {/* Pages group */}
                    <div>
                        <h3 className="pl-3 text-xs font-semibold uppercase text-slate-500">
                            <span
                                className="hidden w-6 text-center lg:block lg:sidebar-expanded:hidden 2xl:hidden"
                                aria-hidden="true"
                            >
                                •••
                            </span>
                        </h3>
                        <ul className="mt-3">
                            {sidebarLinks.map((sidebar) => (
                                <li
                                    key={sidebar.id}
                                    className={`mb-2 rounded-l-xl px-3 py-2 last:mb-0 hover:bg-slate-900
								${pathname.includes(sidebar.path) && 'bg-slate-900'}`}
                                >
                                    <Link
                                        href={sidebar.href}
                                        className={`block truncate text-slate-300 transition duration-150 hover:text-white 
									${pathname.includes(sidebar.path) && 'text-white'}`}
                                    >
                                        <div className="flex items-center">
                                            {sidebar.icon}
                                            <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                                {sidebar.text}
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
