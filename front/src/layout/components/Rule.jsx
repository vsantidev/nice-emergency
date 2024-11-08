export default function Rule() {
    return (
        <>
        <section className="py-28" id="rules">
        <div className="container mx-auto px-6 text-gray-600" > 
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" >
                Règles du jeu
            </h2>
          
            {/* <!-- 1 - Déroulement --> */}
            <div className="border-2 space-y-2 p-2 rounded-md">
                <h3 className="text-2x1 font-bold">Comment jouer :</h3>
                <p>Pour avancer dans le jeu, réponds à des questions sur les dangers que l'on peut rencontrer dans la ville. Tu as 30 secondes pour répondre à chaque question.</p>
            </div>

            {/* <!-- 2 - Types de questions --> */}
            <div className="border-2 space-y-2 p-2 rounded-md mt-4">
                <h3 className="text-2x1 font-bold">Type de questions :</h3>
                <p>Les questions sont à choix multiple avec quatre réponses possibles. Une seule réponse est correcte, à toi de la trouver !</p>
            </div>

            {/* <!-- 3 - Validation de la réponse --> */}
            <div className="border-2 space-y-2 p-2 rounded-md mt-4">
                <h3 className="text-2x1 font-bold">Gagner des points :</h3>
                <p>Chaque bonne réponse te donne des points !</p>
                <p>Si tu te trompes, tu en perds, mais tu recevras une petite explication pour mieux comprendre.</p>
            </div>

            {/* <!-- E4 - Révision --> */}
            {/* <div className="border-2 space-y-2 p-2 rounded-md mt-4">
                <h3 className="text-2x1 font-bold">Aide :</h3>
                <p>Tu as 3 vies pour t'aider : utilise-les pour obtenir un indice ou réduire le nombre de réponses possibles quand tu hésites.</p>
            </div> */}

            {/* <!-- 5 - Fin du jeu --> */}
            <div className="border-2 space-y-2 p-2 rounded-md mt-4">
                <h3 className="text-2x1 font-bold">Fin du jeu :</h3>
                <p>Le jeu se termine si tu as répondu à toutes les questions. À la fin, tu verras ton score !</p>
            </div>
            {/* <!-- 6 - Récompenses --> */}
            {/* <div className="border-2 space-y-2 p-2 rounded-md mt-4">
                <h3 className="text-2x1 font-bold">Récompenses :</h3>
                <p>Pour chaque catégorie maitrisée, le joueur obtiendra un badge montrant sa réussite.</p> 
            </div> */}
        </div>
      </section>

        </>
    )
}