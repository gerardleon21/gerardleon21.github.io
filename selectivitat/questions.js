const questions = [
    {
        type: "exercicis",
        category: "electrics",
        text: `Una estufa elèctrica té un commutador de \\(n = 3\\) posicions per a seleccionar la potència que subministra.
               En la figura es mostra el circuit elèctric d’aquesta estufa, format per dues resistències elèctriques de valors \\(R_{1} = 27 \\, \\text{ohm}\\) i \\(R_{2} = 54 \\, \\text{ohm}\\)  i alimentat a \\(U = 27 \\, \\text{V}\\). 
               En funció de la posició del commutador, el terminal A es connecta a 0, 1 o 2 resistències. Determineu, per a la posició 2 del commutador: 
               <br><strong>a)</strong> La resistència equivalent\\(R_{\\text{eq}}\\)del circuit. [0,5 punts]
               <br><strong>b)</strong> El corrent \\(I\\) consumit per l’estufa. [0,5 punts]
               <br><strong>c)</strong> La potència \\(P\\) subministrada per l’estufa. Si el preu del \\(kW·h\\) és \\(p = 0,087 \\, \\text{€/(kW·h)}\\) [0,5 punts]
               <br><strong>d)</strong> El cost econòmic \\(c\\) de mantenir l’estufa encesa durant \\(t = 2 \\, \\text{h}\\). [1 punt]
               <br><br>
               <img src="circuit 1.png" alt="Circuit de l'exercici">`,  // Imatge opcional al final de la pregunta
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Càlcul de la resistència equivalent \\(R_{\\text{eq}}\\) del circuit:</strong>
            <br>
            - Connexió en paral·lel, quan dues resistències estan connectades en paral·lel, la resistència equivalent es calcula amb aquesta fòrmula:
            \\[
            R_{\\text{eq}}\\ =  \\frac{1}{\\frac{1}{R_1} + \\frac{1}{R_2}}
            \\]
            \\[
            R_{\\text{eq}}\\ = \\frac{1}{\\frac{1}{27} + \\frac{1}{54}} = 18 \\, \\Omega
            \\]
            <br>
            <strong>b) Càlcul del corrent \\(I\\) consumit per l’estufa:</strong>
            <br>
            - Aplicant la llei d'Ohm, després d'haver calculat la resistència equivalent:
            \\[
            I = \\frac{U}{R_{\\text{eq}}}
            \\]
            \\[
            I = \\frac{230}{18} = 12{,}78 A
            \\]
            <br>
            <strong>c) Càlcul de la potència \\(P\\) subministrada per l'estufa:</strong>
            <br>
            - Fórmula de la potència:
            \\[
            P = U \\cdot I
            \\]
            \\[
            P = U \\cdot I = 230 \\cdot 12{,}78 = 2940 \\, \\text{W}
            \\]
            <br>
            <strong>d) Càlcul del cost econòmic \\(c\\) de mantenir l’estufa encesa durant \\(t = 2 \\, \\text{h}\\):</strong>
            <br>
            - Energia elèctrica consumida:
            \\[
            E = P \\cdot t = 2{,}94 \\cdot 2 = 5{,}88 \\, \\text{kW·h}
            \\]
            \\[
            E = 2{,}94 \\cdot 2 = 5{,}88 \\, \\text{kW·h}
            \\]
            - Cost econòmic:
            \\[
            \\(c\\) = E \\cdot p = 5{,}88 \\cdot 0{,}087 = 0{,}51 \\, €
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "electrics",
        text: `Una resistència està feta amb fil de constantà de diàmetre \\(d = 0{,}5 \\, \\text{mm}\\), de llargada \\(L = 1{,}2 \\, \\text{m}\\) i de resistivitat\\(\\rho = 0{,}491 \\, \\mu\\Omega \\cdot \\text{m}\\). Quin és el valor d’aquesta resistència?`,
        options: [
                { text: "\\(3 \\, \\Omega\\)", value: "a" },
                { text: "\\(7{,}5 \\, \\Omega\\)", value: "b" },
                { text: "\\(9{,}5 \\, \\Omega\\)", value: "c" },
                { text: "\\(12{,}5 \\, \\Omega\\)", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
        <strong>Solució pas a pas:</strong>
        <br>
        - Conversió del diàmetre a metres:
        \\[
        d = 0{,}5 \\, \\text{mm} = 5 \\cdot 10^{-4} \\, \\text{m}
        \\]

        - Radi del fil:
        \\[
        r = \\frac{d}{2} = 2{,}5 \\cdot 10^{-4} \\, \\text{m}
        \\]

        - Conversió de la resistivitat a \\(\\Omega \\cdot \\text{m}\\):
        \\[
        \\rho = 0{,}491 \\, \\mu\\Omega \\cdot \\text{m} = 0{,}491 \\cdot 10^{-6} \\, \\Omega \\cdot \\text{m}
        \\]

        - Secció del fil:
        \\[
        A = \\pi r^2 = \\pi (2{,}5 \\cdot 10^{-4})^2 = 1{,}96 \\cdot 10^{-7} \\, \\text{m}^2
        \\]

        - Fórmula de la resistència:
        \\[
        R = \\rho \\cdot \\frac{L}{A}
        \\]
        \\[
        R = \\frac{0{,}491 \\cdot 10^{-6} \\cdot 1{,}2}{1{,}96 \\cdot 10^{-7}} = 3 \\, \\Omega
        \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    },
     {
        type: "questions", // Tipus de pregunta
        category: "electrics",
        text: `Una resistència està feta amb fil de constantà de diàmetre \\(d = 0{,}5 \\, \\text{mm}\\), de llargada \\(L = 1{,}2 \\, \\text{m}\\) i de resistivitat\\(\\rho = 0{,}491 \\, \\mu\\Omega \\cdot \\text{m}\\). Quin és el valor d’aquesta resistència?`,
        options: [
                { text: "\\(3 \\, \\Omega\\)", value: "a" },
                { text: "\\(7{,}5 \\, \\Omega\\)", value: "b" },
                { text: "\\(9{,}5 \\, \\Omega\\)", value: "c" },
                { text: "\\(12{,}5 \\, \\Omega\\)", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
];

