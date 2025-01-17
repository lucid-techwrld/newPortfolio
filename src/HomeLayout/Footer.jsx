function Footer() {
  return (
    <>
      <div className="bg-red-500 rounded-full w-[370px] sm:w-[600px] lg:w-[650px] h-auto py-3 px-3 flex justify-between items-center mt-5 space-x-2 mb-5">
        <div className="w-12 h-12 bg-black flex justify-center items-center text-white rounded-full">
          <span className="font-boogaloo font-extrabold text-2xl">DA</span>
        </div>
        <span className="font-boogaloo font-bold text-base text-center text-lg">DAVIS AYOMIDE</span>
        <h2 className="ml-2 font-boogaloo font-extrabold text-lg">
          Design and built by Davis Ayomide
        </h2>
      </div>
    </>
  );
}

export default Footer