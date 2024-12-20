
const SidebarMob = () => {
    return (
        <div className="lg:hidden flex border-b p-3 items-center justify-between">
            <div className="flex items-center gap-3">
                <img src="/logo.svg" alt="CodeAnt AI" className="w-7 h-8" />
                <span className="font-satoshi text-2xl">CodeAnt AI</span>
            </div>

            <div>
                <img src="/assets/mobileNav.svg" alt="Mobile Nav" />
            </div>
        </div>
    )
}

export default SidebarMob