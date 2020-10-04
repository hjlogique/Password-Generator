
```
GW CODING BOOTCAMP
Application: Password Generator   
By HENRY JEAN LOGIQUE
Used technologies: HTML, CSS, JavaScript, Bootstrap framework
License: MIT
```
[Link to my GitHub Profile](https://github.com/hjlogique)
<br/>
[Link to the Password Generator application](https://hjlogique.github.io/gw_bc_hw3/)

```
The “Password Generator” application generates a random password based on 
user-selected criteria. It has a text area which instructs users on how to 
use the application. The text area also displays the generated password at 
the end. Underneath the text area, there are two buttons. The one on the 
left is the “Generate Password” button and the one on the right is the 
“Clear button”. Once users select the “Generate Password” button, the 
application prompts a series of password criteria related questions. As 
users make their selections, the application evaluates their selections, 
and if their selections are valid, it generates a random password for them. 
The “clear” button clears the Text area. 
```

![Password Generator application screenshot](/screenshot/password_generator_screenshot.png)
<br/><br/>
![Password Generator application screenshot](/screenshot/password_generator_prompts.png)
<br/><br/>
![Password Generator application screenshot](/screenshot/password_generator_uppercase.png)
<br/><br/>
![Password Generator application screenshot](/screenshot/password_generator_numeric.png)
<br/><br/>
![Password Generator application screenshot](/screenshot/password_generator_special.png)
<br/><br/>
![Password Generator application screenshot](/screenshot/password_generator_result.png)


```
I accomplished the followings:

- Created an application that generates a random password based on 
  user-selected criteria.
- Used Bootstrap components to create a responsive user interface for the 
  app, and also stylize the layout through CSS to ensure that the app has 
  a consistent look and adapts to multiple screen sizes.
- Coded JavaScript to take and evaluate users selections to generate a 
  random password or clear the page. The following password criteria are 
  evaluated: 
	
	1. Entered character types and their length: 

    Condition 1: If users do not enter any value and select Cancel or OK, 
    or enter any character(s) other than numeric ones, app alerts them that 
    there was no entry and/or they entered wrong type(s) of characters, and 
    no password is generated. Then app exists the alert.
        
	   Condition 2: users entered number should be between 8 and 128, otherwise 
     the app asks them to enter a valid number. This will continue till users 
     enter a valid number.
	
	2. Character types: lowercase, uppercase, numeric, and/or special characters:
     ! “ # $ % & ‘ ( ) * + , - . / : ; < =  > ? @ [ \ ] ^ _ ` { | } ~
        
	   Condition 1: At least one character type should be selected. If none is 
     selected, app asks Users to select at least one of the character types. 
        
	   Condition 2: The generated password should be random and matches the 
     user’s selected criteria.

- Tested the overall functionality of the app (the input and the generated 
  output) for all possible scenarios.
- Uploaded the updated files to my personal GitHub repository, and made the 
  URLs to my deployed application, and my GitHub repository available.
```
