import { PlaySquareIcon, SearchIcon } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
    open: boolean;
}

export default function Sidebar({ open }: SidebarProps) {
    return (
        <aside className={`${open ? 'w-64' : 'w-22'} h-screen border-r border-gray-800 text-white p-4`}>
            <nav className="space-y-2">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-700 items-center rounded">
                    <SearchIcon className="inline-block mr-2" />
                    {open ? "Search" : ""}
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-700 rounded items-center">
                    <PlaySquareIcon className="inline-block mr-2" />
                    {open ? "Drops" : ""}
                </Link>
            </nav>
        </aside>
    )
}