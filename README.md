## Website Performance Optimization portfolio project

####HOW TO RUN THE APPLICATION

1. Download all files.
2. Open index.html in your favorite browser.

####HOW TO GENERATE PRODUCTION FILE

1. run pathTo/minify_script in terminal.

####OPTIMIZATION THAT WAS MADE IN VIEWS/JS/MAIN.JS

1. Move scrollTop variable out of the for loop.
2. Change document.body.scrollTop to window.scrollY.
3. Remove determineDx function and calculate newwidth in percent.
4. Change querySelectorAll() to getElementsByClassName() to increase performance.
5. Reduce the number of sliding pizzas.



