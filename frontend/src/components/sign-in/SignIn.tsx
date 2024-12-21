import { cn } from "@/lib/utils";
import { ArrowUp, icons } from "lucide-react";
import { useState } from "react";

const LoginPage = () => {
  const [isSaas, setIsSaas] = useState<boolean>(true);

  return (
    <div className="min-h-screen flex font-inter overflow-hidden">
      <div className="flex-1 bg-white p-8 relative lg:flex hidden">
        <div className="absolute top-1/3 -translate-y-1/3 left-0 right-0 lg:w-3/4 mx-auto">
          <div className="bg-white shadow-custom-light rounded-3xl">
            <div className="flex items-center gap-3 p-5 border-b">
              <img src="/logo.svg" alt="CodeAnt AI" />
              <span className="text-lg font-bold">AI to Detect & Autofix Bad Code</span>
            </div>

            <div className="grid grid-cols-3 gap-4 p-5">
              <div className="flex flex-col items-center">
                <div className="text-lg font-bold">30+</div>
                <div className="text-sm text-gray-600">Language Support</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-lg font-bold">10K+</div>
                <div className="text-sm text-gray-600">Developers</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-lg font-bold">100K+</div>
                <div className="text-sm text-gray-600">Hours Saved</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl py-4 px-7 w-3/5 absolute -right-5 top-[150px] shadow-custom-light">
            <div className="flex items-center justify-between gap-4 mb-2">
              <img src="/assets/chart.svg" alt="" />
              <div className="flex flex-col items-center">
                <div className="text-sm flex text-[#0049C6] font-bold items-center gap-1">
                  <ArrowUp strokeWidth={3} size={14} /> 14%
                </div>
                <div className="text-xs text-black">This week</div>
              </div>
            </div>

            <div className="font-bold text-black mt-4">
              <div className="text-sm">Issues Fixed</div>
              <div className="text-3xl">500K+</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0">
          <img src="/assets/subtract.svg" alt="" className="2xl:size-full xl:size-[80%] size-[70%]" />
        </div>
      </div>

      <div className="flex-1 bg-gray-50 p-4 sm:p-5 flex flex-col items-center justify-center">
        <div className="w-full bg-white rounded-lg border border-secondary">
          <div className="text-center px-6 py-8 sm:p-8 border-b">
            <div className="inline-flex items-center gap-2">
              <img src="/logo.svg" alt="CodeAnt AI" className="w-12 h-12 mb-4" />
              <p className="font-satoshi text-3xl">CodeAnt AI</p>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-8">Welcome to CodeAnt AI</h1>

            <div className="flex gap-4 font-semibold relative">
              <div
                className={cn(
                  "absolute top-0 w-1/2 h-full bg-primary rounded-lg transition-transform duration-500 ease-in-out",
                  isSaas ? "translate-x-0" : "translate-x-full"
                )}
              />

              {/* Buttons */}
              <button
                className={cn(
                  "flex-1 text-lg xl:text-xl py-2 px-4 rounded-lg z-10 transition-colors duration-500",
                  isSaas ? "text-white" : "text-gray-700 bg-secondary/20"
                )}
                onClick={() => setIsSaas(true)}
              >
                SAAS
              </button>
              <button
                className={cn(
                  "flex-1 text-lg xl:text-xl py-2 px-4 rounded-lg z-10 transition-colors duration-500",
                  !isSaas ? "text-white" : "text-gray-700 bg-secondary/20"
                )}
                onClick={() => setIsSaas(false)}
              >
                Self Hosted
              </button>
            </div>
          </div>

          {/* Options */}
          <div className={cn("space-y-4 font-semibold py-5 px-4 md:px-10 xl:px-32", isSaas ? "block" : "hidden")}>
            {[
              { name: 'Github', icon: 'github' },
              { name: 'Bitbucket', icon: 'bitbucket' },
              { name: 'Azure Devops', icon: 'azure' },
              { name: 'GitLab', icon: 'gitlab' }
            ].map(provider => (
              <button
                key={provider.name}
                className="w-full flex items-center justify-center gap-3 py-2 px-4 border rounded-lg bg-white hover:bg-gray-50"
              >
                <img src={`/assets/${provider.icon}.svg`} alt={provider.name} />
                Sign in with {provider.name}
              </button>
            ))}
          </div>

          <div className={cn("space-y-4 font-semibold py-5 px-4 md:px-10 xl:px-32 mb-28", isSaas ? "hidden" : "block")}>
            {[
              { name: 'GitLab', icon: 'gitlab' },
              { name: 'SSO', icon: 'sso' }
            ].map(provider => (
              <button
                key={provider.name}
                className="w-full flex items-center justify-center gap-3 py-2 px-4 border rounded-lg bg-white hover:bg-gray-50"
              >
                <img src={`/assets/${provider.icon}.svg`} alt={provider.name} />
                {(provider.name === "GitLab" ? "Self Hosted" : "Sign in with") + " " + provider.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-center text-sm text-gray-600 mt-8">
            By signing up you agree to the{' '}
            <a href="#" className="text-black font-bold hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div >
  );
};

export default LoginPage;