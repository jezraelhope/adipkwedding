const Registry = () => {
  return (
    <div className="views px-3 py-16 mt-16 flex flex-col items-center text-center">
      <img src="./src/assets/ornate.webp" alt="" className="h-24 mx-auto" />
      <h1 className="text-banner font-adipk -mt-20">registry</h1>
      <div>
        <p className="my-10">
          We would like to thank you for sharing in our wedding celebration. We
          are grateful for your presence.
        </p>
        <div className="buttons my-10">
          <a
            href="https://www.theknot.com/us/aditya-timmaraju-and-prateema-karande-aug-2024/registry"
            className="mx-3 underline"
            target="_blank"
          >
            Cashfund
          </a>
          <a
            href="https://www.amazon.com/wedding/share/adityaandprateema"
            className="mx-3 underline"
            target="_blank"
          >
            Amazon Registry
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registry;
