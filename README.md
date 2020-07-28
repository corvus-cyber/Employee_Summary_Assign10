# Employee Team Generator

# Issues I Encountered 
* I accidentally kept the characteristics of the "employee" inside of a function for a long time, this meant that I could not build out the necesscary functions that depended on it without having to expand require module. In order to fix this and keep my code dry, I change Employee to a class in which I placed the necesscary functions. 
* When building out the app.js I was trying to begin the prompts by asking what role the user's wanted to input, but it wouldn't follow up on the user's response. In order to fix this I needed to put break at the end of each case so that it would end the case and direct the user to the proper function
