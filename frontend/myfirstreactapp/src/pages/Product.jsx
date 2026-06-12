import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

function Product() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-3 rounded-2xl bg-white p-4 shadow-lg">
      <section className="flex h-64 items-center justify-center rounded-xl bg-gray-50 p-4">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
          alt=""
          className="h-full w-full object-contain"
        />
      </section>

      <section className="text-sm font-semibold text-gray-900">
        Carry your essentials with comfort and style
      </section>

      <section className="flex items-center gap-1 text-sm text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
        <FaRegStarHalfStroke />
       
        <span className="text-gray-900">3.9</span>
        <span className="text-orange-500">(120 reviews)</span>
      </section>

      <section className="text-xs leading-6 text-gray-500">
        Built for everyday adventures, with a padded laptop sleeve that keeps
        your essentials safe and organized.
      </section>

      <section className="text-lg font-semibold text-gray-900">$12,000</section>
    </div>
  );
}
export default Product;
