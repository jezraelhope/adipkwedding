const Details = () => {
  return (
    <div className="details views px-3 py-16 mt-16 text-center h-full">
      <div>
        <h1 className="text-banner font-adipk pt-18">The Deets</h1>
      </div>
      <div className="travel mx-auto mb-24">
        <h2 className="text-h3">Travel</h2>
        <img src="./src/assets/ornate.webp" alt="" className="h-16 mx-auto" />
        <div className="transportation">
          <div className="my-7 px-16">
            <p>Estimate driving time from</p>
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
            className="text-center mx-auto px-5 my-12"
          ></iframe>
          <a
            href="https://www.google.com/maps?ll=42.483724,-89.451869&z=18&t=m&hl=en&gl=US&mapclient=embed&cid=17347154574190031165"
            className="underline"
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
        <img
          src="./src/assets/ornate.webp"
          alt=""
          className="h-16 mx-auto mb-10"
        />

        <div className="w-full flex flex-col items-center">
          <p>
            For your convenience, a block of rooms has been reserved at BAYMONT
            BY WYNDHAM FREEPORT for the evening of August 31, 2024.
          </p>
          <img src="./src/assets/baymont.jpeg" alt="" className="my-6" />
          <p>1060 RIVERSIDE DR, FREEPORT, IL, US</p>
          <a
            href="https://hotelblocks.theknot.com/Hotel/HotelRoomTypes.htm?idtype=Universal&hotelid=6531&sc=Attendee_TheKnot&kw=eventpage&InDate=08/30/2024&OutDate=09/01/2024&wwpath=www.theknot.com%2Fus%2Faditya-timmaraju-and-prateema-karande-aug-2024"
            className="mt-6 underline"
          >
            Book Now
          </a>
        </div>
        <div className="w-full h-7 bg-gold text-pineTree mt-10">
          <p>Transportation info for people who don`t have one</p>
        </div>
      </div>
      <div className="dresscode">
        <div>
          <h2 className="text-h3">Dress Code</h2>
          <img
            src="./src/assets/ornate.webp"
            alt=""
            className="h-16 mx-auto mb-10"
          />
        </div>
        <div>
          <div className="mb-10">
            <h3 className="text-h4">Ceremony</h3>
            <p>Women: Saree, etc</p>
            <p>Men: Kurta Suits, etc</p>
          </div>
          <div>
            <h3 className="text-h4">Reception</h3>
            <p>Women: Cocktail</p>
            <p>Men: Suits</p>
          </div>
        </div>
        <div>dress code image here</div>
      </div>
      <div className="timmatimmiimage">
        <img src="" alt="" />
        insert some image here here
      </div>
    </div>
  );
};

export default Details;
