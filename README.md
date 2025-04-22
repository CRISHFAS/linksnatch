
<a href="https://linksnatch.pages.dev">
  <div align="center">
    <img alt="LinkSnatch" src="public/icon.svg" width="80">
  </div>
  <h1 align="center">LinkSnatch</h1>
</a>

<p align="center">
  Una aplicación de marcadores sencilla y sin esfuerzo que te permite guardar los enlaces de tu dispositivo sobre la marcha.
</p>

![](/public/linksnatch-cover.png)

## Introduction

Esta es una aplicación de marcadores muy simple que te permite guardar los enlaces en tu dispositivo sobre la marcha.

La aplicación es bastante obstinada y viene con un conjunto de características mínimas que necesitaría:

- Una hermosa interfaz con distracciones mínimas.
- Extrae los metadatos de la URL mediante [jsonlink.io](https://jsonlink.io) y los guarda en el almacenamiento local del navegador.
- Guarde y busque enlaces desde un solo lugar.
- Modo oscuro.
- No te rastrea.
- No es necesasirio registrarse.
- No requiere que instales una extensión de navegador.
- Es de código abierto.

## Pila tecnológica

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Preline](https://preline.co/index.html)
- [jsonlink.io](https://jsonlink.io)
- [React Hot Toast](https://react-hot-toast.com/)
- [AutoAnimate](https://auto-animate.formkit.com/)

## Desarrollo

Primero, clone el repositorio.

```bash  
git clone git@github.com:amitmerchant1990/linksnatch.git
```

A continuación, instale las dependencias.

```bash
npm install
```

Ve a [jsonlink.io](https://jsonlink.io) y obtén tu clave API. A continuación, cree un archivo `.env.local` en la raíz del proyecto y añada lo siguiente..

```env
NEXT_PUBLIC_JSONLINK_API_KEY=add_your_api_key_here
```

Por último, ejecute el servidor de desarrollo.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) con su navegador para ver LinkSnatch en acción.


