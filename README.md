## Website Performance Optimization portfolio project

####HOW TO RUN THE APPLICATION

1. Download all files.
2. Open index.html in your favorite browser.

####BUILD TOOL

1. In terminal change directory to project directory
2. Run gulp
3. gulpfile.js will run the following tasks: 
	* lint and minify js files and save them in js directory
	* minify css files and save them in css directory
 	* compress images and save them in images directory


####OPTIMIZATION THAT WAS MADE IN VIEWS/JS/MAIN.JS

1. Move scrollTop variable out of the for loop.
2. Change document.body.scrollTop to window.scrollY.
3. Remove determineDx function and calculate newwidth in percent.
4. Change querySelectorAll() to getElementsByClassName() to increase performance.
5. Reduce the number of sliding pizzas.



