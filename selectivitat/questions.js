const questions = [
    {
        type: "exercicis",
        category: "control",
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
            C = E \\cdot P = 5{,}88 \\cdot 0{,}087 = 0.51 \\, \\text{€}
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },
    
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
            \\(c\\) = E \\cdot \\(p\\) = 5{,}88 \\cdot 0{,}087 = 0.51 \\, \\text{€}
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "electrics",
        text: `Una resistència està feta amb fil de constantà de diàmetre \\(d = 0{,}5 \\, \\text{mm}\\), de llargada \\(L = 1{,}2 \\, \\text{m}\\) i de resistivitat \\(\\rho = 0{,}491 \\, \\mu\\Omega \\cdot \\text{m}\\). Quin és el valor d’aquesta resistència?`,
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
        category: "organitzacio",
        text: `Els autobusos d’una línia de transport fan el recorregut d’anar i tornar en 30 min. Si la línia disposa de 6 autobusos en servei i cada un té una capacitat nominal de 55 passatgers, quina és la capacitat nominal de transport en passatgers per hora?`,
        options: [
                 { text: "660", value: "a" },
                 { text: "110", value: "b" },
                 { text: "330", value: "c" },
                 { text: "165", value: "d" }
        ],
        correctAnswer: "a",
       steps: `
        <strong>Solució pas a pas:</strong>
        <br>
        - Cada autobús completa un recorregut d'anada i tornada en 30 min → això significa 2 recorreguts per hora per autobús.
        <br>
        - Capacitat d'un autobús per hora:
        \\[
        55 \\, \\text{passatgers} \\times 2 \\text{recorreguts/hora} = 110 \\, \\text{passatgers/hora per autobús}
        \\]
        - Com hi ha 6 autobusos en servei:
        \\[
        110 \\, \\text{passatgers/hora} \\times 6 = 660 \\, \\text{passatgers/hora}
        \\]
        <br><br>
   `},
    {
        type: "questions", // Tipus de pregunta
        category: "energia",
        text: ` Un model de desenvolupament afirma que el desenvolupament comporta el consum de més recursos per persona i l’accés de més persones a aquests recursos. Aquest model de desenvolupament és sostenible? `,
        options: [
                 { text: "Sí: el consum genera la riquesa necessària per a garantir la sostenibilitat", value: "a" },
                 { text: "Sí: els recursos, o són il·limitats (pel que fa al nombre de persones que hi tenen accés) o la riquesa en genera de nous", value: "b" },
                 { text: "Sí: només cal esperar que tothom tingui accés als mateixos recursos", value: "c" },
                 { text: "No: molts recursos són limitats i no és clar que es puguin substituir per altres. A més, s’ha de considerar l’impacte irreversible i nociu produït pel consum massiu de certs recursos", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
        <strong>Explicació:</strong>
        <br>
        El model descrit implica un augment continu del consum de recursos i del nombre de persones que hi accedeixen.
        <br>
        Molts recursos naturals són limitats i no es poden regenerar al mateix ritme que el consum.
        <br>
        A més, el consum massiu pot provocar impactes ambientals irreversibles (contaminació, pèrdua de biodiversitat, canvi climàtic).
        <br>
        Per aquests motius, aquest model de desenvolupament <strong>no és sostenible</strong>.
        <br><br>
`},
    
 {
        type: "questions", // Tipus de pregunta
        category: "metrologia",
        text: `Una bàscula de bany té una precisió de ± 0,5 kg. Una persona es pesa quatre vegades consecutives i obté aquestes lectures: 68,5 kg, 68,8 kg, 68,2 kg i 68,5 kg. Es pot prendre 68,5 kg, amb el marge d’incertesa corresponent, com a resultat de la pesada?`,
        options: [
                 { text: "Sí, perquè és el valor més repetit", value: "a" },
                 { text: "Sí, perquè és la mitjana de les lectures", value: "b" },
                 { text: "Sí, perquè coincideix amb la primera lectura", value: "c" },
                 { text: "Sí, perquè la xifra decimal coincideix amb la precisió de la bàscula", value: "d" }
        ],
        correctAnswer: "b",
       steps: `
        <strong>Explicació:</strong>
        <br>
        Calcular la mitjana de les quatre mesures:
        \\[
        \\frac{68.5 + 68.8 + 68.2 + 68.5}{4} = 68.5 \\, \\text{kg}
        \\]
        El valor mitjà coincideix amb 68,5 kg.
        <br>
        A més, aquest valor és coherent amb la precisió de la bàscula (± 0,5 kg).
        <br>
        Per tant, es pot prendre <strong>68,5 kg</strong> com a resultat de la pesada amb el marge d’incertesa corresponent.
        <br><br>
   `},
    
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `L’Incoloy és un aliatge de composició: 33 % Ni (níquel), 44 % Fe (ferro), 20 % Cr (crom) i 3 % d’altres components. Quina quantitat, en kg, de cadascun dels tres components principals hi ha en 325 kg d’aliatge?`,
        options: [
                 { text: "Ni: 99 kg  Fe: 132 kg  Cr: 62,5 kg", value: "a" },
                 { text: "Ni: 97,5 kg  Fe: 146,3 kg  Cr: 81,3 kg", value: "b" },
                 { text: "Ni: 107,3 kg  Fe: 143 kg  Cr: 65 kg", value: "c" },
                 { text: "Ni: 115,5 kg  Fe: 154 kg  Cr: 70 kg", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
         <strong>Solució pas a pas:</strong>
        <br>
        - Massa total de l’aliatge: 325 kg
        <br><br>
        - Quantitat de níquel (33 %):
        \\[
        0.33 \\cdot 325 = 107.25 \\approx 107.3 \\, \\text{kg}
        \\]
        - Quantitat de ferro (44 %):
        \\[
        0.44 \\cdot 325 = 143 \\, \\text{kg}
        \\]
        - Quantitat de crom (20 %):
        \\[
        0.20 \\cdot 325 = 65 \\, \\text{kg}
        \\]
        <br>
        Aquests valors corresponen a l’opció <strong>c)</strong>.
        <br><br>
`},
];

