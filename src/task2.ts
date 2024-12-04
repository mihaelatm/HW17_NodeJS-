let id: string | number;

function displayId(id: string | number): void {
  if (typeof id === "string") {
    console.log(`ID: ${id.toUpperCase()}`);
  }

  if (typeof id === "number") {
    console.log(`ID: ${id * 10}`);
  }
}

id = "ghk789";
displayId(id);

id = 123;
displayId(id);
