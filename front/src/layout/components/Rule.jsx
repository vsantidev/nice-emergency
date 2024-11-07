import React, { useState, useEffect } from 'react';


export default function Rule() {
    return (
        <>
        <section class="py-28 bg-gray-100" id="rules">
        <div class="container mx-auto px-6 text-gray-600" > 
            <h2 class="text-4xl font-bold text-center text-gray-800 mb-12" >
                Régles du jeu
            </h2>
          
            {/* <!-- 1 - Déroulement --> */}
            <div class="border-2 space-y-2 p-2 rounded-md">
                <h3 class="text-2x1 font-bold">Déroulement :</h3>
                <p>L’étudiant doit répondre à un certain nombre de questions liées à des thématiques liées aux risques majeurs. Il dispose de 30 secondes pour proposer une réponse avant de changer de question.
                </p>
            </div>

            {/* <!-- 2 - Types de questions --> */}
            <div class="border-2 space-y-2 p-2 rounded-md mt-4">
                <h3 class="text-2x1 font-bold">Type de questions :</h3>
                <p>Question à Choix Multiples composé de quatres options de réponse, une seule est correcte.</p>
            </div>

            {/* <!-- 3 - Validation de la réponse --> */}
            <div class="border-2 space-y-2 p-2 rounded-md mt-4">
                <h3 class="text-2x1 font-bold">Validation de la réponse :</h3>
                <p> Si l’étudiant répond correctement, il gagne 1 point.</p>
                <p>En cas de mauvaise réponse, l’étudiant ne marque pas de point mais peut recevoir une brève explication de la réponse correcte pour renforcer l’apprentissage.</p>
            </div>

            {/* <!-- E4 - Révision --> */}
            <div class="border-2 space-y-2 p-2 rounded-md mt-4">
                <h3 class="text-2x1 font-bold">Erreur :</h3>
                <p>Chaque étudiant dispose de 3 vies à utiliser une fois pendant le jeu. Cela permet au permet à l’équipe	 de demander un indice ou de réduire les choix de réponse en cas de doute.
                </p>
            </div>

            {/* <!-- 5 - Fin du jeu --> */}
            <div class="border-2 space-y-2 p-2 rounded-md mt-4">
                <h3 class="text-2x1 font-bold">Fin du jeu :</h3>
                <p>Le jeu prend fin lorsque toutes les vies sont épuisées ou qu’il a fini tous les quiz.</p>
                <p>Le joueur obtiendra son barème et pourra savoir dans quelle catégorie il se trouve. </p>  
            </div>
            {/* <!-- 6 - Récompenses --> */}
            <div class="border-2 space-y-2 p-2 rounded-md mt-4">
                <h3 class="text-2x1 font-bold">Récompenses :</h3>
                <p>Pour chaque catégorie maitrisée, le joueur obtiendra un badge montrant sa réussite.</p> 
            </div>
        </div>
      </section>

        </>
    )
}