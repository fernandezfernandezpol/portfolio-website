# MATLAB GUI - Detector de Notas Musicales

**ADVERTENCIA:** Esta interfaz gráfica (GUI) todavía está en desarrollo. Los códigos base ([/test-codes](./test-codes)) han sido probados y funcionan correctamente con señales puras (generadas por código), aunque las grabaciones a través del micrófono aún no se discriminan bien. Esto puede deberse a la baja calidad de captura de sonido de mis dispositivos, pero lo más probable es que se deba al ruido en la señal.

**Soluciones futuras que planeo probar:**
- Seleccionar un conjunto de frecuencias de alta amplitud y filtrar en base a eso.
- Implementar algoritmos de Autocorrelación.
- Implementar algoritmos YIN.

## Descripción

**MATLAB GUI - Detector de Notas Musicales** es una aplicación interactiva desarrollada en MATLAB para la detección en tiempo real de notas musicales a partir de señales de audio. El proyecto incluye una interfaz gráfica diseñada con fines educativos y experimentales en el ámbito del procesamiento de señales de audio. La aplicación puede identificar notas musicales tanto de señales sintetizadas como, en cierta medida, de entrada por micrófono.

El sistema es ideal para aprender sobre análisis de frecuencia, identificación de notas musicales y fundamentos del procesamiento digital de señales aplicados a la música.

## Características

- **Detección de notas en tiempo real:** Identifica notas musicales a partir de audio entrante, ya sea generado en MATLAB o grabado mediante micrófono (con limitaciones).
- **Interfaz gráfica de usuario (GUI):** GUI intuitiva construida con App Designer de MATLAB, que permite controlar la captura de audio y visualizar los resultados.
- **Visualización del espectro de frecuencias:** Muestra en tiempo real la forma de onda del audio y su espectro de frecuencias (FFT).
- **Medidor de nivel RMS:** Muestra el nivel de la señal para ayudar a monitorear la actividad de entrada.
- **Fundamentales y armónicos:** Los códigos de prueba permiten crear señales con contenido fundamental y armónico ajustable para validación.
- **Extensible:** El código es modular y puede adaptarse para incluir algoritmos más avanzados de detección de tono.

**REQUISITOS DE INSTALACIÓN**
- MATLAB R2022a o superior
- Signal Processing Toolbox
- Audio Toolbox

## Estructura del repositorio

- **/src**: Código de la GUI (la app principal y scripts relacionados).
- **/test-codes**: Archivos `.m` de prueba para generar y validar señales de audio.

## Licencia

Copyright © 2025 [polfernandezfernandez](https://github.com/fernandezfernandezpol). Este proyecto está licenciado bajo la [Licencia MIT](../LICENSE.md).