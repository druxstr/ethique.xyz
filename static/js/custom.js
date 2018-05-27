// Matomo tracking
var _paq=_paq||[];_paq.push(["setDomains",["*.ethique.xyz"]]);_paq.push(["setDoNotTrack",true]);_paq.push(['trackPageView']);_paq.push(['enableLinkTracking']);(function(){var u="//whoz.me/all/piwik/";_paq.push(['setTrackerUrl',u+'piwik.php']);_paq.push(['setSiteId','4']);var d=document,g=d.createElement('script'),s=d.getElementsByTagName('script')[0];g.type='text/javascript';g.async=true;g.defer=true;g.src=u+'piwik.js';s.parentNode.insertBefore(g,s)})();

// Cookie Consent opt-out iframe

onInitialise: function (status) {
  var type = this.options.type;
  var didConsent = this.hasConsented();
  if (type == 'opt-in' && didConsent) {
    alert('un');
  }
  if (type == 'opt-out' && !didConsent) {
    alert('deux');
  }
},

onStatusChange: function(status, chosenBefore) {
  var type = this.options.type;
  var didConsent = this.hasConsented();
  if (type == 'opt-in' && didConsent) {
    alert('trois');
  }
  if (type == 'opt-out' && !didConsent) {
    alert('quatre');
  }
},

onRevokeChoice: function() {
  var type = this.options.type;
  if (type == 'opt-in') {
    alert('cinq');
  }
  if (type == 'opt-out') {
    alert('six');
  }
},
