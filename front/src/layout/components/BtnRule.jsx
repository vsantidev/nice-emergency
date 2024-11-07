import React, { useState, useEffect } from 'react';


export default function BtnRule() {
    return (
        <>
        <section>          
            <div class="flex justify-center items-center mb-4">
                <h2 class="text-3xl text-center text-balance lg:text-center text-gray-300">
                  Avancer dans la grille à la découverte des risques majeurs de la métropole.
              </h2>
              
                <a href="#rules" class=" transition-colors delay-50 duration-300 text-2xl italic
                text-blue-900
                text-center
                ml-2
                hover:animate-none">(Voir les régles du jeu !)</a>
            </div>
      </section>

        </>
    )
}