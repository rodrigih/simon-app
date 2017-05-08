# Simon

This project is a web app of the game Simon and was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

**This is currently a work in progress**

## Game Details

### How to play

The object of the game is to copy the sequence of buttons shown by the computer.
The sequence starts with one button and increases by one button for each time
the player correctly plays the sequence.

The game is won when the player gets the sequence of 20 buttons correct.

Should the player guess the sequence wrong, the sequence is repeated.

### Strict Mode

Strict mode has the same rules as above, but if a player guesses wrong, a new
sequence of the same length is shown.

### Endless mode

Endless mode has the same rules as the regular game mode, but it continues
endlessly. If the player guesses wrong, the game resets and starts over.


## Development Details
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
