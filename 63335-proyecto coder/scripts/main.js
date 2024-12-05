// Simulador de conversión de peso
function convertirPeso() {
    // menu para elegir si convertis de kgs a libras o libras a kgs
    const opcion = prompt(
        "Selecciona una opción:\n1. Convertir de Kilogramos a Libras\n2. Convertir de Libras a Kilogramos"
    );

    // alerta si no elegis ninguna de las dos y pones aceptar
    if (opcion !== "1" && opcion !== "2") {
        alert("Por favor, selecciona una opción válida (1 o 2).");
        return;
    }

    // ingresar el peso que queres convertir
    const peso = prompt("Ingresa el peso:");
    const pesoNumerico = parseFloat(peso);

    // alerta si no pones una opcion valida
    if (isNaN(pesoNumerico) || pesoNumerico <= 0) {
        alert("Por favor, ingresa un peso válido.");
        return;
    }

    // convertir
    let resultado;
    if (opcion === "1") {
        resultado = (pesoNumerico * 2.20462).toFixed(2); // Kilogramos a Libras
        alert(`${pesoNumerico} kg son aproximadamente ${resultado} libras.`);
    } else if (opcion === "2") {
        resultado = (pesoNumerico / 2.20462).toFixed(2); // Libras a Kilogramos
        alert(`${pesoNumerico} lbs son aproximadamente ${resultado} kilogramos.`);
    }
}

// Llamar a la función para iniciar el simulador
convertirPeso();

