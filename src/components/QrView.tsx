/* eslint-disable @next/next/no-img-element */
export const QrView = () => {
  return (
    <div className="bg-[#d5e1ef] h-screen">
      <div className="rounded-lg bg-white p-4 h-[500px] w-80 top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
        <img src="/image/qr.png" alt="" className="rounded-lg" />
        <div className="my-7 grid grid-flow-row grid-rows-2 text-center px-4">
          <h1 className="text-Dark-blue font-bold font-Outfit !text-[23px] leading-6">
            Improve your front-end skills by building projects
          </h1>
          <h1 className="text-Light-gray font-normal !text-[15px] leading-6">
            Scan the QR code to visit Frontend Mentor and take your coding
            skiils to the next level
          </h1>
        </div>
      </div>
    </div>
  );
};
