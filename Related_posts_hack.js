<pre>//&lt;![CDATA[
var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
function related_results_labels(json) {
for (var i = 0; i &lt; json.feed.entry.length; i++) {
var entry = json.feed.entry[i];
relatedTitles[relatedTitlesNum] = entry.title.$t;
for (var k = 0; k &lt; entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
relatedUrls[relatedTitlesNum] = entry.link[k].href;
relatedTitlesNum++;
break;
}
}
}
}
function removeRelatedDuplicates() {
var tmp = new Array(0);
var tmp2 = new Array(0);
for(var i = 0; i &lt; relatedUrls.length; i++) {
if(!contains(tmp, relatedUrls[i])) {
tmp.length += 1;
tmp[tmp.length - 1] = relatedUrls[i];
tmp2.length += 1;
tmp2[tmp2.length - 1] = relatedTitles[i];
}
}
relatedTitles = tmp2;
relatedUrls = tmp;
}
function contains(a, e) {
for(var j = 0; j &lt; a.length; j++) if (a[j]==e) return true;
return false;
}
function printRelatedLabels() {
var r = Math.floor((relatedTitles.length - 1) * Math.random());
var i = 0;
document.write('&lt;ul&gt;');
while (i &lt; relatedTitles.length &amp;&amp; i &lt; 20) {
document.write('&lt;li&gt;&lt;a href="' + relatedUrls[r] + '"&gt;' + relatedTitles[r] + '&lt;/a&gt;&lt;/li&gt;');
if (r &lt; relatedTitles.length - 1) {
r++;
} else {
r = 0;
}
i++;
}
document.write('&lt;/ul&gt;');
}
//]]&gt;
</pre>