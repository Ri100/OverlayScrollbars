var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);
var ios = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);
	
var sheet = ios.newURI('data:text/css;charset=utf-8,' + encodeURIComponent('\
  @namespace url(http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul); \
  @namespace html url("http://www.w3.org/1999/xhtml"); \
  
	scrollbar { -moz-appearance:none !important; 
		border-radius: 0px; 
		background-color: transparent; 
		background-image: none; 
		padding: 0px; 
		position: relative; 
		z-index: 2147483647;}
	scrollbar[orient="vertical"] {-moz-margin-start: -10px; 
		min-width: 10px; 
		max-width: 10px;} scrollbar[orient="horizontal"] {margin-top: -10px; 
		min-height: 10px; 
		max-height: 10px;}
	scrollbar thumb {-moz-appearance: none !important; 
		border-width: 0px !important; 
		background-image: -moz-linear-gradient(top left, rgba(255,255,255,0.25), rgba(255,255,255,0.25), rgba(255,255,255,0.25)); 
		background-color: rgba(0,0,0,0.35) !important; 
		border-radius: 0px !important;}
	scrollbar scrollbarbutton, scrollbar gripper {display: none;} \
	  '), null, null);

function install() {}
function uninstall() {}

function startup(aData, aReason) {
  if (!this.sss.sheetRegistered(this.sheet,this.sss.AGENT_SHEET)) this.sss.loadAndRegisterSheet(this.sheet,this.sss.AGENT_SHEET);
}

function shutdown(aData, aReason) {
  if (aReason == APP_SHUTDOWN) return;
  if (this.sss.sheetRegistered(this.sheet,this.sss.AGENT_SHEET)) this.sss.unregisterSheet(this.sheet,this.sss.AGENT_SHEET);
}
