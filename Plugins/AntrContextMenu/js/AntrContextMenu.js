/*
 ----------------------------------------------
  Copyright (c) 2015 - ANTRSOFT Company        
 ----------------------------------------------
  Designed by : Serhat AYDUS                   
 ----------------------------------------------
  Team : Antrsoft Team                         
 ----------------------------------------------
*/

jQuery.fn.antrContextMenu = function (Data) {
    // AntrContextMenu Default Settings
    var settings = {
        title: '',
        items: [],
        antrContextMenuClass: 'antrContextMenu',
        antrContextMenuGutterLineClass: 'gutterLine',
        antrContextMenuHeaderClass: 'header',
        antrContextMenuListMenuClass: 'dropdown-menu',
        antrContextMenuListSubMenuClass: 'dropdown-submenu',
        antrContextMenuSeperatorClass: 'seperator',
        click: undefined
    };

    // Merge Extend
    $.extend(settings, Data);

    // On contextmenu event (right click)
    this.bind('contextmenu', function (e) {
        // contextMenu ul create
        var contextMenu = $('<ul id="' + e.target.id + "_contextMenu" + '"  class="' + settings.antrContextMenuClass + ' ' + settings.antrContextMenuListMenuClass + '"></ul>').appendTo(document.body).show();
        // contextMenu title
        if (settings.title) { $('<li class="' + settings.antrContextMenuHeaderClass + '"></li>').text(settings.title).appendTo(contextMenu); }
        // contextMenu items each
        getList(settings.items, contextMenu);
        // Popup cursor position top - left
        var left = e.pageX + 5, top = e.pageY;
        if (top + contextMenu.height() >= $(window).height()) {
            top -= contextMenu.height();
        }
        if (left + contextMenu.width() >= $(window).width()) {
            left -= contextMenu.width();
        }
        // Create and show menu
        contextMenu.css({ zIndex: 1000001, left: left, top: top }).bind('contextmenu', function () { return false; });
        // Popup cancel click general div
        var bg = $('<div id="' + e.target.id + "_contextMenuDiv" + '" ></div>')
          .css({ left: 0, top: 0, width: '100%', height: '100%', position: 'absolute', zIndex: 1000000 })
          .appendTo(document.body)
          .bind('contextmenu dblclick', function () {
              bg.remove();
              contextMenu.remove();
              return false;
          });
        // contextMenu item click 
        contextMenu.find('a').click(function () {
            if ($(this).closest("li").attr("class") != "disabled") {
                bg.remove();
                contextMenu.remove();
            }
        });
        // Cancel event
        return false;
    });

    // getList
    function getList(item, $list) {
        if ($.isArray(item)) {
            $.each(item, function (key, value) {
                getList(value, $list);
            });
            return;
        }
        if (item) {
            var $li = $('<li />');
            if (item.text) {
                var row = $('<a tabindex="-1" id="' + item.id + '" style="padding-left:5px;"><span style="padding-left:5px;">' + item.text + '</span></a>');
                // Add contextMenu item img
                if (item.img) {
                    var img = $('<img>');
                    img.attr('src', item.img);
                    img.insertBefore(row.find('span'));
                }
                // Add contextMenu item isDisabled control
                if (item.isDisabled == true) {
                    // Add contextMenu item class disabled
                    $li.addClass("disabled");
                }
                else {
                    // Add Events
                    // Add Click Event
                    if (settings.click) {
                        row.click(function (e) {
                            if (settings.click != undefined) { settings.click(item); }
                        });
                    }
                }
                $li.append(row);
            }
            if (item.items && item.items.length) {
                $li.addClass("" + settings.antrContextMenuListSubMenuClass + "");
                var $sublist = $('<ul class="' + settings.antrContextMenuListMenuClass + '" />');
                getList(item.items, $sublist)
                $li.append($sublist);
            }
            $list.append($li)
        } else {
            // Add Separator
            $list.append($('<li class="' + settings.antrContextMenuSeperatorClass + '"></li>'));
        }
    }
    // return this
    return this;
};