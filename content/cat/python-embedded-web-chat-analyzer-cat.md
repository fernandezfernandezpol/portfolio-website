# Analitzador de Xats Web Embeguts en Python

**ADVERTÈNCIA** Aquest projecte encara està en desenvolupament. Les funcions bàsiques s'han provat i funcionen amb exportacions de xats embeguts, però alguns casos límit i plataformes addicionals poden no estar completament suportats encara.

**Millores futures previstes:**
- Afegir suport per a més formats i plataformes d’exportació de xats.
- Millorar els mòduls de visualització de dades i anàlisi.
- Incrementar el rendiment per a conjunts de dades grans.
- Implementar anàlisi avançada de sentiment i temes.

## Descripció

**Analitzador de Xats Web Embeguts en Python** és una eina modular en Python dissenyada per analitzar i visualitzar dades de xats exportats des de plataformes de xat web embegudes, enfocant-se específicament en exportacions de xats de WhatsApp. L'aplicació processa els registres de xat exportats, en extreu estadístiques clau i ofereix visualitzacions informatives per ajudar a entendre les interaccions dels usuaris, l'activitat dels participants i la dinàmica general del xat.

El sistema és ideal per a investigadors, educadors o qualsevol persona interessada en l'anàlisi de dades de xat, patrons de comunicació digital o anàlisi de xarxes socials.

## Exportacions de Xat Suportades

**NOTA Format de fitxer suportat:** Aquesta eina només pot analitzar fitxers `.txt` exportats directament des de xats de WhatsApp usant la funció oficial "Exportar xat". Altres formats o plataformes no estan suportats i poden no funcionar correctament.

## Com funciona

Aquest projecte inclou scripts en Python que analitzen registres de xats exportats de WhatsApp en format `.txt`. Els scripts:
- Normalitzen i netegen el text.
- Analitzen les entrades de missatges, associant-les amb usuaris i dates.
- Permeten cercar la freqüència d’una paraula o frase específica per usuari, any i mes.
- Generen visualitzacions (gràfics de barres i gràfics de progressió) de l’ús de paraules al llarg del temps i entre participants.

Pots executar l’anàlisi fent servir una senzilla interfície de línia d’ordres (CLI) o, en algunes versions, mitjançant un diàleg gràfic per seleccionar el teu fitxer `.txt`.

**Demostració en línia:**  
[https://fernandezfernandezpol.github.io/python-embedded-web-chat-analyzer/](https://fernandezfernandezpol.github.io/python-embedded-web-chat-analyzer/)

## Integració amb Pyodide

**Pyodide** és una distribució de Python per a navegadors i Node.js basada en WebAssembly. Permet executar codi Python directament en entorns web sense necessitat d’un servidor Python o dependències externes. Pyodide inclou una àmplia col·lecció de paquets Python i ofereix interoperabilitat fluida entre Python i JavaScript.

**NOTA** En aquest projecte, Pyodide s’usa per executar scripts d’anàlisi Python directament al navegador. Això permet que l’analitzador de xats processi i visualitzi dades de xat al costat del client, proporcionant una experiència d’usuari totalment interactiva i sense servidor. Els usuaris poden carregar exportacions `.txt` de WhatsApp, fer anàlisis i veure resultats sense infraestructura backend. La integració aprofita les capacitats de Pyodide per executar pandas, matplotlib i altres llibreries científiques al navegador, fent que anàlisis avançats siguin accessibles en un entorn web.

## Avís Legal sobre Dades de Xats de WhatsApp

**PRECAUCIÓ Requisits legals per analitzar xats de WhatsApp:**  
Aquest programa pot processar registres exportats de xats de WhatsApp. Ets responsable d’assegurar-te que l’ús d’aquesta eina compleix amb les lleis de privadesa i regulacions aplicables al teu país o jurisdicció.  
- Només analitza dades de xats per a les quals tens autorització o accés legítim.  
- No analitzis ni comparteixis converses privades sense el consentiment explícit de tots els participants.  
- Respecta totes les normatives de protecció de dades aplicables, com el GDPR o altres lleis similars.  
L’autor d’aquesta eina no es responsabilitza per un ús indegut o anàlisi no autoritzada de dades exportades.

## Descàrrec de Responsabilitat sobre la Marca WhatsApp™

**IMPORTANT Descàrrec:**  
WhatsApp™ és una marca registrada de WhatsApp LLC i/o els seus afiliats.  
Aquest projecte no està afiliat, associat, autoritzat, avalat ni està de cap manera oficialment connectat amb WhatsApp LLC o qualsevol de les seves filials o afiliats. Tots els noms de productes i companyies són marques comercials™ o marques registrades® dels seus respectius propietaris. L’ús d’aquests en aquest projecte no implica cap afiliació o aval per part seva.

## Funcionalitats

- **Entrada flexible:** Analitza registres `.txt` exportats directament des de xats de WhatsApp.
- **Estadístiques d’usuaris:** Calcula el recompte de missatges, taxes de participació i cronogrames d’activitat per a cada participant.
- **Anàlisi de paraules/frases:** Cerca la freqüència d’una paraula o frase per participant, any i mes.
- **Visualització:** Crea gràfics de barres i gràfics de progressió del volum de missatges i ús de paraules clau.
- **Disseny extensible:** Base de codi modular que permet afegir fàcilment nous mòduls d’anàlisi o visualització.

**NOTA REQUISITS D’INSTAL·LACIÓ**  
- Python 3.8 o superior  
- numpy  
- matplotlib  
- tkinter (per a la interfície gràfica de selecció d’arxius)  
- (Altres dependències: re, unicodedata, collections, calendar, io, base64, etc.)

## Estructura del repositori

- **/images**: Logos i imatges usades al lloc web.  
- **/scripts**: Codis principals d’anàlisi.  
- **/styles**: Codis visuals principals.  
- **/examples**: Exemples de xats de WhatsApp.

## Llicència

Copyright © 2025 [polfernandezfernandez](https://github.com/fernandezfernandezpol).  
Aquest projecte està llicenciat sota la [Llicència MIT](../LICENSE.md).