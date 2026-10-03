# Express TypeScript Starter Template

A lightweight, fully-configured boilerplate for building scalable Node.js backend applications using Express, TypeScript, and live-reloading tools.

---

## Features

- **Express.js**: Fast, unopinionated, minimalist web framework.
- **TypeScript**: Full type safety with pre-configured tsconfig settings.
- **Direct Execution**: Run `.ts` files directly in development without manual build steps using `tsx`.
- **Live Reloading**: Automatic server restart on file changes using `nodemon` or Node.js native `--watch` mode.

---

## Project Setup

### 1. Initialize Node.js Project
```bash
npm init -y

### enable module in package.json
"type": "module"


### 2. Install Core Dependencies
npm i express

### 3. Install Development & TypeScript Dependencies
# TypeScript compiler & runtime execution engine
npm i -D typescript tsx

# Node.js and Express type definitions
npm i -D @types/node @types/express

# Hot-reloading watcher (optional if using Node 18+ native watcher)
npm i -D nodemon

### 4. Initialize TypeScript Configuration
npx tsc --init

### 5. Recommended tsconfig.json Configuration

{
  "compilerOptions": {
    /* Language and runtime */
    "target": "ES2022",
    "lib": ["ES2022"],
    "module": "NodeNext",
    "moduleResolution": "NodeNext",

    /* Project structure */
    "rootDir": "./src",
    "outDir": "./dist",

    /* Type checking */
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "useUnknownInCatchVariables": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    /* Additional safety */
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitOverride": true,
    "forceConsistentCasingInFileNames": true,

    /* Modules */
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "isolatedModules": true,

    /* Build output */
    "sourceMap": true,
    "declaration": false,
    "removeComments": true,

    /* Compatibility */
    "skipLibCheck": true,
    "types": ["node"]
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist", "tests"]
}

### 6. scripts
"scripts": {
  "dev": "tsx watch src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}

or nodemon

"scripts": {
  "dev": "nodemon --watch src --exec tsx src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}


### 7. Environmental variables
  - sensitive info can be stored in operating system level not directly on codebase like passwords, db urls etc
  - any process can access it 
  - npm i dotenv

### 8. Api versioning also added

### 9. Added serilization & deserilaization middlewares for incoming request body , query params , path params ...


### 10. Zod validation for incoming request body or any objects
  - npm i zod
  - define schema - validate object

ex : 
```
import { z, ZodError } from "zod";

const obj = {
  name: "xyz",
  age: -20,
};

const objSchema = z.object({
  name: z.string(),
  age: z.number().int().positive(),
});

try {
  const result = objSchema.parse(obj);
  console.log(result);
} catch (error) {
  if (error instanceof ZodError) {
    // Extract array of strings: ["Too small: expected number to be >0"]
    const messages = error.issues.map((issue) => issue.message);
    console.log(messages); || console.log(messages[0])
  }
}
```


### 11. Setup Error handler for synchronous and async synchronous tasks
 - defualt express error middleware : next(err)
 - custom error middleware 
 - express v5 - auto handles errors


### 12. Added logs (info,warning,error,fatal)
  - npm i winston
  - npm i winston-daily-rotate-file


### 23. Added corelation id for api so we can track the api across different services if any error occurs
   - npm - uuid
   - api log + unique id = identify

