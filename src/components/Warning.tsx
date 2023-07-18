export default function Warning() {
  return (
    <div id="headlessui-portal-root">
      <div data-headlessui-portal="">
        <button
          type="button"
          data-headlessui-focus-guard="true"
          aria-hidden="true"
          className="fixed top-[1px] left-[1px] w-[1px] h-0 p-0 -m-[1px] overflow-hidden border-0 whitespace-nowrap bg-clip-text"
        ></button>
        <div>
          <div
            className="relative z-10"
            id="modal"
            role="dialog"
            aria-modal="true"
            data-headlessui-state="open"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:px-3 sm:py-2"
                  id="headlessui-dialog-panel-:r4:"
                  data-headlessui-state="open"
                >
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex flex-col sm:items-center justify-center">
                      <div className="mx-auto flex flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-20 w-20 text-red-600"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          ></path>
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <div className="mt-2">
                          <p className="text-lg text-left text-gray-500">
                            本網站依『電腦網際網路分級辦法』歸類為限制級
                            限定為年滿18歲已具有完整行為能力且願接受本站內影音內容
                            及各項條款之網友才可瀏覽，未滿18歲謝絕進入。
                            為防範未滿18歲之未成年網友瀏覽網路上限制級內容的圖文資訊
                            建議您可進行網路分級基金會TICRF分級服務的安裝與設定。
                            依電腦網路內容分級法，未滿18歲不得瀏覽。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 "
                    >
                      我已年滿18歲
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          data-headlessui-focus-guard="true"
          aria-hidden="true"
          className="fixed top-[1px] left-[1px] w-[1px] h-0 p-0 -m-[1px] overflow-hidden border-0 whitespace-nowrap bg-clip-text"
        ></button>
      </div>
    </div>
  );
}
