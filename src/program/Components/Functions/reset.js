import { randomNum } from "./randomNum";

export function resetArray(max,bars) {
    const auxArray = [];
    for (let i = 0; i < bars; i++) {
      auxArray.push(randomNum(1, max))
    }
    return auxArray;
}
