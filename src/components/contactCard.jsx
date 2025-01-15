const ContactCard = (props) => {
  return (
    <div className={`flex justify-between w-96 px-5 py-2 h-16 rounded-full bg-white items-center font-sans text-2xl lg:w-1/3 font-bold mb-3 ${props.color}` }>
      <img src={props.icon} alt={props.name} width="40px" height="40px" /> <span>{props.name}</span>
  </div>
);
}

export default ContactCard;