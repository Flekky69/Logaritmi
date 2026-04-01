const FLASHCARDS = [

  // ══════════════════════════════════════════════════════
  // CATEGORIA: TEORIA  (T01–T40)
  // ══════════════════════════════════════════════════════

  { id:"T01", cat:"teoria", topic:"Definizione",
    q:"Dai la definizione formale di logaritmo in base <em>a</em> di <em>b</em>.",
    a:"log<sub>a</sub>(b) = c &nbsp;⟺&nbsp; a<sup>c</sup> = b<br><br>Il logaritmo è l'<strong>esponente</strong> a cui bisogna elevare la base <em>a</em> per ottenere <em>b</em>." },

  { id:"T02", cat:"teoria", topic:"Definizione",
    q:"Quali sono i tre elementi di un logaritmo? Indica il ruolo di ciascuno.",
    a:"<strong>Base a</strong>: il numero che viene elevato a potenza.<br><strong>Argomento b</strong>: il risultato della potenza.<br><strong>Valore c</strong>: l'esponente cercato (il logaritmo stesso)." },

  { id:"T03", cat:"teoria", topic:"Condizioni di esistenza",
    q:"Scrivi le condizioni di esistenza di log<sub>a</sub>(b) e motiva ciascuna.",
    a:"<strong>a &gt; 0</strong>: potenze di base negativa non sono reali per esponenti qualsiasi.<br><strong>a ≠ 1</strong>: 1<sup>x</sup> = 1 per ogni x → non biunivoco.<br><strong>b &gt; 0</strong>: a<sup>x</sup> &gt; 0 sempre, quindi b non può essere ≤ 0." },

  { id:"T04", cat:"teoria", topic:"Condizioni di esistenza",
    q:"Perché la base di un logaritmo non può essere uguale a 1?",
    a:"Perché la funzione 1<sup>x</sup> = 1 per ogni x reale: non è <strong>iniettiva</strong>, dunque non è invertibile. L'equazione 1<sup>c</sup> = b avrebbe infiniti valori di c oppure nessuno (se b ≠ 1)." },

  { id:"T05", cat:"teoria", topic:"Condizioni di esistenza",
    q:"Perché il logaritmo di un numero negativo non esiste in ℝ?",
    a:"Perché per a &gt; 0 si ha sempre a<sup>c</sup> &gt; 0 per ogni c ∈ ℝ. Non esiste nessun esponente reale che renda una potenza (a base positiva) uguale a un numero negativo." },

  { id:"T06", cat:"teoria", topic:"Log decimale e naturale",
    q:"Cos'è il logaritmo decimale? Con quale simbolo si indica?",
    a:"È il logaritmo in base 10: <strong>log(b) = log<sub>10</sub>(b)</strong>.<br>La base 10 viene omessa per convenzione. È la base più usata in applicazioni scientifiche (pH, decibel, scala Richter)." },

  { id:"T07", cat:"teoria", topic:"Log decimale e naturale",
    q:"Cos'è il logaritmo naturale? Qual è la sua base?",
    a:"È il logaritmo in base <em>e</em>: <strong>ln(b) = log<sub>e</sub>(b)</strong>.<br>La base è il <strong>numero di Eulero</strong> e ≈ 2.71828…<br>È fondamentale in matematica, fisica e statistica." },

  { id:"T08", cat:"teoria", topic:"Log decimale e naturale",
    q:"Elenca tre ambiti reali in cui si usa il logaritmo decimale e tre in cui si usa il logaritmo naturale.",
    a:"<strong>Log decimale:</strong> scala Richter (sismi), decibel (suono), pH (acidità).<br><strong>Log naturale:</strong> crescita/decadimento esponenziale, teoria dell'informazione (entropia), finanza (interesse continuo)." },

  { id:"T09", cat:"teoria", topic:"Proprietà",
    q:"Enuncia la proprietà del <strong>prodotto</strong> dei logaritmi.",
    a:"log<sub>a</sub>(b · c) = log<sub>a</sub>(b) + log<sub>a</sub>(c)<br><br>Il logaritmo di un prodotto è la <strong>somma</strong> dei logaritmi dei fattori.<br><em>Deriva da:</em> a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup>." },

  { id:"T10", cat:"teoria", topic:"Proprietà",
    q:"Enuncia la proprietà del <strong>quoziente</strong> dei logaritmi.",
    a:"log<sub>a</sub>(b / c) = log<sub>a</sub>(b) − log<sub>a</sub>(c)<br><br>Il logaritmo di un quoziente è la <strong>differenza</strong> dei logaritmi.<br><em>Deriva da:</em> a<sup>m</sup> / a<sup>n</sup> = a<sup>m−n</sup>." },

  { id:"T11", cat:"teoria", topic:"Proprietà",
    q:"Enuncia la proprietà della <strong>potenza</strong> nei logaritmi.",
    a:"log<sub>a</sub>(b<sup>n</sup>) = n · log<sub>a</sub>(b)<br><br>L'esponente di un argomento può essere <strong>portato davanti</strong> come fattore.<br><em>Deriva da:</em> (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>." },

  { id:"T12", cat:"teoria", topic:"Proprietà",
    q:"Enuncia la proprietà della <strong>radice</strong> nei logaritmi.",
    a:"log<sub>a</sub>(<sup>n</sup>√b) = log<sub>a</sub>(b) / n<br><br>È un caso speciale della proprietà della potenza con n = 1/n:<br>log<sub>a</sub>(b<sup>1/n</sup>) = (1/n) · log<sub>a</sub>(b)." },

  { id:"T13", cat:"teoria", topic:"Proprietà",
    q:"Quanto vale log<sub>a</sub>(a)? Perché?",
    a:"log<sub>a</sub>(a) = <strong>1</strong><br><br>Perché per definizione: a<sup>c</sup> = a → c = 1.<br>Equivalentemente: la base elevata all'esponente 1 dà se stessa." },

  { id:"T14", cat:"teoria", topic:"Proprietà",
    q:"Quanto vale log<sub>a</sub>(1)? Perché?",
    a:"log<sub>a</sub>(1) = <strong>0</strong><br><br>Perché a<sup>0</sup> = 1 per ogni base a &gt; 0, a ≠ 1.<br>Geometricamente: il grafico di y = log<sub>a</sub>(x) passa sempre per (1, 0)." },

  { id:"T15", cat:"teoria", topic:"Proprietà",
    q:"Enuncia tutte e sei le proprietà dei logaritmi in forma sintetica.",
    a:"1. log<sub>a</sub>(bc) = log<sub>a</sub>b + log<sub>a</sub>c<br>2. log<sub>a</sub>(b/c) = log<sub>a</sub>b − log<sub>a</sub>c<br>3. log<sub>a</sub>(b<sup>n</sup>) = n·log<sub>a</sub>b<br>4. log<sub>a</sub>(<sup>n</sup>√b) = log<sub>a</sub>b / n<br>5. log<sub>a</sub>(a) = 1<br>6. log<sub>a</sub>(1) = 0" },

  { id:"T16", cat:"teoria", topic:"Cambio di base",
    q:"Enuncia la formula del cambiamento di base.",
    a:"log<sub>a</sub>(b) = log<sub>c</sub>(b) / log<sub>c</sub>(a)<br><br>Dove c è una qualsiasi base valida (c &gt; 0, c ≠ 1).<br>In pratica si usa c = 10 o c = e per calcoli con la calcolatrice." },

  { id:"T17", cat:"teoria", topic:"Cambio di base",
    q:"Come si calcola log<sub>2</sub>(7) con una calcolatrice scientifica standard?",
    a:"Usando il cambio di base in base 10:<br>log<sub>2</sub>(7) = log(7) / log(2) = 0.8451 / 0.3010 ≈ <strong>2.807</strong><br><br>Oppure con ln: ln(7) / ln(2) ≈ 1.9459 / 0.6931 ≈ 2.807." },

  { id:"T18", cat:"teoria", topic:"Cambio di base",
    q:"Dimostra che log<sub>a</sub>(b) · log<sub>b</sub>(a) = 1.",
    a:"Usando il cambio di base in base c:<br>log<sub>a</sub>(b) = log c(b)/log c(a) e log<sub>b</sub>(a) = log c(a)/log c(b)<br><br>Prodotto: [log c(b) / log c(a)] · [log c(a) / log c(b)] = <strong>1</strong> ✓" },

  { id:"T19", cat:"teoria", topic:"Funzione logaritmica",
    q:"Qual è il dominio della funzione y = log<sub>a</sub>(x)?",
    a:"Dominio: <strong>(0, +∞)</strong><br><br>L'argomento x deve essere strettamente positivo.<br>L'asse y (x = 0) è un <strong>asintoto verticale</strong>: log<sub>a</sub>(x) → ±∞ per x → 0⁺." },

  { id:"T20", cat:"teoria", topic:"Funzione logaritmica",
    q:"Qual è il codominio della funzione y = log<sub>a</sub>(x)?",
    a:"Codominio: <strong>ℝ</strong> (tutti i numeri reali)<br><br>La funzione logaritmica assume qualsiasi valore reale: non è limitata né superiormente né inferiormente." },

  { id:"T21", cat:"teoria", topic:"Funzione logaritmica",
    q:"Qual è il punto fisso comune a tutti i grafici y = log<sub>a</sub>(x)?",
    a:"Il punto <strong>(1, 0)</strong> appartiene a ogni logaritmo perché log<sub>a</sub>(1) = 0 per ogni base a valida.<br><br>Geometricamente: tutti i grafici di y = log<sub>a</sub>(x) passano per (1, 0)." },

  { id:"T22", cat:"teoria", topic:"Funzione logaritmica",
    q:"Quando la funzione y = log<sub>a</sub>(x) è crescente? Quando è decrescente?",
    a:"<strong>Crescente</strong> se a &gt; 1: valori maggiori di x danno log più grandi.<br><strong>Decrescente</strong> se 0 &lt; a &lt; 1: valori maggiori di x danno log più piccoli.<br><br>La monotonia dipende interamente dalla base." },

  { id:"T23", cat:"teoria", topic:"Funzione logaritmica",
    q:"Quale relazione esiste tra i grafici di y = log<sub>a</sub>(x) e y = a<sup>x</sup>?",
    a:"Sono <strong>funzioni inverse</strong> l'una dell'altra.<br>I loro grafici sono simmetrici rispetto alla bisettrice del primo e terzo quadrante (retta y = x).<br>Ogni punto (p, q) su uno corrisponde a (q, p) sull'altro." },

  { id:"T24", cat:"teoria", topic:"Funzione logaritmica",
    q:"Descrivi il comportamento asintotico di y = log<sub>a</sub>(x) per x → 0⁺ e per x → +∞ (caso a &gt; 1).",
    a:"Per x → 0⁺: y → <strong>−∞</strong> (asintoto verticale in x = 0).<br>Per x → +∞: y → <strong>+∞</strong> (cresce senza limite, ma molto lentamente).<br><br>Per 0 &lt; a &lt; 1 i segni si invertono." },

  { id:"T25", cat:"teoria", topic:"Equazioni logaritmiche",
    q:"Come si risolve un'equazione di tipo 1: log<sub>a</sub>(f(x)) = log<sub>a</sub>(g(x))?",
    a:"Si uguagliano gli argomenti: <strong>f(x) = g(x)</strong><br><br>Ma occorre verificare le C.E.: f(x) &gt; 0 e g(x) &gt; 0 (basta una delle due, poiché sono uguali).<br>Le soluzioni di f(x) = g(x) devono soddisfare la C.E." },

  { id:"T26", cat:"teoria", topic:"Equazioni logaritmiche",
    q:"Come si risolve un'equazione di tipo 2: log<sub>a</sub>(f(x)) = k?",
    a:"Si applica la definizione: <strong>f(x) = a<sup>k</sup></strong><br><br>Poi si risolve f(x) = a<sup>k</sup> e si verifica la C.E.: f(x) &gt; 0.<br>Poiché a<sup>k</sup> &gt; 0 sempre, la C.E. è automaticamente soddisfatta se la soluzione è valida." },

  { id:"T27", cat:"teoria", topic:"Equazioni logaritmiche",
    q:"Descrivi il metodo di risoluzione per un'equazione di tipo 3 (quadratica in log).",
    a:"Si sostituisce <strong>t = log<sub>a</sub>(x)</strong> per ottenere un'equazione algebrica in t.<br>Si risolvono le soluzioni t₁, t₂.<br>Si ritorna a x: x = a<sup>t₁</sup>, x = a<sup>t₂</sup>.<br>Si verificano le C.E. (x &gt; 0 automaticamente se a &gt; 0)." },

  { id:"T28", cat:"teoria", topic:"Disequazioni logaritmiche",
    q:"Qual è la regola fondamentale per risolvere una disequazione logaritmica con base a &gt; 1?",
    a:"La funzione è <strong>crescente</strong>, quindi il verso della disuguaglianza si <strong>conserva</strong>:<br>log<sub>a</sub>(f(x)) &gt; log<sub>a</sub>(g(x)) ⟹ f(x) &gt; g(x)<br><br>Poi si aggiungono le C.E.: f(x) &gt; 0 e g(x) &gt; 0." },

  { id:"T29", cat:"teoria", topic:"Disequazioni logaritmiche",
    q:"Qual è la regola fondamentale per risolvere una disequazione logaritmica con base 0 &lt; a &lt; 1?",
    a:"La funzione è <strong>decrescente</strong>, quindi il verso della disuguaglianza si <strong>inverte</strong>:<br>log<sub>a</sub>(f(x)) &gt; log<sub>a</sub>(g(x)) ⟹ f(x) &lt; g(x)<br><br>⚠ Questo è l'errore più comune! Poi si aggiungono le C.E." },

  { id:"T30", cat:"teoria", topic:"Disequazioni logaritmiche",
    q:"Perché nelle disequazioni logaritmiche le condizioni di esistenza sono indispensabili?",
    a:"Perché log<sub>a</sub>(x) esiste solo per x &gt; 0. Se non si impongono le C.E., si rischia di includere valori di x per cui la funzione non è definita, ottenendo soluzioni non valide o intervalli errati." },

  { id:"T31", cat:"teoria", topic:"Grafico",
    q:"Descrivi il metodo in 5 passi per tracciare y = ln(f(x)).",
    a:"1. <strong>C.E.</strong>: f(x) &gt; 0 → dominio<br>2. <strong>Zeri</strong>: ln(f(x)) = 0 → f(x) = 1<br>3. <strong>Segno</strong>: ln &gt; 0 se f(x) &gt; 1; ln &lt; 0 se 0 &lt; f(x) &lt; 1<br>4. <strong>Limiti</strong>: f(x)→0⁺ → ln→−∞; f(x)→+∞ → ln→+∞<br>5. <strong>Grafico</strong>: tracciare con i dati trovati" },

  { id:"T32", cat:"teoria", topic:"Grafico",
    q:"Come trovi l'asintoto verticale di y = ln(f(x))?",
    a:"L'asintoto verticale si trova dove f(x) → 0⁺ (dal bordo del dominio).<br>Se f(x₀) = 0, allora x = x₀ è un asintoto verticale con ln(f(x)) → −∞.<br>Va trovato il limite di f(x) al bordo del dominio." },

  { id:"T33", cat:"teoria", topic:"Grafico",
    q:"Dove interseca l'asse x il grafico di y = ln(f(x))?",
    a:"Il grafico interseca l'asse x (y = 0) dove:<br>ln(f(x)) = 0 ⟺ f(x) = 1<br><br>Quindi si risolve l'equazione f(x) = 1 nel dominio della funzione." },

  { id:"T34", cat:"teoria", topic:"Proprietà avanzate",
    q:"Quanto vale log<sub>a</sub>(a<sup>n</sup>)?",
    a:"log<sub>a</sub>(a<sup>n</sup>) = <strong>n</strong><br><br>Dimostrazione: per la prop. della potenza → n · log<sub>a</sub>(a) = n · 1 = n.<br>In generale: log e esponenziale in base a si annullano a vicenda." },

  { id:"T35", cat:"teoria", topic:"Proprietà avanzate",
    q:"Quanto vale a<sup>log<sub>a</sub>(b)</sup>?",
    a:"a<sup>log<sub>a</sub>(b)</sup> = <strong>b</strong><br><br>Perché log<sub>a</sub>(b) è esattamente l'esponente a cui elevare a per ottenere b.<br>Questa è la definizione stessa del logaritmo." },

  { id:"T36", cat:"teoria", topic:"Proprietà avanzate",
    q:"Esprimi log<sub>a</sub>(b<sup>m</sup>/c<sup>n</sup>) in forma espansa.",
    a:"log<sub>a</sub>(b<sup>m</sup>/c<sup>n</sup>)<br>= log<sub>a</sub>(b<sup>m</sup>) − log<sub>a</sub>(c<sup>n</sup>)&nbsp;&nbsp;[prop. quoziente]<br>= m·log<sub>a</sub>(b) − n·log<sub>a</sub>(c)&nbsp;&nbsp;[prop. potenza]" },

  { id:"T37", cat:"teoria", topic:"Collegamento esponenziale",
    q:"Qual è il legame tra la funzione y = log<sub>a</sub>(x) e la funzione y = a<sup>x</sup>?",
    a:"Sono <strong>funzioni inverse</strong>: composte danno l'identità.<br>log<sub>a</sub>(a<sup>x</sup>) = x &nbsp;e&nbsp; a<sup>log<sub>a</sub>(x)</sup> = x<br>I loro grafici sono <strong>simmetrici</strong> rispetto a y = x." },

  { id:"T38", cat:"teoria", topic:"Collegamento esponenziale",
    q:"Se a > 1, come è impostata la funzione esponenziale y = aˣ rispetto alla funzione logaritmica y = logₐ(x)?",
    a:"Entrambe sono <strong>crescenti</strong> e biunivoche su ℝ (resp. (0,+∞)).<br>L'esponenziale: dominio ℝ, codominio (0,+∞).<br>Il logaritmo: dominio (0,+∞), codominio ℝ.<br>I dominio e codominio si scambiano — sono funzioni inverse." },

  { id:"T39", cat:"teoria", topic:"Applicazioni",
    q:"Il pH di una soluzione è definito come pH = −log[H⁺]. Cosa significa un pH = 3 rispetto a pH = 6?",
    a:"pH = 3 → [H⁺] = 10⁻³ mol/L<br>pH = 6 → [H⁺] = 10⁻⁶ mol/L<br><br>La soluzione con pH = 3 ha una concentrazione di ioni H⁺ <strong>1000 volte maggiore</strong> (10³) rispetto a pH = 6. La scala logaritmica comprime grandi variazioni." },

  { id:"T40", cat:"teoria", topic:"Applicazioni",
    q:"La scala Richter usa log<sub>10</sub>. Un terremoto di magnitudo 7 è quante volte più potente di uno di magnitudo 5?",
    a:"Differenza di magnitudo: 7 − 5 = 2<br>Rapporto di energia: 10² = <strong>100 volte</strong> più potente.<br><br>Ogni unità di magnitudo corrisponde a un fattore 10 in ampiezza (o ~31.6 in energia rilasciata)." },

  // ══════════════════════════════════════════════════════
  // CATEGORIA: ESERCIZI  (E01–E40)
  // ══════════════════════════════════════════════════════

  { id:"E01", cat:"esercizio", topic:"Calcolo diretto",
    q:"Calcola senza calcolatrice: log<sub>2</sub>(32)",
    a:"log<sub>2</sub>(32) = log<sub>2</sub>(2<sup>5</sup>) = <strong>5</strong><br><br>Perché 2<sup>5</sup> = 32. Usando prop. della potenza: 5 · log<sub>2</sub>(2) = 5 · 1 = 5." },

  { id:"E02", cat:"esercizio", topic:"Calcolo diretto",
    q:"Calcola senza calcolatrice: log<sub>3</sub>(81)",
    a:"log<sub>3</sub>(81) = log<sub>3</sub>(3<sup>4</sup>) = <strong>4</strong><br><br>Perché 3<sup>4</sup> = 81." },

  { id:"E03", cat:"esercizio", topic:"Calcolo diretto",
    q:"Calcola senza calcolatrice: log<sub>10</sub>(0.001)",
    a:"log(0.001) = log(10<sup>−3</sup>) = <strong>−3</strong><br><br>Perché 10<sup>−3</sup> = 0.001 = 1/1000." },

  { id:"E04", cat:"esercizio", topic:"Calcolo diretto",
    q:"Calcola senza calcolatrice: ln(e<sup>5</sup>)",
    a:"ln(e<sup>5</sup>) = 5 · ln(e) = 5 · 1 = <strong>5</strong><br><br>Usando la proprietà: log<sub>a</sub>(a<sup>n</sup>) = n." },

  { id:"E05", cat:"esercizio", topic:"Calcolo diretto",
    q:"Calcola senza calcolatrice: log<sub>5</sub>(1/25)",
    a:"log<sub>5</sub>(1/25) = log<sub>5</sub>(5<sup>−2</sup>) = <strong>−2</strong><br><br>Perché 1/25 = 5<sup>−2</sup>." },

  { id:"E06", cat:"esercizio", topic:"Proprietà",
    q:"Scrivi come somma/differenza di logaritmi: log<sub>2</sub>(8x³)",
    a:"log<sub>2</sub>(8x³) = log<sub>2</sub>(8) + log<sub>2</sub>(x³)<br>= log<sub>2</sub>(2³) + 3·log<sub>2</sub>(x)<br>= <strong>3 + 3·log<sub>2</sub>(x)</strong>" },

  { id:"E07", cat:"esercizio", topic:"Proprietà",
    q:"Scrivi come unico logaritmo: 2log<sub>3</sub>(5) + log<sub>3</sub>(4) − log<sub>3</sub>(2)",
    a:"= log<sub>3</sub>(5²) + log<sub>3</sub>(4) − log<sub>3</sub>(2)<br>= log<sub>3</sub>(25·4) − log<sub>3</sub>(2)<br>= log<sub>3</sub>(100/2)<br>= <strong>log<sub>3</sub>(50)</strong>" },

  { id:"E08", cat:"esercizio", topic:"Proprietà",
    q:"Semplifica: log<sub>5</sub>(5⁴) + log<sub>5</sub>(1/25)",
    a:"= 4·log<sub>5</sub>(5) + log<sub>5</sub>(5<sup>−2</sup>)<br>= 4·1 + (−2)·1<br>= 4 − 2 = <strong>2</strong>" },

  { id:"E09", cat:"esercizio", topic:"Proprietà",
    q:"Scrivi come unico logaritmo: log(x+1) + log(x−1)",
    a:"= log[(x+1)(x−1)]<br>= <strong>log(x²−1)</strong><br><br>C.E.: x+1 &gt; 0 e x−1 &gt; 0 → x &gt; 1." },

  { id:"E10", cat:"esercizio", topic:"Cambio di base",
    q:"Calcola con la calcolatrice: log<sub>3</sub>(50). Arrotonda a 3 decimali.",
    a:"log<sub>3</sub>(50) = log(50)/log(3) = 1.6990/0.4771 ≈ <strong>3.561</strong><br><br>Verifica: 3<sup>3.561</sup> ≈ 50 ✓" },

  { id:"E11", cat:"esercizio", topic:"Cambio di base",
    q:"Calcola: log<sub>4</sub>(32) usando il cambio di base in base 2.",
    a:"log<sub>4</sub>(32) = log<sub>2</sub>(32)/log<sub>2</sub>(4) = 5/2 = <strong>2.5</strong><br><br>Verifica: 4<sup>2.5</sup> = (2²)<sup>2.5</sup> = 2<sup>5</sup> = 32 ✓" },

  { id:"E12", cat:"esercizio", topic:"Dominio",
    q:"Determina il dominio di f(x) = log(x − 3).",
    a:"C.E.: x − 3 &gt; 0 → <strong>x &gt; 3</strong><br>Dominio: (3, +∞)" },

  { id:"E13", cat:"esercizio", topic:"Dominio",
    q:"Determina il dominio di f(x) = log<sub>2</sub>(x² − 4).",
    a:"C.E.: x² − 4 &gt; 0 → x² &gt; 4 → |x| &gt; 2<br>Dominio: <strong>(−∞, −2) ∪ (2, +∞)</strong>" },

  { id:"E14", cat:"esercizio", topic:"Dominio",
    q:"Determina il dominio di f(x) = ln(2 − x).",
    a:"C.E.: 2 − x &gt; 0 → x &lt; 2<br>Dominio: <strong>(−∞, 2)</strong>" },

  { id:"E15", cat:"esercizio", topic:"Dominio",
    q:"Determina il dominio di f(x) = log(x² − 2x − 3).",
    a:"C.E.: x² − 2x − 3 &gt; 0<br>Radici: x = (2 ± √16)/2 → x = −1 o x = 3<br>Dominio: <strong>(−∞, −1) ∪ (3, +∞)</strong>" },

  { id:"E16", cat:"esercizio", topic:"Equazioni tipo 1",
    q:"Risolvi: log<sub>3</sub>(x + 5) = log<sub>3</sub>(2x − 1)",
    a:"C.E.: x+5 &gt; 0 e 2x−1 &gt; 0 → x &gt; 1/2<br>Equazione: x+5 = 2x−1 → x = 6<br>Verifica C.E.: 6 &gt; 1/2 ✓<br><strong>x = 6</strong>" },

  { id:"E17", cat:"esercizio", topic:"Equazioni tipo 2",
    q:"Risolvi: log<sub>3</sub>(x − 2) = 2",
    a:"C.E.: x − 2 &gt; 0 → x &gt; 2<br>Equazione: x − 2 = 3² = 9 → x = 11<br>Verifica C.E.: 11 &gt; 2 ✓<br><strong>x = 11</strong>" },

  { id:"E18", cat:"esercizio", topic:"Equazioni tipo 2",
    q:"Risolvi: log<sub>2</sub>(x² − 3x) = 2",
    a:"C.E.: x²−3x &gt; 0 → x(x−3) &gt; 0 → x&lt;0 o x&gt;3<br>Equazione: x²−3x = 4 → x²−3x−4 = 0 → (x−4)(x+1) = 0<br>x = 4 ✓ (4 &gt; 3) &nbsp;|&nbsp; x = −1 ✓ (−1 &lt; 0)<br><strong>x = 4 o x = −1</strong>" },

  { id:"E19", cat:"esercizio", topic:"Equazioni tipo 2",
    q:"Risolvi: log(x) + log(x − 3) = 1",
    a:"C.E.: x &gt; 0 e x−3 &gt; 0 → x &gt; 3<br>log[x(x−3)] = 1 → x(x−3) = 10<br>x²−3x−10 = 0 → (x−5)(x+2) = 0<br>x = 5 ✓ (5 &gt; 3) &nbsp;|&nbsp; x = −2 ✗<br><strong>x = 5</strong>" },

  { id:"E20", cat:"esercizio", topic:"Equazioni tipo 3",
    q:"Risolvi: [log<sub>2</sub>(x)]² − 5·log<sub>2</sub>(x) + 6 = 0",
    a:"Poni t = log<sub>2</sub>(x):<br>t² − 5t + 6 = 0 → (t−2)(t−3) = 0<br>t = 2 → x = 2² = 4<br>t = 3 → x = 2³ = 8<br><strong>x = 4 o x = 8</strong>" },

  { id:"E21", cat:"esercizio", topic:"Equazioni tipo 3",
    q:"Risolvi: [log(x)]² − log(x) − 2 = 0",
    a:"Poni t = log(x):<br>t² − t − 2 = 0 → (t−2)(t+1) = 0<br>t = 2 → x = 10² = 100<br>t = −1 → x = 10⁻¹ = 0.1<br><strong>x = 100 o x = 0.1</strong>" },

  { id:"E22", cat:"esercizio", topic:"Disequazioni",
    q:"Risolvi: log<sub>2</sub>(x + 3) &gt; log<sub>2</sub>(5)",
    a:"Base &gt; 1 → funzione crescente → verso conservato<br>C.E.: x + 3 &gt; 0 → x &gt; −3<br>Disequazione: x + 3 &gt; 5 → x &gt; 2<br><strong>x &gt; 2</strong>" },

  { id:"E23", cat:"esercizio", topic:"Disequazioni",
    q:"Risolvi: log<sub>0.5</sub>(x) &gt; log<sub>0.5</sub>(4)",
    a:"Base 0 &lt; a &lt; 1 → funzione decrescente → verso invertito<br>C.E.: x &gt; 0<br>Disequazione: x &lt; 4<br>Intersezione con C.E.: <strong>0 &lt; x &lt; 4</strong>" },

  { id:"E24", cat:"esercizio", topic:"Disequazioni",
    q:"Risolvi: log<sub>2</sub>(x − 1) &gt; 3",
    a:"C.E.: x − 1 &gt; 0 → x &gt; 1<br>log<sub>2</sub>(x−1) &gt; 3 → x − 1 &gt; 2³ = 8 → x &gt; 9<br><strong>x &gt; 9</strong>" },

  { id:"E25", cat:"esercizio", topic:"Disequazioni",
    q:"Risolvi: log<sub>3</sub>(x²) &lt; log<sub>3</sub>(9)",
    a:"Base &gt; 1 → verso conservato<br>C.E.: x² &gt; 0 → x ≠ 0<br>x² &lt; 9 → −3 &lt; x &lt; 3<br>Intersezione: <strong>−3 &lt; x &lt; 3, x ≠ 0</strong>" },

  { id:"E26", cat:"esercizio", topic:"Disequazioni",
    q:"Risolvi: log(x + 1) ≥ 0",
    a:"C.E.: x + 1 &gt; 0 → x &gt; −1<br>log(x+1) ≥ 0 = log(1) → x + 1 ≥ 1 → x ≥ 0<br><strong>x ≥ 0</strong>" },

  { id:"E27", cat:"esercizio", topic:"Grafico",
    q:"Determina dominio, zeri e segno di y = ln(x − 2).",
    a:"<strong>C.E.:</strong> x − 2 &gt; 0 → dom. = (2, +∞)<br><strong>Zero:</strong> x − 2 = 1 → x = 3<br><strong>Segno:</strong> y &gt; 0 per x − 2 &gt; 1 → x &gt; 3;<br>y &lt; 0 per 2 &lt; x &lt; 3<br><strong>Asintoto verticale:</strong> x = 2" },

  { id:"E28", cat:"esercizio", topic:"Grafico",
    q:"Determina dominio e zeri di y = log<sub>2</sub>(x² − 1).",
    a:"<strong>C.E.:</strong> x²−1 &gt; 0 → |x| &gt; 1 → dom. = (−∞,−1) ∪ (1,+∞)<br><strong>Zeri:</strong> x²−1 = 1 → x² = 2 → x = ±√2<br>(entrambi nel dominio ✓)" },

  { id:"E29", cat:"esercizio", topic:"Grafico",
    q:"Determina dominio, zeri e asintoti di y = ln(x² − 4).",
    a:"<strong>C.E.:</strong> x²−4 &gt; 0 → |x| &gt; 2 → dom. = (−∞,−2) ∪ (2,+∞)<br><strong>Zeri:</strong> x²−4 = 1 → x = ±√5<br><strong>Asintoti verticali:</strong> x = −2 e x = 2" },

  { id:"E30", cat:"esercizio", topic:"Calcolo misto",
    q:"Semplifica: log<sub>a</sub>(a³) − 2·log<sub>a</sub>(a) + log<sub>a</sub>(1/a)",
    a:"= 3 − 2·1 + log<sub>a</sub>(a<sup>−1</sup>)<br>= 3 − 2 + (−1)<br>= <strong>0</strong>" },

  { id:"E31", cat:"esercizio", topic:"Calcolo misto",
    q:"Calcola: log<sub>2</sub>(4·√2)",
    a:"= log<sub>2</sub>(4) + log<sub>2</sub>(√2)<br>= log<sub>2</sub>(2²) + log<sub>2</sub>(2<sup>1/2</sup>)<br>= 2 + 1/2 = <strong>5/2</strong>" },

  { id:"E32", cat:"esercizio", topic:"Calcolo misto",
    q:"Dimostra che log<sub>2</sub>(3) · log<sub>3</sub>(4) = 2.",
    a:"Cambio di base in base 2:<br>log<sub>3</sub>(4) = log<sub>2</sub>(4)/log<sub>2</sub>(3) = 2/log<sub>2</sub>(3)<br><br>Prodotto: log<sub>2</sub>(3) · [2/log<sub>2</sub>(3)] = <strong>2</strong> ✓" },

  { id:"E33", cat:"esercizio", topic:"Equazioni avanzate",
    q:"Risolvi: log<sub>5</sub>(x−1) = log<sub>5</sub>(x+3) − 1",
    a:"Riscrittura: log<sub>5</sub>(x−1) − log<sub>5</sub>(x+3) = −1<br>log<sub>5</sub>[(x−1)/(x+3)] = −1<br>(x−1)/(x+3) = 5<sup>−1</sup> = 1/5<br>5(x−1) = x+3 → 5x−5 = x+3 → 4x = 8 → x = 2<br>C.E.: x−1 = 1 &gt; 0 ✓ &nbsp;<strong>x = 2</strong>" },

  { id:"E34", cat:"esercizio", topic:"Equazioni avanzate",
    q:"Risolvi: log<sub>2</sub>(x) + log<sub>2</sub>(x+6) = 4",
    a:"C.E.: x &gt; 0 (poiché x &gt; 0 → x+6 &gt; 0 automaticamente)<br>log<sub>2</sub>[x(x+6)] = 4 → x(x+6) = 16<br>x²+6x−16 = 0 → (x+8)(x−2) = 0<br>x = 2 ✓ &nbsp;|&nbsp; x = −8 ✗<br><strong>x = 2</strong>" },

  { id:"E35", cat:"esercizio", topic:"Disequazioni avanzate",
    q:"Risolvi: log<sub>2</sub>(x²−1) ≥ 3",
    a:"C.E.: x²−1 &gt; 0 → |x| &gt; 1<br>log<sub>2</sub>(x²−1) ≥ 3 → x²−1 ≥ 8 → x² ≥ 9 → |x| ≥ 3<br>Intersezione con C.E. (|x| &gt; 1): <strong>x ≤ −3 o x ≥ 3</strong>" },

  { id:"E36", cat:"esercizio", topic:"Disequazioni avanzate",
    q:"Risolvi: log<sub>0.2</sub>(x+1) &lt; log<sub>0.2</sub>(3)",
    a:"Base 0 &lt; a &lt; 1 → funzione decrescente → verso invertito<br>C.E.: x + 1 &gt; 0 → x &gt; −1<br>x + 1 &gt; 3 → x &gt; 2<br><strong>x &gt; 2</strong>" },

  { id:"E37", cat:"esercizio", topic:"Verifica",
    q:"Verifica se x = 3 è soluzione di log<sub>2</sub>(x+1) + log<sub>2</sub>(x−1) = 3.",
    a:"Sostituendo x = 3:<br>log<sub>2</sub>(4) + log<sub>2</sub>(2) = 2 + 1 = 3 ✓<br>C.E.: x+1 = 4 &gt; 0 ✓, x−1 = 2 &gt; 0 ✓<br><strong>Sì, x = 3 è soluzione.</strong>" },

  { id:"E38", cat:"esercizio", topic:"Espressioni",
    q:"Calcola il valore di: 2log(5) + log(4)",
    a:"= log(5²) + log(4)<br>= log(25·4)<br>= log(100)<br>= log(10²) = <strong>2</strong>" },

  { id:"E39", cat:"esercizio", topic:"Espressioni",
    q:"Semplifica: ln(e²) − ln(e) + ln(1/e)",
    a:"= 2·ln(e) − ln(e) + ln(e<sup>−1</sup>)<br>= 2 − 1 + (−1)<br>= <strong>0</strong>" },

  { id:"E40", cat:"esercizio", topic:"Espressioni",
    q:"Dato log(2) ≈ 0.301 e log(3) ≈ 0.477, calcola log(72) senza calcolatrice.",
    a:"72 = 8 · 9 = 2³ · 3²<br>log(72) = 3·log(2) + 2·log(3)<br>= 3·0.301 + 2·0.477<br>= 0.903 + 0.954 = <strong>1.857</strong>" },

  // ══════════════════════════════════════════════════════
  // CATEGORIA: RAGIONAMENTO  (R01–R20)
  // ══════════════════════════════════════════════════════

  { id:"R01", cat:"ragionamento", topic:"Concettuale",
    q:"Un tuo compagno dice: «log(−5) = −log(5), quindi esiste ed è negativo». Dove sbaglia?",
    a:"<strong>Errore:</strong> l'identità −log(5) = log(1/5) = log(5<sup>−1</sup>) si applica all'argomento, non a log(−5).<br>log(−5) è <em>indefinito</em> in ℝ perché l'argomento deve essere positivo.<br>Non si può scrivere log(−5) = −log(5): il logaritmo di un negativo non esiste." },

  { id:"R02", cat:"ragionamento", topic:"Concettuale",
    q:"Perché log<sub>a</sub>(b+c) ≠ log<sub>a</sub>(b) + log<sub>a</sub>(c)?",
    a:"La proprietà del prodotto dice: log<sub>a</sub>(b·c) = log<sub>a</sub>b + log<sub>a</sub>c.<br>Non esiste una proprietà analoga per la <strong>somma</strong>.<br>Esempio: log(2+3) = log(5) ≠ log(2)+log(3) = log(6)." },

  { id:"R03", cat:"ragionamento", topic:"Concettuale",
    q:"Sei sicuro che log<sub>a</sub>(x) &gt; 0 per ogni x &gt; 0? Analizza tutti i casi.",
    a:"No, dipende dalla base e dall'argomento:<br>• log<sub>a</sub>(x) &gt; 0 ⟺ (a&gt;1 e x&gt;1) o (0&lt;a&lt;1 e 0&lt;x&lt;1)<br>• log<sub>a</sub>(x) = 0 ⟺ x = 1<br>• log<sub>a</sub>(x) &lt; 0 ⟺ (a&gt;1 e 0&lt;x&lt;1) o (0&lt;a&lt;1 e x&gt;1)" },

  { id:"R04", cat:"ragionamento", topic:"Concettuale",
    q:"Spiega perché la funzione y = log<sub>a</sub>(x) non può avere asintoto orizzontale.",
    a:"Perché il codominio è tutto ℝ: la funzione cresce (o decresce) senza limite.<br>Per a &gt; 1: log<sub>a</sub>(x) → +∞ per x → +∞, e → −∞ per x → 0⁺.<br>Non si avvicina ad alcun valore finito → nessun asintoto orizzontale." },

  { id:"R05", cat:"ragionamento", topic:"Confronto",
    q:"Senza calcolare, stabilisci se log<sub>2</sub>(7) è maggiore o minore di log<sub>2</sub>(3). Giustifica.",
    a:"La funzione log<sub>2</sub> è <strong>crescente</strong> (base &gt; 1).<br>7 &gt; 3 → log<sub>2</sub>(7) &gt; log<sub>2</sub>(3)<br>Numericamente: log<sub>2</sub>(7) ≈ 2.81, log<sub>2</sub>(3) ≈ 1.58 ✓" },

  { id:"R06", cat:"ragionamento", topic:"Confronto",
    q:"Senza calcolare, stabilisci se log<sub>0.5</sub>(3) è positivo o negativo. Giustifica.",
    a:"Base 0 &lt; a &lt; 1 → funzione <strong>decrescente</strong>.<br>3 &gt; 1 = log<sub>0.5</sub>(1) = 0, ma la funzione decresce: 3 &gt; 1 → log<sub>0.5</sub>(3) &lt; log<sub>0.5</sub>(1) = 0.<br>Quindi log<sub>0.5</sub>(3) &lt; 0. Numericamente: log<sub>0.5</sub>(3) = −log<sub>2</sub>(3) ≈ −1.58." },

  { id:"R07", cat:"ragionamento", topic:"Confronto",
    q:"Ordina dal più piccolo al più grande: log<sub>2</sub>(5), log<sub>3</sub>(5), log<sub>5</sub>(5), log<sub>10</sub>(5).",
    a:"log<sub>5</sub>(5) = 1<br>log<sub>10</sub>(5) = log(5) ≈ 0.699<br>log<sub>3</sub>(5) = ln5/ln3 ≈ 1.465<br>log<sub>2</sub>(5) = ln5/ln2 ≈ 2.322<br><br>Ordine: <strong>log(5) &lt; log<sub>5</sub>(5) &lt; log<sub>3</sub>(5) &lt; log<sub>2</sub>(5)</strong><br>Più la base è piccola, maggiore è il logaritmo (per argomento &gt; 1)." },

  { id:"R08", cat:"ragionamento", topic:"Errori comuni",
    q:"Individua l'errore: «log(x²) = 2log(x) per ogni x reale».",
    a:"<strong>Errore:</strong> log(x²) = 2log|x|, non 2log(x).<br>Per x &lt; 0: log(x) non è definito, ma log(x²) sì (poiché x² &gt; 0).<br>Corretto: log(x²) = log|x|² = 2log|x| per ogni x ≠ 0." },

  { id:"R09", cat:"ragionamento", topic:"Errori comuni",
    q:"Individua l'errore: «Se log₂(x) = log₂(y²), allora x = y²».",
    a:"L'implicazione è corretta, ma bisogna verificare le C.E.:<br>C.E.: x &gt; 0 e y² &gt; 0 (cioè y ≠ 0).<br>Se le C.E. sono soddisfatte, allora x = y² ✓.<br><strong>Nessun errore logico</strong>, ma serve sempre controllare le C.E." },

  { id:"R10", cat:"ragionamento", topic:"Errori comuni",
    q:"Risolvi e individua l'eventuale errore: log(x − 2) = log(4) − log(x)",
    a:"log(x−2) + log(x) = log(4)<br>log[x(x−2)] = log(4)<br>x²−2x = 4 → x²−2x−4 = 0<br>x = (2 ± √20)/2 = 1 ± √5<br>C.E.: x &gt; 2 → <strong>x = 1+√5 ≈ 3.24</strong> (l'altra soluzione è negativa)" },

  { id:"R11", cat:"ragionamento", topic:"Collegamento",
    q:"Spiega il collegamento tra la proprietà del prodotto dei logaritmi e la proprietà delle potenze.",
    a:"log<sub>a</sub>(bc) = log<sub>a</sub>b + log<sub>a</sub>c deriva da a<sup>m</sup>·a<sup>n</sup> = a<sup>m+n</sup>.<br>Se b = a<sup>m</sup> e c = a<sup>n</sup>, allora bc = a<sup>m+n</sup>.<br>Applicando il log: log<sub>a</sub>(bc) = m+n = log<sub>a</sub>b + log<sub>a</sub>c.<br>Il logaritmo «traduce» la moltiplicazione in addizione." },

  { id:"R12", cat:"ragionamento", topic:"Collegamento",
    q:"Perché la scala musicale (ottave) è collegata ai logaritmi in base 2?",
    a:"Ogni ottava raddoppia la frequenza: do₄ = 440 Hz, do₅ = 880 Hz.<br>Il numero di ottave tra due note è log<sub>2</sub>(f₂/f₁).<br>La scala musicale è <strong>logaritmica</strong>: percepire la stessa «distanza» sonora corrisponde a rapporti costanti, non a differenze costanti di frequenza." },

  { id:"R13", cat:"ragionamento", topic:"Analisi grafica",
    q:"Guardando il grafico di y = ln(x), come cambierebbe se lo sostituissimo con y = ln(x+2)?",
    a:"y = ln(x+2) è una <strong>traslazione orizzontale</strong> di 2 unità a sinistra.<br>Dominio: x &gt; −2 (invece di x &gt; 0).<br>L'asintoto verticale si sposta da x = 0 a x = −2.<br>Lo zero si sposta: ln(x+2) = 0 → x = −1 (invece di x = 1)." },

  { id:"R14", cat:"ragionamento", topic:"Analisi grafica",
    q:"Come cambia il grafico di y = log₂(x) rispetto a y = log₂(x) + 3?",
    a:"y = log₂(x) + 3 è una <strong>traslazione verticale</strong> di 3 unità verso l'alto.<br>Dominio invariato: x &gt; 0.<br>L'asintoto verticale rimane x = 0.<br>Lo zero si sposta: log₂(x) = −3 → x = 2⁻³ = 1/8." },

  { id:"R15", cat:"ragionamento", topic:"Problema aperto",
    q:"Quante soluzioni ha l'equazione ln(x) = x − 2? Come risponderesti senza risolverla algebricamente?",
    a:"Studio grafico: traccia y = ln(x) (crescente, concava verso il basso) e y = x−2 (retta).<br>Si intersecano in <strong>un solo punto</strong> (circa x ≈ 3.15).<br>Motivazione: ln(x) cresce più lentamente di x per x grande; per x piccolo ln→−∞ e la retta è finita → un'unica intersezione." },

  { id:"R16", cat:"ragionamento", topic:"Problema aperto",
    q:"Perché i logaritmi rendono più facili i calcoli astronomici e scientifici con numeri molto grandi?",
    a:"I logaritmi trasformano:<br>• moltiplicazioni in <strong>addizioni</strong><br>• divisioni in <strong>sottrazioni</strong><br>• potenze in <strong>moltiplicazioni</strong><br><br>Prima dei calcolatori, le tavole logaritmiche permisero calcoli con numeri enormi (distanze stellari, orbite) riducendoli ad operazioni elementari. Questo fu il fondamento del regolo calcolatore." },

  { id:"R17", cat:"ragionamento", topic:"Deduzione",
    q:"Sapendo che log₂(3) ≈ 1.585, calcola log₄(9) senza calcolatrice.",
    a:"log₄(9) = log₄(3²) = 2·log₄(3)<br>Cambio di base: log₄(3) = log₂(3)/log₂(4) = 1.585/2 ≈ 0.7925<br>log₄(9) ≈ 2 · 0.7925 = <strong>1.585</strong><br><br>Curiosità: log₄(9) = log₂(3) — lo puoi provare in generale!" },

  { id:"R18", cat:"ragionamento", topic:"Deduzione",
    q:"Spiega perché vale l'identità: log₄(9) = log₂(3).",
    a:"log₄(9) = log₄(3²) = 2·log₄(3)<br>log₄(3) = log₂(3)/log₂(4) = log₂(3)/2<br>Quindi: 2 · log₂(3)/2 = <strong>log₂(3)</strong> ✓<br><br>In generale: log<sub>a²</sub>(b²) = log<sub>a</sub>(b) — una bella identità!" },

  { id:"R19", cat:"ragionamento", topic:"Sintesi",
    q:"Riassumi in una frase il significato intuitivo del logaritmo, pensando ad un bambino di 10 anni.",
    a:"«Il logaritmo risponde alla domanda: quante volte devo moltiplicare il numero <em>a</em> per se stesso per ottenere il numero <em>b</em>?»<br><br>Esempio: log₂(8) = 3 → «devo moltiplicare 2 per se stesso 3 volte: 2×2×2 = 8»." },

  { id:"R20", cat:"ragionamento", topic:"Sintesi",
    q:"Qual è, secondo te, la proprietà dei logaritmi più importante? Motivala con un esempio concreto.",
    a:"(Risposta aperta — valutare la motivazione)<br><br><strong>Proposta:</strong> la proprietà del prodotto (log(bc) = log b + log c), perché è la base di tutti i calcoli logaritmici e della costruzione dei regoli calcolatori. Converte moltiplicazioni in addizioni, rendendo possibili i grandi calcoli scientifici prima dei computer." },

];
