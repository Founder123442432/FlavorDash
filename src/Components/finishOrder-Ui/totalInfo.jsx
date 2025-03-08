export default function TotalInfo({ info, subtotal }) {
  return (
    <div className="bg-white p-6 rounded-md max-lg:-order-1">
      <h3 className="text-lg font-bold text-gray-800">order details </h3>
      <ul className="text-gray-800 mt-6 space-y-3">
        <li className="flex flex-wrap gap-4 text-sm">
          Sub total <span className="ml-auto font-bold">${subtotal} </span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          Shipping <span className="ml-auto font-bold">Free</span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          Tax <span className="ml-auto font-bold">$0.00</span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          firstName <span className="ml-auto font-bold">{info.firstName} </span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          lastName <span className="ml-auto font-bold">{info.lastName} </span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          address <span className="ml-auto font-bold">{info.address} </span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          city <span className="ml-auto font-bold">{info.city} </span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          email <span className="ml-auto font-bold">{info.email} </span>
        </li>

        <li className="flex flex-wrap gap-4 text-sm">
          phone <span className="ml-auto font-bold">{info.phone} </span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          state <span className="ml-auto font-bold">{info.state} </span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          zipCode <span className="ml-auto font-bold">{info.zipCode} </span>
        </li>
        <hr />
        <li className="flex flex-wrap gap-4 text-base font-bold">
          Total <span className="ml-auto">${subtotal} </span>
        </li>
      </ul>
    </div>
  );
}
