export default function BtnRule() {

    function handleScroll() {
        window.scrollTo({
            top: document.getElementById("rules").offsetTop,
            behavior: "smooth"
          });
    }
    return (
        <>
        <section>          
            <div className="flex justify-center items-center mb-4">

            </div>
            <div>
                <h2 className="text-3xl text-center text-gray-800 dark:text-gray-300 mb-2">
                    Aide ta métrople à avancer dans la grille à la découverte des risques majeurs.
                </h2>
                <div className='flex justify-center'>
                    <p className="text-2xl text-gray-600 mb-12">
                        Prêt à explorer et relever des défis en t'amusant !
                        <span onClick={() => handleScroll()} className="cursor-pointer hover:text-blue-500 delay-50 duration-300 text-2xl italic
                        text-blue-900
                        ml-2
                        ">(Voir les régles du jeu !)</span>
                    </p>
                </div>

            </div>
      </section>

        </>
    )
}