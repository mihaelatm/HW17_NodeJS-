interface Order {
  orderId: string;
  amount: number;
  status: "pending" | "shipped" | "delivered";
}

const orders: Order[] = [
  { orderId: "1", amount: 100, status: "pending" },
  { orderId: "2", amount: 200, status: "shipped" },
  { orderId: "3", amount: 150, status: "delivered" },
  { orderId: "4", amount: 300, status: "pending" },
  { orderId: "5", amount: 250, status: "shipped" },
];

function filterOrdersByStatus(
  status: "pending" | "shipped" | "delivered"
): Order[] {
  return orders.filter((order) => order.status === status);
}

const pendingOrders = filterOrdersByStatus("pending");
console.log("Pending Orders:", pendingOrders);

const shippedOrders = filterOrdersByStatus("shipped");
console.log("Shipped Orders:", shippedOrders);

const deliveredOrders = filterOrdersByStatus("delivered");
console.log("Delivered Orders:", deliveredOrders);
