const questions = [
    {
        type: "exercicis",
        category: "control",
        text: `Una fresadora disposa d’una pantalla de protecció per a evitar que en condicions normals es pugui accedir a la zona de treball quan està en marxa. La màquina s’atura si s’enretira aquesta pantalla i abans no s’ha premut el botó que dóna permís per a fer-ho sense que la màquina s’aturi. Si es prem el botó d’emergència, la màquina s’atura sempre.
            Utilitzant les variables d’estat:
            <br>
            <strong>p</strong>: pantalla a lloc (1 sí / 0 no)
            <br>
            <strong>b</strong>: botó de permís (1 premut / 0 no premut)
            <br>
            <strong>e</strong>: botó d’emergència (1 premut / 0 no premut)
            <br>
            <strong>a</strong>: màquina s’atura (1 sí / 0 no)
            <br><br>
            <br><strong>a)</strong> Escriviu la taula de veritat del sistema. [1 punt]
            <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
            <br><strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
            <br><br>
            `,  
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
        <strong>a) Taula de veritat del sistema:</strong>
        <br>
<img src="https://gerardleon21.github.io/selectivitat/images/2007serie2e2ra.png" alt="Taula de la veritat">
        <br>
        <strong>b) Funció lògica del sistema:</strong>
        <br>
        - La màquina s’atura si es prem el botó d’emergència o si la pantalla no és al lloc i no s’ha premut el botó de permís.
        <br><br>
        \\[
        a = e + (\\overline{p} \\cdot \\overline{b})
        \\]
        <br>
        Aquesta funció ja està simplificada.
        <br><br>
        <strong>c) Esquema de portes lògiques equivalent:</strong>
        <br>
        - Una porta NOT a l’entrada <strong>p</strong>
        <br>
        - Una porta NOT a l’entrada <strong>b</strong>
        <br>
        - Les dues sortides NOT entren a una porta AND
        <br>
        - La sortida de l’AND entra a una porta OR juntament amb <strong>e</strong>
        <br>
        - La sortida de l’OR és <strong>a</strong> (màquina s’atura)
        <br><br>
        <pre>
