
# **TimeInn**

TimeInn és un projecte d’un portal web de gestió de notícies culturals i esdeveniments, com ara concerts, actuacions teatrals, cinema, etc.

És un projecte **conjunt de 2 DIW i DWEC.** Aquest projecte ha estat dissenyat per a desenvolupar-se, si és possible, **en grups de 2**.

Heu de crear un *wireframe* i un prototip de la pàgina web de **TimeInn**, un portal per a la publicació i gestió d’esdeveniments culturals tant per desktop com per phone.

## Vista Wireframe (Phone):


![Vista_ordenador](/src/docs/Wireframe_phone.png)

## Vista Wireframe (Desktop):


![Vista_telefono](/src/docs/Wireframe_desktop.png)

**Link al Warframe:**
- https://www.figma.com/file/1H1l0jGogjb9xLVYmxIcCy/Project?node-id=0%3A1
# 1 General


|<p></p><p></p><p></p><p>**PROJS**</p>|<p>[x] Cal seguir les[ ](https://docs.google.com/document/d/1ImIv0MihaxZJWmHPFyxGdp0GTb1QVYFfaTlQVcjVF_w/edit#heading=h.hxgmnv2vpkaw)[**Pautes de treball en Projectes**](https://docs.google.com/document/d/1ImIv0MihaxZJWmHPFyxGdp0GTb1QVYFfaTlQVcjVF_w/edit#heading=h.hxgmnv2vpkaw) vistes a classe.</p><p>[x] Crear un projecte a **GITHUB Projects**.</p><p>[x] Crear TASQUES i classificar-les en:  pendents, en desenvolupament i finalitzades. Etiquetar-les com a bug, documentació, etc.</p><p><br>[x] En cas d’errors o problemes, crear ISSUES i assignar-los a qui pertoqui.</p><p></p><p>[x] Cal que els companys del grup treballin en branques separades durant el desenvolupament del projecte. Els canvis significatius s’han d’integrar en la branca comuna.</p>|
| :-: | :- |


# 2 Sketch i Wireframe


|**WIREF**|<p>[x] **Creau un wireframe** (per a layout DESKTOP i MOBILE - no per TABLET) de l’aplicació emprant **Balsamiq** preferentment.  </p><p>[x] Poseu la **url** del vostre wireframe en el començament del README.MD</p><p>[x] Guardar les captures del wireframe a **/docs/wireframe**</p>|
| :-: | :- |


# 3 Pàgines


|**PAGS**|<p>[x] El web ha de contenir les pàgines:</p><p>1) **Front Page**</p><p>2) **Pàgina de llistat d’events**    </p><p>3) **Pàgina Form overlay (per crear un nou event)**</p>|
| :-: | - |
|**STRUC**|<p>[x] Totes les pàgines disposaran del mateix **Header i Footer**.</p><p>[x] Empra algun truc per a inserir el HTML del header i el footer en totes les pàgines ([**PILLS FOR PROJECTS**](https://docs.google.com/document/d/1i6S9bQKPk2kWvi5dLfVLZ16hn2x8-CXe25NQe5UaV78/edit#heading=h.jkbvj42pliv7))</p>|
|**HEAD** |[x] El **Header** i el **Footer** disposaran dels elements que considereu necessaris per a una web d’aquestes característiques.|

## 1.- Front Page

|**CONT**|<p>[x] El Front page contendrà:</p><p>- Header</p><p>- Un menu de navegació, mínim de 4 seccions</p><p>- Un video amb una actuació que es reprodueix en entrar a la pàgina</p><p>- Unes *cards* de **news** amb títol, descripció, data de publicació i foto. Se mostraran primer les notícies patrocinades i després les més recents.</p><p>- Unes *cards* de 3 **events** amb títol, foto, lloc on es celebra, data i hora. Se mostraran els events que estiguin més propers en el temps, primer els que arriben antes.</p><p>- Un calendari d’un mes. Clicant en el dia 1 accedim a Pantalla amb llistat d’events”</p><p>- Footer</p>|
| :-: | :- |
|**PALE**|<p>[x] La web ha estat creada emprant una paleta de colors** inclosa al README.MD de la documentació [en aquest format](https://docs.google.com/spreadsheets/d/1yDqy-8nK90b1t97e2DgLYaPvoB4jcuA5kv5AuZUdBN4/edit#gid=1182541801)</p><p>[x] Empra CSS Variables per guardar els colors de la paleta que empraràs en la web.</p>|
|**WEBF**|[x] La web empra una Google Font pels headings i una altra per la resta de textos. Les fonts triades les incloureum a la documentació [en aquest format](https://docs.google.com/spreadsheets/d/1yDqy-8nK90b1t97e2DgLYaPvoB4jcuA5kv5AuZUdBN4/edit#gid=0)|
|**TOP**|[x] Quan l’usuari arribi al final de la pàgina, trobarà un **Go back to top** button per tornar al principi de la pàgina|
|**SUBS**|<p>[x] Als 3 segons d’entrar en el home page, saltarà un **Formulari de subscripció**.</p><p>[x] Cal guardar en una **Cookie** si el formulari de subscripció s’ha mostrat a l’usuari, per a que no se li mostri dues vegades</p>|

|**NEWS**|[x] Crea una estructura de dades que guardi la informació d’almanco 10 news i empra-la per mostrar les news en el front page i per a la Pàgina de llistat d’events|
| :-: | :- |
|**EVENTS**|[x] Crea una estructura de dades que guardi la informació d’almanco 6 events i empra-la per mostrar les news en el front page i per a la Pàgina de llistat d’events|

## 2.- Pàgina amb llistat d’events

|**EVENTS**|[x] La Pàgina amb llistat d’events contendrà tots els events disponibles organitzats en files.|
| :-: | :- |
|**DOM**|[x] Aquest llistat es crearà amb Javascript, emprant mètodes de DOM|
|**REMO**|[x] En clicar la icona de Papelera al final d’una fila, s’esborrarà aquell event i es refrescarà la pantalla|
|**NOU**|[x] En clicar un botó **Nou Event**, es mostrarà la pàgina Form overlay de nou event|

## 3.-  Pàgina Form overlay/modal de nou event

|**OVERL**|<p>[x] Aquesta pàgina apareixerà en forma de **Overlay o Modal**, amb la resta de la pantalla difuminada.</p><p>[x] Per tancar-la, clicarem sobre una X situada en el cantó superior dret</p>|
| :- | :- |
|**CAMPS**|[x] Crea un formulari amb els camps necessaris per introduir les dades sobre un event.|
|**DATA**|<p>[x] Per seleccionar la Data de l’event (suposarem que tots els events tenen només 1 data assignada), emprarem el [JQuery Data Picker](https://jqueryui.com/datepicker/) ([PILLS FOR PROJECTS](https://docs.google.com/document/d/1i6S9bQKPk2kWvi5dLfVLZ16hn2x8-CXe25NQe5UaV78/edit#heading=h.m0kqnwsw5qo2))</p><p>[x] La data es guardarà sempre en el mateix format.</p>|
|**SAVE**|<p>[] En pulsar el botó **Guardar**, si tots els camps han estat emplenats, se guardara el nou event a l’estructura de dades</p><p>[x] Si no han estat emplenats tots els camps, no es guardarà en nou event i la pantalla seguirà igual (no se tancarà)</p><p>[x] Cada event tendrà un camp *id* pero el nostre estará en 'default' per la llogica</p>|
##

# 4 CSS and Visual Requirements


|**GRFL**|[x] **CSS Grid** and **Flexbox** are used to create the web page|
| :-: | :- |
|**DESIG**|[x]  Se segueixen en general els **criteris de disseny gràfic** de [B4.1.1](https://docs.google.com/document/d/1jFeR5CP9XJt_-D7DPrpodK7h5TEfot450u_ZTWHdP6o/edit)|
|**UX**|[x] Se segueixen en general els **criteris d’UX** (B5.2)|
|**RESPO**|<p>- [x] El Front Page és responsive i **adaptive**.</p><p>- La Pàgina de llistat d’events i la Pàgina Form overlay seran responsive</p><p>- El **menu** serà responsiu i en el mòbil tendrà forma de [botó ](https://en.wikipedia.org/wiki/Hamburger_button)[*hamburguer*](https://en.wikipedia.org/wiki/Hamburger_button)</p><p>- Comprovau si funciona en varis navegadors. Si no funciona bé, indicau-ho a la documentació</p>|
|**CONT**|[x] Els textos i les imatges son **realistes**. Per a les fitxes dels llibres en la front page, emprarem una mateixa imatge i dades però han de ser mínimament realistes.|
|**ICON**|[x] S’utilitzen almanco 3 **icones de [Font Awesome**](https://www.w3schools.com/icons/fontawesome5_intro.asp)** en la web.|


# 5 Technical Requirements


|**STYLE**|[x] Segueix la[ ](https://docs.google.com/document/d/1ImIv0MihaxZJWmHPFyxGdp0GTb1QVYFfaTlQVcjVF_w/edit#heading=h.el0wyqg0rqwy)[Guia d’Estil DIW](https://docs.google.com/document/d/1ImIv0MihaxZJWmHPFyxGdp0GTb1QVYFfaTlQVcjVF_w/edit#heading=h.el0wyqg0rqwy) per escriure estils nets, ordenats i clars.|
| :-: | :- |
|**CODE**|[x] Segueix La[ Guia d'estil DWEC](https://docs.google.com/document/d/1ImIv0MihaxZJWmHPFyxGdp0GTb1QVYFfaTlQVcjVF_w/edit#heading=h.ggolcb3ezvce)  per crear un codi clar i ben escrit.|
|**MODU**|[x] Empra mòduls per a organitzar el codi. ([PILLS FOR PROJECTS])(https://docs.google.com/document/d/1i6S9bQKPk2kWvi5dLfVLZ16hn2x8-CXe25NQe5UaV78/edit#heading=h.eivg23w1jna)|

## Documentació:

|**READ**|<p>- La documentació del projecte es crearà en el README.MD del repo</p><p>- Cal indicar l’adreça del **github project** emprat per a treballar en el projecte i del **wireframe** creat</p><p>- Cal indicar la **paleta de colors** i les **fonts emprades**, en el format indicat més adalt</p><p>- Cal indicar el elements predissenyats o codi *ad hoc* que hagueu emprat i la web d’on ho heu obtingut</p><p>- Indicau les **pàgines web** en les què us heu **inspirat** per crear el wireframe i/o el disseny</p>|
| :-: | - |
|**VIDEO**|[x] Creau un **video explicatiu** de la web, preferentment **en anglès**, que duri entre 5 i 10 minuts**.**|


# 6 Ampliacions


|**EDIT**|En clicar la icona de **Editar** d’una fila, apareixerà la mateixa pàgina Form Overlay de nou event amb les dades de l’event i en espitjar el botó Guardar**,** se modificaran les dades de l’event|
| :-: | :- |
|**FILTR**| A la Pagina amb llistat d’events creau filtres per: nom d’event, per data, per preu i/o altres que se t’ocurreixin|
|**GULP**| Emprau **GULP** per generar la versió de producció  ([PILLS FOR PROJECTS)](https://docs.google.com/document/d/1i6S9bQKPk2kWvi5dLfVLZ16hn2x8-CXe25NQe5UaV78/edit#heading=h.pb2c1yxlj6hy)|
|**PENJA**|[x] Empra *Netlify* (tal i com vam veure a classe) per penjar el projecte a la web|


|**ALTRES**| Podeu realitzar millores i ampliacions a la pràctica, més enllà de l’enunciat. Si ho feis, mencionau-les en la Documentació en un apartat anomenat **ALTRES**|
| :-: | :- |

# 7 Paleta de colors

![Paleta](/src/resources/img/paleta.PNG)

**Link a la paleta:**
- https://docs.google.com/spreadsheets/d1s-_Rzp-fvJWxmf0dDcmCcAOsCFAF5oSf4a1u7GacTfY/edit?usp=sharing

# 8 Fonts

**1r Font:**
- ![1r Font](/src/resources/img/primeraFont.PNG)
- https://docs.google.com/spreadsheets/d1s-_Rzp-fvJWxmf0dDcmCcAOsCFAF5oSf4a1u7GacTfY/edit?usp=sharing
- https://fonts.googleapis.com
- https://fonts.gstatic.com
- https://fonts.googleapis.com/css2?family=Caesar+Dressing&display=swap

**2n Font:**
- ![2N Font](/src/resources/img/segundaFont.PNG)
- https://fonts.googleapis.com
- https://fonts.gstatic.com
- https://fonts.googleapis.com/css2?family=Genos:ital@1&-display=swap

# 9 Video Explicatiu

- https://drive.google.com/file/d/14YIwWDIvbprj0P4zEuWCC2LN2ywv6hws/view?usp=sharing

<br /><br /><br /> 

# **Forms**

Es una aplicació del anterior projecte, se tracta de practicar validació de formularis, formularis accessibles i tests unitaris amb Mocha.

## Vista SingIn (Phone):

![Vista_telefono_singIn](/src/docs/singIn_phone.PNG )

## Vista SingUp (Desktop):


![Vista_desktop_singUp](/src/docs/singUp.PNG)

# 1 Formularis

|**PAGS**|[x] Afegiu un **Formulari de Login i un Formulari de Registre**|
| :-: | - |
|**STRUC**|[x] Els formularis no mostraran ni el Header ni el Footer|
|**FORMS**|[x] El Formulari login i el formulari de Sign Up està en fitxers html separats.. Un exemple [aquí](https://www.pccomponentes.com/login)|

# 2 Els Formularis
## Login:

|**FIELDS**|[x] Tendrà els camps necessaris.|
| :-: | :- |
|**LOGIN**|<p>[x] **Login incorrecte** (’usuari s’equivoca en l’email o el password) →  Sortirà un missatge d’error en el formulari (els errors tendran el color d’error de la Paleta de Colors)</p><p>[x] **Login correcte** → redireccionam a *front page* i es mostra un missatge com “Hola, Maria”  (per exemple, si l’usuària és Maria)</p><p>[x] El nom d’usuari es guarda a una *Cookie*. Així en refrescar la pàgina, continuarà sortint el missatge “Hola, Maria”</p>|

## Sign up:

|**FIELDS**|<p>[x] Camps mínims:</p><p>- **Email**</p><p>- **Name**</p><p>- **Password** i **Password2** (per confirmar el password introduït en el primer     camp). Les contrasenyes estaran ocultes amb asteriscs o similar</p>|
| :-: | :- |
|**RESP**|<p>[x] Els dos formularis seran responsive.</p><p>[x] En versió mòbil, els <label> aniran a sobre dels <input> per usabilitat</p>|
|**ACCES**|[x] Follow the [*Accessible Forms*](https://docs.google.com/presentation/d/16GLdtr0k3y10OH14-SIq3V2HwiaNLRbr-46FgC1LP9M/edit#slide=id.g70a89d522b_1_1) tutorial to make the form accessible|


|**NAME**|[x] El camp **Name** té un màxim de caracters que indicareu en el README|
| :-: | - |
|**EMAIL**|[x] El camp **Email** es valida en sortir del camp (en perdre el focus), comprovarem que  1) Compleix el patró de validació (fila següent) i que 2) no existeixi ja a la **taula d’usuaris** (Que és un **array** amb les dades usuaris registrats)|
|**VALID**|<p>[x] El patró de validació de l’Email és**:**</p><p>**                                                aaaaaaaaa@bbbbbbbb.ccc   </p><p>- **aaaaaaaaa**  en minúscules. La primera lletra pot ser majúscula</p><p>- **bbbbbbbb** té entre 5  i 10 lletres minúscules</p><p>- **ccc** només pot valer:   *com*, *net* o *gov*</p><p>- Només hi ha 1 arrova i 1 punt (i l’arrova abans que el punt)</p>|


|**PASSWD**|<p>[x] El camp **Password** es validarà en sortir del camp, comprovarem que 1) Compleix el patró de validacio (fila següent) i  2)  el valor és igual als 2 camps de Password</p><p>[x] En els camps de Password: Sortirà un **ull**. En clicar i sostenir el clic sobre l’ull, es mostra la contrasenya</p><p>[x] Mostrau missatges a sota dels camps per als errors que puguin succeir.</p>|
| :-: | - |
|**VALID**|[x] La patró de validació del Password l’establireu vosaltres. Ha de ser una contrasenya segura (fixau-vos en el que es sol fer en les pàgines reals). Indicau al README el patró escollit.|
|**EXPR**|[x] Validau els camps sempre que sigui possible amb **Expressions Regulars**|
|**SUBMIT**|<p>[x] En acabar el registre,</p><p>[x] **Si tot és correcte** → 1) Mostra un missatge que s’ha realitzat el registre) i 2) Guarda dades en **taula d’usuaris**</p><p>[x] Si alguna cosa no funciona → [posar el focus](https://www.w3schools.com/jsref/met_html_focus.asp) en **el primer camp amb errors**</p>|

|**MODU**|[x] Crear funcions per validar:  email i Password i ubicau-les en un fitxer de **mòdul**|
| :-: | :- |

# 3 Ampliacions

|**TESTS**|[] Creau tests per les funcions de validació amb Mocha.js. Creau mínim **3 *describe*** i un mínim de **2 *it* functions** per cada *describe*|
| :-: | :- |


# 4 Informació Regex

1. **NAME** , el camp **Name** té un mínim de 4 caracters i un màxim de 20 caracters i pot contenir caràcter az, AZ, 0-9, inclòs _ (guió baix).

2. **EMAIL** , el camp **Email** té un patró de validació:**</p><p>**                                                - aaaaaaaaa@bbbbbbbb.ccc   </p><p>- **aaaaaaaaa**  en minúscules. La primera lletra pot ser majúscula</p><p>- **bbbbbbbb** té entre 5  i 10 lletres minúscules</p><p>- **ccc** només pot valer:   *com*, *net* o *gov*</p><p>- Només hi ha 1 arrova i 1 punt (i l’arrova abans que el punt).</p>

3. **PASSWD**, el camp **Passwd** té un mínim de 8 caracters i un màxim de 20 caracters, pot contenir una combinació de caràcter com az, AZ, 0-9, inclòs _ (guió baix) i caracteres especials.


