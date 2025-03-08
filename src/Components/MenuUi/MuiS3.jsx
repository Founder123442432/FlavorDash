const menu = [
  {
    name: "Margherita Pizza",
    price: 9.99,
    description: "Classic pizza with tomato sauce, mozzarella, and basil.",
    category: "Pizza",
  },
  {
    name: "Pepperoni Pizza",
    price: 11.99,
    description: "Cheesy pizza topped with spicy pepperoni slices.",
    category: "Pizza",
  },
  {
    name: "BBQ Chicken Pizza",
    price: 12.99,
    description: "Grilled chicken, BBQ sauce, red onions, and cilantro.",
    category: "Pizza",
  },
  {
    name: "Veggie Supreme Pizza",
    price: 10.99,
    description: "Loaded with mushrooms, peppers, onions, and olives.",
    category: "Pizza",
  },
  {
    name: "Cheeseburger",
    price: 8.99,
    description: "Juicy beef patty with melted cheese, lettuce, and tomato.",
    category: "Burgers",
  },
  {
    name: "Bacon Cheeseburger",
    price: 10.49,
    description: "Classic burger with crispy bacon and cheddar cheese.",
    category: "Burgers",
  },
  {
    name: "Grilled Chicken Burger",
    price: 9.49,
    description: "Grilled chicken breast with lettuce, tomato, and mayo.",
    category: "Burgers",
  },
  {
    name: "Veggie Burger",
    price: 8.99,
    description: "Plant-based patty with fresh veggies and special sauce.",
    category: "Burgers",
  },
  {
    name: "Caesar Salad",
    price: 7.99,
    description: "Crisp romaine lettuce, parmesan, and croutons with dressing.",
    category: "Salads",
  },
  {
    name: "Greek Salad",
    price: 8.49,
    description: "Fresh cucumbers, tomatoes, olives, and feta cheese.",
    category: "Salads",
  },
  {
    name: "Chicken Caesar Wrap",
    price: 9.49,
    description: "Grilled chicken, lettuce, parmesan, and Caesar dressing.",
    category: "Wraps",
  },
  {
    name: "Buffalo Chicken Wrap",
    price: 9.99,
    description: "Spicy buffalo chicken with ranch and fresh veggies.",
    category: "Wraps",
  },
  {
    name: "French Fries",
    price: 3.99,
    description: "Golden crispy fries served with ketchup.",
    category: "Sides",
  },
  {
    name: "Mozzarella Sticks",
    price: 6.99,
    description: "Crispy breaded mozzarella with marinara sauce.",
    category: "Sides",
  },
  {
    name: "Chicken Wings",
    price: 10.99,
    description: "Crispy wings tossed in your choice of sauce.",
    category: "Sides",
  },
  {
    name: "Chocolate Cake",
    price: 5.99,
    description: "Rich chocolate cake with a creamy frosting.",
    category: "Desserts",
  },
  {
    name: "Cheesecake",
    price: 6.49,
    description: "Creamy cheesecake with a graham cracker crust.",
    category: "Desserts",
  },
  {
    name: "Ice Cream Sundae",
    price: 4.99,
    description: "Vanilla ice cream topped with chocolate syrup and nuts.",
    category: "Desserts",
  },
  {
    name: "Soda",
    price: 1.99,
    description: "Refreshing cola, lemon-lime, or orange soda.",
    category: "Drinks",
  },
  {
    name: "Iced Coffee",
    price: 3.49,
    description: "Chilled coffee with milk and sugar.",
    category: "Drinks",
  },
];
export default function MenuS3() {
  return (
    <div className="flex flex-col items-center justify-center bg-black py-16">
      <span className="text-orange-400 text-4xl font-bold">
        Explore Our Menu
      </span>
      <div className="w-full ">
        {menu.map((item) => (
          <div
            key={item.name}
            className=" shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full  rounded-lg  overflow-hidden mx-auto mt-4"
          >
            <div className="p-6 flex justify-between">
              <div>
                <h3 className="text-lg text-orange-400 font-semibold">
                  {item.name}{" "}
                </h3>
                <p className="mt-2 text-sm text-white leading-relaxed">
                  {item.description}
                </p>
              </div>
              <button
                type="button"
                className="mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-orange-400"
              >
                ${item.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
