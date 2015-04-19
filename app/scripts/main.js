'use strict';

var NavController = (function(){

	function createList(hotelsData) {
		var ul = document.createElement('ul'),
			li = '';
			ul.classList.add('nav-list');
		for (var i = 0; i < hotelsData.length; i++) { 
    	li += '<li class="nav-list_item"><a href="" id="link'+i+'">'+hotelsData[i].name+'</a></li>';
		}

		ul.innerHTML= li;
		
		return ul;
	}

	function appendlisttoDom (nav) {
		var list = new createList(window.data.hotels)
		nav.appendChild(list);
		bindEvents(nav);
	}

	function bindEvents(nav) {
		var a = nav.getElementsByTagName('a');

		for (var i = 0; i < a.length; i++) { 
			a[i].addEventListener('click', getLinkId);
		}
	}

	function getLinkId(e) {
		e.preventDefault();
		var id = this.getAttribute('id').replace('link', ''),
			section = document.getElementsByTagName('section')[0];
		showHideArticle(section, id);
	}

	function showHideArticle(section, id) {
		var articles = section.getElementsByTagName('article'),
			aId = 'article'+id;
		for (var i = 0; i < articles.length; i++) { 
			if (articles[i].getAttribute('id') === aId ) {
				articles[i].classList.add('is-visible');
			} else {
				articles[i].classList.remove('is-visible');
			}
		}
	}

  return {
    createList : createList,
    appendlisttoDom : appendlisttoDom,
    bindEvents: bindEvents,
    getLinkId: getLinkId,
    showHideArticle: showHideArticle
   
  };

}());		


var SectionController = (function(){

	/// create section 
	//  apend section
	
	function createAtricles(hotelsData) {
		var article,
				articles =[];

		for (var i = 0; i < hotelsData.length; i++) { 
    	article = [
    		'<article class="section_article" id="article',
    			i,
    			'">',	
	    		'<img src="',	
	    			hotelsData[i].imgUrl,
	    		'" alt="" class="section-image"/>',
	    		'<div class="tottal-summary">',
	    			'<h1 class="tottal-summary_title">',
	    				hotelsData[i].name,
	    			'</h1>',
	    			'<div class="tottal-summary_rating-img rating',
	    				hotelsData[i].rating,
	    			'"> </div>',
	    			'<p class="tottal-summary_tottal">',
	    				'<span class="tottal-summary_total-price">&pound;',
	    					hotelsData[i].price,
	    				'</span>',
	    				'<span class="tottal-summary_tottal_desc">Tottal hotel Stay</span>',
	    			'</p>',
	    		'</div>',
    		'</article>'
    	].join('');

    	articles.push(article);
		}

		return articles;
	}

	function appendContenttoDom(section) {
		var articles = new createAtricles(window.data.hotels),
			section = document.getElementsByTagName('section')[0];
		articles = articles.join('');
		section.innerHTML = articles;
		NavController.showHideArticle(section, 0);
	}

	return {
		appendContenttoDom: appendContenttoDom,
		createAtricles: createAtricles
	}; 
  
}());	

var init =(function(){

  return {
  	appendlisttoDom: NavController.appendlisttoDom,
  	appendContenttoDom: SectionController.appendContenttoDom
  };

}());	


