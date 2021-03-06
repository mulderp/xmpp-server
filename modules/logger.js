var xmpp = require('node-xmpp');
var logger = require('winston');

// http://xmpp.org/extensions/xep-0160.html
exports.name = "logger";


function Logger(client) {
    
    var self = this;
    this.logger = logger;
    
    this.format_log = function (message) {
        return client.streamId + " : " + message
    }
    
    client.on('stanza', function(stanza) {
        logger.debug(self.format_log(stanza.toString()));
    });
    
    client.on('session-started', function() {
        logger.info(self.format_log(stanza.toString()));
    });

    client.on('auth-success', function(jid) {
        logger.info(self.format_log("auth-success " + jid));
    });

    client.on('auth-failure', function(jid) {
        logger.info(self.format_log("auth-failure " + jid));
    });

    client.on('registration-success', function(jid) {
        logger.info(self.format_log("registration-success " + jid));
    });

    client.on('registration-failure', function(jid) {
        logger.info(self.format_log("registration-failure " + jid));
    });
}


exports.mod = Logger;

