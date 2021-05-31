# angular-appostit-orolpo

#POST-IT APP#<br/><br/>

**DESCRIZIONE STRUTTURA**<br/>
L'app è costituita da un componente padre (App, componenete root), tre componenti figli (get-key, mostra e nuovo) ed un servizio (chiave).<br/>
Il *mostra component* è il component responsabile della visualizzazione del corpo corrispondente al titolo del post-it cliccato dall'utente che vuole leggerne il contenuto.<br/>
Il *nuovo component* è il component responsabile dell'inserimento e del salvataggio di un nuovo post-it.<br/>
Il *get-key component* è il component responsabile della creazione di una nuova chiave d'accesso per un utente che voglia loggarsi per la prima volta, o del login tramite inserimento di una chiave già creata.<br/>
L' *app component* è il component padre, all'interno del quale si gestiscono le restanti operazioni consentite dall'applicazione (visualizzazione di tutti i post-it, visualizzazione degli importanti, cancellazione di un postit).<br/>
Il servizio chiave, del tipo KVaaS, è responsabile della gestione delle chiamate http di tipo get e post tramite url.<br/><br/>

**DETTAGLI**<br/>
**Login**<br/>
L'applicazione si apre con una schermata che mostra solo una parte del template dell'AppComponent, ovvero il form di accesso (le parti visibili e non visibili del template sono controllate da un ng if e una variabile flag)
Sono previste due modalità di accesso: 
*  **tramite chiave creata in precedenza**
    - l'utente inserisce la chiave nel campo input del template del *child-component get-key*
    - premendo enter, dal component figlio viene emesso un evento verso il component padre, cui viene passata la chiave inserita come parametro della funzione login()
    - la funzione login() dell'app-component.ts chiama la getData() definita nel *servizio chiave* (che fa una get sull'url composto con la chiave inserita), scarica la stringa associata alla chiave con i postit già esistenti, la trasforma in oggetto e poi in lista
    - se tutto va a buon fine all'utente vengono mostrati i post-it già salvati
    
* **tramite creazione di una nuova chiave**
    -al click sul bottone "ottieni la tua nuova chiave" il component figlio get-key emette un evento in direzione del component padre, innescando la funzione getKey() dell'app-component.ts, che chiama la funzione Key() definita nel servizio chiave
    -la Key() è la funzione che esegue una post all'url per richiedere una nuova chiave
    -una volta ottenuta una nuova chiave, la getKey() fa immeditamente una post di un oggetto vuoto (per evitare che al primo accesso, se non ci sono postit, la funzione login() dia errore nello scaricamento di un oggetto inesistente)
    -al nuovo utente "registrato" viene mostrata la schermata principale
    
    
* Se l'utente inserisce una chiave inesatta o inesistente, l'errore nello scaricamento e nel parsing di un oggetto inesistente viene mostrato in console e l'accesso viene negato

**Visualizzazione** (completa/solo postit importanti)
All'accesso 

**Aggiunta postit**

**Eliminazione postit**

**Messaggi importanti**





[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-appostit-orolpo)
