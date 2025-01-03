import { LoaderIcon } from "lucide-react";
import { useGithubFetch } from "../../hooks/getGithubRepo";
import { formatRelativeTime } from "../../lib/formatedDate";

const Repositories = () => {
  const { data, isLoading } = useGithubFetch("/users/Yash-jaiswal2509/repos") as { data: Repo[], isLoading: boolean, error: any };

  return (
    <div className="h-[95vh] font-inter bg-[#FFFFFF] lg:rounded-xl border border-[#E9EAEB] overflow-hidden">
      <div className="w-full mx-auto p-7">
        <header className="flex md:flex-row flex-col justify-between md:items-center mb-3 md:mb-6">
          <div>
            <h1 className=" text-black text-2xl font-semibold">Repositories</h1>
            <p className="text-gray-600 text-sm">{data?.length} total repositories</p>
          </div>

          <div className="flex gap-3 text-sm md:mt-0 mt-3">
            <button className="flex items-center gap-2 px-3 py-2 rounded-md border border-secondary shadow-sm drop-shadow-sm hover:bg-gray-50/20">
              <img src="assets/refresh.svg" alt='Refresh' />
              <span>Refresh All</span>
            </button>

            <button className="flex items-center gap-2 px-3 py-2 rounded-md bg-primary text-white drop-shadow-sm hover:bg-blue-600">
              <img src="assets/add.svg" alt='Add Repository' />
              <span>Add Repository</span>
            </button>
          </div>
        </header>

        <div className="relative">
          <img src='assets/search.svg' className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
          <input
            type="text"
            placeholder="Search Repositories"
            className="pl-10 py-2 w-full md:w-96 text-sm placeholder-[#414651] border border-secondary shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="h-full overflow-auto scrollbar-hide">
      {isLoading &&
          <div className="flex justify-center items-center h-[70vh]">
            <LoaderIcon className="animate-spin" size={30} />
          </div>
        }

        {!isLoading && data.map((repo: Repo) => (
          <div
            key={repo.id}
            className="bg-white p-4 font-inter border-t-[1px] border-[#D5D7DA] hover:shadow-md transition-shadow hover:bg-[#F5F5F5] cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="sm:text-lg font-medium text-black">
                    {repo.name}
                  </h3>
                  <span className="py-0.5 px-3 text-xs sm:text-sm rounded-full bg-[#EFF8FF] text-blue-800 border-[#B2DDFF] border">
                    {repo.visibility.charAt(0).toUpperCase() + repo.visibility.slice(1)}
                  </span>
                </div>
                <div className="flex items-center gap-4 md:gap-8 mt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2 md:text-base text-xs sm:text-sm">
                    {repo.language}
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="flex items-center gap-1 md:text-base text-xs sm:text-sm">
                    <img src="assets/database.svg" alt="Database" />
                    {repo.size}
                    <p>KB</p>
                  </span>
                  <span className="md:text-base sm:text-sm text-xs">Updated {formatRelativeTime(repo.updated_at)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repositories;