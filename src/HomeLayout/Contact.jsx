import ContactCard from "../components/contactCard.jsx"
import social from "../assets/Image/contactIcons/social.png"
import facebook from "../assets/Image/contactIcons/facebook.png"
import linkedin from "../assets/Image/contactIcons/linkedin.png"
import instagram from "../assets/Image/contactIcons/instagram.png"
import twitter from "../assets/Image/contactIcons/twitter.png"
import telegram from "../assets/Image/contactIcons/telegram.png"
import tiktok from "../assets/Image/contactIcons/tik-tok.png"
import email from "../assets/Image/contactIcons/email.png"
import cartoonImg from "../assets/Image/contactIcons/cartoonImg.png"

const Contact = ({
  id
}) => {
  return (
    <>
      <h1 className="text-6xl font-boogaloo text-red-500">Contact Me</h1>
      <div id={id} className="w-screen h-auto flex flex-wrap px-3 mt-5 gap-4 justify-center">
        <ContactCard
          url=""
          icon={facebook}
          name="Facebook"
          color="text-blue-600" />
        <ContactCard
        url="https://wa.me/+2347085948512"
          icon={social}
          name="WhatsApp"
          color="text-green-500" />
        <ContactCard
          icon={instagram}
          name="Instagram"
          color="text-red-500" />
        <ContactCard
          icon={linkedin}
          name="LinkedIn"
          color="text-blue-300" />
        <ContactCard
        url="https://www.tiktok.com/@lucid_techwrld.999?_t=ZM-8t9ckPcedao&_r=1"
          icon={tiktok}
          name="TikTok"
          color="text-black" />
        <ContactCard
          icon={telegram}
          name="Telegram"
          color="text-blue-500" />
        <ContactCard
          icon={twitter}
          name="Twitter"
          color="text-gray-600" />
        <ContactCard
          icon={email}
          url="mailto:lucidtechwrld9@gmail.com"
          name="Email"
          color="text-gray-700" />
      </div>
      <div className="flex justify-center items-center">
        <img src={cartoonImg} alt="image" />
    </div>
  </>
);
}

export default Contact;