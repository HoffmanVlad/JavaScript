// Input: nums = [4,3,2,7,11,15], target = 9
// Output: [2,3]
// Output: Because nums[2] + nums[3] == 9, we return [0, 1].
// Учитывая массив целых чисел и целочисленную цель,
// вернуть индексы двух чисел, чтобы они в сумме равнялись целевому.

// Вы можете предположить, что каждый вход будет иметь ровно одно решение,
// и вы не можете использовать один и тот же элемент дважды.

// Вы можете вернуть ответ в любом порядке.

let nums = [4,3,2,7,11,15];
let target = 9;
let counter = []

for (let i = 0; i < nums.length; i++) {
	for (let j = i + 1; j < nums.length; j++){
		if (nums[i] + nums[j] === target) {
			counter[0] = i;
			counter[1] = j;
			break;

		}

	}
}
console.log(counter)
console.log("Because " + nums[counter[0]] + " + " + nums[counter[1]] +" == " + target + ", we return [" + counter + "].")
//////////////////////////////////////////////////////////////////////////


// Переменная n хранит целое число от 0 до 9. Используя оператор switch, написать скрипт, 
// который в зависимости от числа будет выводить слово (Например, если n равно 3, то будет выводиться слово «три»)

let nums = Number(prompt("Введите число от 0 до 9: "));
switch (nums)
  {
  	 case 0:
     	console.log("Ноль");
     	break
     case 1:
        console.log("Один");
        break;
     case 2:
        console.log("Два");
        break;
     case 3:
        console.log("Три");
        break;
     case 4:
        console.log("Четыре");
        break;
     case 5:
        console.log("Пять");
        break;
     case 6:
        console.log("Шесть");
        break;
     case 7:
        console.log("Семь");
        break;
     case 8:
        console.log("Восемь");
        break;
     case 9:
        console.log("Девять");
        break;
     default:
        alert("Число находиться не в диапазоне!!!");
        break;
   }









