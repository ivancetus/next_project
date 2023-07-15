export default function RegionBasedHeader() {
  return (
    <div className="px-4 sm:px-8 my-4">
      <div className="bg-red-400 px-4 py-6 rounded-xl flex justify-between items-center text-white text-base font-bold">
        <span className="text-xl">台北市 定點</span>
        <a href="/point" className="hover:text-gray-200">
          {" "}
          更多定點 ＞＞
        </a>
      </div>
    </div>
  );
}
