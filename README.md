# ATM Machine

Este es un proyecto React para simular una ATM Machine.

## Introducción

Documentación oficial

To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.

## Requisitos

El principal requisito es tener una versión de Node.js version 18+
Instalar dependencias y ejecutar el proyecto.
Lo primero de todo, para instalar las dependencias es necesario lanzar el siguiente comando:

npm i
Luego para compilar y lanzar el proyecto, se usa el siguiente comando:

npm run dev
Además puedes usar otros comandos:

Compilar proyecto --> npm run build
Iniciar proyecto --> npm start

## Cómo se creó este proyecto

Se ha creado con Next.js para lo que utilizamos el siguiente comando: npx create-next-app@latest

Luego a las siguientes preguntas vamos respondiendo lo siguiente:

- Pregunta:

```text
    Need to install the following packages:
    create-next-app@14.2.5
    Ok to proceed? (y)
```

- Respuesta: y

- Pregunta:

```text
    ? What is your project named? » my-app
```

- Respuesta: travels-react

- Pregunta:

```text
    ? Would you like to use TypeScript? » No / Yes
```

- Respuesta: selecciona yes

- Pregunta:

```text
    ? Would you like to use ESLint? » No / Yes
```

- Respuesta: selecciona yes

- Pregunta:

```text
    ? Would you like to use Tailwind CSS? » No / Yes
```

- Respuesta: selecciona No

- Pregunta:

```text
    ? Would you like to use `src/` directory? » No / Yes
```

- Respuesta: selecciona Yes

- Pregunta:

```text
   ? Would you like to use App Router? (recommended) » No / Yes
```

- Respuesta: selecciona No

- Pregunta:

```text
   ? Would you like to customize the default import alias (@/*)? » No / Yes
```

- Respuesta: selecciona No

## SASS

Para diseñar el HTML utilizamos SASS. Lo hemos instalado a través de npm con el siguiente comando:

npm i -D sass

## Arquitectura

### Routing

Al seleccionar crear el proyecto con NextJS, el propio framework nos provee dos tipos de enrutamiento: App Router o Page Router. Elijo Page Router para este ejemplo.

También podría haber creado el proyecto con solo React y usar un router del tipo react-router-dom.

### Types

Here I will declare types and interfaces.

### Data

Here I will unify all the constants used.

### Helpers

For common logic and its tests

### Test

I use vitest installed following this [documentation for NextJS](https://nextjs.org/docs/app/building-your-application/testing/vitest)
