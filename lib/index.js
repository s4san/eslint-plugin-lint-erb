/**
 * @fileoverview Allow eslinting, erb files.
 * @author Sandeep
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


var erbString = new RegExp('\'<%(.*?)\%>\'', 'g');
var erbExpression = new RegExp('<%(.*?)\%>', 'g');
var erbBlock = new RegExp('<%(\s|\S)*?\%>(\s|\S)*?<%(\s|\S)*?(end|END)(\s|\S)*?\%>', 'g');

// import processors
module.exports.processors = {
  ".erb": {
    preprocess: function(text, filename) {
      var lintableText = text
        .replace(erbString, '\'Ignored Ruby String.\'')
        .replace(erbBlock, '/* \'Ignored Ruby Block.\' */')
        .replace(erbExpression, '\'Ignored Ruby Expression.\'');

      return [lintableText];
    },
    postprocess: function(messages, filename) {
      return messages[0];
    }
  }
};