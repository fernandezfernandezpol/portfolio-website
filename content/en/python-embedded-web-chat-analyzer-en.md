# Python Embedded Web Chat Analyzer

**WARNING** This project is still a work in progress. Core features have been tested and proven to function with embedded chat exports, but some edge cases and additional platforms may not be fully supported yet.  

**Planned future improvements:**
- Add support for more chat export formats and platforms.
- Enhance data visualization and analytics modules.
- Improve performance for large datasets.
- Implement advanced sentiment and topic analysis.

## Description

**Python Embedded Web Chat Analyzer** is a modular Python tool designed to analyze and visualize chat data exported from embedded web chat platforms, focusing specifically on WhatsApp chat exports. The application processes exported chat logs, extracts key statistics, and provides insightful visualizations to help understand user interactions, participant activity, and overall chat dynamics.

The system is ideal for researchers, educators, or anyone interested in chat data analysis, digital communication patterns, or social network analysis.

## Supported Chat Exports

**NOTE Supported file format:** This tool can only analyze `.txt` files exported directly from WhatsApp chats using the official "Export chat" function. Other formats or chat platforms are not supported and may not work as expected.

## How it works

This project includes Python scripts that analyze exported WhatsApp chat logs in `.txt` format. The scripts:
- Normalize and clean the text.
- Parse message entries, associating them with users and dates.
- Let you search for the frequency of a specific word or phrase per user, by year and by month.
- Generate visualizations (bar charts and progression plots) of word usage across time and participants.

You can run the analysis using a simple command-line interface (CLI) or, in some versions, via a graphical dialog to select your `.txt` file.

**Online demo:**
[https://fernandezfernandezpol.github.io/python-embedded-web-chat-analyzer/](https://fernandezfernandezpol.github.io/python-embedded-web-chat-analyzer/)

## Pyodide Integration

**Pyodide** is a Python distribution for the browser and Node.js, based on WebAssembly. It allows you to run Python code directly in web environments without requiring server-side Python execution or external dependencies. Pyodide includes a wide collection of Python packages and provides seamless interoperability between Python and JavaScript.

**NOTE** In this project, Pyodide is used to execute Python analysis scripts directly within the browser. This enables the chat analyzer to process and visualize chat data on the client side, providing a fully interactive and serverless user experience. Users can upload WhatsApp `.txt` exports, perform analyses, and view results—all without any backend infrastructure. The integration leverages Pyodide's capabilities to run pandas, matplotlib, and other scientific libraries in-browser, making advanced analytics accessible in a web environment.

## Legal Notice on WhatsApp Chat Data

**CAUTION Legal requirements for analyzing WhatsApp chats:**  
This program can process exported WhatsApp chat logs. You are responsible for ensuring that your use of this tool complies with privacy laws and regulations applicable in your country or jurisdiction.  
- Only analyze chat data for which you have authorization or rightful access.  
- Do not analyze or share private conversations without the explicit consent of all participants.  
- Respect all applicable data protection regulations, such as GDPR or similar laws.  
The author of this tool is not responsible for any misuse or unauthorized analysis of exported chat data.

## Disclaimer on WhatsApp™ Trademark

**IMPORTANT Disclaimer:**  
WhatsApp™ is a trademark of WhatsApp LLC and/or its affiliates.  
This project is not affiliated, associated, authorized, endorsed by, or in any way officially connected with WhatsApp LLC or any of its subsidiaries or affiliates. All product and company names are trademarks™ or registered® trademarks of their respective holders. Use of them in this project does not imply any affiliation with or endorsement by them.

## Features

- **Flexible input:** Analyze `.txt` logs exported directly from WhatsApp chats.
- **User statistics:** Calculates message counts, participation rates, and activity timelines for each participant.
- **Word/phrase analytics:** Search for frequency of a word or phrase by participant, year and month.
- **Visualization:** Creates barplots and progression plots of message volume and keyword usage.
- **Extensible design:** Modular codebase allows easy addition of new analysis or visualization modules.

**NOTE INSTALLATION REQUIREMENTS**
- Python 3.8 or higher
- numpy
- matplotlib
- tkinter (for the GUI of file selection)
- (Other dependencies: re, unicodedata, collections, calendar, io, base64, etc.)

## Repository structure

- **/images**: Logos and images used in the website.
- **/scripts**: Core analysis file codes.
- **/styles**: Core visual file codes.
- **/examples**: Example WhatsApp chats.

## License

Copyright © 2025 [polfernandezfernandez](https://github.com/fernandezfernandezpol).  
This project is licensed under the [MIT License](../LICENSE.md).