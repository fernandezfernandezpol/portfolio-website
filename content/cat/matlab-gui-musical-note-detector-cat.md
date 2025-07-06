# MATLAB GUI - Detector de Notes Musicals

**ADVERTIMENT:** Aquesta interfície gràfica (GUI) encara està en desenvolupament. Els codis base ([/test-codes](./test-codes)) han estat provats i funcionen correctament amb senyals pures (generades per codi), tot i que les gravacions amb micròfon encara no es discriminen bé. Això pot ser degut a la baixa qualitat de captació de so dels meus dispositius, però el més probable és que sigui pel soroll de la senyal.

**Solucions futures que tinc previst provar:**
- Seleccionar un conjunt de freqüències amb alta amplitud i filtrar-les.
- Implementar algorismes d’autocorrelació.
- Implementar algorismes YIN.

## Descripció

**MATLAB GUI - Detector de Notes Musicals** és una aplicació interactiva desenvolupada en MATLAB per a la detecció en temps real de notes musicals a partir de senyals d'àudio. El projecte inclou una interfície gràfica dissenyada amb finalitats educatives i experimentals en l’àmbit del processament de senyal d’àudio. L’aplicació pot identificar notes musicals a partir de senyals sintetitzades i, en certa mesura, també d’àudio captat per micròfon.

El sistema és ideal per aprendre sobre l’anàlisi de freqüències, la identificació de notes musicals i els fonaments del processament digital de senyal aplicats a la música.

## Característiques

- **Detecció de notes en temps real:** Identifica notes musicals a partir d’àudio entrant, ja sigui generat en MATLAB o enregistrat amb micròfon (amb limitacions).
- **Interfície gràfica d’usuari (GUI):** GUI intuïtiva creada amb l’App Designer de MATLAB, que permet controlar la captura d’àudio i visualitzar els resultats.
- **Visualització de l’espectre de freqüències:** Mostra en temps real la forma d’ona de l’àudio i el seu espectre de freqüències (FFT).
- **Mesurador RMS:** Mostra el nivell de la senyal per ajudar a monitoritzar l’activitat d’entrada.
- **Fonamentals i harmònics:** Els codis de prova permeten crear senyals amb contingut fonamental i harmònic ajustable per fer proves.
- **Extensible:** El codi és modular i es pot adaptar per incloure algorismes més avançats de detecció de to.

**REQUISITS D’INSTAL·LACIÓ**
- MATLAB R2022a o superior
- Signal Processing Toolbox
- Audio Toolbox

## Estructura del repositori

- **/src**: Codi de la GUI (l’aplicació principal i scripts relacionats).
- **/test-codes**: Fitxers `.m` de prova per generar i validar senyals d’àudio.

## Llicència

Copyright © 2025 [polfernandezfernandez](https://github.com/fernandezfernandezpol). Aquest projecte està llicenciat sota la [Llicència MIT](../LICENSE.md).