# Menu-slide
Menu slide writed with javascript
this script DO NOT require jQuery

INCLUDING:
<!DOCTYPE HTML>
<html>
  <head>your stuff</head>
  <body>
  
  <script src="path to menu-slide.js"></script>
  </body>
</html>

the sample of menu template

<div class="YOURCLASSNAME">
  <div class="toggle">Your text</div>
  
  <div class="menu-item">Your text</div>
  <div class="menu-item">Your text</div>
  <div class="menu-item">Your text</div>
  <div class="menu-item">Your text</div>
  
</div>

YOURCLASSNAME should be different for each menu-slide which use script
classes toggle and menu-item need to be included in the same order as above

you can modify the CSS of all child elements of YOURCLASSNAME but the width
should be 100% of parent element and 
height of toggle class element should be >= height the tallest menu-item class element

For make things work you need to add script after include menu-slide.js

<script> 
  var menu = document.querySlelector(".YOURCLASSNAME");

  var random_name = new Slide(menu);
</script>

the Slide function can accept some properties

new Slide(Path,Time,Hidden);

Only Path argument is required.

-Time - is the duration of one single menu option slide . 
Unit is the second (Default value =.21);

Hidden - It decide of if the menu options should
be hidden onload or showed.It is a boolen type value . This means that 
accept true or false value. 

In conclusion: 

<!DOCTYPE HTML>
<html>
  <head>your stuff</head>
  <body>
  
  <div class="YOURCLASSNAME">
  <div class="toggle">Your text</div>
  
  <div class="menu-item">Your text</div>
  <div class="menu-item">Your text</div>
  <div class="menu-item">Your text</div>
  <div class="menu-item">Your text</div>
  
  </div>
  
  
   <script src="path to menu-slide.js"></script> 
   <script> 
    var menu = document.querySlelector(".YOURCLASSNAME");
    var random_name = new Slide(menu);
  </script>
  
  </body>
</html>


