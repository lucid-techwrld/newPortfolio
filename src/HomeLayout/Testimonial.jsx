import Card from "../components/TestimonialCard.jsx"
const Testimonial = () => {
  return (
    <>
      <h1 className="text-red-500 font-boogaloo text-6xl">Testimonials
      </h1>
      <div className="w-screen px-5 mt-10 flex flex-wrap gap-5 justify-center">
        <Card
          countryIcon="🇳🇬"
          text="Met Davis in 2023, I'm super amazed at his growth, Keep winning bro"
          name="Augustine"
          country="Nigeria" />
        <Card
          countryIcon="🇳🇬"
          text="I’ve had the opportunity to work with Ayomide on multiple projects now, and each time, the results have been outstanding"
          name="James"
          country="Nigeria" />
        <Card
          countryIcon="🇿🇦"
          text="I met Davis through UpWork. I have been very impressed and it's been a pleasure to work with you, Keep up the good work"
          name="Collins"
          country="South Africa" />
      </div>
    </>
  );
}

export default Testimonial;