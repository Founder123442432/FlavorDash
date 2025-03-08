import React, { useContext, useState } from "react";
import {
  SearchIcon,
  TruckIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ClockIcon,
} from "./userSVGs";
import { UserOcontext } from "../../context/userContext";
import useTitle from "../../customHooks/usetitle";
export default function UserOrder() {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedOrder, setExpandedOrder] = useState(null);
  const { orders, isOrderError } = useContext(UserOcontext);
  useTitle("Your Order");
  const filteredOrders =
    activeTab === "all"
      ? orders
      : orders?.filter(
          (order) =>
            (activeTab === "active" && order.status === "active") ||
            (activeTab === "completed" && order.status === "Completed") ||
            (activeTab === "issues" && order.status === "Issues")
        );

  const toggleOrderExpansion = (orderId) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  };

  const renderStatusIcon = (status) => {
    switch (status) {
      case "active":
        return (
          <span className="text-yellow-400">
            <TruckIcon />
          </span>
        );
      case "Completed":
        return (
          <span className="text-yellow-400">
            <CheckCircleIcon />
          </span>
        );
      case "Issues":
        return (
          <span className="text-red-500">
            <AlertCircleIcon />
          </span>
        );
      default:
        return (
          <span className="text-gray-400">
            <ClockIcon />
          </span>
        );
    }
  };

  return (
    <div className="bg-black w-full min-h-screen text-white">
      {/* Header */}
      <div className="bg-black px-4 py-5 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-yellow-400">My Orders</h1>
      </div>

      {/* Search and Filter */}
      <div className="px-4 py-3 bg-black border-b border-gray-800">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search orders..."
            className="pl-10 pr-4 py-2 bg-gray-900 w-full rounded-lg text-white text-sm focus:outline-none border border-gray-800"
          />
        </div>
        <div className="flex mt-3 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("all")}
            className={`mr-2 px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${
              activeTab === "all"
                ? "bg-yellow-400 text-black"
                : "bg-gray-900 text-gray-300"
            }`}
          >
            All Orders
          </button>
          <button
            onClick={() => setActiveTab("active")}
            className={`mr-2 px-4 py-2 text-sm font-medium rounded-full flex items-center whitespace-nowrap ${
              activeTab === "active"
                ? "bg-yellow-400 text-black"
                : "bg-gray-900 text-gray-300"
            }`}
          >
            <span className="mr-1">
              <TruckIcon />
            </span>
            Active
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`mr-2 px-4 py-2 text-sm font-medium rounded-full flex items-center whitespace-nowrap ${
              activeTab === "completed"
                ? "bg-yellow-400 text-black"
                : "bg-gray-900 text-gray-300"
            }`}
          >
            <span className="mr-1">
              <CheckCircleIcon />
            </span>
            Completed
          </button>
          <button
            onClick={() => setActiveTab("issues")}
            className={`px-4 py-2 text-sm font-medium rounded-full flex items-center whitespace-nowrap ${
              activeTab === "issues"
                ? "bg-yellow-400 text-black"
                : "bg-gray-900 text-gray-300"
            }`}
          >
            <span className="mr-1">
              <AlertCircleIcon />
            </span>
            Issues
          </button>
        </div>
      </div>

      {/* Order List */}
      <div className="mt-3 px-4 pb-24">
        {filteredOrders?.length === 0 ? (
          <div className="bg-gray-900 rounded-lg p-6 text-center">
            <p className="text-gray-400">No orders found</p>
          </div>
        ) : (
          filteredOrders?.map((order) => (
            <div
              key={order.id}
              className="bg-gray-900 rounded-lg mb-3 overflow-hidden border border-gray-800"
            >
              {/* Order Header */}
              <div
                className="p-4 cursor-pointer"
                onClick={() => toggleOrderExpansion(order.id)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {renderStatusIcon(order.status)}
                    <div className="ml-3">
                      <h3 className="font-medium text-white">
                        {order.order
                          ?.map((item) => item.name)
                          .slice(0, 2)
                          .join(", ")}
                      </h3>
                      <p className="text-sm text-gray-400">{order.orderDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`text-sm mr-2 ${
                        order.status === "active"
                          ? "text-yellow-400"
                          : order.status === "Completed"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {order.status}
                    </span>
                    <span className="text-gray-400">
                      {expandedOrder === order.id ? (
                        <ChevronDownIcon />
                      ) : (
                        <ChevronRightIcon />
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedOrder === order.id && (
                <div className="px-4 pb-4 pt-1">
                  <div className="pt-3 border-t border-gray-800">
                    <h4 className="text-sm font-medium mb-2 text-yellow-400">
                      Order Details
                    </h4>
                    <ul className="text-sm flex gap-3 lg:justify-start sm:justify-center flex-wrap text-gray-300 space-y-1 mb-4">
                      {order.order?.map((item, index) => (
                        <li key={index} className="">
                          <span>
                            <div
                              id="toast-notification"
                              className="w-full max-w-xs p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300"
                              role="alert"
                            >
                              <div className="flex items-center mb-3">
                                <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                                  {item.price} $
                                </span>
                              </div>
                              <div className="flex items-center">
                                <div className="relative inline-block shrink-0">
                                  <img
                                    src={item.img}
                                    className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl"
                                  />
                                </div>
                                <div className="ms-3 text-sm font-normal">
                                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                    {item.name}
                                  </div>
                                  <div className="text-sm font-normal">
                                    quantity: {item.quantity} - size:{" "}
                                    {item.size}
                                  </div>
                                  <span className="text-xs font-medium text-blue-600 dark:text-blue-500">
                                    {item.type}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-between text-sm font-medium">
                      <span>Total: {order.subtotal} $ </span>
                    </div>

                    {order.status === "active" && (
                      <div className="mt-4">
                        <div className="text-sm text-gray-400 mb-2">
                          <span>Estimated delivery: </span>
                          <span className="font-medium text-white">
                            {order.estimatedDelivery}
                          </span>
                        </div>
                      </div>
                    )}

                    {order.status === "Completed" && (
                      <div className="mt-4">
                        <div className="text-sm text-gray-400">
                          <span>Delivered To: </span>
                          <span className="font-medium inline-block text-white">
                            {order.address}
                          </span>
                        </div>
                        <div className="mt-2 flex space-x-2"></div>
                      </div>
                    )}

                    {order.status === "Issues" && (
                      <div className="mt-4">
                        <div className="text-sm text-gray-400 mb-2">
                          <span>Issue: something went wrong </span>
                          <span className="font-medium text-white"></span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
