const Hobby = (props) => {
  return (
    <div className="flex justify-between w-full gap-4 mb-4 z-0">
      <div className="w-1/2 h-1/2 rounded-full bg-red-300 flex items-center py-3 px-2 gap-1 text-lg z-50 font-josefinsans font-bold text-white">
        {props.data[0].icon}
        <span>{props.data[0].name}</span>
      </div>
      <div className="w-1/2 h-1/2 rounded-full bg-red-300 flex items-center py-3 px-2 gap-1 text-lg z-50 font-josefinsans font-bold text-white">
        {props.data[1].icon}
        <span>{props.data[1].name}</span>
      </div>
    </div>
  );
}

export default Hobby;