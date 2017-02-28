// Beautiful Beta Javascript Library
// -------------------------------------------
// Version: 1.04
// Date: 2006-12-21
//Website: http://www.bloggerplugins.org/
//Credits:Credits for the logic of this module goes to HANS of http://beautifulbeta.blogspot.com/
// -------------------------------------------

function showsbtext(id,index) {
var bookmarktext=document.getElementById(id);
var sbValues= new Array();
  sbValues[0] = 'Bookmark this post:';
  sbValues[1] = 'Add to <strong>Digg</strong>:';
  sbValues[2] = 'Add to <strong>Delicious</strong>:';
  sbValues[3] = 'Add to <strong>Blinklist</strong>:';
  sbValues[4] = 'Add to <strong>Yahoo Web</strong>:';
  sbValues[5] = 'Add to <strong>Netvouz</strong>:';
  sbValues[6] = 'Add to <strong>Ma.gnolia</strong>:';
  sbValues[7] = 'Add to <strong>Fark</strong>:';
  sbValues[8] = 'Add to <strong>Furl</strong>:';
  sbValues[9] = 'Add to <strong>Technorati</strong>:';
  sbValues[10] = 'Add to <strong>Simpy</strong>:';
  sbValues[11] = 'Add to <strong>Spurl</strong>:';
  sbValues[12] = 'Add to <strong>Newsvine</strong>:';
  sbValues[13] = 'Add to <strong>Blinkbits</strong>:';
  sbValues[14] = 'Add to <strong>Smarkings</strong>:';
  sbValues[15] = 'Add to <strong>Segnalo</strong>:';
  sbValues[16] = 'Add to <strong>De.lirio.us</strong>:';
  sbValues[17] = 'Add to <strong>Reddit</strong>:';
  sbValues[18] = 'Add to <strong>Wists</strong>:';
  sbValues[20] = 'Add to <strong>Google</strong>:';
  sbValues[19] = 'Add to <strong>Stumble</strong>:';
  sbValues[21] = 'Add to <strong>Twitter</strong>:';
  sbValues[22] = 'Add to <strong>Facebook</strong>:';

document.getElementById(bookmarktext.id).innerHTML = sbValues[index];
}

function getPostTitle(fullpath) {
var splitinput = fullpath.split("/");
var lastpart = splitinput[5];
var linktext = lastpart.split(".html");
var postlink = fullpath.split("#");
var outputstring = linktext[0].replace(/-/g," ");
outputstring = "\"" + outputstring + "\"";
outputstring = outputstring.link(postlink[0]);
document.write(outputstring);
return;
}

function getCommentLink(clink) {
var splitinput = clink.split("#");
var commentlink = splitinput[0];
commentlink = commentlink.concat("#comment-",splitinput[1]);
var outputstring = "(more)";
outputstring= outputstring.link(commentlink);
document.write(outputstring);
}

function showrecentcomments(json) {
  for (var i = 0; i < numcomments; i++) {
    var entry = json.feed.entry[i];
    var alturl;

    if (i == json.feed.entry.length) break;
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        alturl = entry.link[k].href;
        break;
      }
    }
   alturl = alturl.replace("#", "#comment-");
   var postlink = alturl.split("#");
   postlink = postlink[0];
   var linktext = postlink.split("/");
   linktext = linktext[5];
   linktext = linktext.split(".html");
   linktext = linktext[0];
   var posttitle = linktext.replace(/-/g," ");
   posttitle = posttitle.link(postlink);
   var commentdate = entry.published.$t;
   var cdyear = commentdate.substring(0,4);
   var cdmonth = commentdate.substring(5,7);
   var cdday = commentdate.substring(8,10);
   var monthnames = new Array();
   monthnames[1] = "Jan";
   monthnames[2] = "Feb";
   monthnames[3] = "Mar";
   monthnames[4] = "Apr";
   monthnames[5] = "May";
   monthnames[6] = "Jun";
   monthnames[7] = "Jul";
   monthnames[8] = "Aug";
   monthnames[9] = "Sep";
   monthnames[10] = "Oct";
   monthnames[11] = "Nov";
   monthnames[12] = "Dec";
   var comment = entry.content.$t;
   var re = /<\S[^>]*>/g; 
   comment = comment.replace(re, "");
   if (showcommentdate == true) document.write('On ' + monthnames[parseInt(cdmonth,10)] + ' ' + cdday + ' ');
   document.write('<a STYLE="text-decoration:none"  href="' + alturl + '">' + entry.author[0].name.$t + '</a> commented');
   if (showposttitle == true) document.write(' on ' + posttitle);
   document.write(':<br/>');
   if (comment.length < numchars)
         document.write('<i>' + comment + '</i><br/><br/>');
   else
         document.write('<i>'+ comment.substring(0, numchars) + '...</i><br/><br/>');
  }
}
