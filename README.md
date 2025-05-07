Here is the instruction on how to run it!

Setup:
- Create new folder and open it via terminal
- Run command "npm init playwright@latest"
- Select Typescript as default language during Playwright installation. If you selected Javascript, then you need to install types: npm i @types/npm
- For the rest of the option select "Y" (Yes)

Setup is ready :)

How to run the tests:
- Copy the next folders with files and paste them inside your project: lib/utils.ts, pages/playlist.ts, tests/playlist.spec.ts (you can either copy from here https://github.com/vanya-vanya/Playlist-App.git or clone it and copy from local repository)
- Delete example.spec.ts file as you don't need it
- Run "npx playwright test" to run all the tests in 3 browsers (chromium, firefox, webkit)

Fot headed mode run "npx playwright test --headed".

For debug mode run "npx playwright test --debug".
