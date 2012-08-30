
(function (){
  Usergrid.Params = function(){};

  Usergrid.Params.prototype = {
    queryParams : {},
    parseParams : function(){
      if (window.location.search) {
        // split up the query string and store in an associative array
        var params = window.location.search.slice(1).split("&");
        for (var i = 0; i < params.length; i++) {
          var tmp = params[i].split("=");
          this.queryParams[tmp[0]] = unescape(tmp[1]);
        }
      }
    }
  };
})(Usergrid);

Usergrid.Params = new Usergrid.Params();