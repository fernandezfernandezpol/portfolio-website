# Analizador de Chats Web Embebidos en Python

**ADVERTENCIA** Este proyecto aún está en desarrollo. Las funciones principales han sido probadas y funcionan con exportaciones de chats embebidos, pero algunos casos límite y plataformas adicionales pueden no estar completamente soportados todavía.

**Mejoras futuras planificadas:**
- Añadir soporte para más formatos y plataformas de exportación de chats.
- Mejorar los módulos de visualización de datos y análisis.
- Incrementar el rendimiento para conjuntos de datos grandes.
- Implementar análisis avanzados de sentimiento y temas.

## Descripción

**Analizador de Chats Web Embebidos en Python** es una herramienta modular en Python diseñada para analizar y visualizar datos de chats exportados desde plataformas de chat web embebidas, enfocándose específicamente en exportaciones de chats de WhatsApp. La aplicación procesa los registros de chat exportados, extrae estadísticas clave y ofrece visualizaciones informativas para ayudar a entender las interacciones de los usuarios, la actividad de los participantes y la dinámica general del chat.

El sistema es ideal para investigadores, educadores o cualquier persona interesada en el análisis de datos de chat, patrones de comunicación digital o análisis de redes sociales.

## Exportaciones de Chat Soportadas

**NOTA Formato de archivo soportado:** Esta herramienta solo puede analizar archivos `.txt` exportados directamente desde chats de WhatsApp usando la función oficial "Exportar chat". Otros formatos o plataformas no están soportados y pueden no funcionar correctamente.

## Cómo funciona

Este proyecto incluye scripts en Python que analizan registros de chats exportados de WhatsApp en formato `.txt`. Los scripts:
- Normalizan y limpian el texto.
- Analizan las entradas de mensajes, asociándolas con usuarios y fechas.
- Permiten buscar la frecuencia de una palabra o frase específica por usuario, año y mes.
- Generan visualizaciones (gráficos de barras y gráficos de progresión) del uso de palabras a lo largo del tiempo y entre participantes.

Puedes ejecutar el análisis usando una sencilla interfaz de línea de comandos (CLI) o, en algunas versiones, mediante un diálogo gráfico para seleccionar tu archivo `.txt`.

**Demostración en línea:**  
[https://fernandezfernandezpol.github.io/python-embedded-web-chat-analyzer/](https://fernandezfernandezpol.github.io/python-embedded-web-chat-analyzer/)

## Integración con Pyodide

**Pyodide** es una distribución de Python para navegadores y Node.js basada en WebAssembly. Permite ejecutar código Python directamente en entornos web sin necesidad de un servidor Python o dependencias externas. Pyodide incluye una amplia colección de paquetes Python y ofrece interoperabilidad fluida entre Python y JavaScript.

**NOTA** En este proyecto, Pyodide se usa para ejecutar scripts de análisis Python directamente en el navegador. Esto permite que el analizador de chats procese y visualice datos de chat en el lado del cliente, proporcionando una experiencia de usuario totalmente interactiva y sin servidor. Los usuarios pueden cargar exportaciones `.txt` de WhatsApp, realizar análisis y ver resultados sin infraestructura backend. La integración aprovecha las capacidades de Pyodide para ejecutar pandas, matplotlib y otras librerías científicas en el navegador, haciendo que análisis avanzados sean accesibles en un entorno web.

## Aviso Legal sobre Datos de Chats de WhatsApp

**PRECAUCIÓN Requisitos legales para analizar chats de WhatsApp:**  
Este programa puede procesar registros exportados de chats de WhatsApp. Eres responsable de asegurarte de que el uso de esta herramienta cumple con las leyes de privacidad y regulaciones aplicables en tu país o jurisdicción.  
- Solo analiza datos de chats para los cuales tienes autorización o acceso legítimo.  
- No analices ni compartas conversaciones privadas sin el consentimiento explícito de todos los participantes.  
- Respeta todas las normativas de protección de datos aplicables, como el GDPR u otras leyes similares.  
El autor de esta herramienta no se responsabiliza por mal uso o análisis no autorizado de datos exportados.

## Descargo de Responsabilidad sobre la Marca WhatsApp™

**IMPORTANTE Descargo:**  
WhatsApp™ es una marca registrada de WhatsApp LLC y/o sus afiliados.  
Este proyecto no está afiliado, asociado, autorizado, respaldado ni está de ninguna forma oficialmente conectado con WhatsApp LLC o cualquiera de sus subsidiarias o afiliados. Todos los nombres de productos y compañías son marcas comerciales™ o marcas registradas® de sus respectivos propietarios. El uso de ellos en este proyecto no implica ninguna afiliación o respaldo por parte de ellos.

## Funcionalidades

- **Entrada flexible:** Analiza registros `.txt` exportados directamente desde chats de WhatsApp.
- **Estadísticas de usuarios:** Calcula el conteo de mensajes, tasas de participación y cronogramas de actividad para cada participante.
- **Análisis de palabras/frases:** Busca la frecuencia de una palabra o frase por participante, año y mes.
- **Visualización:** Crea gráficos de barras y gráficos de progresión del volumen de mensajes y uso de palabras clave.
- **Diseño extensible:** Base de código modular que permite añadir fácilmente nuevos módulos de análisis o visualización.

**NOTA REQUISITOS DE INSTALACIÓN**  
- Python 3.8 o superior  
- numpy  
- matplotlib  
- tkinter (para la interfaz gráfica de selección de archivos)  
- (Otras dependencias: re, unicodedata, collections, calendar, io, base64, etc.)

## Estructura del repositorio

- **/images**: Logos e imágenes usadas en el sitio web.  
- **/scripts**: Códigos principales de análisis.  
- **/styles**: Códigos visuales principales.  
- **/examples**: Ejemplos de chats de WhatsApp.

## Licencia

Copyright © 2025 [polfernandezfernandez](https://github.com/fernandezfernandezpol).  
Este proyecto está licenciado bajo la [Licencia MIT](../LICENSE.md).