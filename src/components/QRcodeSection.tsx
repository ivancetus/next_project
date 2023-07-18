export default function QRcodeSection() {
  return (
    // <div className=" fixed bottom-0 right-0 z-10 bg-stone-50 rounded-lg">
    //   <button className="hidden"></button>
    // </div>
    <div className=" fixed bottom-0 right-0 z-10 bg-stone-50 rounded-lg">
      <div className="popup inactive my-5 mx-3 flex flex-col justify-center items-center">
        <div className="ant-qrcode css-1wazalj bg-transparent w-[160px] h-[160px]">
          <canvas
            height="268"
            width="268"
            className="h-[134px] w-[134px]"
          ></canvas>
        </div>
        <p className="font-bold text-xl my-1">如需協助請洽</p>
        <p className="font-bold text-md mt-1">
          LineID:<i>0912345678</i>
        </p>
        <button className="absolute top-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
