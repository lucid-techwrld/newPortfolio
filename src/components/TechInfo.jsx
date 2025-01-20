const TechInfo = (props) => {
  return (
    <div className="flex justify-center   gap-24 sm:gap-64 lg:gap-72 items-center w-full mt-5 z-40">
      <div className="w-auto h-[40px] sm:p-3 rounded-full bg-white flex  items-center py-2 px-2 sm:text-lg gap-0.5 text-sm z-50 font-josefinsans font-bold">
        <img src={props.data[0].url} alt={props.data[0].name} width="20px" height="20px" />
      <span>{props.data[0].name}</span>
    </div>
    <div className="w-auto h-[40px] sm:p-3 rounded-full bg-white flex  items-center py-2 px-4 sm:text-lg gap-0.5 text-sm z-50 font-josefinsans font-bold">
      <img src={props.data[1].url} alt={props.data[1].name} width="20px" height="20px" />
    <span>{props.data[1].name}</span>
  </div>
</div>
);
}

export default TechInfo;