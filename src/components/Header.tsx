export default function Header() {
  return (
    <header className="bg-red-400 shadow" data-headlessui-state="">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
        <div className="relative flex py-4 justify-between">
          <div className="relative z-10 flex px-2 lg:px-0">
            <div className="flex flex-shrink-0 items-center">
              <a href="/">
                <img
                  className="w-16 h-16"
                  src="https://cdn.discordapp.com/attachments/1036953581913391174/1122923262385598544/w.png"
                />
              </a>
            </div>
          </div>
          <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:inset-0">
            <div className="w-full sm:max-w-xs ">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
            <a
              href="/search"
              className="text-white mx-1 hover:bg-gray-50 hover:text-gray-700 inline-flex items-center rounded-md py-1 px-2 text-sm font-medium whitespace-nowrap"
            >
              進階搜尋
            </a>
          </div>
          <div className="relative z-10 flex items-center lg:hidden">
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              id="headlessui-disclosure-button-:r0:"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
            >
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="block h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center gap-x-2">
            <div
              className="relative ml-4 flex-shrink-0"
              data-headlessui-state=""
            >
              <div>
                <button
                  className="flex rounded-full text-white focus:outline-none focus:ring-2 focus:ring-red-300 hover:text-red-200 h-8 w-8"
                  id="headlessui-menu-button-:r1:"
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <span className="sr-only">Open user menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
