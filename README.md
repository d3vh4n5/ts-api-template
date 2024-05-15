# Template para iniciar una API con Typescript (By Midudev)

fuente: [📘 Tutorial TypeScript con Node.js y Express. ¡Crea tu API REST con tipos estáticos DESDE CERO!](https://www.youtube.com/watch?v=ZpY5KdGQvwI&t)

### Secuencia para iniciarla manual:

1. `npm init -y`
2. `npm install typescript -D`
3. crear script: `"tsc": "tsc"` en el package.json
4. `npm run tsc -- --init` El doble guiión solo hace que el parametro le ppegue al `tsc` y no al `npm run`. Esto nos creará un archivo tsconfig.json, el cual tiene toda las opciones de configuración posibles para typescript.

Dentro de este configuraremos: 
```json
    "target": "es2016",
    "module": "commonjs", // Estos son como lo va a expulsar al código
    "outDir": "./build",  // La carpeta donde se creará la build
    "strict": true, // Checkeos strictos de ts para el codigo
    "noUnusedLocals": true, // Avisa variables locales sin usar
    "noUnusedParameters": true, 
    "noImplicitReturns": true, // Siempre las funciones deben tener un return
    "noFallthroughCasesInSwitch": true,   // Para que todos los switch tengan un return par evitar que caigan a un break
    "esModuleInterop": true, // Para que funconen ESmodules y commonjs
    "skipLibCheck": true, 
    "forceConsistentCasingInFileNames": true,  
    "resolveJsonModule" : true // Esto es para poder importar archivos json 
```

5. `npm install express -E`
6. `npm install @types/express -D`
7. `npm install ts-node-dev -D` // Es una mezcla entre ts-node y nodemon
8. `npm install ts-standard -D` // Linter para ts y agrego el script "lint": "ts-standard".
9. Agregar eta config en el package.json: 
```json
    "eslintConfig": {
    "parserOptions": {
      "project": "./tsconfig.json"
    },
    "extends": ["./node_modules/ts-standard/eslintrc.json"]
  }
```
10. Yo en mi proyecto agrego la siguiente configuración de VSC:
```json
{
    "editor.tabSize": 4,
    "editor.insertSpaces": true,
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    }
}
```