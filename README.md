# AntrContextMenu
AntrContextMenu

# Required
Jquery

src="jquery.min.js" type="text/javascript"

Bootstrap

href="bootstrap.min.css" rel="stylesheet"

src="bootstrap.min.js" type="text/javascript"

AntrContextMenu

href="AntrContextMenu.css" rel="stylesheet"

src="AntrContextMenu.js" type="text/javascript"

# AntrContextMenu Properties

{

  id: 'SomeItem',
  text: 'Some Item',
  imageUrl: './plugins/AntrContextMenu/img/shopping-basket.png', 
  isDisabled: true,
  items : [] // optional parameter
}

# Example Usage
<div id="Content1"></div>

$('#Content1').antrContextMenu({

                title: 'Contex Menu',
                items: [
                  { id: 'SomeItem', text: 'Some Item', imageUrl: './plugins/AntrContextMenu/img/shopping-basket.png', isDisabled: true },
                  { id: 'AnotherThing', text: 'Another Thing', imageUrl: './plugins/AntrContextMenu/img/receipt-text.png' },
                  { id: 'BlahBlah', text: 'Blah Blah', imageUrl: './plugins/AntrContextMenu/img/book-open-list.png' },
                  null, // Separator
                  { id: 'Sheep', text: 'Sheep', imageUrl: './plugins/AntrContextMenu/img/application-monitor.png' },
                  { id: 'Cheese', text: 'Cheese', imageUrl: './plugins/AntrContextMenu/img/bin-metal.png' },
                  { id: 'Bacon', text: 'Bacon', imageUrl: './plugins/AntrContextMenu/img/magnifier-zoom-actual-equal.png' },
                  null, // Separator
                  { id: 'Onwards', text: 'Onwards', imageUrl: './plugins/AntrContextMenu/img/application-table.png' },
                  { id: 'Flutters', text: 'Flutters', imageUrl: './plugins/AntrContextMenu/img/cassette.png', isDisabled: true }
                ],
                click: Content1Event
            });
             function Content1Event(e) {
            switch (e.id) {
                case "SomeItem": console.log("Click By ID : SomeItem"); break;
                case "AnotherThing": console.log("Click By ID : AnotherThing"); break;
                case "BlahBlah": console.log("Click By ID : BlahBlah"); break;
                case "Sheep": console.log("Click By ID : Sheep"); break;
                case "Cheese": console.log("Click By ID : Cheese"); break;
                case "Bacon": console.log("Click By ID : Bacon"); break;
                case "Onwards": console.log("Click By ID : Onwards"); break;
                case "Flutters": console.log("Click By ID : Flutters"); break;
            }
        }
        
