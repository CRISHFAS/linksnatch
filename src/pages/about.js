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
                    La aplicación es bastante <i>dogmática</i> y viene con un conjunto de características mínimas que necesitaría:
                    </p>

                    <ul class="list-disc mt-4 ml-10 text-lg text-slate-700 dark:text-slate-400">
                        <li>No es necesario registrarse</li>
                        <li>Una hermosa interfaz con distracciones mínimas.</li>
                        <li>Extrae metadatos de URL usando <a href="https://jsonlink.io/" target="_blank" class="text-gray-700 dark:text-gray-300 dark:hover:text-purple-200 font-bold hover:text-purple-700">jsonlink.io</a> y lo guarda en el almacenamiento local del navegador.</li>
                        <li>Guarde y busque enlaces, todo desde un solo lugar.</li>
                        <li>Modo oscuro.</li>
                        <li>No te rastrea.</li>
                        <li>Es <a href="https://github.com/CRISHFAS/linksnatch" target="_blank" class="text-gray-700 dark:text-gray-300 dark:hover:text-purple-200 font-bold hover:text-purple-700">open source</a>.</li>
                    </ul>
                                            
                    <hr class="mt-4"/>                    
                </div>
            </div>
        </>
    )
}