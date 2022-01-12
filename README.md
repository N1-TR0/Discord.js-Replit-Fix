# Discord.js v13 Fix For Replit

Fixes The Missing Module issue When Your Code is Ran On Repl.it 
You Could Try it With The Test Script That included [Here](https://github.com/N1-TR0/Discord.js-Replit-Fix/blob/main/src/index.js)

## Running The Fix

You Can Fork it [Here](https://replit.com/@nitroservices/V13-Fix?v=1)

or Run These Lines Of Code in the in the Terminal

```
npm init -y && npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH
```

**put this in package.json**

```
"scripts": {
  "start": "node ."
}
```

**Put This in .replit**

```
run="npm start"
```

**Important Reinstall all Your PKGS**

Don't Use `npm i ` you need to put the pkgs names like `npm install discord.js Express axios`

## Join The Developers Cafe

![Discord Banner 2](https://discordapp.com/api/guilds/829049274623983616/widget.png?style=banner2)