<img src="https://gerardleon21.github.io/selectivitat/images/2007serie2e2rc.jpg" alt="Esquema">
    `
    },
    
    {
        type: "exercicis",
        category: "electrics",
        text: `Una estufa elèctrica té un commutador de \\(n = 3\\) posicions per a seleccionar la potència que subministra.
               En la figura es mostra el circuit elèctric d’aquesta estufa, format per dues resistències elèctriques de valors \\(R_{1} = 27 \\, \\text{ohm}\\) i \\(R_{2} = 54 \\, \\text{ohm}\\)  i alimentat a \\(U = 230 \\, \\text{V}\\). 
               En funció de la posició del commutador, el terminal A es connecta a 0, 1 o 2 resistències. Determineu, per a la posició 2 del commutador: 
               <br><strong>a)</strong> La resistència equivalent \\(R_{\\text{eq}}\\)del circuit. [0,5 punts]
               <br><strong>b)</strong> El corrent \\(I\\) consumit per l’estufa. [0,5 punts]
               <br><strong>c)</strong> La potència \\(P\\) subministrada per l’estufa. Si el preu del \\(kW·h\\) és \\(p = 0,087 \\, \\text{€/(kW·h)}\\) [0,5 punts]
               <br><strong>d)</strong> El cost econòmic \\(c\\) de mantenir l’estufa encesa durant \\(t = 2 \\, \\text{h}\\). [1 punt]
               <br><br>
             <img src="https://gerardleon21.github.io/selectivitat/images/2007serie2Ae3.jpg" alt="Circuit de l'exercici">`,  // Imatge opcional al final de la pregunta
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
            \\text{c} = E \\cdot \\text{p} = 5{,}88 \\cdot 0{,}087 = 0{,}51 \\, \\text{€}
            \\]
            <br><br>
          
    `},

       {
        type: "exercicis",
        category: "electrics",
        text: `En un motor de corrent continu, el parell motor \\(Gamma\\) i la velocitat angular \\(omega\\) de l’eix estan
               relacionats amb la tensió d’alimentació \\(U\\) i el corrent consumit \\(I\\) per les expressions: 
                <br>\\[
                \\Gamma = c I, \\quad
                \\omega = \\frac{U - I R}{c}, \\quad
                \\text{amb } c = 0,06 \\text{ Nm/A}, \\; R = 4 \\Omega
                \\]
               
               <br><strong>a)</strong> Determineu l’expressió que relaciona la potència mecànica \\(P\\) que proporciona aquest motor amb la velocitat angular \\(\\omega\\) (expressió sense I). [0,5 punts]
               <br><strong>b)</strong> El corrent \\(I\\) consumit per l’estufa. [0,5 punts]
               <br><strong>c)</strong> Dibuixeu, de manera aproximada i indicant les escales, la corba potència mecànica \\(P\\) en funció de la velocitat angular \\(\\omega\\) per a \\(0 \\leq \\omega \\leq 600\\,\\text{rad/s}\\). [1 punt]
               <br><strong>d)</strong> Calculeu l’energia elèctrica \\(E\\), en W·h, que consumeix el motor si funciona contínuament durant \\(t = 3 \\, \\text{h}\\) girant a \\(\\omega = 360 \\, \\text{rad/s}\\). [1 punt]
               <br><br>
             `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Expressió que relaciona la potència mecànica \\(P\\) amb la velocitat angular\\(omega\\):</strong>
            <br>
            - La potència mecànica es defineix com:
            \\[
            P = \\Gamma \\cdot \\omega
            \\]
            - Ens diuen que el parell motor es defineix amb aquesta relació:
            \\[
            \\Gamma = \\text{c} \\cdot I
            \\]
            - Substituïm el parell a la fórmula de la potència:
            \\[
            P = \\text{c} \\cdot I \\cdot \\omega
            \\]
            - Per l'expressió de la velocitat angular sabem que:
            \\[
            I = \\frac{U - \\omega \\cdot \\text{c}}{R}
            \\]
            - Substituïm el corrent:
            \\[
            P = \\text{c} \\cdot \\omega \\cdot \\frac{U - \\text{c} \\cdot \\omega}{R}
            \\]
            - Separem els termes:
            \\[
            P = \\frac{\\text{c} \\cdot U}{R} \\cdot \\omega - \\frac{\\text{c}^2}{R} \\cdot \\omega^2
            \\] 
            - Substitució numérica
            \\[
            P = \\frac{0{,}06 \\cdot 36}{4} \\cdot \\omega - \\frac{0{,}06^2}{4} \\cdot \\omega^2
            \\]
            \\[
            P = 0{,}54\\omega - 900 \\cdot 10^{-6}\\omega^2 
            \\]
            <br>
            <strong>b) Corba de la potència mecànica:</strong>           
            <br>
             <img src="https://gerardleon21.github.io/selectivitat/images/2007serie2Ae4.png" alt="Gràfica">
            <br>
            <strong>c) Càlcul de l’energia elèctrica \\(E\\), en W·h:</strong>
            <br>
            - Fórmula de la energia:
            \\[
            E = P_{\\text{elèc} \\cdot \\text{t}
            \\]
            <br>
            - La potència elèctrica s'expressa:
            \\[
            P = U \\cdot I 
            \\]
            <br>
            - Substituïm al càlcul de l'energia:
            \\[
            E = U \\cdot I \\cdot \\text{t}
            \\]
            <br>
            - La intensitat és::
            \\[
            I = \\frac{U - \\text{c} \\cdot \\omega}{R} = \\frac{36 - 0{,}06 \\cdot 360}{4} = 3{,}6 \\, \\text{A}
            \\]
            - Energia elèctrica consumida:
            \\[
            E = 36 \\cdot 3{,}6 \\cdot \\text{t} = 388{,}8 \\, \\text{Wh}
            \\]
            <br><br>
          
    `}, 

    {
        type: "exercicis",
        category: "maquines",
        text: `Un semàfor de massa \\(m\\) = 45 \\(kg\\) està suspès mitjançant dos cables de la mateixa secció tal com s’indica en la figura. Si es negligeix la massa dels cables, determineu: 
               <br><strong>a)</strong> Els angles \\(\\phi_{1}\\) i \\(\\phi_{2}\\) indicats. [1 punt]
               <br><strong>b)</strong> Les forces \\(F_{1}\\) i \\(F_{2}\\) que suporten els cables \\(O_{1}S\\) i \\(O_{2}S\\), respectivament.  [1 punt]
               <br><strong>c)</strong> La relació de tensions normals \\(\\sigma_{1}\\)/\\(\\sigma_{2}\\) a les quals estan sotmesos els cables. [0,5 punts]
               <br><br>
             <img src="https://gerardleon21.github.io/selectivitat/images/2007serie2Be3.jpg" alt="-">`,  // Imatge opcional al final de la pregunta
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Càlcul dels angles \\(\\phi_{1}\\) i \\(\\phi_{2}\\):</strong>
            <br>
            - Els cables formen triangles rectangles amb una caiguda vertical \\(L\\).
            <br><br>
            Cable esquerre (longitud \\(4L\\)):
            \\[
            \\sin \\phi_1 = \\frac{L}{4L} = \\frac{1}{4}
            \\]
            \\[
            \\phi_1 = \\arcsin\\left(\\frac{1}{4}\\right) = 14{,}48^\\circ
            \\]

            <br><br>
            Cable dret (longitud \\(3L\\)):
            \\[
            \\sin \\phi_2 = \\frac{L}{3L} = \\frac{1}{3}
            \\]
            \\[
            \\phi_2 = \\arcsin\\left(\\frac{1}{3}\\right) = 19{,}47^\\circ
            \\]
            <br><br>
            
            <strong>b) Càlcul de les forces \\(F_1\\) i \\(F_2\\):</strong>
            <br>
            - Com que el sistema està en equilibri estàtic, la suma de forces externes és nul·la:
            \\[
            \\sum \\vec{F}_{ext} = 0
            \\]
            \\[
            \\begin{cases}
            F_1 \\cos \\phi_1 - F_2 \\cos \\phi_2 = 0 \\\\
            F_1 \\sin \\phi_1 + F_2 \\sin \\phi_2 - mg = 0
            \\end{cases}
            \\] 
            - Resolent el sistema d’equacions s’obtenen les tensions als cables:
            \\[
            F_1 = mg \\, \\frac{\\cos \\phi_2}{\\sin(\\phi_1 + \\phi_2)} = 745{,}1\\,\\text{N}
            \\]
            \\[
            F_2 = mg \\, \\frac{\\cos \\phi_1}{\\sin(\\phi_1 + \\phi_2)} = 765{,}2\\,\\text{N}
            \\]
            <br>
            <strong>c) Relació de tensions normals \\(\\sigma_1/\\sigma_2\\):</strong>
            <br>
            - Com que els cables tenen la mateixa secció:
            \\[
            \\sigma_1 = \\frac{F_1}{S} \\qquad ; \\qquad \\sigma_2 = \\frac{F_2}{S}
            \\]
            \\[
            \\frac{\\sigma_1}{\\sigma_2} = \\frac{F_1}{F_2} = 0{,}9737
            \\]
            <br>
             <br><br>
    `},

           {
        type: "exercicis",
        category: "energia",
        text: `En una planta d’aprofitament de biomassa es reben cada dia \\(m = 70 \\cdot 10^{3} \\, \\text{kg}\\) de residus vegetals que tenen un poder calorífic mitjà \\(p = 11{,}5 \\, \\text{MJ/kg}\\).               
               La planta produeix electricitat amb un rendiment elèctric \\(\\eta_{elèc} = 0{,}29\\) i la resta d’energia s’aprofita amb un rendiment tèrmic \\(\\eta_{tèrmic} = 0{,}75\\) per a escalfar aigua.
               <br><br>
               La calor específica de l’aigua és \\(c_e = 4{,}18 \\, \\text{J/(g·}^\\circ\\text{C)}\\) i la temperatura augmenta \\(\\Delta t = 35 \\, ^\\circ C\\).
               <br><br>         
               <br><strong>a)</strong> L’energia elèctrica \\(E_{elèc}\\), en MW·h, produïda en un dia i la potència elèctrica mitjana \\(P_{elèc}\\). [1 punt]
               <br><strong>b)</strong> La quantitat d’aigua \\(m_{aigua}\\), en kg, escalfada en un dia. [1 punt]
               <br><strong>c)</strong> El cabal mitjà \\(q\\), en l/s, d’aigua escalfada. [0,5 punts]
               <br><br>
             `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Càlcul de l'energia i la potència elèctrica produïdes:</strong>
            <br>
            - Energia total continguda a la biomassa:
            \\[
            E = m \\cdot p = 70 \\cdot 10^{3} \\, \\text{kg} \\cdot 11{,}5 \\, \\text{MJ/kg} = 805 \\cdot 10^{3} \\, \\text{MJ}         
            \\]
            - Energia elèctrica produïda:
            \\[
            E_{elèc} = \\eta_{elèc} \\cdot E = 0{,}29 \\cdot 805 \\cdot 10^{3} \\, \\text{MJ} = 233450 \\, \\text{MJ}
            \\]
            - Conversió a MW·h:
            \\[
            E_{elèc} = \\frac{233450 \\, \\text{MW·s}}{3600 \\, \\text{}} = 64{,}85 \\, \\text{MW·h}
            \\]
            - Potència elèctrica mitjana (un dia = 24 h):
            \\[
            P_{elèc} = \\frac{E_{elèc}}{t} = \\frac{64{,}85 \\, \\text{MW·h}}{24 \\, \\text{h}} = 2{,}702 \\, \\text{MW}
            \\]     
              <br><br>
           
            <br>
            <strong>b) Quantitat d’aigua escalfada en un dia:</strong>
            <br>
            - Energia tèrmica disponible:
            \\[
            E_{tèrmica} = (1 - \\eta_{elèc}) \\cdot \\eta_{tèrmic} \\cdot E
            \\]
            \\[
            E_{tèrmica} = (1 - 0{,}29) \\cdot 0{,}75 \\cdot 805 \\cdot 10^{3} \\, \\text{MJ} = 428000 \\, \\text{MJ}
            \\]
            \\[
            E_{tèrmica} = 4{,}28 \\cdot 10^{11} \\, \\text{J}
            \\]
            - Energia per escalfar l’aigua:
            \\[
            E = m_{aigua} \\cdot c_e \\cdot \\Delta t
            \\]
            \\[
            m_{aigua} = \\frac{E}{c_e \\cdot \\Delta t} = \\frac{4{,}28 \\cdot 10^{11} \\, \\text{J}}{4180 \\, \\text{J/kgºC} \\cdot 35 \\, \\text{ºC}}
            \\]
            \\[
            m_{aigua} = 2{,}93 \\cdot 10^{6} \\, \\text{kg}
            \\]
            <br><br>

    <strong>c) Càlcul del cabal mitjà d’aigua escalfada:</strong>
    <br>
    - Temps d’un dia:
    \\[
    t = 24\\, \\text{h} \\cdot 3600 \\, \\text{s} = 86400 \\, \\text{s}
    \\]
    - Cabal mitjà:
    \\[
    q = \\frac{m_{aigua}}{t \\cdot \\rho_{aigua}} = \\frac{2{,}93 \\cdot 10^{6} \\, \\text{l}}{86400 \\, \\text{s}} = 33{,}91 \\, \\text{l/s}
    \\]
    <br><br>
    `}, 

    {
    type: "exercicis",
    category: "control",
    text: `En un magatzem de perfils d’alumini fan un descompte del 20 % a tots els clients habituals,
           i també als clients no habituals que compren només perfils sencers per un valor superior a 200 €.
           <br><br>
           Utilitzant les variables d’estat:
           <br>
           <strong>c</strong>: client habitual (1 sí / 0 no)
           <br>
           <strong>v</strong>: compra superior a 200 € (1 sí / 0 no)
           <br>
           <strong>t</strong>: cal tallar perfils (1 sí / 0 no)
           <br>
           <strong>d</strong>: descompte (1 sí / 0 no)
           <br><br>
           <strong>a)</strong> Escriviu la taula de veritat del procés de descompte. [1 punt]
           <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
           <br><strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
           <br><br>
           `,
    correctAnswer: "",
    steps: `
    <strong>a) Taula de veritat del procés de descompte:</strong>
    <br>
     <img src="https://gerardleon21.github.io/selectivitat/images/2007serie1e2ra.jpg" alt="Taula de la veritat">
    <br>
    <strong>b) Funció lògica del sistema:</strong>
    <br>
    - Hi ha descompte si el client és habitual, o bé si la compra és superior a 200 € i no cal tallar perfils.
    <br><br>
    \\[
    d = c + (v \\cdot \\overline{t})
    \\]
    <br><br>
    <strong>c) Esquema de portes lògiques equivalent:</strong>
    <br>
