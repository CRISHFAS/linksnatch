import { AppHeader } from "@/components/AppHeader"
import { NextSeo } from "next-seo"
import { publicRuntimeConfig } from "next.config"

export default function About() {
    return (
        <>
            <NextSeo
                title={"About — " + publicRuntimeConfig.app_name + ' — ' + publicRuntimeConfig.app_short_description}
            />

            <AppHeader />

            <div class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full mb-10">
                <div class="mt-6 relative max-w-7xl w-full mx-2 py-3 px-4 md:py-0 md:px-6 lg:px-8 xl:mx-auto">
                    <h6 class="text-2xl font-bold leading-normal mt-0 mb-2 text-gray-600 dark:text-gray-300">Acerca de</h6>

                    <p class="mt-4 text-lg text-slate-700 dark:text-slate-400">
                    Esta es una aplicación de marcadores muy sencilla que te permite guardar los enlaces en tu dispositivo mientras viajas.
                    </p>

                    <p class="mt-4 text-lg text-slate-700 dark:text-slate-400">
                    Construí <span class="px-2 py-1 dark:text-slate-700 bg-rotate-45 text-md font-bold border-none rounded-md bg-gradient-to-r from-green-200 to-green-200">LinkSnatch</span> porque quería algo realmente sencillo para guardar enlaces que quería leer más tarde. No quería tener que crear una cuenta, ni instalar una extensión del navegador, ni (definitivamente) usar un servicio de marcadores que me rastreara.
                        Quería algo sencillo que funcionara. ¡Y aquí estoy!
                    </p>

                    <p class="mt-4 text-lg text-slate-700 dark:text-slate-400">
                    La aplicación es bastante <i>dogmática</i> y viene con un conjunto de características mínimas que necesitaría:
                    </p>

                    <ul class="list-disc mt-4 ml-10 text-lg text-slate-700 dark:text-slate-400">
                        <li>No es necesario registrarse</li>
                        <li>Una hermosa interfaz con distracciones mínimas.</li>
                        <li>Extrae metadatos de URL usando <a href="https://jsonlink.io/" target="_blank" class="text-gray-700 dark:text-gray-300 dark:hover:text-purple-200 font-bold hover:text-purple-700">jsonlink.io</a> y lo guarda en el almacenamiento local del navegador.</li>
                        <li>Guarde y busque enlaces, todo desde un solo lugar.</li>
                        <li>Modo oscuro.</li>
                        <li>No te rastrea.</li>
                        <li>Es <a href="https://github.com/amitmerchant1990/linksnatch" target="_blank" class="text-gray-700 dark:text-gray-300 dark:hover:text-purple-200 font-bold hover:text-purple-700">open source</a>.</li>
                    </ul>

                    <p class="mt-4 text-lg text-slate-700 dark:text-slate-400">
                    Empecé a construirlo para solucionar mi propia picazón, pero luego me di cuenta de que alguien podría necesitar algo así.
                    </p>
                        
                    <hr class="mt-4"/>

                    <p class="mt-4 text-lg text-slate-700 dark:text-slate-400">
                        Explore more projects: 
                    </p>

                    <ul class="list-disc mt-4 ml-10 text-lg text-slate-700 dark:text-slate-400">
                        <li><a href="https://notepad.js.org/" target="_blank" class="text-gray-700 dark:text-gray-300 dark:hover:text-purple-200 font-bold hover:text-purple-700">Notepad — Offline Capable</a></li>
                        <li><a href="https://markdownify.js.org/" target="_blank" class="text-gray-700 dark:text-gray-300 dark:hover:text-purple-200 font-bold hover:text-purple-700">Markdownify</a></li>
                        <li><a href="https://github.com/amitmerchant1990/consolepad" target="_blank" class="text-gray-700 dark:text-gray-300 dark:hover:text-purple-200 font-bold hover:text-purple-700">ConsolePad</a></li>
                        <li><a href="https://github.com/amitmerchant1990/reverie" target="_blank" class="text-gray-700 dark:text-gray-300 dark:hover:text-purple-200 font-bold hover:text-purple-700">Reverie</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}