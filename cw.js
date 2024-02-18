// 1.
// DESCRIPTION:
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

// answer
// def nb_year(p0, percent, aug, p):
//     year = 0
//     while p0 < p:
//         p0 += int(p0 * (percent/100)) + aug
//         year += 1
//     return year

// // 2.
// DESCRIPTION:
// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges
// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// answer
// def first_non_consecutive(arr):
//     i = 1
//     for x in arr:
//         if i < len(arr) and arr[i] - arr[i-1] != 1:
//             return arr[i]
//         i += 1
//     return None

// 3.
// DESCRIPTION:
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
// answer
// def lovefunc( flower1, flower2 ):
//     if (flower1 + flower2) % 2 == 1 :
//         return True
//     else:
//         return False



// 4.
// DESCRIPTION:
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

// answer:
// def remove_char(s):
//     #your code here
//     return s[1:len(s)-1]

// 5.
// DESCRIPTION:
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// answer:
// def sum_str(a, b):
//     if a == "":
//         a = 0
//     if b == "":
//         b = 0
//     return str(int(a) + int(b))