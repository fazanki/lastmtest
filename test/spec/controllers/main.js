 'use strict';

describe('Navigation Controller', function () {
  
  describe('Event functionality', function () {
    var fixture;
    beforeEach(function () {
      fixture = $('<section><article id="article0"></article><article id="article1"></article></section>')[0];
    });

    it('should add/remove is-visible class', function () {
       NavController.showHideArticle(fixture, 0);
       expect($(fixture).find('.is-visible').length).toBe(1);
    });

  });

  it('should create a list of links', function () {
    var ul = NavController.createList(window.data.hotels);
    expect($(ul).find('li').length).toBe(4);
  });

  it('should attach links list to the dom', function () {
    var nav = $('<nav/>')[0];
    NavController.appendlisttoDom(nav);
    expect($(nav).find('ul').length).toBe(1);
  });
});

describe('Content Controller', function () {
  var articles;
 
  beforeEach(function() {
    articles = SectionController.createAtricles(window.data.hotels);    
  });

  it('should create an array of articles', function () {  
    expect(articles.length).not.toBe(0);
  });

  it('should have an array item with main image classed as section-image', function () {  
    var article = articles[0];
    expect($(article).find('.section-image')).toBeTruthy();
  });

  it('should have an array item with h1 tag', function () {  
    var article = articles[0];
    expect($(article).find('.section-title')).toBeTruthy();
  });

  it('should have an array item with h1 tag', function () {  
    var article = articles[0];
    expect($(article).find('.section-title')).toBeTruthy();
  });

  it('should have an array item with rating', function () {  
    var article = articles[0];
    expect($(article).find('.rating-img')).toBeTruthy();
  });

  it('should have an array item with total', function () {  
    var article = articles[0];
    expect($(article).find('.secton-tottal')).toBeTruthy();
  });
});

