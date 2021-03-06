/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-csstransitions-shiv-cssclasses-testprop-testallprops-domprefixes
 */
 
$(function(){
	abilities();
	languages();
	fallback_animations();
});

function abilities(){
	var bars = $('#programming li').get(),
		r = 0%256,
		g = 77%256,
		b = 135%256,
		i = 0,
		j = bars.length,
		s = Math.round(100/j);
	
	for(; i < j; i++) {
		var bar = bars[i],
			new_width = +bar.getAttribute('data-score');
		
		r += s;
		g += s;
		b -= s;
			
		bar.style.backgroundColor = "rgb("+r+","+g+","+b+")";
		
		$(bar).delay(i*50)
			.animate({width:new_width + '%'});
	}
}

function languages(){
	var bars = $('#languages li div').get(),
		r = 0%256,
		g = 77%256,
		b = 135%256,
		i = 0,
		j = bars.length,
		s = Math.round(100/j);
	
	for(; i < j; i++) {
		var bar = bars[i],
			new_width = +bar.parentNode.getAttribute('data-score')*.85;
			colorstart = {r:r,g:g,b:b};
		
		r += s;
		g += s;
		b -= s;
			
		bar.style.backgroundColor = "rgb("+r+","+g+","+b+")";
		
		$(bar).delay(i*50)
			.animate({height:new_width + '%'});
	}
}

function retina_image(url,alt,height,width){
	if ((window.devicePixelRatio !== undefined) && (window.devicePixelRatio >= 2)){
		  var dot = url.lastIndexOf(".");
		  url = url.substr(0,dot) + "@2x" + url.substr(dot);
	}
	return '<img src="/cv/img/'+url+'" alt="'+alt+'" height="'+height+'" width="'+width+'">';
}

function fallback_animations(){
	if(!Modernizr.csstransitions){
		$('#contact ul li').hover(function(){
			$(this).stop().animate({opacity:.8,marginLeft:"12px"},300);
		}, function(){
			$(this).stop().animate({opacity:1,marginLeft:0},300);
		});
	}
}
 
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return x(""),i=k=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document);