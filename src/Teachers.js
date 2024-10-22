import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import talone from './talone.webp';
import petretti from './petretti.webp';
import roffi from './roffi.webp';
import musto from './musto.webp';
import mancini from './mancini.jpg';
import santisi from './santisi.webp';
import savino from './savino.jpg';
import raponi from './raponi.webp';
import perciballi from './perciballi.webp';
import mirra from './mirra.jpg';
import palombi from './palombi.webp';
import talpa from './talpa.webp';
import diRe from './diRe.webp';
import cecchini from './cecchini.webp';
import valeri from './valeri.webp';
import mele from './mele.webp';
import caporilli from './caporilli.webp';
import taloneS from './taloneS.webp';
import caturelli from './caturelli.webp';
import girolami from './girolami.webp';
import pizzotti from './pizzotti.webp';
import latini from './latini.webp';
import AppBar from './AppBar';
import { Box, CardActionArea, Container, Grow, Modal, styled } from '@mui/material';
import SocialFooter from './SocialFooter';
import { Close } from '@mui/icons-material';

function Teachers(props) {

  const [selectedTeacher, setSelectedTeacher] = React.useState();

  const teachers = [
    { image: pizzotti, name: "Alessio Pizzotti", course: "Pianoforte", description: "Pianista – Compositore Diploma di primo livello in pianoforte classico e Diploma di secondo livello in pianoforte e tastiere pop/rock presso il Conservatorio di musica L. Refice di Frosinone con la votazione di 110 e lode. Ha studiato e si diploma in arrangiamento, Synth e tastiere, Ear training presso il “Saint Louis College of Music di Roma”. In Conservatorio ha studiato pianoforte con le insegnanti: Ersilia Ungaro, Gilda Buttà. A New York, dove si trasferisce, studia con i pianisti: Barry Harris, Jon Davis (Jaco Pastorius). Nell’ambito musicale pop ha collaborato in studio e in tour dal 2010 con Massimo Di Cataldo, Marco Mengoni , Francesco Di Giacomo (Banco), Domenica In (Orchestra diretta dal M. Serio), Mezzogiorno in Famiglia (Orchestra diretta dal M. Mazza) Agricantus, Brian Mackey. Ha pubblicato tre album strumentali: Dieci Giorni (2015), In vita (2018) e Beninconia , composto per pianoforte e quartetto d’archi, (2024)." },
    { image: diRe, name: "Maria Di Re", course: "Canto lirico", description: "Cantante lirica diplomata al Conservatorio di Latina “ Ottorino Respighi. Corso di perfezionamento presso l’Accademia Santa Cecilia con la cantante Renata Scotto. Ha cantato come soprano lirico nel “Nuovo coro lirico sinfonico romano” dal 1999 ad oggi, collaborando tra i vari con: Ennio Morricone, Andrea Bocelli, Rogers Waters, Riccardo Cocciante e Montserrat Caballe. Ha Registrato la sua voce per il film Cefalonia su Rai Uno, la fiction “I Medici” su Netflix e per la fiction di Sorrentino “ Young Pope” e “ Un Papa rimasto uomo” per la morte di Wojtila. Ha fatto parte del nuovo film di Laura Luchetti “ Il Gattopardo” che uscirà nell’anno 2025, in qualità di Soprano nel coro. Ha eseguito molte opere liriche in vari teatri italiani. Dirige il “Nuovo Coro Città di Artena" },
    { image: talone, name: "Giuseppe Talone", course: "Contrabbasso / basso", description: "Contrabbassista – Bassista Ha conseguito il Diploma di primo livello in Contrabbasso Jazz presso il Conservatorio L. Refice di Frosinone e il Diploma di secondo livello in Contrabbasso Jazz presso il “Conservatorio Santa Cecilia” di Roma con il massimo dei voti. Nel 1997 vince la borsa di studio di merito presso il St. Louis Music Center di Roma dove studia con i Maestri Luca Pirozzi, Marco Siniscalco e Pietro Ciancaglini.. In ambito teatrale, ha partecipato allo spettacolo “Una Martin’s de Luxe” di C. Pallottini per la regia di Gigi Proietti. Ha partecipato come ospite insieme al V.Lucarelli Quintet al Jerusalem Festival. Nel 2009 ha partecipato alla trasmissione di Pino Insegno “Insegnami a sognare”. Ha all’attivo molti dischi, tra tutti: Bepi D’Amato - All Leaders e The G-Men & Friends con Giorgio Cuscito." },
    { image: taloneS, name: "Simone Talone", course: "Batteria e percussioni", description: "Studia al Conservatorio di “S.Cecilia” in Roma; Si dedica alle percussioni studiando nella scuola di percussioni “Timba”. Dopo un intensa attività bandistica inizia ad avere esperienze con gruppi locali e dell’ ambito romano e nazionale spaziando in tutti i generi musicali. Dai primi anni 2000 lavora in tour con Marcello Cirillo, Manuela Villa, Annalisa Minetti, Francesca Alotta, Nell’inverno del 2002 entra a far parte del cast di “In Famiglia” (Raidue) per tre stagioni consecutive come percussionista dove ha il piacere di accompagnare artisti di fama nazionale. Suona nell’orchestra di Gerardo Di Lella, con la quale avrà l’occasione di suonare con: Arturo Sandoval, Stelvio Cipriani, Gloria Gaynor, Amii Stewart, Alan Sorrenti e molti altri. Accompagna con set misto batteria/percussioni l’attore e showman Neri Marcorè nel tour teatrale e in diverse trasmissioni televisive. Nel 2019 è in tour con F. De Gregori insieme ai GnuQuartet e la Gaga Symphony Orchestra. Dallo stesso anno e attualmente è in tour in qualità di Batterista e Percussionista con l’Artista Francesco De Gregori." },
    { image: palombi, name: "Tiziano Palombi", course: "Pianoforte / hd recording", description: "Pianista di formazione classica, si diploma in pianoforte al Conservatorio sotto la guida del Maestro Carlo Negroni. Con oltre 20 anni di esperienza nell’HD recording, ha affinato le sue competenze nella produzione di arrangiamenti e brani inediti per numerosi artisti, ottenendo risultati eccellenti. La sua carriera è contraddistinta da una continua ricerca di qualità sonora, combinando il rigore della musica classica con le tecniche moderne di produzione musicale. Ha collaborato come arrangiatore per diverse produzioni di rilievo, incluse quelle per la RAI, contribuendo a progetti che spaziano dalla musica leggera a quella sperimentale. La sua versatilità e la capacità di adattarsi a diversi stili musicali lo rendono un professionista apprezzato nel settore." },
    { image: perciballi, name: "Fabio Perciballi", course: "Chitarra", description: "Si diploma in chitarra con il massimo dei voti e menzione d’onore presso il Conservatorio O. Respighi di Latina. Collabora con PMCE - Parco della Musica Contemporanea Ensemble, partecipando alla realizzazione di numerose prime mondiali, come 2x5 di Steve Reich. È prima chitarra per la prima messa in scena italiana di MASS di Leonard Bernstein, con l’orchestra del Teatro dell’Opera di Roma e per la prima nazionale de Il Sangue e La Parola di Nicola Piovani, in diretta televisiva presso Piazza del Quirinale. Per la Sinfonica Jazz Edizioni Musicali pubblica Quattro studi sulla lontananza per chitarra, nel 2023 con l’etichetta Brilliant Classics incide l’integrale delle opere di Ida Presti per due chitarre." },
    { image: mirra, name: "Lorenzo Mirra", course: "Chitarra classica/jazz", description: "Lorenzo Mirra; Chitarrista, Compositore, Arrangiatore. Studia Chitarra Classica al Conservatorio di L’Aquila, per poi trasferirsi a Roma presso il Conservatorio Santa Cecilia, dove consegue il Diploma di Primo Livello in Chitarra Jazz con votazione 110/110, con il M° Fabio Zeppetella. Attualmente frequenta il Biennio di Secondo Livello in Composizione Jazz con il M° Roberto Spadoni, presso il medesimo conservatorio. Dal 2017 lavora con il trombonista e Direttore d’Orchestra M° Mario Corvini, in qualità di chitarrista ed arrangiatore per la Big Band “Young Art Jazz Ensemble”, con la quale dopo numerose collaborazioni con alcuni dei più importanti nomi della scena Jazz italiana (Rosario Giuliani, Gabriele Coen, per citarne alcuni), nel Marzo 2023 registra il primo disco (in qualità di chitarrista ed arrangiatore) con Natalino Marchetti alla fisarmonica solista, dedicato alla musica di Edith Piaf. Dal 2023 lavora con la “Mario Corvini Jazz Ensemble”, realizzando con essa spettacoli principalmente incentrati sulle rielaborazioni in chiave Jazzistica di alcune tra le più grandi colonne sonore della cinematografia Italiana. In particolare i progetti sulle musiche di Nino Rota e, di più recente realizzazione il lavoro sulle colonne sonore di alcuni dei film più importanti di Alberto Sordi, per i quali riarrangia le musiche di compositori quali Piero Piccioni e Armando Trovajoli. Dal Dicembre 2022 è chitarrista ed arrangiatore per la Big Band “LOJI” (Libera Orchestra del Jazz Italiano), diretta dai Maestri Gabriele Ceccarelli, Filippo Minisola e Matteo Rossi." },
    { image: raponi, name: "Danilo Raponi", course: "Sax", description: "Diploma di primo livello Jazz conseguito al Conservatorio L. Refice di Frosinone. Diploma di secondo livello di sassofono in musica moderna e per lo spettacolo con una tesi riguardante l’utilizzo dell’elettronica e dell’effettistica sul sassofono conseguito al conservatorio “L. Refice” di Frosinone. Prende parte al WMC di Kerkrade , campionato mondiale di orchestre di fiati , con l ‘orchestra di fiati della città di Ferentino , vincendo la seconda categoria. Si aggiudica il 1° posto presso il 15°concorso nazionale di esecuzione musicale Riviera Etrusca (Piombino) con il Dispari Sax Quartet. Riceve il 3° posto nel 20° Concorso Nazionale di musica da camera “Giulio Rospigliosi” al Sax tenore. Ha inoltre un’intensa attività in studio: incide il disco del suo gruppo “Backroads project - Waiting times” collabora con numerose orchestre. Attivo nella scena Jazz romana" },
    { image: talpa, name: "Annalaura Talpa", course: "Canto pop", description: 'Classe 1997. Diploma di primo e secondo livello in canto pop presso il Conservatorio L. Refice di Frosinone con la votazione di 110 e Lode Cresciuta in una famiglia di musicisTA, da piccola studia pianoforte e flauto traverso. Nel 2008 partecipa a due progetti educativi per l’infanzia incidendo in studio brani destinati all’ascolto dei più piccoli. Fa parte dell’Orchestra pop del Conservatorio di Frosinone diretta dal M° Francesco Negroni, in qualità di cantante solista nel: “Christmas project”, il “Moon project” e il “Lennon project”. Studia nella scuola di doppiaggio cantato “Ermavilo” e segue il corso di formazione VEM. Parallelamente gestisce la sua professione di insegnante di canto.' },
    { image: petretti, name: "Edoardo Petretti", course: "Pianoforte jazz", description: "Pianista, tastierista e fisarmonicista di estrazione jazz, Si diploma in pianoforte classico al Conservatorio di Frosinone sotto la guida del Maestro Carlo Negroni, contribuendo così a indirizzare la sua ricerca verso un suono che combini la musica improvvisata, il lirismo d’estrazione classica e la sperimentazione jazzistica. Nel suo percorso, ricco di numerose collaborazioni, affianca all’attività di session man quella di Arrangiatore e Produttore nell’ambito della musica d’insieme. E’ Pianista e fisarmonicista al fianco di Francesco De Gregori nella campagna pubblicitaria ENEL 2024. Dopo i riconoscimenti all’interno del prestigioso “Premio Tenco” nelle diverse categorie, nel 2021 è arrangiatore e direttore d’Orchestra Al 71° Festival della canzone Italiana di Sanremo con l’artista Avincola." },
    { image: roffi, name: "Pietro Roffi", course: "Fisarmonica", description: "Laureato al Conservatorio Santa Cecilia di Roma con lode e menzione d’onore, Nel 2018 ha debuttato come solista all’Auditorium Parco della Musica di Roma con l’Orchestra dell’Accademia Nazionale di Santa Cecilia, alla presenza di Sergio Mattarella. Ha svolto tournée in Inghilterra, a Malta, Cina, Lituania, Argentina, Australia. Nel 2018 esordisce come compositore pubblicando il singolo per fisarmonica dal titolo Est Ovest e il 14 settembre dello stesso anno esce l’EP Tutto Tango con il pianista Alessandro Stella. Nel 2017 ha registrato la colonna sonora per il film Nome di donna (di Marco Tullio Giordana) Sempre per Dario Marianelli ha inciso la colonna sonora del film Pinocchio (film 2019) di Matteo Garrone insieme alla Roma Tre Orchestra. Il 20 settembre 2019 è uscito il suo primo album come compositore per l’etichetta Inri Classic. Il 27 Marzo 2020 è uscito il singolo “Daydream”. Suona una Bugari Armando Spectrum, costruita a Castelfidardo." },
    { image: musto, name: "Margherita Musto", course: "Violino", description: "Diplomata nel 2006 presso il Conservatorio “Licinio Refice” di Frosinone. Dal 1991 compie i suoi studi con il M° Antonio Marchetti, ha collaborato con l’Orchestra dei Conservatori italiani, l’Orchestra Sinfonica di Savona, l” Ostia Chamber Orchestra” e la “World Youth Orchestra”, esibendosi in Italia e all’estero. Ha lavorato nei teatri di Buenos Aires, Mar del Plata e Rosario. Ha collaborato con la “Mission Chamber Orchestra”, con la quale ha suonato in tour in Florida e a Panama collaborando con l’ ” Orchestra of America’s”. Dal 2016 fa parte dello spettacolo “Queen at the opera” e “Bohemian Rapsody”. Ha suonato in Tour con Massimo Ranieri e preso parte a varie trasmissioni televisive. Ha conseguito un master di tre anni in Musicoterapia" },
    { image: mancini, name: "Rachele Mancini", course: "Violino", description: "Rachele Mancini consegue la formazione in violino dapprima presso il Conservatorio “Santa Cecilia” di Roma e successivamente presso il Conservatorio “Ottorino Respighi” di Latina, dove conclude il percorso accademico sotto la guida del Maestro A. De Secondi. Il forte interesse per il mondo dell’educazione, dell’insegnamento e delle professioni di aiuto, la spinge ad accrescere il proprio bagaglio umano, formativo e professionale, frequentando la Scuola di Formazione in Musicoterapia “Oltre” di Roma dove si diploma con il massimo dei voti. La passione per la musica d’insieme e allo stesso tempo la versatilità musicale, la portano ad esibirsi non soltanto con formazioni di musica classica, ma anche con gruppi di musica pop e popolare-folk. Dal 2019 esercita con grande dedizione l’insegnamento del violino, materia nella quale integra i principali metodi accademici di tecnica violinistica con un vasto repertorio di brani classici e non, al fine di trasferire agli allievi una solida preparazione tecnica ed espressiva, senza tralasciare le preferenze musicali individuali e le molteplici potenzialità del violino nei diversi generi musicali." },
    { image: santisi, name: "Angelo Maria Santisi", course: "Violoncello", description: "Si è diplomato nell’ottobre 2001 presso il Conservatorio “A. Steffani” di Castelfranco Veneto con Walter Vestidello. Si è inoltre perfezionato con Marianne Chen, Enrico Bronzi, Luigi Piovano e la celebre Natalia Gutman. La sua formazione orchestrale si deve a Leon Spierer, già primo violino dei Berliner Philharmoniker, e alla frequentazione dell’Accademia del Teatro alla Scala. Ha all’attivo numerose collaborazioni con l’Orchestra del Maggio Musicale Fiorentino, il Teatro alla Scala, l’Orchestra del Teatro dell’Opera di Roma, la Malta Philarmonic Orchestra, l’Orchestra del Teatro San Carlo di Napoli, l’Orchestra del Teatro La Fenice di Venezia, l’Accademia dell’Orchestra Mozart, l’Orchestra Filarmonica Arturo Toscanini, l’Orchestra del Teatro Petruzzelli di Bari, l’Orchestra Sinfonica di Roma (con cui collaborava anche nel ruolo di primo violoncello). Suona un violoncello W. Baker del 1850." },
    { image: savino, name: "Andrea Savino", course: "Violoncello", description: "Diplomatosi nel Luglio 2023 con il massimo dei voti presso il Conservatorio “L. Refice” di Frosinone, sta continuando tutt’ora gli studi al Conservatorio “O. Respighi” di Latina. Ha collaborato e collabora ancora con diverse formazioni, quali: l’Orchestra Filarmonica della Calabria, i Filarmonici di Roma, l’Orchestra Sinfonica di Latina (anche nel ruolo di primo violoncello) e l’Orchestra Fidelis et Amati. Nell’ambito della musica classica ha avuto a che fare con personalità come Uto Ughi, Bruno Canino, Oleksandr Semchuk, Ksenia Milas e Nicola Samale. Nell’ambito della musica leggera invece, ha collaborato con Tullio De Piscopo e Tony Esposito." },
    { image: caporilli, name: "Mario Caporilli", course: "Tromba", description: "Mario Caporilli si diploma in tromba presso il Conservatorio “F.Morlacchi” di Perugia. Svolge un’Intensa attività e grande esperienza nella didattica dal 2001. La sua attività musicale è ricca di collaborazioni che vanno dal teatro (Proietti, C. De Sica, Montesano e tantissimi altri), alle trasmissioni televisive ( Domenica in, I Raccomandati , Primo Maggio, Amici e molte altre) Numerose le registrazioni in studio e collaborazioni live nel Jazz e Pop con moltissimi artisti: Dee Dee Bridgewater, Gianni Ferrio, Armando Trovajoli, Enrico Pieranunzi, Renato Sellani, Danilo Rea, Mario Biondi, Fabio Concato, Claudio Baglioni, Francesco De Gregori, Giorgia, Ornella Vanoni, , M° Pregadio, M° Caruso, Fiorella Mannoia, Greg e Lillo, Max Gazzè, Niccolò Fabi, Sergio Cammariere, Daniele Silvestri, Diodato, Roberto Vecchioni, Renzo Arbore , PFM, Noemi etc. Attualmente in tour con la band Orchestraccia e con i Dirotta su Cuba." },
    { image: mele, name: "Irene Mele", course: "Propedeutica musicale", description: "Diploma di primo livello in pianoforte principale conseguito presso il Conservatorio “Licinio Refice” di Frosinone, allieva della Docente Margherita Traversa. Ha seguito il corso di alto perfezionamento con la pianista Lya De Barberiis ( allieva di Alessandro Longo e Alfredo Casella) presso l’istituto musicale collegium Artist Frascati ed il corso di perfezionamento pianistico con il maestro Stefano Scarcella (allievo del pianista e didatta Konstantin Bogino) esponente di spicco della scuola pianistica russa. Ha svolto diversi corsi di aggiornamento che riguardano i percorsi di didattica musicale su metodo Orff, Dalcrose, approfondimento body percussion, canto in cerchio, operante come docente da 20 anni presso le scuole dell’infanzia e primarie." },
    { image: cecchini, name: "Federico Cecchini", course: "Trombone / banda musicale", description: "Diplomato in Trombone presso il conservatorio “Alfredo Casella” de L’Aquila nel Settembre del 2003. Nel giugno 2013 consegue la Laurea in Strumentazione per Banda presso il Conservatorio “Santa Cecilia” di Roma. Ha pubblicato un suo testo dal titolo “Manuale di Teoria Musicale” casa editrice Allemanda. Dal 2005 è direttore artistico dell’aps Banda Musicale Corbium di Rocca Priora per la quale dirige anche il Coro Vocaliter, la Young Band, la Junior Band. Ha diretto concerti presso il Corciano Festival, il Festival Bandistico Internazionale “R. Marenco” di Novi Ligure con la Tuscia Wind Orchestra di Viterbo. Ha curato l’orchestrazione e la direzione dell’orchestra presso il teatro La Fenice e il Palazzo del Cinema di Venezia, accompagnando le performance di alcuni tra i maggiori nomi del teatro Italiano (N. Gazzolo, A. Foà, E. Girone, E. De Caro) Dal 2019 è direttore artistico della Banda Musicale Città di Artena." },
    { image: caturelli, name: "Massimo Caturelli", course: "Clarinetto / armonia", description: "Massimo Caturelli è un compositore e clarinettista romano Nato il 29 giugno del 1992, all’età di 11 anni inizia lo studio del clarinetto presso il Conservatorio Licinio Refice di Frosinone, dove ha conseguito i diplomi in clarinetto, musica da camera e composizione. Successivamente consegue la laurea in composizione per la musica applicata presso il conservatorio Santa Cecilia di Roma. Ha svolto e svolge attività concertistica come solista e in ensemble cameristici e orchestrali. All’attività di strumentista e docente affianca quella di compositore e arrangiatore, dal 2016 svolge regolarmente l’attività di compositore e orchestratore di colonne sonore per il cinema e di musiche di scena per il teatro." },
    { image: valeri, name: "Adolfo Valeri", course: "Percussioni", description: "Diplomato in strumenti a percussione presso il Conservatorio L.Refice di Frosinone. Inizia gli studi nel1980 di batteria Saint Louis College of Music con Roberto Gatto e Roberto Spizzichino. Partecipa a Perugia a un corso con Gimmy Cob e successivamente ad corso di perfezionamento di vibrafono della Berklee svolto a Perugia sotto la guida di Gary Burton. Numerosi i concerti come percussionista in Italia e all’estero con Franco Califano, Gabriella Ferri, Renato Carosone e con il maestro Roberto Pregadio. Nel 1994 suona in tour nei paesi Arabi come percussionista classico con il maestro Rinaldi, nell’ opera “il Rigoletto” . Percussionista in programmi televisivi quali “cultura moderna “con Teo Mammucari ,” Taratata ” del giornalista Francesco Mollica, nel programma “Ti lascio una canzone“ con Massimo Ranieri condotto da Antonella Clerici." },
    { image: girolami, name: "Floria Girolami", course: "Oboe", description: "Della classe 1988, si è diplomata in Oboe presso il Conservatorio di Musica “Licinio Refice” di Frosinone, ha conseguito il Diploma di Secondo Livello in Musica da Camera sotto la guida dei Maestri Francesca Vicari e Giuseppe Mastrangelo. Si è perfezionata con il M° Thomas Indermühle alla Fondazione Scuola di Musica di Fiesole e con il M° Francesco Di Rosa presso la Fondazione Accademia Nazionale di Santa Cecilia di Roma. Ha approfondito i suoi studi musicali al Conservatorio Superiore “Salvador Seguí” di Castellón de la Plana (Spagna). Ha collaborato con: l’Orchestra del Teatro dell’Opera di Roma ,Orchestra del Teatro Petruzzelli di Bari ; Orchestra Sinfonica Abruzzese, Orchestra Sinfonica di San Remo, Orchestra del Teatro Goldoni di Livorno, Orchestra Progetto Syntagma, Orchestra Filarmonica di Benevento, Orquesta Sinfónica Salvador Seguí, Orchestra Filarmonica della Calabria. Nel ramo della musica leggera ha accompagnato artisti come Amii Stewart, Max Gazzè, Il Volo, Andrea Bocelli, Tullio De Piscopo." },
    { image: latini, name: "Ilaria Latini", course: "Flauto", description: "Ha iniziato lo studio del flauto all’età di 7 anni e si è diplomandomi nel 2014 presso il Conservatorio di Musica “Licinio Refice” di Frosinone. Ha poi frequentato un corso di perfezionamento triennale presso l’Accademia Italiana del Flauto e ha partecipato a diverse masterclass con Maestri di rilievo. Si è esibita in vari contesti culturali, tra cui gli Incontri Musicali “Severino Gazzelloni” a Roma e il “Nepi Festival 2014” con l’Orchestra Accademia “San Giovanni” di Napoli ed in diverse occasioni in duo flauto e pianoforte. Insegna strumento dal 2017 e durante questi anni ha accumulato una significativa esperienza con ragazzi di diverse età." }
  ]

  const ZoomCard = styled(Card)({
    borderBottom: '7px solid rgba(255,255,255, 0.3)',
    '&:hover': {
      transition: 'transform 1s',
      transform: 'scale(1.02)',
      transformOrigin: 'top left',
      borderBottom: '7px solid #BDD054'
    }
  })

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "100%",
    maxWidth: "800px",
    backgroundColor: 'white',
    boxShadow: 24,
    p: 4,
    padding: "20px",
    maxHeight: "100%",
    overflow: "auto"
  };

  return (
    <React.Fragment>
      <AppBar />
      <Modal
        open={!!selectedTeacher}
        onClose={() => setSelectedTeacher()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grow in={!!selectedTeacher}>
          <Box style={style}>
            <Close sx={{ float: "right", cursor: "pointer" }} onClick={() => setSelectedTeacher()} />
            <Typography component="div" variant="h4" sx={{ textTransform: "uppercase" }}>
              {selectedTeacher && selectedTeacher.name}
            </Typography>
            <Typography component="div" variant="h6" >
              {selectedTeacher && selectedTeacher.course}
            </Typography>
            <Typography variant="string" component="div">
              {selectedTeacher && selectedTeacher.description}
            </Typography>
          </Box>
        </Grow>
      </Modal>
      <Container maxWidth="xl" sx={{ paddingBottom: "10px" }}>
        <Grid container spacing={2}>
          {teachers.map(t => (
            <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
              <CardActionArea component="button" onClick={() => setSelectedTeacher(t)}>
                <ZoomCard
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <CardMedia
                    component="img"
                    image={t.image}
                    sx={{ height: "300px" }}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      backgroundColor: "rgba(50, 50, 50, 0.5)",
                      width: "100%",
                      paddingTop: "0 !important",
                      paddingBottom: "5px !important"
                    }}>
                    <Typography component="div" variant="h4" sx={{ textTransform: "uppercase" }}>
                      {t.name}
                    </Typography>
                    <Typography component="div" variant="h6" >
                      {t.course}
                    </Typography>
                  </CardContent>
                </ZoomCard>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Container>
      <SocialFooter />
    </React.Fragment>
  );
}

export default Teachers;
