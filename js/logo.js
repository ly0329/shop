jQuery . get( ' /path/to/file，{param1: ' value1'}, function(data, textstatus, xhr) { 
//optional stuff to do after success
});
$.ajax({
I
url: ' /path/to/file，
type: ' default GET (other values: POST)',
dataType: ' default: Intelligent Guess (other values: xm1, json, script, or html) ',
data: {param1: 'value1' },
})
. done(function() {
console .1og(" success");
.fail(function() {
console .1og("error");
})
always (function() {
console .1og(" complete' );
});