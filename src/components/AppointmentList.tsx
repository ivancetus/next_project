import Pic1 from "../../public/images/pepole1.689c0dc53ab6cba2b2ce.jpg";
import Image from "next/image";

export default function AppointmentList() {
  return (
    <ul
      role="list"
      className="grid gap-x-2 gap-y-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 sm:px-8 lg:px-12"
    >
      <li className="border-4 border-orange-200 col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow sm:min-h-[400px]">
        <div className="flex flex-1 flex-col  sm:p-8">
          <div className="relative">
            <div className="absolute top-0 p-1 bg-red-400 bg-opacity-50 text-white w-full whitespace-nowrap">
              上架時間：4小時27分前
            </div>
            <a href="/details">
              <Image
                className="mx-auto flex-shrink-0 rounded-t-lg"
                src={Pic1}
                alt=""
                height={400}
                width={400}
              />
            </a>
            <div className="flex justify-around items-center py-1 absolute bottom-0 bg-black text-white bg-opacity-40 w-full">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  ></path>
                </svg>
                <span>51</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  ></path>
                </svg>
                <span>2</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  ></path>
                </svg>
                <span>10</span>
              </div>
            </div>
          </div>
          <div className="p-1">
            <h3 className="py-1 text-lg text-left font-bold text-gray-900 flex justify-between">
              小趙麗穎 <span className="text-base text-red-500">10.0分</span>
            </h3>
            <div className="text-left divide-y-2 divide-dashed ">
              <div>
                國別：<span className="text-stone-500">越南妹</span>
              </div>
              <div className="">
                <span className="flex justify-between gap-2">
                  <div className="whitespace-nowrap">
                    年齡：<span className="text-stone-500">20</span>
                  </div>
                  <span className="w-20">
                    身高：<span className="text-stone-500">160</span>
                  </span>
                </span>
                <span className="flex justify-between gap-2">
                  <div className="whitespace-nowrap">
                    體重：<span className="text-stone-500">45</span>
                  </div>
                  <span className="w-20">
                    罩杯：<span className="text-stone-500">D</span>
                  </span>
                </span>
              </div>
              <div>
                環境：<span className="text-stone-500">飯店</span>
              </div>
              <div>
                類型：<span className="text-stone-500">定點</span>
              </div>
              <div>
                托播價：
                <span className="text-red-500">
                  <i>3200~3500</i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="border-4 border-orange-200 col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow sm:min-h-[400px]">
        <div className="flex flex-1 flex-col  sm:p-8">
          <div className="relative">
            <div className="absolute top-0 p-1 bg-red-400 bg-opacity-50 text-white w-full whitespace-nowrap">
              上架時間：4小時27分前
            </div>
            <a href="/details">
              <Image
                className="mx-auto flex-shrink-0 rounded-t-lg"
                src={Pic1}
                alt=""
                height={400}
                width={400}
              />
            </a>
            <div className="flex justify-around items-center py-1 absolute bottom-0 bg-black text-white bg-opacity-40 w-full">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  ></path>
                </svg>
                <span>51</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  ></path>
                </svg>
                <span>2</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  ></path>
                </svg>
                <span>10</span>
              </div>
            </div>
          </div>
          <div className="p-1">
            <h3 className="py-1 text-lg text-left font-bold text-gray-900 flex justify-between">
              小趙麗穎 <span className="text-base text-red-500">10.0分</span>
            </h3>
            <div className="text-left divide-y-2 divide-dashed ">
              <div>
                國別：<span className="text-stone-500">越南妹</span>
              </div>
              <div className="">
                <span className="flex justify-between gap-2">
                  <div className="whitespace-nowrap">
                    年齡：<span className="text-stone-500">20</span>
                  </div>
                  <span className="w-20">
                    身高：<span className="text-stone-500">160</span>
                  </span>
                </span>
                <span className="flex justify-between gap-2">
                  <div className="whitespace-nowrap">
                    體重：<span className="text-stone-500">45</span>
                  </div>
                  <span className="w-20">
                    罩杯：<span className="text-stone-500">D</span>
                  </span>
                </span>
              </div>
              <div>
                環境：<span className="text-stone-500">飯店</span>
              </div>
              <div>
                類型：<span className="text-stone-500">定點</span>
              </div>
              <div>
                托播價：
                <span className="text-red-500">
                  <i>3200~3500</i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="border-4 border-orange-200 col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow sm:min-h-[400px]">
        <div className="flex flex-1 flex-col  sm:p-8">
          <div className="relative">
            <div className="absolute top-0 p-1 bg-red-400 bg-opacity-50 text-white w-full whitespace-nowrap">
              上架時間：4小時27分前
            </div>
            <a href="/details">
              <Image
                className="mx-auto flex-shrink-0 rounded-t-lg"
                src={Pic1}
                alt=""
                height={400}
                width={400}
              />
            </a>
            <div className="flex justify-around items-center py-1 absolute bottom-0 bg-black text-white bg-opacity-40 w-full">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  ></path>
                </svg>
                <span>51</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  ></path>
                </svg>
                <span>2</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  ></path>
                </svg>
                <span>10</span>
              </div>
            </div>
          </div>
          <div className="p-1">
            <h3 className="py-1 text-lg text-left font-bold text-gray-900 flex justify-between">
              小趙麗穎 <span className="text-base text-red-500">10.0分</span>
            </h3>
            <div className="text-left divide-y-2 divide-dashed ">
              <div>
                國別：<span className="text-stone-500">越南妹</span>
              </div>
              <div className="">
                <span className="flex justify-between gap-2">
                  <div className="whitespace-nowrap">
                    年齡：<span className="text-stone-500">20</span>
                  </div>
                  <span className="w-20">
                    身高：<span className="text-stone-500">160</span>
                  </span>
                </span>
                <span className="flex justify-between gap-2">
                  <div className="whitespace-nowrap">
                    體重：<span className="text-stone-500">45</span>
                  </div>
                  <span className="w-20">
                    罩杯：<span className="text-stone-500">D</span>
                  </span>
                </span>
              </div>
              <div>
                環境：<span className="text-stone-500">飯店</span>
              </div>
              <div>
                類型：<span className="text-stone-500">定點</span>
              </div>
              <div>
                托播價：
                <span className="text-red-500">
                  <i>3200~3500</i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="border-4 border-orange-200 col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow sm:min-h-[400px]">
        <div className="flex flex-1 flex-col  sm:p-8">
          <div className="relative">
            <div className="absolute top-0 p-1 bg-red-400 bg-opacity-50 text-white w-full whitespace-nowrap">
              上架時間：4小時27分前
            </div>
            <a href="/details">
              <Image
                className="mx-auto flex-shrink-0 rounded-t-lg"
                src={Pic1}
                alt=""
                height={400}
                width={400}
              />
            </a>
            <div className="flex justify-around items-center py-1 absolute bottom-0 bg-black text-white bg-opacity-40 w-full">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  ></path>
                </svg>
                <span>51</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  ></path>
                </svg>
                <span>2</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  ></path>
                </svg>
                <span>10</span>
              </div>
            </div>
          </div>
          <div className="p-1">
            <h3 className="py-1 text-lg text-left font-bold text-gray-900 flex justify-between">
              小趙麗穎 <span className="text-base text-red-500">10.0分</span>
            </h3>
            <div className="text-left divide-y-2 divide-dashed ">
              <div>
                國別：<span className="text-stone-500">越南妹</span>
              </div>
              <div className="">
                <span className="flex justify-between gap-2">
                  <div className="whitespace-nowrap">
                    年齡：<span className="text-stone-500">20</span>
                  </div>
                  <span className="w-20">
                    身高：<span className="text-stone-500">160</span>
                  </span>
                </span>
                <span className="flex justify-between gap-2">
                  <div className="whitespace-nowrap">
                    體重：<span className="text-stone-500">45</span>
                  </div>
                  <span className="w-20">
                    罩杯：<span className="text-stone-500">D</span>
                  </span>
                </span>
              </div>
              <div>
                環境：<span className="text-stone-500">飯店</span>
              </div>
              <div>
                類型：<span className="text-stone-500">定點</span>
              </div>
              <div>
                托播價：
                <span className="text-red-500">
                  <i>3200~3500</i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="border-4 border-orange-200 col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow sm:min-h-[400px]">
        <div className="flex flex-1 flex-col  sm:p-8">
          <div className="relative">
            <div className="absolute top-0 p-1 bg-red-400 bg-opacity-50 text-white w-full whitespace-nowrap">
              上架時間：4小時27分前
            </div>
            <a href="/details">
              <Image
                className="mx-auto flex-shrink-0 rounded-t-lg"
                src={Pic1}
                alt=""
                height={400}
                width={400}
              />
            </a>
            <div className="flex justify-around items-center py-1 absolute bottom-0 bg-black text-white bg-opacity-40 w-full">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  ></path>
                </svg>
                <span>51</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  ></path>
                </svg>
                <span>2</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  ></path>
                </svg>
                <span>10</span>
              </div>
            </div>
          </div>
          <div className="p-1">
            <h3 className="py-1 text-lg text-left font-bold text-gray-900 flex justify-between">
              小趙麗穎 <span className="text-base text-red-500">10.0分</span>
            </h3>
            <div className="text-left divide-y-2 divide-dashed ">
              <div>
                國別：<span className="text-stone-500">越南妹</span>
              </div>
              <div className="">
                <span className="flex justify-between gap-2">
                  <div className="whitespace-nowrap">
                    年齡：<span className="text-stone-500">20</span>
                  </div>
                  <span className="w-20">
                    身高：<span className="text-stone-500">160</span>
                  </span>
                </span>
                <span className="flex justify-between gap-2">
                  <div className="whitespace-nowrap">
                    體重：<span className="text-stone-500">45</span>
                  </div>
                  <span className="w-20">
                    罩杯：<span className="text-stone-500">D</span>
                  </span>
                </span>
              </div>
              <div>
                環境：<span className="text-stone-500">飯店</span>
              </div>
              <div>
                類型：<span className="text-stone-500">定點</span>
              </div>
              <div>
                托播價：
                <span className="text-red-500">
                  <i>3200~3500</i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="border-4 border-orange-200 col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow sm:min-h-[400px]">
        <div className="flex flex-1 flex-col  sm:p-8">
          <div className="relative">
            <div className="absolute top-0 p-1 bg-red-400 bg-opacity-50 text-white w-full whitespace-nowrap">
              上架時間：4小時27分前
            </div>
            <a href="/details">
              <Image
                className="mx-auto flex-shrink-0 rounded-t-lg"
                src={Pic1}
                alt=""
                height={400}
                width={400}
              />
            </a>
            <div className="flex justify-around items-center py-1 absolute bottom-0 bg-black text-white bg-opacity-40 w-full">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  ></path>
                </svg>
                <span>51</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  ></path>
                </svg>
                <span>2</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  ></path>
                </svg>
                <span>10</span>
              </div>
            </div>
          </div>
          <div className="p-1">
            <h3 className="py-1 text-lg text-left font-bold text-gray-900 flex justify-between">
              小趙麗穎 <span className="text-base text-red-500">10.0分</span>
            </h3>
            <div className="text-left divide-y-2 divide-dashed ">
              <div>
                國別：<span className="text-stone-500">越南妹</span>
              </div>
              <div className="">
                <span className="flex justify-between gap-2">
                  <div className="whitespace-nowrap">
                    年齡：<span className="text-stone-500">20</span>
                  </div>
                  <span className="w-20">
                    身高：<span className="text-stone-500">160</span>
                  </span>
                </span>
                <span className="flex justify-between gap-2">
                  <div className="whitespace-nowrap">
                    體重：<span className="text-stone-500">45</span>
                  </div>
                  <span className="w-20">
                    罩杯：<span className="text-stone-500">D</span>
                  </span>
                </span>
              </div>
              <div>
                環境：<span className="text-stone-500">飯店</span>
              </div>
              <div>
                類型：<span className="text-stone-500">定點</span>
              </div>
              <div>
                托播價：
                <span className="text-red-500">
                  <i>3200~3500</i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}
