# js-for-react-native-11126606

# 11126606

#TASK1

## Description.

This is a function processArray, where it takes an array of numbers as an input. It goes through each element in the array, determines whether the number is even or odd, and performs different operations in case of even and odd numbers. If the number is even, it will square the number and add the result to the result array. If the number is odd, then it multiplies the number by 3 and adds it to the result array. Finally, it returns the result array that contains the numbers that were modified.

#TASK2

## Description.

This function, `formatArrayStrings`, takes two arrays as input: string and processedNum. It goes through all elements of `string` array one by one and compares them with the corresponding elements in `processedNum` array. If the value at the same position in `processedNum` is even, it transforms the corresponding string element to uppercase. It will change it to lowercase otherwise. Finally, it outputs the modified `string` array.

# Task3

## Description.

This code reflects a function titled `createUserProfiles`, which is exported as a module. The function gets two arrays as the input parameters, `names` and `modifiedNames`. It goes through the elements of the names array and generates a user profile for each name. It processes the modified name of each user profile array which is formatted using the `formatArrayStrings` function. Profile of each user consists of the original name (name), the corresponding name from the modifiedNames array (modifiedNames) and an incremental identifier (id). With every profile creation the id is increased. Afterwards, the function returns an array with all the user profiles in it.
