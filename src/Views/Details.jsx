import ornate from "../assets/ornate.webp";
import baymont from "../assets/baymont.jpeg";
const Details = () => {
  return (
    <div className="details views px-3 py-16 mt-16 text-center h-full">
      <div>
        <h1 className="text-banner font-adipk pt-18">The Deets</h1>
      </div>
      <div className="travel mx-auto mb-24">
        <h2 className="text-h3">Travel</h2>
        <img src={ornate} alt="" className="h-16 mx-auto" />
        <div className="transportation">
          <div className="my-7 px-16">
            <p>Estimate driving time from:</p>
            <p>Chicago: 2.5 hrs.</p>
            <p>Bartlett: 1.5 hrs.</p>
            <p>Naperville: 2 hrs.</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.4724117643786!2d-89.4514327233448!3d42.481508371181846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88087fa4cd79a687%3A0xf0bd792d1263b13d!2sBackroad%20Barn%20%26%20Gardens!5e0!3m2!1sen!2sus!4v1714505881174!5m2!1sen!2sus"
            width="800"
            height="450"
            style={{ border: 0 }}
            allowfullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="text-center mx-auto px-5 my-12 w-full"
          ></iframe>
          <a
            href="https://www.google.com/maps?ll=42.483724,-89.451869&z=18&t=m&hl=en&gl=US&mapclient=embed&cid=17347154574190031165"
            className="underline"
            target="_blank"
          >
            Go to Maps
          </a>
          <div className="w-full h-7 bg-gold text-pineTree mt-10">
            <p>Parking is available on site</p>
          </div>
        </div>
      </div>
      <div className="stay mb-20">
        <h2 className="text-h3">Stay</h2>
        <img src={ornate} alt="" className="h-16 mx-auto mb-10" />

        <div className="w-full flex flex-col items-center">
          <img src={baymont} alt="" className="my-6" />
          <p>1060 RIVERSIDE DR, FREEPORT, IL, US</p>
          <a
            href="https://hotelblocks.theknot.com/Hotel/HotelRoomTypes.htm?idtype=Universal&hotelid=6531&sc=Attendee_TheKnot&kw=eventpage&InDate=08/30/2024&OutDate=09/01/2024&wwpath=www.theknot.com%2Fus%2Faditya-timmaraju-and-prateema-karande-aug-2024"
            className="mt-6 underline"
          >
            Book Now
          </a>
        </div>
        <div className="w-full h-7 bg-gold text-pineTree mt-10">
          <p></p>
        </div>
      </div>
      <div className="dresscode">
        <div>
          <h2 className="text-h3">Dress Code</h2>
          <img src={ornate} alt="" className="h-16 mx-auto mb-10" />
        </div>
        <div className="">
          <div className="mb-10">
            <h3 className="text-h4 underline tracking-wider font-semibold">
              Ceremony
            </h3>
            <p className="">Indian Tranditional</p>
            <a
              href="https://www.pinterest.com/prateemakarande/ceremony-inspiration/"
              className="underline mb-10"
              target="_blank"
            >
              Pinterest Inspos
            </a>
            <div className="flex flex-col w-full md:flex-row md:w-1/2 mx-auto items-center justify-items-center my-5">
              <div className="w-full md:w-1/2 px-5 mb-10 md:mb-0">
                <p className="text-h5">Women Outfit Ideas</p>

                <div className="flex flex-col">
                  <p className="mt-2">saree, lehenga choli, punjabi suits</p>
                  {/* <a
                    href="https://youtu.be/FMlcSUY6KRk"
                    className="underline"
                    target="_blank"
                  >
                    {" "}
                    Dress Ideas for Women
                  </a> */}
                  <a
                    href="https://www.amazon.com/s?k=wedding+sarees+for+women&crid=2CD9Q1IUMTPVY&sprefix=wedding+saree%2Caps%2C168&ref=nb_sb_ss_pltr-sample-20_2_13"
                    className="underline"
                    target="_blank"
                  >
                    {" "}
                    Amazon shopping ideas
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-5">
                <p className="text-h5">Men Outfit Ideas</p>
                <p className="mt-2">formal suits, kurta</p>
                <div className="flex flex-col">
                  {/* <a
                    href="https://www.youtube.com/watch?v=Y5DnjnDz2KU&ab_channel=VaibhavKeswani"
                    className="underline"
                    target="_blank"
                  >
                    {" "}
                    Dress Ideas for Men 1
                  </a> */}
                  <a
                    href="https://youtu.be/x-sHC-sWNDU"
                    className="underline"
                    target="_blank"
                  >
                    {" "}
                    Dress Ideas for Men
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-h4 underline tracking-wider font-semibold">
              Reception
            </h3>
            <p>Indian Cocktail Attire</p>

            <a
              href="https://www.pinterest.com/prateemakarande/reception-inspiration/"
              className="underline"
            >
              Pinterest Inspos
            </a>
          </div>
        </div>
        <div className="w-full h-7 bg-gold text-pineTree mt-10">
          <p></p>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <h2 className="text-h3">Other Things to Note:</h2>
        <img src={ornate} alt="" className="h-16 mx-auto mb-10" />
        <ul className="my-5 list-disc px-10 text-start">
          <li>
            Backyard Road and Barn is in a remote location and may have issues
            with network.
          </li>
          <li>
            Since the wedding will occur at the end of summer the weather might
            get too hot. Refreshments will be provided but please manage
            expectations.
          </li>
          <li>
            Since the wedding will occur at the end of summer the weather might
            get too hot. Refreshments will be provided but please manage
            expectations.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
