const Rsvp = () => {
  return (
    <div className="views px-3 py-16 mt-16 text-center top-padding">
      <img src="./src/assets/ornate.webp" alt="" className="h-24 mx-auto" />
      <h1 className="text-banner font-adipk -mt-20">rsvp</h1>
      <div>
        <h2 className="text-h4">Please RSVP to our Wedding</h2>
        <p className="my-10">
          Click the link below to visit theknot website to rsvp if you have not
          already
        </p>
      </div>
      <a
        href="https://www.theknot.com/us/aditya-timmaraju-and-prateema-karande-aug-2024/rsvp"
        className="underline"
      >
        RSVP
      </a>
    </div>
  );
};

export default Rsvp;
