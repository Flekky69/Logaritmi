# 📚 Logaritmi — 100 Flashcard Interattive

App web di ripasso per il **Capitolo 10 – Logaritmi** di *Matematica.blu 2.0, Vol. 3* (Zanichelli).  
Destinata agli studenti di **Terza Liceo Scientifico**.

🔗 **Demo live:** `https://<tuo-username>.github.io/logaritmi-flashcards/`

---

## ✨ Funzionalità

| Feature | Descrizione |
|---|---|
| **100 flashcard** | 40 teoria · 40 esercizi · 20 ragionamento |
| **Animazione flip** | Click / Spazio per girare la scheda |
| **Filtri per categoria** | Teoria / Esercizi / Ragionamento / Tutte |
| **Ricerca** | Cerca per argomento o ID scheda |
| **Mischia** | Ordine casuale per un ripasso più efficace |
| **Indice** | Griglia di tutte le schede, navigazione diretta |
| **Tasti rapidi** | ← → naviga, Spazio gira, Esc chiude indice |
| **Swipe** | Supporto touch per smartphone e tablet |
| **Nessuna dipendenza** | Funziona offline, zero framework, zero npm |

---

## 🗂 Struttura delle schede

### Teoria (T01–T40)
| Argomento | Schede |
|---|---|
| Definizione di logaritmo | T01–T02 |
| Condizioni di esistenza | T03–T05 |
| Log decimale e naturale | T06–T08 |
| 6 Proprietà | T09–T15 |
| Cambio di base | T16–T18 |
| Funzione logaritmica (grafico) | T19–T24 |
| Equazioni logaritmiche | T25–T27 |
| Disequazioni logaritmiche | T28–T30 |
| Metodo per y = ln(f(x)) | T31–T33 |
| Proprietà avanzate | T34–T36 |
| Collegamento con esponenziale | T37–T38 |
| Applicazioni reali | T39–T40 |

### Esercizi (E01–E40)
| Argomento | Schede |
|---|---|
| Calcolo diretto | E01–E05 |
| Applicazione proprietà | E06–E09 |
| Cambio di base | E10–E11 |
| Determinazione del dominio | E12–E15 |
| Equazioni tipo 1, 2, 3 | E16–E21 |
| Disequazioni | E22–E26 |
| Studio del grafico | E27–E29 |
| Calcoli misti e avanzati | E30–E40 |

### Ragionamento (R01–R20)
| Argomento | Schede |
|---|---|
| Errori concettuali comuni | R01–R02, R08–R09 |
| Analisi di tutti i casi | R03–R04 |
| Confronto e ordinamento | R05–R07 |
| Errori in equazioni | R10 |
| Collegamento con potenze | R11–R12 |
| Analisi grafica | R13–R14 |
| Problemi aperti | R15–R16 |
| Deduzioni | R17–R18 |
| Sintesi e riflessione | R19–R20 |

---

## 🚀 Pubblicazione su GitHub Pages

### 1. Crea il repository

```bash
git init
git add .
git commit -m "feat: add 100 flashcard logaritmi"
```

### 2. Crea il repo su GitHub

Vai su [github.com/new](https://github.com/new) e crea un repository pubblico chiamato `logaritmi-flashcards`.

### 3. Collega e pubblica

```bash
git remote add origin https://github.com/<username>/logaritmi-flashcards.git
git branch -M main
git push -u origin main
```

### 4. Attiva GitHub Pages

1. Vai su **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / `/ (root)`
4. Clicca **Save**

L'app sarà disponibile su:  
`https://<username>.github.io/logaritmi-flashcards/`

---

## 📁 Struttura file

```
logaritmi-flashcards/
├── index.html        ← App principale (UI + logica)
├── flashcards.js     ← Database delle 100 schede
└── README.md         ← Questa guida
```

---

## 🎨 Design

Il tema visivo è coerente con le presentazioni di classe:
- **Sfondo** navy scuro (`#0D1B3E`)
- **Accenti** teal (`#0891B2`) e gold (`#F5A623`)
- **Font** Playfair Display (titoli) + Source Sans 3 (testo)
- Supporto completo dark mode (è già dark by design)

---

## 🔧 Aggiungere o modificare schede

Le schede si trovano in `flashcards.js`. Ogni scheda ha questa struttura:

```javascript
{
  id:    "T01",           // ID univoco (T=teoria, E=esercizio, R=ragionamento)
  cat:   "teoria",        // "teoria" | "esercizio" | "ragionamento"
  topic: "Definizione",   // argomento breve (usato in ricerca e indice)
  q:     "Domanda...",    // HTML consentito: <em>, <strong>, sub, sup
  a:     "Risposta..."    // HTML consentito: <em>, <strong>, <br>
}
```

---

## 📖 Riferimenti

- **Libro:** Bergamini, Trifone, Barozzi — *Matematica.blu 2.0*, Vol. 3 (Zanichelli)
- **Capitolo:** 10 — Logaritmi
- **Classe:** Terza Liceo Scientifico

---

## 📄 Licenza

Materiale didattico a uso libero per studenti e insegnanti.  
Nessuna dipendenza da librerie esterne — funziona completamente offline.
