
var header_content = '<div class="text">'
'<h1 style="font-size:50px">ARE YOU<br>READY?</h1>'
    '<br></br>'
    '<br></br>'
    '<br></br>'
    '<br></br>'
'<a href="https://www.link.com" class="bn1">Find out more</a>'
'</div>' ;
var footer_content = '<div class="footcontainer">';
'<div class="footleft">'
   '<strong>About</strong><br>'
   '<a href="mailto:Tallisen@live.com">About us</a><br>'
   '<a href="https://www.link.com">Blog</a><br>'
   '<a href="https://www.link.com">Terms of Service</a><br>'
'</div>'

'<div class="footlefttwo">'
 '<strong>Placeholder</strong>'
'</div>'

'<div class="footright">'
 '<strong>Placeholder</strong>'
'</div>'
'<div class="footrighttwo">'
 '<strong>Kontakt</strong><br>'
 '<a href="mailto:Tallisen@live.com">Tallisen@live.com</a><br>'
 '<a href="https://www.link.com">Facebook</a><br>'
 '<a href="https://www.link.com">Instagram</a><br>'
 '<a href="https://www.link.com">Twitter</a>'
'</div>'
'</div>';

var header_element = document.getElementById('header');
var footer_element = document.getElementById('footer');

header_element.innerHTML = header_content;
footer_element.innerHTML = footer_content;