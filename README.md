# GNOME TypeScript types

TypeScript definitions for GNOME Gjs bindings.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install foobar.

```bash
npm install --save-dev git+https://github.com/diegonz/gnome-typescript-types.git
```

## Usage

Add/update **`typeRoots`** in your `tsconfig.json`:

```json
{
  "extends": "@tsconfig/recommended/tsconfig.json",
  "version": "1.0.0",
  "compileOnSave": true,
  "compilerOptions": {
    "outDir": "./build",
    "downlevelIteration": true,
    "lib": [
      "es2015"
    ],
    "pretty": true,
    "removeComments": true,
    "incremental": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "typeRoots": [
      "./node_modules/@types",
      "./node_modules/gnome-typescript-types"
    ],
  },
  "include": [
    "src/*.ts"
  ]
}
```

## Contributing

Pull requests are welcome.

## License

[MIT](https://choosealicense.com/licenses/mit/)
