/* functions for general use */


/* This function returns the value associated with 'whichParam' on teh URL */
function getUrlParameters(whichParam){
    var pageURL = window.location.search.substring(1);
    var pageURLVariables = pageURL.split('&');
    for (var i = 0; i < pageURLVariables.length; i++){
        var parameterName = pageURLVariables[i].split('=');
        if(parameterName[0] == whichParam){
            return parameterName[1];
        }
    }

}

var username = getUrlParameters('username');
if('undefined' == typeof username || !username){
    username = 'Anonymous_'+Math.random();
}
$('#messages').append('<h4>'+username+'</h4>');