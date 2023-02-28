import "../style.css";

const Toxic = [
  "Acetylated Lanolin",
  "Acetylated Lanolin Alcohol",
  "Algae Extract",
  "Algin",
  "Beeswax",
  "Bismuth",
  "Butyl Stearate",
  "Butyrospermum Parkii",
  "Carrageenan",
  "Cetearyl Alcohol + Ceteareth 20",
  "Cetyl Acetate",
  "Chlorella",
  "Chondrus Crispus",
  "Coal Tar",
  "Cocoa Butter",
  "Coconut Alkanes",
  "Coconut Butter",
  "Coconut Oil",
  "Cocos Nucifera Oil",
  "Colloidal Sulfur",
  "Cotton Awws Oil",
  "Cotton Seed Oil",
  "Corn Oil",
  "D&C Red 3, 4, 6, 7, 9",
  "D&C Red 17, 19",
  "D&C Red 21, 27",
  "D&C Red 30, 33, 36",
  "D&C Red 40",
  "Decyl Oleate",
  "Dioctyl Succinate",
  "Disodium Monooleamido",
  "Ethoxylated Lanolin",
  "Ethylhexyl Palmitate",
  "Glyceryl Stearate SE",
  "Glyceryl-3 Diisostearate",
  "Hexadecyl Alcohol",
  "Hydrogenated Vegetable Oil",
  "Isocetyl Alcohol",
  "Isocetyl Stearate",
  "Isodecyl Oleate",
  "Isopropyl Isostearate",
  "Isopropyl Linolate",
  "Isopropyl Myristate",
  "Isopropyl Palmitate",
  "Isostearyl Isostearate",
  "Isostearyl Neopentanoate",
  "Jojoba Wax",
  "Kelp",
  "Laminaria Digitata Extract",
  "Laminaria Saccharina Extract",
  "Laureth-4",
  "Laureth-23",
  "Lauric Acid",
  "Mango Butter",
  "Mink Oil",
  "Myristic Acid",
  "Myristyl Lactate",
  "Myristyl Myristate",
  "Octyl Palmitate",
  "Octyl Stearate",
  "Oleth-3",
  "Oleyl Alcohol",
  "PEG 2 Sulfosuccinate",
  "PEG 8 Stearate",
  "PEG 16 Lanolin",
  "PEG 200 Dilaurate",
  "PG Monostearate",
  "PPG 2 Myristyl Propionate",
  "Plankton",
  "Polyglyceryl-3 Diisostearate",
  "Potassium Chloride",
  "Propylene Glycol Monostearate",
  "Red Algae",
  "Seaweed",
  "Shark Liver Oil",
  "Shea",
  "Shea Butter",
  "Sodium Laureth Sulfate",
  "Sodium Lauryl Sulfate",
  "Solulan 16",
  "Sorbitan Oleate",
  "Soybean Oil",
  "Spirulina",
  "Steareth 10",
  "Stearic Acid Tea",
  "Stearyl Heptanoate",
  "Sulfated Castor Oil",
  "Sulfated Jojoba Oil",
  "Talc",
  "Wheat Germ Glyceride",
  "Wheat Germ Oil",
  "Xylene",
];

let userInput = prompt("ingredients: ");
let found = false;
const Button = document.querySelector(".search");

async function 

Button.addEventListener("click", () => {
  if (userInput === "") {
    console.log("input ingredients");
  }
  for (let i = 0; i < userInput.length; i++) {
    if (Toxic.includes(userInput[i])) {
      return true;
    } else { 
        return false; 
    }
  }



/*
  if (found) {
    console.log("+userInput+");
  } else {
    console.log("no harmful ingredients");
  }
});
