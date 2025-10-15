# Note

Il file package.json deve impostare la proprietà homepage per indicare la subpath dove verrà installata l'applicazione.

# Gestione Permessi su PLC 
L'applicazione ha bisogno dei seguenti diritti minimi per interrogare il PLC (vedi file .env e suoi utilizzi):
1) Leggi Diagnostica | Server Web - Diagnostica del PLC
2) Leggi dati di processo | Server Web - Accesso ai dati di processo

Inoltre se si deploya l'applicazione su PLC Siemens c'è bisogno per l'accesso senza password che l'utente Anonymous (utente di default di siemens) abbia il diritto, mediante uno dei suoi ruoli (es. Ognuno/Everybody), di "Aprire pagine Web Personalizzate" 

## Note:
Tutte le gestioni dei permessi vanno fatte in TIA portal nella sezione "Impostazioni Security -> Utenti e Ruoli"