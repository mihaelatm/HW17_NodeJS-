type ProductInfo = [string, number, number];

type Inventory = { [key: string]: number };

const inventory: Inventory = {
  Laptop: 5,
  Smartphone: 20,
  Tablet: 15,
};

function updateStock(
  inventory: Inventory,
  productInfo: ProductInfo
): Inventory {
  const [productName, price, quantity] = productInfo;
  if (inventory.hasOwnProperty(productName)) {
    inventory[productName] += quantity;
  } else {
    inventory[productName] = quantity;
  }
  return inventory;
}

const productInfo: ProductInfo = ["Laptop", 1000, 5];

const updatedInventory = updateStock(inventory, productInfo);
console.log("Updated Inventory:", updatedInventory);
