import { TopSidebarItems } from '../../lib/SidebarItems';
import { BottomSidebarItems } from '../../lib/SidebarItems';

const Sidebar = () => {

    return (
        <aside className="w-64 bg-white border-r border-gray-200 flex-col h-screen lg:flex hidden">
            <div className="p-4">
                <div className="flex items-center gap-3">
                    <img src="/logo.svg" alt="CodeAnt AI" className="w-7 h-8" />
                    <span className="font-satoshi text-2xl">CodeAnt AI</span>
                </div>

                <div className='flex items-center justify-between py-2 px-4 mt-5 rounded-lg font-inter text-sm border border-secondary shadow-sm'>
                    <p className='text-ellipsis'>Yash Jaiswal</p>
                    <img src="assets/chevron-down.svg" alt="Down" />
                </div>
            </div>



            <nav className="flex-1 px-4">
                <div className="space-y-1">
                    {TopSidebarItems.map((item) => (
                        <a
                            key={item.label}
                            href="#"
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-inter font-semibold ${item.active
                                ? 'bg-primary text-white'
                                : 'text-sidebarText hover:bg-gray-100'
                                }`}
                        >
                            <img
                                src={`assets/${item.image}.svg`}
                                alt={item.label}
                                className="w-6 h-6" />
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>

            <div className="p-4">
                <div className="space-y-1">
                    {BottomSidebarItems.map((item) => (
                        <a
                            key={item.label}
                            href="#"
                            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-sidebarText font-inter font-semibold hover:bg-gray-100"
                        >
                            <img
                                src={`assets/${item.icon}.svg`}
                                alt={item.label}
                                className="w-6 h-6" />
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;