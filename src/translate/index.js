
if (!window.Intl)
{
    window.Intl = require("intl");//se agrega el elemento Intl siempre que no exista esto es un caso especial para safari
    require("intl/locale-data/jsonp/en-US.js");
    require("intl/locale-data/jsonp/es.js");
}


//asignacion multiple
var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');//permite internaciolizar textos y fechas
var IntlMessageFormat  = window.IntlMessageFormat  = require('intl-messageformat');
var es                 = require("./es");
var en                 = require("./en");

//paquetes de idiomas
require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var relativeFormat = new IntlRelativeFormat("es");
var MESSAGES = {mx : es, us : en};

module.exports = {

	formatMessage : function(msg, numLike , local){
		local              = local || "mx";
		message            = MESSAGES[local];
		var messageFormat  = new IntlMessageFormat(message[msg], local);
		return messageFormat.format({likes:numLike});
	},

	formatDate : function(date, lang){
		lang               = lang || "es";
		var relativeFormat = new IntlRelativeFormat(lang);
		return relativeFormat.format(date);
	}	
};
