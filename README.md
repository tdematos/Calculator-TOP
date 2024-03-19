# Calculator-TOP

## About

This is a basic calculator app inspired by the calculator that comes installed on Macs.

## Why

This is one of the first projects that I started working on when I learned `HTML` `CSS` and `JavaScript`.

I did not want to get too fancy, and go crazy with the style sheet, so I took inperation from the basic calculator, and later knew that I could change both the vistual and functionality aspect later when I fully felt comfortable with the languages.

## How

### ==1.0==

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

### ==V2.0==

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
