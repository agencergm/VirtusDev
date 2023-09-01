import Link from "next/link";

const Plus = () => {
  return (
    <div>
      <h1 className=" font-extrabold text-center lg:text-3xl">

        Pour plus d&apos;explications
      </h1>
      <p className=" mx-4 my-2 text-center lg:text-xl">
        vous pouver nous contacter pour vos projets
      </p>
      <div className="flex items-center justify-center mb-6 lg:mb-12">
        <button
          className="contain contain-v3 px-2 py-2 my-2 lg:px-8 border-[1px] border-black "
          onClick={""}
        >
          <Link href="/contacts">
            <p className=" font-bold">CONTACT</p>
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Plus;
