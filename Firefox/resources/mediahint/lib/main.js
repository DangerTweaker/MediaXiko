const {Cc,Ci} = require("chrome");
var prefs = Cc["@mozilla.org/preferences-service;1"].getService(Ci.nsIPrefBranch);
exports.main = function(){
	prefs.setIntPref("network.proxy.type", 2);
	prefs.setCharPref("network.proxy.autoconfig_url", "resource://mediahint-at-jetpack/mediahint/lib/default.pac");
}
exports.onUnload = function (reason) {
	prefs.setIntPref("network.proxy.type", 0);
	prefs.setCharPref("network.proxy.autoconfig_url", "");
};
