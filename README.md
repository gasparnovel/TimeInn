
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

|**CONT**|<p>[] El Front page contendrà:</p><p>- Header</p><p>- Un menu de navegació, mínim de 4 seccions</p><p>- Un video amb una actuació que es reprodueix en entrar a la pàgina</p><p>- Unes *cards* de **news** amb títol, descripció, data de publicació i foto. Se mostraran primer les notícies patrocinades i després les més recents.</p><p>- Unes *cards* de 3 **events** amb títol, foto, lloc on es celebra, data i hora. Se mostraran els events que estiguin més propers en el temps, primer els que arriben antes.</p><p>- Un calendari d’un mes. Clicant en el dia 1 accedim a Pantalla amb llistat d’events”</p><p>- Footer</p>|
| :-: | :- |
|**PALE**|<p>[x] La web ha estat creada emprant una paleta de colors** inclosa al README.MD de la documentació [en aquest format](https://docs.google.com/spreadsheets/d/1yDqy-8nK90b1t97e2DgLYaPvoB4jcuA5kv5AuZUdBN4/edit#gid=1182541801)</p><p>[x] Empra CSS Variables per guardar els colors de la paleta que empraràs en la web.</p>|
|**WEBF**|[x] La web empra una Google Font pels headings i una altra per la resta de textos. Les fonts triades les incloureum a la documentació [en aquest format](https://docs.google.com/spreadsheets/d/1yDqy-8nK90b1t97e2DgLYaPvoB4jcuA5kv5AuZUdBN4/edit#gid=0)|
|**TOP**|[x] Quan l’usuari arribi al final de la pàgina, trobarà un **Go back to top** button per tornar al principi de la pàgina|
|**SUBS**|<p>[x] Als 3 segons d’entrar en el home page, saltarà un **Formulari de subscripció**.</p><p>[x] Cal guardar en una **Cookie** si el formulari de subscripció s’ha mostrat a l’usuari, per a que no se li mostri dues vegades</p>|

|**NEWS**|[] Crea una estructura de dades que guardi la informació d’almanco 10 news i empra-la per mostrar les news en el front page i per a la Pàgina de llistat d’events|
| :-: | :- |
|**EVENTS**|[] Crea una estructura de dades que guardi la informació d’almanco 6 events i empra-la per mostrar les news en el front page i per a la Pàgina de llistat d’events|

## 2.- Pàgina amb llistat d’events

|**EVENTS**|[] La Pàgina amb llistat d’events contendrà tots els events disponibles organitzats en files.|
| :-: | :- |
|**DOM**|[x] Aquest llistat es crearà amb Javascript, emprant mètodes de DOM|
|**REMO**|[] En clicar la icona de Papelera al final d’una fila, s’esborrarà aquell event i es refrescarà la pantalla|
|**NOU**|[x] En clicar un botó **Nou Event**, es mostrarà la pàgina Form overlay de nou event|

## 3.-  Pàgina Form overlay/modal de nou event

|**OVERL**|<p>[x] Aquesta pàgina apareixerà en forma de **Overlay o Modal**, amb la resta de la pantalla difuminada.</p><p>[x] Per tancar-la, clicarem sobre una X situada en el cantó superior dret</p>|
| :- | :- |
|**CAMPS**|[] Crea un formulari amb els camps necessaris per introduir les dades sobre un event.|
|**DATA**|<p>[x] Per seleccionar la Data de l’event (suposarem que tots els events tenen només 1 data assignada), emprarem el [JQuery Data Picker](https://jqueryui.com/datepicker/) ([PILLS FOR PROJECTS](https://docs.google.com/document/d/1i6S9bQKPk2kWvi5dLfVLZ16hn2x8-CXe25NQe5UaV78/edit#heading=h.m0kqnwsw5qo2))</p><p>[x] La data es guardarà sempre en el mateix format.</p>|
|**SAVE**|<p>[] En pulsar el botó **Guardar**, si tots els camps han estat emplenats, se guardara el nou event a l’estructura de dades</p><p>[] Si no han estat emplenats tots els camps, no es guardarà en nou event i la pantalla seguirà igual (no se tancarà)</p><p>[] Cada event tendrà un camp *id* amb valor aleatori entre 1 i 999.999</p>|
##

# 4 CSS and Visual Requirements


|**GRFL**|[x] **CSS Grid** and **Flexbox** are used to create the web page|
| :-: | :- |
|**DESIG**|[x]  Se segueixen en general els **criteris de disseny gràfic** de [B4.1.1](https://docs.google.com/document/d/1jFeR5CP9XJt_-D7DPrpodK7h5TEfot450u_ZTWHdP6o/edit)|
|**UX**|[x] Se segueixen en general els **criteris d’UX** (B5.2)|
|**RESPO**|<p>- [] El Front Page és responsive i **adaptive**.</p><p>- La Pàgina de llistat d’events i la Pàgina Form overlay seran responsive</p><p>- El **menu** serà responsiu i en el mòbil tendrà forma de [botó ](https://en.wikipedia.org/wiki/Hamburger_button)[*hamburguer*](https://en.wikipedia.org/wiki/Hamburger_button)</p><p>- Comprovau si funciona en varis navegadors. Si no funciona bé, indicau-ho a la documentació</p>|
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
|**VIDEO**|[] Creau un **video explicatiu** de la web, preferentment **en anglès**, que duri entre 5 i 10 minuts**.**|


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