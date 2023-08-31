

const Plus =()=> {
    return(

        <div>
        <h1 className=" font-extrabold text-center lg:text-3xl">
          {" "}
          Pour plus d&apos;explications
        </h1>
        <p className=" mx-4 my-2 text-center lg:text-xl">
          vous pouver nous contacter pour vos projets
        </p>
        <div className="flex items-center justify-center mb-6 lg:mb-12">
          <button
            className="contain  px-2 py-2 my-2 lg:px-8 border-[1px] border-black hover:transition hover:ease-out hover:duration-700  hover:bg-white active:bg-slate-500"
            onClick={""}
          >
            <a href="http://localhost:3000/tarifs">
              <p className=" font-bold">CONTACT</p>
            </a>
          </button>
        </div>
      </div>
    );
};
export default Plus;