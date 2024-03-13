import { Link } from "react-router-dom";
import income from "../../../assets/home/income.svg";

const Income = () => {
  return (
    <section className="my-24">
      {/* Section Title */}
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="heading text-black text-3xl sm:text-4xl md:text-5xl font-semibold mb-3">
          বাইক, গাড়ি অথবা অটো রিকশা এর মাধ্যমে আয় করুন
        </h2>
        <Link to="/" className="btn btn-primary mb-10 text-white">
          আয় করুন
        </Link>
      </div>

      {/* Image */}
      <div className="">
        <img src={income} className="w-full" alt="" />
      </div>
    </section>
  );
};

export default Income;
