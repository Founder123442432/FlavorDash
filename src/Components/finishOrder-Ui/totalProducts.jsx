export default function TotalProducts({ cart }) {
  return (
    <>
      <div className=" py-10 px-10 bg-black">
        <h2 className="text-xl font-bold text-white">Order </h2>

        <div className="space-y-6 mt-8">
          {cart.map((order) => (
            <div key={order.cartId} className="flex gap-4  w-full  ">
              <div className="w-37  flex items-center justify-center p-4 shrink-0 bg-gray-200 rounded-lg">
                <img src={order.img} className="w-full object-contain" />
              </div>

              <div className="w-full">
                <h3 className="text-sm text-white font-bold"> {order.name} </h3>
                <ul className="text-xs text-white space-y-1 mt-2">
                  <li>Size: {order.size} </li>
                  <li>type: {order.type} </li>
                  <li> Price: ${order.price} </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
