# Calculator-TOP

## About

Calc+ is a calculator app that allows you to track each calculation you have done through saving your results to the table. Sometimes you just want to remember what your past calculations were, but if they are not visual, you typically forget. Calc+ solves that problem.

## How to use

You can simply use Calc+ as a normal calculator. Each time that you press the `=` button, your calculation will get saved in an individual row on the table and will be displayed for you to see. For each calculation that you make a new row will get added. Additinally there are 3 buttons. A `save`, `load`, and `delete` button are visible.

If you want to keep your caluculations after you have left the website and do not want to make sure they are deleted, simply press the `save` button, and your information will get saved to the `local storage` on your browser.

If you have left the website or existed out of the window, and you come back to the website and the table is empty, simply press the `load` button to load your data. This will pull that data that was saved to the `local storage` and will populate it on the table.

If you want to get rid of all of the calculations both from the `local storage` and table, simply click the `delete` button and everything will be wiped. You will now have the ability for you to start your calculations from scratch.

## Why

This is one of the first projects that I started working on when I learned `HTML` `CSS` and `JavaScript`.

I did not want to get too fancy, and go crazy with the style sheet, so I took inperation from the basic calculator, and later knew that I could change both the vistual and functionality aspect later when I fully felt comfortable with the languages.

### V1.0

I started this as one of my first projects when going through _"The Odin Project"_.

Initially I used:
`HTML`
`CSS`
`JavaSCript`

**HTML** was very straight forward starting out with the boilerplate code, and breaking down sections with `class` and `ID`.

**CSS** in the begging was tricky, but I soon picked up `flexbox` and `GRID` and things began to get very easy.

**JavaScript** was also tricky since it was my first **REAL** coding language. I made many mistakes in the begininng such as having various global variables and I had `functions`that did multiple tasks.

I got halfway through the project and I put a halt on it, and decided to come back when I learned a little more. After A couple of months I came back, and I had learned about functional programming, and Object Oriented Programming, and about the Single Responsabilty Principle.

I started out refactoring, labeling, and reorganizng all of my code. I made sure each `function` only had 1 repsonsability. I also made sure to plan with `Pseudocode` before I started coding, which helped me through alot of the problems that I was struggling with.

I also made sure to use various `console.log()` statements to help me debug along with the **Chrome Dev Tools**.

I finally finished and launches my app with `Github Pages`.

### V2.0

These past couple of weeks I began learning `TypeScript` so I started to put what I learned into practice, and decided to refacor all of my code from vanilla `JavaScript` to `TypeScript`.

I started off by creating a `tsconfig.json`, so that I could put the proper paramters for compiling my code.

I then began converting all of my variables to their specific types by annotating and even using `union` types like:
`let currentValue: number | string = "";`
There were also some problems I ran into that I solved by using `!` which in `TypeScript` means optional chaining. Which it takes care of errors that could possibly return `null`.

In then end I was able to compile all of my code into a `.js` file by typing `tsc` intot he **terminal**.

I also made sure to use `Netlify` to launch my application, which I found easier to use then `Github Pages`.

## Instructions to run code

Navigate to your desired directory:
`cd <./directory>`

Clone repistory to a local folder using the SSH key:
` git clone git@github.com:tdematos/Calculator-TOP.git`
