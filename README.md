# Employee Team Generator

# Purpose

# Table of Contents
1. [Purpose](#Purpose)
2. [Process](#Process)
3. [Issues](#Issues)
4. [What I Learned](#What)
5. [Video](#Video)
6. [Link](#Link)
7. [Screenshot](#Screenshot)

# Process 
* As it stated at the beginning of the instructions, it was vital that the different js files were qualified by the different test files. I began by writing out the different js files so that their constructors and functions fit the perameters of the pre-designed tests.

# Issues I Encountered 
* I accidentally kept the characteristics of the "employee" inside of a function for a long time, this meant that I could not build out the necesscary functions that depended on it without having to expand require module. In order to fix this and keep my code dry, I change Employee to a class in which I placed the necesscary functions. 
* When building out the app.js I was trying to begin the prompts by asking what role the user's wanted to input, but it wouldn't follow up on the user's response. In order to fix this I needed to put break at the end of each case so that it would end the case and direct the user to the proper function
* I had difficult conceptually understanding how to check whether the user was entering an already pre-existing id. In order to solve this, I went to an instructional assistant, who said it would be a good idea to build an empty array that would hold ids. From there I built a function that would check this array, and if it already had this id within it it would not allow the user to proceed. Once a non duplicate was entered it would be added to the array for future verification. 

# What I Learned

# Video 

