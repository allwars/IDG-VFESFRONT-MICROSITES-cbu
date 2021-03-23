<!-- Configurador 3.0 -->


 ----------------------------------
| CAPÍTULO 1. JSON de configuración |
 ----------------------------------

Dentro del microsite existe un fichero config-info.json que se encarga de modificar información general del configurador. Promociones, precios, relaciones...

A contiunación encontrarás todos los elementos que conforman el json con un ejemplo de cada uno de ellos.

____________________

// "promos":

Esta primera opción que nos encontramos en el JSON es un array de objetos, cada posición del array va a ser una promoción. A continuación te presentamos como debe estar formado el objeto que va a llevar la información de la promoción.

"promos": [
    { "id": "promo-one-ilimitada", "description": "Pack Seriefans GRATIS y 31,99€/mes durante 3 meses, después 64,99€/mes", "price": null }
],


El "id" se va a utilizar en el html para identificar la promoción. Tiene que ser único y no se puede repetir. 

"description" es la descripción de la promoción.

"price" será el precio de descuento de la promoción que se aplicará en el ticket. Si no se aplica ningún precio "price" debe contener el valor null.


____________________

// "elements":

Aquí dentro encontraremos todos los objetos con la información asociada a las tarifas. Cada objeto lleva una clave (key) que es el id que tiene esa tarifa en el html. Por ejemplo "vodafone-one-mini" es el id que tiene la tarifa One Mini en el html. Por tanto todo lo que vaya dentro de esta key afectará a dicha tarifa.
Dentro de cada tarifa podemos encontrar:

"promos" que funciona de la misma manera que lo descrito más arriba, aunque en este caso se asocia únicamente a la tarifa.

"rels" son las relaciones que tiene la tarifa con el resto de elementos del configurador, por ejemplo la relación del a tarifa one ilimitada y el pack serielovers. "rels" es un array de objetos. Dentro de rels encontramos:

    "selector": Es el selector del elemento html que queremos relacionar. Por ejemplo en este caso usamos el id "pack-serielovers".

    "newPrice": Aquí pondremos el precio que tendrá este elemento cuando la tarifa esté activada. 

    "newDescription": Aquí podemos cambiar la descripción del elemento html.

    "newTitle": Aquí podemos cambiar el title del elemento html.

    "defaultAdded": Booleano (true | false) para especificar si cuando cambiemos la tarifa se añade un elemento al ticket directamente o no.


A continuación tienes un ejemplo de un objeto entero dentro de "elements":

    "vodafone-one-mini": {
            "promos": [
            ],
            "rels": [
                { "selector": "#pack-serielovers", "newPrice": 10 },
                { "selector": "#pack-cinefans", "newPrice": 12, "newTitle": "ejemplo", "newDescription": "nueva descripción" },
                { "selector": "#pack-seriefans", "newPrice": 10 },
                { "selector": "#huawei-y5" }
            ]
    },


NOTA:

    Hay que tener en cuenta que cuando modificamos cualquier información de un elemento del configurador, cuando cambiemos de tarifa se mantendrán los cambios que teníamos. Por esto deberemos modificar los mismos elementos en todas las tarifas. Si por ejemplo la tarifa Vodafone One Mini tiene el pack serielovers a 10€ y la ilimitada a 0€ tendremos en el resto de tarifas deberemos reflejar estos cambios. 

____________________

// "compatibilities":

    La estructura es similar a "elements". Tenemos los objetos cuya clave (key) es el id del elemento del html. Asociado a este elemento tenemos los ids de los elementos que nos compatibles dentro del ticket y el texto que se mostrará en la ventana modal que se abrirá para avisar de la no compatibilidad.

    Por ejemplo el pack serielovers no es compatible con el pack seriefans. Hay que tener en cuenta que esto es un array por lo que se pueden incluir varios ids. Lo mostraremos de la siguiente manera:

    "compatibilities": {
        "pack-serielovers": {
            "enemies":  ["pack-seriefans"],
            "text": "<p class=\"vfes-paragraph\">Tiene añadido en el ticket el Pack Serielovers que no es compatible con el Pack Seriefans dado que el Pack Serielovers incluye al Pack Seriefans.</p><p class=\"vfes-paragraph\">¿Está seguro de que desea elegir el Pack Seriefans?</p>"
        },
        "pack-seriefans": {
            "enemies": ["pack-serielovers"],
            "text": "<p class=\"vfes-paragraph\">Tiene añadido en el ticket el Pack Seriefans que no es compatible con el Pack Serielovers dado que el Pack Serielovers incluye al Pack Seriefans.</p><p class=\"vfes-paragraph\">¿Está seguro de que desea elegir el Pack Serielovers?</p>"
        }
    }


 ----------------------------------------
| CAPÍTULO 2. Modificaciones en el HTML  |
 ----------------------------------------

Cuando queramos añadir o modificar elementos en el configurador hay que tener en cuenta que existen varios tipos. Podemos tener bloques con elementos, bloques que son elementos y bloques contadores.

Los bloques con elementos son un <div>, por ejemplo, también puede ser un <ul> o lo que queramos, que contiene los elementos dentro.

Los bloques que son elementos, esto quiere decir de un bloque puede ser a la vez elemento. Por ejemplo, un terminal es solo un elemento que va asociado a una tarifa por lo que en el HTML lo pondremos como un bloque que es un elemento a su vez.

Los contadores son bloques cuya funcionalidad es añadir el mismo elemento, por ejemplo una tarifa de móvil, un número x de veces. Estos contadores son bloques y elementos a la vez que tienen una clase específica.

// BLOQUES:

Los bloques llevan la clase ".js-configurator-block" y el  atributo "data-configurator-config" que es un json con la siguiente información:

    "id": Es el id que va a llevar en el html el bloque dentro del ticket. 

    "title": Es el título con el que identificamos visualmente el bloque en el html.

    "svg": Es el icono que va a ir asociado a ese bloque en el ticket.
    
    "button": Es un booleano que activa o desactiva la opción de desplegar un contenido en el ticket. Si no queremos que se despliegue debe ser false. Si por lo contrario queremos que se despliegue tendrá el valor true.


Ejemplo:

data-configurator-config='{"id":"tarifa-one","title":"Tarifa Vodafone One","svg":"icon-tv-mid","button":true}'



// ELEMENTOS:

Los elementos llevarán la clase ".js-configurator-element".

Hay que tener en cuenta que un elemento puede ser a la vez un bloque. Un ejemplo de ello puede ser un terminal que se añada o se quite y dentro de ese bloque solo exista ese elemento.

Dentro de un elemento tenemos la siguiente información asociada a diferentes clases:
    .js-title (para el título)
    .js-description (para la descripción)
    .js-price (para el precio)
    .js-initial-pay(para los pagos iniciales)
    .js-li (para añadir una lista al elemento con   información adicional dentro del ticket)

Estas clases no son obligatorias, por lo que no hace falta añadirlas si no nos va interesar modificar estos campos.


// COUNTERS:

Estos son contadores que te añaden el mismo elemento el número de veces especificado. Este bloque-elemento se identifica con la clase ".js-configurator-counter". (máximo de tres elementos)

Aunque sea un elemento diferente del configurador también ha de llevar la clase ".js-configurator-element".

Dentro del contador podemos usar las mismas clases ya explicadas en los Elementos. La única diferencia, es que dentro tiene que existir un elemento de HTML con la clase ".js-num", que es el número incremental del contador, y dos botones para sumar o restar con las clases ".js-configurator-add" y ".js-configurator-remove" respectivamente.