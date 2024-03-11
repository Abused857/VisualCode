// Definir el array de nombres
let names: string[] = [];

// Función para agregar un nombre a la lista
function addName() {
  const nameInput = document.getElementById("nameInput") as HTMLInputElement;
  const newName = nameInput.value.trim();

  if (newName !== "") {
    names.push(newName);
    nameInput.value = ""; // Limpiar el campo de entrada

    // Llamar a la función para actualizar la lista de nombres
    updateNameList();
  }
}

// Función para actualizar la lista de nombres en la página HTML
function updateNameList() {
  const nameList = document.getElementById("nameList");
  nameList.innerHTML = ""; // Limpiar la lista antes de volver a agregar nombres

  names.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    nameList.appendChild(li);
  });
}
