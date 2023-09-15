import { COLORS } from "./constants";

export function generateRandomColors() {
    const result = [];
    const availableNumbers = Array.from({ length: 10 }, (_, index) => index);
  
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * availableNumbers .length);
      const selectNumber = availableNumbers .splice(randomIndex, 1)[0];
      result.push(COLORS[selectNumber][Math.floor(Math.random()*COLORS[selectNumber].length)]);
    }
  
    return result;
  }