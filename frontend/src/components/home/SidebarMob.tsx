import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

const SidebarMob = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="lg:hidden relative">
                <div className="flex border-b p-3 px-5 items-center justify-between bg-white">
                    <div className="flex items-center gap-3">
                        <img src="/logo.svg" alt="CodeAnt AI" className="w-7 h-8" />
                        <span className="font-satoshi text-2xl">CodeAnt AI</span>
                    </div>

                    <DropdownMenu onOpenChange={setIsOpen}>
                        <DropdownMenuTrigger asChild>
                            <button className="focus:outline-none">
                                <img 
                                    src={isOpen ? "/assets/X.svg" : "/assets/mobileNav.svg"}
                                    alt="Menu" 
                                    className="cursor-pointer" 
                                />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent 
                            align="end" 
                            className="font-inter text-base font-semibold mt-2 rounded-none w-screen p-2 border-none shadow-none bg-white"
                        >
                            <DropdownMenuLabel className='flex items-center justify-between py-2 px-4 rounded-lg font-inter text-sm border border-secondary shadow-sm'>
                                <p className='text-ellipsis'>Yash Jaiswal</p>
                                <img src="/assets/chevron-down.svg" alt="Down" />
                            </DropdownMenuLabel>

                            <DropdownMenuItem className="flex items-center gap-3 px-5 mt-2">
                                <img src="/assets/home-black.svg" alt="Repo" />
                                <span>Repositories</span>
                            </DropdownMenuItem>

                            <DropdownMenuItem className="flex items-center gap-3 px-5">
                                <img src="/assets/code.svg" alt="Code" />
                                <span>AI Code Review</span>
                            </DropdownMenuItem>

                            <DropdownMenuItem className="flex items-center gap-3 px-5">
                                <img src="/assets/cloud.svg" alt="Cloud" />
                                <span>Cloud Security</span>
                            </DropdownMenuItem>

                            <DropdownMenuItem className="flex items-center gap-3 px-5">
                                <img src="/assets/docs.svg" alt="How to Use" />
                                <span>How to Use</span>
                            </DropdownMenuItem>

                            <DropdownMenuItem className="flex items-center gap-3 px-5">
                                <img src="/assets/settings.svg" alt="Settings" />
                                <span>Settings</span>
                            </DropdownMenuItem>

                            <DropdownMenuItem className="flex items-center gap-3 px-5">
                                <img src="/assets/phone.svg" alt="Support" />
                                <span>Support</span>
                            </DropdownMenuItem>

                            <DropdownMenuItem className="flex items-center gap-3 px-5">
                                <img src="/assets/logout.svg" alt="Logout" />
                                <span>Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {isOpen && (
                    <div className="fixed inset-x-0 top-20 bottom-0 bg-black/50"
                    />
                )}
            </div>
        </>
    )
}

export default SidebarMob