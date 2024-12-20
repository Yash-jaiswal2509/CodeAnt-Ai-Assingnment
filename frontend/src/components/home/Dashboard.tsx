const Dashboard = () => {
  const repositories = [
    {
      name: 'design-system',
      language: 'React',
      size: '7320 KB',
      visibility: 'Public',
      updatedAt: '1 day ago'
    },
    {
      name: 'mobile-app',
      language: 'Swift',
      size: '3096 KB',
      visibility: 'Public',
      updatedAt: '3 days ago'
    },
    {
      name: 'blog-website',
      language: 'HTML/CSS',
      size: '1876 KB',
      visibility: 'Public',
      updatedAt: '4 days ago'
    }
  ];

  return (
    <div className="h-[95vh] font-inter bg-[#FFFFFF] rounded-xl border border-[#E9EAEB]">
      <div className="w-full mx-auto p-6">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className=" text-black text-2xl font-semibold">Repositories</h1>
            <p className="text-gray-600 text-sm">33 total repositories</p>
          </div>

          <div className="flex gap-3 text-sm">
            <button className="flex items-center gap-2 px-3 py-2 rounded-md border border-secondary shadow-sm drop-shadow-sm hover:bg-gray-50/20">
              <img src="/assets/refresh.svg" alt='Refresh' />
              <span>Refresh All</span>
            </button>

            <button className="flex items-center gap-2 px-3 py-2 rounded-md bg-primary text-white drop-shadow-sm hover:bg-blue-600">
              <img src="/assets/add.svg" alt='Add Repository' />
              <span>Add Repository</span>
            </button>
          </div>
        </header>

        <div className="relative">
          <img src='/assets/search.svg' className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
          <input
            type="text"
            placeholder="Search Repositories"
            className="pl-10 py-2 w-96 text-sm placeholder-[#414651] border border-secondary shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="">
        {repositories.map((repo) => (
          <div
            key={repo.name}
            className="bg-white p-4 border-t-[1px] border-[#D5D7DA] hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {repo.name}
                  </h3>
                  <span className="px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
                    {repo.visibility}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    {repo.language}
                  </div>
                  <span>{repo.size}</span>
                  <span>Updated {repo.updatedAt}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;