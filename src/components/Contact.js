const Contact = () => {
  return (
    <div className=" ">
      <h1 className="text-2xl m-2 p-2 text-center font-bold">Contact Us</h1>
      <div className="text-center gap-2">
        <form className="mt-8 p-2 ">
          <input
            type="text"
            className="border border-black p-1 "
            placeholder="name"
          />
          <input
            type="text"
            className="border border-black p-1 ml-4"
            placeholder="message"
          />

          <button className="ml-4 p-2 border hover:bg-white border-black rounded-md bg-slate-200">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
