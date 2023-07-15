export default function RankingHeading() {
  return (
    <div className="px-4 sm:px-8 my-4">
      <div className="bg-red-400 px-4 py-6 rounded-xl flex justify-between items-center text-white text-base font-bold">
        <span className="text-xl">排行榜</span>
        <a href="/RankingList.tsx" className="hover:text-gray-200">
          {" "}
          更多排行 ＞＞
        </a>
      </div>
    </div>
  );
}