<img src="https://gerardleon21.github.io/selectivitat/images/2007serie1e2rc.jpg" alt="Esquema">
    <br><br>   
`},

    {
    type: "exercicis",
    category: "maquines",
    text: `La taula de massa \\(m = 15 \\, \\text{kg}\\) està articulada en el punt O i es manté en repòs mitjançant el tub PQ de secció resistent \\(s = 12{,}5 \\, \\text{mm}^2\\).
           <br><br>
           A la figura es mostren les dimensions geomètriques del sistema.
           <br><br>
           Determineu:
           <br><strong>a)</strong> L’angle \\(\\phi\\) del tub PQ. [0,5 punts]
           <br><strong>b)</strong> La força T que fa el tub PQ. [0,5 punts]
           <br><strong>c)</strong> Les forces vertical \\(F_v\\) i horitzontal \\(F_h\\) a l’articulació O. [1 punt]
           <br><strong>d)</strong> La tensió normal \\(\\sigma\\) del tub PQ a causa de la força que fa. [0,5 punts]
           <br><br>
           <img src="https://gerardleon21.github.io/selectivitat/images/2007serie1Ae3.jpg" alt="-">
           `,
    correctAnswer: "",
    steps: `
    <strong>a) Càlcul del'angle del tub \\(PQ\\):</strong>
    <br>
    - Relació geomètrica:
    \\[
    \\tan \\phi = \\frac{2L}{3L}
    \\]
    \\[
    \\phi = \\arctan\\left(\\frac{2}{3}\\right) = 33{,}69^\\circ
    \\]
    <br><br>

    <strong>b) Força \\(T\\) que fa el tub \\(PQ\\):</strong>
    <br>
    - Equilibri de moments respecte \\(O\\):
    \\[
    \\sum M_O = 0 \\Rightarrow 3L \\cdot T \\cdot \\sin \\phi - 2L \\cdot m g = 0
    \\]
    \\[
    T = \\frac{2}{3} \\frac{m g}{\\sin \\phi}
    \\]
    \\[
    T = 176{,}8 \\, \\text{N}
    \\]
    <br><br>

    <strong>c) Forces a l’articulació \\(O\\):</strong>
    <br>
    - Equilibri de forces horitzontals:
    \\[
    \\sum F_h = 0 \\Rightarrow F_h - T \\cos \\phi = 0
    \\]
    \\[
    F_h = T \\cos \\phi = 147{,}1 \\, \\text{N}
    \\]
    <br>
    - Equilibri de forces verticals:
    \\[
    \\sum F_v = 0 \\Rightarrow F_v + T \\sin \\phi - m g = 0
    \\]
    \\[
    F_v = m g - T \\sin \\phi = 49{,}04 \\, \\text{N}
    \\]
    <br><br>

    <strong>d) Tensió normal \\(\\sigma\\) del tub \\(PQ\\):</strong>
    <br>
    - Secció resistent:
    \\[
    s = 12{,}5 \\, \\text{mm}^2
    \\]
    - Tensió normal:
    \\[
    \\sigma = \\frac{T}{s} = \\frac{176{,}8}{12{,}5}
    \\]
    \\[
    \\sigma = 14{,}14 \\, \\text{MPa}
    \\]
    <br><br>
    `
},
    
{
        type: "exercicis",
        category: "energia",
        text: `Un escalfador, que funciona amb gas natural de poder calorífic \\(p_c = 61 \\, \\text{MJ/kg}\\), pot arribar a donar un cabal \\(q = 13{,}8 \\, \\text{l/min}\\), i elevar la temperatura de l’aigua \\(\\Delta\\text{T} = 25^\\circ C\\).
        La calor específica de l'aigua és \\(c_e = 4{,}18 \\, \\text{J/gºC}\\). Determineu, en aquestes condicions de funcionament:               
               <br><strong>a)</strong> La potència útil \\(P\\). [0,5 punts]
               <br><strong>b)</strong> El rendiment \\(\\eta\\) si el consum del combustible és \\(q_\\text{com} = 0{,}51 \\, \\text{g/s}\\). [1 punt]
               <br><strong>c)</strong> El temps \\(t\\)i el combustible \\(m\\) necessaris per a escalfar 25 ºC un volum d’aigua \\(V = 150 \\, \\text{l}\\). [0,5 punts]
               <br><br>
             `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Càlcul de la potència útil \\(P\\):</strong>
            <br>
            - L'energia útil o calor s'expressa així:
            \\[
            Q = \\text{m} \\cdot c_e \\cdot \\Delta T
            \\]
            - Dividim els dos costats del igual pel temps:
            \\[
            \\frac{Q}{\\text{t}} = \\frac{\\text{m} \\cdot c_e \\cdot \\Delta \\text{T}}{\\text{t}}
            \\]
            - L'energia dividida pel temps és igual a la potència i la masa dividida pel temps és igual al cabal:
            \\[
            P = \\text{q} \\cdot c_e \\cdot \\Delta \\text{T}
            \\]
            - Conversió del cabal:
            \\[
            \\text{q} = 13{,}8 \\, \\text{l/min} \\cdot \\frac{1000 \\, \\text{g}}{1 \\, \\text{l}} \\cdot \\frac{1 \\, \\text{min}}{60 \\, \\text{s}}
            \\]
            - Substituïm a la fórmula de la potència:
            \\[
            P = 230 \\, \\text{g/s} \\cdot 4{,}18 \\, \\text{J/gºC} \\cdot 25 \\, \\text{ºC} = 24035 \\, \\text{W} = 24{,}04 \\, \\text{kW}
            \\]
            <br>
            <strong>b) Càlcul del rendiment \\(\\eta\\):</strong>
            <br>
            - La potència consumida és:
            \\[
            P_\\text{cons} = \\frac{E_{\\text{cons}}}{\\text{t}} = \\frac{p_c \\cdot \\text{m}}{\\text{t}} = p_c \\cdot q_{\\text{comb}}
            \\]
            - Càlcul del rendiment:
            \\[
            \\eta = \\frac{P_{\\text{útil}}}{p_c \\cdot q{\\text{comb}}}
            \\]
            \\[
            \\eta = \\frac{24035}{31110} = 0{,}7726
            \\]
            <br>
            <strong>c) Càlcul del temps i combustibles necessaris:</strong>     
            <br><br>
          
    `}, 
    
       {
    type: "exercicis",
    category: "electrics",
    text: `Un calefactor elèctric disposa d’una resistència i d’un interruptor en sèrie que,
           accionat per un sensor de temperatura, obre el circuit quan s’arriba a la temperatura fixada.
           <br><br>
           Aquest calefactor s’alimenta a \\(U = 230 \\, \\text{V}\\) i té una potència
           \\(P = 2000 \\, \\text{W}\\).
           <br><br>
           La resistència està formada per fil de nicrom de diàmetre
           \\(d = 0{,}4 \\, \\text{mm}\\) i resistivitat
           \\(\\rho = 10^{-6} \\, \\Omega\\cdot\\text{m}\\).
           <br><br>
           Determineu:
           <br><strong>a)</strong> El valor \\(R\\) de la resistència. [0,5 punts]
           <br><strong>b)</strong> La llargada \\(L\\) del fil de la resistència. [1 punt]
           <br><strong>c)</strong> El consum \\(E\\) si s’utilitza durant \\(1{,}5 \\, \\text{h}\\) i,
           per a mantenir la temperatura, l’interruptor funciona cíclicament amb una cadència
           de 30 s obert i 90 s tancat. [1 punt]
           <br><br>
           <img src="https://gerardleon21.github.io/selectivitat/images/2007serie2Ae3.jpg" alt="Circuit de l'exercici">
           `,
    correctAnswer: "",
    steps: `
    <strong>a) Valor de la resistència \\(R\\):</strong>
    <br>
    - Expressió de la potència elèctrica:
    \\[
    P = \\frac{U^2}{R}
    \\]
    \\[
    R = \\frac{U^2}{P} = \\frac{230^2}{2000} = 26{,}45 \\, \\Omega
    \\]
    <br><br>

    <strong>b) Llargada \\(L\\) del fil de la resistència:</strong>
    <br>
    - Secció del fil:
    \\[
    S = \\pi \\left( \\frac{d}{2} \\right)^2
    = \\pi \\left(0{,}2 \\cdot 10^{-3}\\right)^2
    = 1{,}257 \\cdot 10^{-7} \\, \\text{m}^2
    \\]
    - Relació entre resistència i geometria del conductor:
    \\[
    R = \\frac{\\rho \\cdot L}{S}
    \\]
    \\[
    L = \\frac{R \\cdot S}{\\rho}
    = \\frac{26{,}45 \\cdot 1{,}257 \\cdot 10^{-7}}{10^{-6}}
    \\]
    \\[
    L = 3{,}324 \\, \\text{m}
    \\]
    <br><br>

    <strong>c) Consum d’energia \\(E\\):</strong>
    <br>
    - Cicle de funcionament:
    <br>
    Temps total del cicle: \\(30 + 90 = 120 \\, \\text{s}\\)
    <br>
    Temps en funcionament: \\(90 \\, \\text{s}\\)
    <br>
    - Fracció de temps actiu:
    \\[
    f = \\frac{90}{120} = 0{,}75
    \\]
    - Temps efectiu de funcionament:
    \\[
    t_{ef} = 1{,}5 \\cdot 0{,}75 = 1{,}125 \\, \\text{h}
    \\]
    - Consum d’energia:
    \\[
    E = P \\cdot t_{ef} = 2{,}0 \\cdot 1{,}125 = 2{,}25 \\, \\text{kWh}
    \\]
    \\[
    E = 8{,}1 \\, \\text{MJ}
    \\]
    <br><br>
    `
},

  {
    type: "exercicis",
    category: "electrics",
    text: `El parell motor \\(\\Gamma\\) i la velocitat angular \\(\\omega\\) de l’eix d’un motor de corrent continu
           estan relacionats amb la tensió d’alimentació \\(U\\) i el corrent consumit \\(I\\) per les expressions:
           <br><br>
           \\[
           \\Gamma = c \\cdot I
           \\]
           \\[
           \\omega = \\frac{U - I \\cdot R}{c}
           \\]
           <br><br>
           Un trepant elèctric alimentat a \\(U = 12 \\, \\text{V}\\) té un motor d’aquestes característiques,
           l’eix del qual gira com a màxim a \\(\\omega = 200 \\, \\text{rad/s}\\).
           <br><br>
           Aquest motor té una constant de parell \\(c = 0{,}06 \\, \\text{Nm/A}\\) i una resistència
           de l’induït \\(R = 4 \\, \\Omega\\).
           <br><br>
           Determineu:
           <br><strong>a)</strong> Dibuixeu, de manera aproximada i indicant les escales, la corba
           del corrent d’alimentació \\(I\\) en funció de la velocitat de gir \\(\\omega\\). [1 punt]
           <br><strong>b)</strong> Determineu el parell màxim que és capaç de proporcionar aquest motor
           i a quina velocitat es produeix. [0,75 punts]
           <br><strong>c)</strong> Calculeu l’energia elèctrica \\(E\\), en W·h, que consumeix el motor
           si funciona contínuament durant \\(t = 4 \\, \\text{min}\\) a una velocitat
           \\(\\omega = 120 \\, \\text{rad/s}\\). [0,75 punts]
           <br><br>`,
    correctAnswer: "",
    steps: `
    <strong>a) Corba del corrent \\(I\\) en funció de la velocitat \\(\\omega\\):</strong>
    <br>
    - A partir de:
    \\[
    \\omega = \\frac{U - c I}{R}
    \\]
    - Despejant el corrent:
    \\[
    I = \\frac{U - c \\omega}{R}
    \\]
    <br>
    - Es tracta d’una relació lineal decreixent.
    <br><br>
    - Valors extrems:
    <br>
    \\(\\omega = 0 \\Rightarrow I = \\frac{12}{4} = 3 \\, \\text{A}\\)
    <br>
    \\(\\omega = 200 \\, \\text{rad/s} \\Rightarrow I = 0\\)
    <br><br>
    - Recta que uneix els punts:
    <br>
    \\((0 , 3)\\) i \\((200 , 0)\\)
    <img src="https://gerardleon21.github.io/selectivitat/images/2007serie1Be4.jpg.png" alt="Gràfica">

    <br><br>

    <strong>b) Parell màxim del motor:</strong>
    <br>
    - El parell és:
    \\[
    \\Gamma = c \\cdot I
    \\]
    - El corrent màxim es produeix a \\(\\omega = 0\\):
    \\[
    I_{max} = \\frac{U}{R} = 3 \\, \\text{A}
    \\]
    - Parell màxim:
    \\[
    \\Gamma_{max} = c \\cdot I_{max} = 0{,}06 \\cdot 3 = 0{,}18 \\, \\text{Nm}
    \\]
    <br>
    - Es produeix a \\(\\omega = 0\\) (arrencada).
    <br><br>

    <strong>c) Energia elèctrica consumida:</strong>
    <br>
    - Corrent a \\(\\omega = 120 \\, \\text{rad/s}\\):
    \\[
    I = \\frac{12 - 0{,}06 \\cdot 120}{4} = 1{,}2 \\, \\text{A}
    \\]
    - Potència elèctrica:
    \\[
    P_{el} = U \\cdot I = 12 \\cdot 1{,}2 = 14{,}4 \\, \\text{W}
    \\]
    - Temps:
    \\[
    t = 4 \\, \\text{min} = \\frac{4}{60} \\, \\text{h}
    \\]
    - Energia consumida:
    \\[
    E = P_{el} \\cdot t = 14{,}4 \\cdot \\frac{4}{60}
    \\]
    \\[
    E = 0{,}96 \\, \\text{W·h} = 3{,}456 \\, \\text{kJ}
    \\]
    <br><br>
    `
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
    `
   
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

    {
    type: "questions", // Tipus de pregunta
    category: "materials",
    text: `Una fàbrica de rajoles fabrica un model de mides \\(310 \\, \\text{mm} \\times 610 \\, \\text{mm} \\times 9 \\, \\text{mm}\\).
    Si se sap que 6 rajoles tenen un pes de \\(204{,}2 \\, \\text{N}\\), quina és la densitat mitjana del material de què són fetes les rajoles?
    \\((g = 10 \\, \\text{m/s}^2)\\)`,
    options: [
        { text: "\\(2 \\cdot 10^{3} \\, \\text{kg/m}^3\\)", value: "a" },
        { text: "\\(12 \\cdot 10^{3} \\, \\text{kg/m}^3\\)", value: "b" },
        { text: "\\(19{,}6 \\cdot 10^{3} \\, \\text{kg/m}^3\\)", value: "c" },
        { text: "\\(117 \\cdot 10^{3} \\, \\text{kg/m}^3\\)", value: "d" }
    ],
    correctAnswer: "a",
    steps: `
    <strong>Solució pas a pas:</strong>
    <br>
    - Conversió de les dimensions a metres:
    \\[
    310 \\, \\text{mm} = 0{,}31 \\, \\text{m} \\quad
    610 \\, \\text{mm} = 0{,}61 \\, \\text{m} \\quad
    9 \\, \\text{mm} = 0{,}009 \\, \\text{m}
    \\]

    - Volum d’una rajola:
    \\[
    V = 0{,}31 \\cdot 0{,}61 \\cdot 0{,}009 = 1{,}70 \\cdot 10^{-3} \\, \\text{m}^3
    \\]

    - Volum total de 6 rajoles:
    \\[
    V_{total} = 6 \\cdot 1{,}70 \\cdot 10^{-3} = 1{,}02 \\cdot 10^{-2} \\, \\text{m}^3
    \\]

    - Càlcul de la massa a partir del pes:
    \\[
    m = \\frac{P}{g} = \\frac{204{,}2}{10} = 20{,}42 \\, \\text{kg}
    \\]

    - Densitat del material:
    \\[
    \\rho = \\frac{m}{V} = \\frac{20{,}42}{1{,}02 \\cdot 10^{-2}} \\approx 2{,}0 \\cdot 10^{3} \\, \\text{kg/m}^3
    \\]

    <br>
    La resposta correcta és l’opció <strong>a)</strong>.
    <br><br>
    `
},
    {
    type: "questions", // Tipus de pregunta
    category: "organitzacio",
    text: `En una màquina eina de control numèric es realitzen sobre cada peça tres operacions simultànies.
    La durada de les operacions és \\(t_1 = 8 \\, \\text{s}\\), \\(t_2 = 16 \\, \\text{s}\\) i \\(t_3 = 20 \\, \\text{s}\\),
    i el temps necessari per a canviar de peça és \\(t_c = 5 \\, \\text{s}\\).
    Quin és el nombre màxim de peces que es poden mecanitzar per hora?`,
    options: [
        { text: "73", value: "a" },
        { text: "144", value: "b" },
        { text: "150", value: "c" },
        { text: "180", value: "d" }
    ],
    correctAnswer: "b",
    steps: `
    <strong>Solució pas a pas:</strong>
    <br>
    - Com que les tres operacions es realitzen de manera simultània, el temps de mecanitzat d’una peça
    ve determinat per l’operació més llarga:
    \\[
    t_{mecanitzat} = \\max(8, 16, 20) = 20 \\, \\text{s}
    \\]

    - Temps total per peça (mecanitzat + canvi de peça):
    \\[
    t_{total} = 20 + 5 = 25 \\, \\text{s}
    \\]

    - Nombre de peces mecanitzades per hora:
    \\[
    \\frac{3600}{25} = 144 \\, \\text{peces/hora}
    \\]

    <br>
    La resposta correcta és l’opció <strong>b)</strong>.
    <br><br>
    `
},
{
    type: "questions", // Tipus de pregunta
    category: "organitzacio",
    text: `Un tècnic d’una empresa proposa la reestructuració d’una línia de producció amb l’únic
    argument d’augmentar el nombre d’unitats produïdes per hora.
    És suficient aquest argument per a justificar el canvi?`,
    options: [
        { text: "Sí, ja que el canvi comportaria augmentar els beneficis de l’empresa.", value: "a" },
        { text: "Sí, ja que el canvi comportaria disminuir l’impacte ambiental per unitat produïda.", value: "b" },
        { text: "Sí, ja que augmentar la producció és sempre un avanç tecnològic.", value: "c" },
        { text: "No; cal aportar altres elements de judici: inversions, amortitzacions, seguretat, qualitat...", value: "d" }
    ],
    correctAnswer: "d",
    steps: `
    <strong>Explicació:</strong>
    <br>
    L’augment del nombre d’unitats produïdes per hora no és, per si sol, un criteri suficient
    per a justificar una reestructuració d’una línia de producció.
    <br>
    Cal tenir en compte altres factors fonamentals, com ara:
    <ul>
        <li>El cost de les inversions necessàries i la seva amortització</li>
        <li>L’impacte sobre la seguretat dels treballadors</li>
        <li>La qualitat del producte final</li>
        <li>Els costos de manteniment i d’explotació</li>
        <li>Els possibles impactes ambientals</li>
    </ul>
    <br>
    Per tant, és necessari disposar de més elements de judici abans de justificar el canvi.
    <br><br>
    La resposta correcta és l’opció <strong>d)</strong>.
    <br><br>
    `
},
    {
    type: "questions", // Tipus de pregunta
    category: "metrologia",
    text: `Si s’especifica que el diàmetre d’un eix ha de ser \\((27 \\pm 0{,}2) \\, \\text{mm}\\),
    cal donar per bons tots els eixos de diàmetre`,
    options: [
        { text: "inferior a 27,2 mm.", value: "a" },
        { text: "superior a 26,8 mm.", value: "b" },
        { text: "superior a 27,2 mm o inferior a 26,8 mm.", value: "c" },
        { text: "comprès entre 26,8 mm i 27,2 mm.", value: "d" }
    ],
    correctAnswer: "d",
    steps: `
    <strong>Explicació:</strong>
    <br>
    L’especificació \\((27 \\pm 0{,}2) \\, \\text{mm}\\) indica un valor nominal de 27 mm
    amb una tolerància de ±0,2 mm.
    <br>
    Això implica que els valors límit admissibles són:
    \\[
    27 - 0{,}2 = 26{,}8 \\, \\text{mm}
    \\]
    \\[
    27 + 0{,}2 = 27{,}2 \\, \\text{mm}
    \\]
    <br>
    Per tant, només són acceptables els eixos amb un diàmetre
    <strong>comprès entre 26,8 mm i 27,2 mm</strong>, ambdós inclosos.
    <br><br>
    La resposta correcta és l’opció <strong>d)</strong>.
    <br><br>
    `
},
{
    type: "questions", // Tipus de pregunta
    category: "materials",
    text: `La tensió de ruptura d’un aliatge ferro-níquel és \\(\\sigma = 480 \\, \\text{MPa}\\). 
    Quina és la força axial màxima que es pot aplicar a una barra massissa de 15 mm de diàmetre sense que es trenqui?`,
    options: [
        { text: "26,99 kN", value: "a" },
        { text: "84,82 kN", value: "b" },
        { text: "11,31 kN", value: "c" },
        { text: "339,3 kN", value: "d" }
    ],
    correctAnswer: "b",
    steps: `
    <strong>Solució pas a pas:</strong>
    <br>
    - Diàmetre de la barra: 
    \\[
    d = 15 \\, \\text{mm} = 0{,}015 \\, \\text{m}
    \\]

    - Secció transversal de la barra (àrea circular):
    \\[
    A = \\pi \\frac{d^2}{4} = \\pi \\frac{(0{,}015)^2}{4} = 1{,}767 \\cdot 10^{-4} \\, \\text{m}^2
    \\]

    - Tensió de ruptura:
    \\[
    \\sigma = 480 \\, \\text{MPa} = 480 \\cdot 10^{6} \\, \\text{Pa}
    \\]

    - Força axial màxima:
    \\[
    F_{max} = \\sigma \\cdot A = 480 \\cdot 10^{6} \\cdot 1{,}767 \\cdot 10^{-4} = 84{,}82 \\, \\text{kN}
    \\]

    <br>
    La resposta correcta és l’opció <strong>b)</strong>.
    <br><br>
    `
},
{
    type: "exercicis",
    category: "control",
    text: `En un vehicle s’encén un senyal d’alerta si queden menys de 10 l de combustible, o bé si en queden menys de 15 l i el consum actual és elevat (supera en un 30 % el consum mitjà).  
           Utilitzant les variables d’estat:  
           <br>
           <strong>c_10</strong>: quantitat de combustible inferior a 10 l (1 sí / 0 no)  
           <br>
           <strong>c_15</strong>: quantitat de combustible inferior a 15 l (1 sí / 0 no)  
           <br>
           <strong>c_e</strong>: consum elevat (1 sí / 0 no)  
           <br>
           <strong>a</strong>: senyal d’alerta (1 sí / 0 no)  
           <br><br>
           <strong>a)</strong> Escriviu la taula de veritat del sistema i indiqueu els casos que no són possibles. [1 punt]  
           <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]  
           <br><strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]`,
    correctAnswer: "",  // Obert
    steps: `
        <strong>a) Taula de veritat del sistema:</strong>
        <br>
        <img src="https://gerardleon21.github.io/selectivitat/images/2007serie3e2ra.jpg" alt="Circuit de l'exercici">
        <br><br>
        
        <strong>b) Funció lògica del sistema:</strong>
        <br>
        - Amb x = 0:  
        \\[
        a = (c_{10} + c_e) \\cdot c_{15}
        \\]  
        - Amb x = 1:  
        \\[
        a = c_{10} + c_e \\cdot c_{15}
        \\]  
        - La forma simplificada utilitza x = 1.  
        <br><br>
        
        <strong>c) Esquema de portes lògiques equivalent:</strong>
        <br>
        - Porta OR amb entrada <strong>c_10</strong> i sortida de porta AND  
        - Porta AND amb entrades <strong>c_e</strong> i <strong>c_15</strong>  
        - Sortida de l’OR és <strong>a</strong>  
        <br>
        - La imatge serà amb x = 1
        <br>
        <img src="https://gerardleon21.github.io/selectivitat/images/2007serie3e2rc.jpg" alt="Circuit de l'exercici">
    `
},
    


];

