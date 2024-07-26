import ornate from "../assets/ornate.webp";
const Registry = () => {
  return (
    <div className="views px-3 py-16 mt-16 flex flex-col items-center text-center top-padding">
      <h1 className="text-banner font-adipk -mt-20 top-padding">Registry</h1>
      <img src={ornate} alt="" className="h-16 mx-auto" />
      <div>
        <p className="my-10">
          We would like to thank you for sharing in our wedding celebration. We
          are grateful for your presence.
        </p>
        <div className="buttons my-10">
          <a
            href="https://www.theknot.com/adityaandprateema/registry"
            className="mx-3 underline"
            target="_blank"
          >
            Registry Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registry;
