const input = require("readline-sync");

const animalPhylum = input.question("Filo do animal (vertebrado/invertebrado): ").toLowerCase();

if (animalPhylum === "vertebrado") {
    const animalClass = input.question("Classe do animal (ave/mamífero): ").toLowerCase();

    if (animalClass === "ave") {
        const diet = input.question("Dieta do animal (carnívoro/onívoro): ").toLowerCase();
        if (diet === "carnívoro") {
            console.log("O animal é uma águia.");
        } else if (diet === "onívoro") {
            console.log("O animal é um pomba.");
        }
    } else if (animalClass === "mamífero") {
        const diet = input.question("Dieta do animal (onívoro/herbívoro): ").toLowerCase();
        if (diet === "onívoro") {
            console.log("O animal é um homem.");
        } else if (diet === "herbívoro") {
            console.log("O animal é uma vaca.");
        }
    }
    
} else if (animalPhylum === "invertebrado") {
    const animalClass = input.question("Classe do animal (inseto/anelídeo): ").toLowerCase();

    if (animalClass === "inseto") {
        const diet = input.question("Dieta do animal (hematófago/herbívoro): ").toLowerCase();
        if (diet === "hematófago") {
            console.log("O animal é uma pulga.");
        } else if (diet === "herbívoro") {
            console.log("O animal é uma lagarta.");
        }

    } else if (animalClass === "anelídeo") {
        const diet = input.question("Dieta do animal (hematófago/onívoro): ").toLowerCase();
        if (diet === "hematófago") {
            console.log("O animal é uma sanguessuga.");
        } else if (diet === "onívoro") {
            console.log("O animal é uma minhoca.");
        }
    }
}

