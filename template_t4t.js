var boxHeight = 80;
var textHeight = 14;
var textMargin = 6;

template = {
  "name": "Church circles 0.1",
  "svg": {
    "node-big-rect": {
      "type": "rect",
      "attributes": {
        "x": - boxHeight / 2,
        "y": 0,
        "width": boxHeight,
        "height": boxHeight,
        "opacity": "0"
      }
    },
    "node-attenders-image": {
      "type": "image",
      "attributes": {
        "x": - boxHeight * 0.45,
        "y": - 2.5 * textHeight,
        "width": boxHeight / 4,
        "height": boxHeight / 4,
        "href": "icons/attenders.png"
      }
    },
    "node-believers-image": {
      "type": "image",
      "attributes": {
        "x": - boxHeight * 0.125,
        "y": - 2.5 * textHeight,
        "width": boxHeight / 4,
        "height": boxHeight / 4,
        "href": "icons/believers.png"
      }
    },
    "node-baptized-image": {
      "type": "image",
      "attributes": {
        "x": boxHeight * 0.2,
        "y": - 2.5 * textHeight,
        "width": boxHeight / 4,
        "height": boxHeight / 4,
        "href": "icons/element-baptism.png"
      }
    }
  },
  "fields": [
    {
      "header": "id",
      "initial": 0,
      "description": "Id",
      "type": null
    },
    {
      "header": "parentId",
      "initial": null,
      "description": "Parent",
      "type": null
    },
    {
      "header": "name",
      "initial": "Name",
      "description": "Name",
      "type": "text",
      "svg": {
        "type": "text",
        "attributes": {
          "x": 0,
          "y": boxHeight + textHeight
        }
      }
    },
    {
      "header": "coach",
      "initial": "",
      "description": "Coach",
      "type": "text"
      // svg defined currently in genmapper.js
    },
    {
      "header": "attenders",
      "initial": 0,
      "description": "# of Attenders",
      "type": "text",
      "svg": {
        "type": "text",
        "attributes": {
          "x": - boxHeight * 0.325,
          "y": - 0.5 * textMargin
        },
        "style": {
          "text-anchor": "center"
        }
      }
    },
    {
      "header": "believers",
      "initial": 0,
      "description": "# of Believers",
      "type": "text",
      "svg": {
        "type": "text",
        "attributes": {
          "x": 0,
          "y": - 0.5 * textMargin
        },
        "style": {
          "text-anchor": "center"
        }
      }
    },
    {
      "header": "baptized",
      "initial": 0,
      "description": "# of Baptized",
      "type": "text",
      "svg": {
        "type": "text",
        "attributes": {
          "x": boxHeight * 0.325,
          "y": - 0.5 * textMargin
        },
        "style": {
          "text-anchor": "center"
        }
      }
    },
    {
      "header": "church",
      "initial": false,
      "description": "Is church?",
      "type": "checkbox",
      "svg": {
        "type": "rect",
        "attributes": {
          "x": - boxHeight / 2,
          "y": 0,
          "rx": boxHeight * 0.5,
          "width": boxHeight,
          "height": boxHeight,
          "stroke-dasharray": "7, 7"
        }
      }
    },
    {
      "header": "element-baptism",
      "initial": false,
      "description": "Element: Baptism",
      "type": "checkbox",
      "svg": {
        "type": "image",
        "attributes": {
          "x": - boxHeight * 0.4,
          "y": boxHeight * 0.1,
          "width": boxHeight / 4,
          "height": boxHeight / 4,
          "xlink:href": "icons/element-baptism.png"
        }
      }
    },
    {
      "header": "element-word",
      "initial": false,
      "description": "Element: God's Word",
      "type": "checkbox",
      "svg": {
        "type": "image",
        "attributes": {
          "x": - boxHeight * 0.125,
          "y": boxHeight * 0.1,
          "width": boxHeight / 4,
          "height": boxHeight / 4,
          "xlink:href": "icons/element-word.png"
        }
      }
    },
    {
      "header": "element-prayer",
      "initial": false,
      "description": "Element: Prayer",
      "type": "checkbox",
      "svg": {
        "type": "image",
        "attributes": {
          "x": boxHeight * 0.15,
          "y": boxHeight * 0.1,
          "width": boxHeight / 4,
          "height": boxHeight / 4,
          "xlink:href": "icons/element-prayer.png"
        }
      }
    },
    {
      "header": "element-lords-supper",
      "initial": false,
      "description": "Element: Lord's supper",
      "type": "checkbox",
      "svg": {
        "type": "image",
        "attributes": {
          "x": - boxHeight * 0.4,
          "y": boxHeight * 0.375,
          "width": boxHeight / 4,
          "height": boxHeight / 4,
          "xlink:href": "icons/element-lords-supper.png"
        }
      }
    },
    {
      "header": "element-give",
      "initial": false,
      "description": "Element: Giving",
      "type": "checkbox",
      "svg": {
        "type": "image",
        "attributes": {
          "x": - boxHeight * 0.125,
          "y": boxHeight * 0.375,
          "width": boxHeight / 4,
          "height": boxHeight / 4,
          "xlink:href": "icons/element-give.png"
        }
      }
    },
    {
      "header": "element-love",
      "initial": false,
      "description": "Element: Love",
      "type": "checkbox",
      "svg": {
        "type": "image",
        "attributes": {
          "x": boxHeight * 0.15,
          "y": boxHeight * 0.375,
          "width": boxHeight / 4,
          "height": boxHeight / 4,
          "xlink:href": "icons/element-love.png"
        }
      }
    },
    {
      "header": "element-worship",
      "initial": false,
      "description": "Element: Worship",
      "type": "checkbox",
      "svg": {
        "type": "image",
        "attributes": {
          "x": - boxHeight * 0.4,
          "y": boxHeight * 0.65,
          "width": boxHeight / 4,
          "height": boxHeight / 4,
          "xlink:href": "icons/element-worship.png"
        }
      }
    },
    {
      "header": "element-leaders",
      "initial": false,
      "description": "Element: Leaders",
      "type": "checkbox",
      "svg": {
        "type": "image",
        "attributes": {
          "x": - boxHeight * 0.125,
          "y": boxHeight * 0.65,
          "width": boxHeight / 4,
          "height": boxHeight / 4,
          "xlink:href": "icons/element-leaders.png"
        }
      }
    },
    {
      "header": "element-make-disciples",
      "initial": false,
      "description": "Element: Make disciples",
      "type": "checkbox",
      "svg": {
        "type": "image",
        "attributes": {
          "x": boxHeight * 0.15,
          "y": boxHeight * 0.65,
          "width": boxHeight / 4,
          "height": boxHeight / 4,
          "xlink:href": "icons/element-make-disciples.png",
        }
      }
    },
    {
      "header": "placeDate",
      "initial": "Place & Date",
      "description": "Place & Date",
      "type": "text",
      "svg": {
        "type": "text",
        "attributes": {
          "x": 0,
          "y": boxHeight + 2 * textHeight
        }
      }
    },
    {
      "header": "three-thirds",
      "initial": "1234567",
      "description": "Elements of 3/3 process",
      "type": "text",
      "svg": {
        "type": "text",
        "attributes": {
          "x": boxHeight * -0.7,
          "y": boxHeight * 0.6,
          "transform": "rotate(90 -56 48)",
          "rotate": -90
        },
        "style": {
          "text-anchor": "center",
          "letter-spacing": "0.35em"
        }
      }
    },

    {
      "header": "active",
      "initial": true,
      "description": "Active",
      "type": "checkbox"
      // svg defined currently in genmapper.js
    }
  ]
};
