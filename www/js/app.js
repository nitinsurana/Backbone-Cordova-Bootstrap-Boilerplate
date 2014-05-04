/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require.config({
    baseUrl: 'js',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'jquery.min',
        bootstrap:'bootstrap.min',
        backbone:'backbone-min',
        underscore:'underscore-min'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['jquery','underscore','backbone'],function($,_,Backbone){
    var HomeView=Backbone.View.extend({
        template:_.template($("#homeTemplate").html()),
        render:function(){
            this.$el.append(this.template());
        },
        events:{
            "click .download":'downloadSong'
        },
        downloadSong:function(event){
            console.log("Download Song...");
        }
    });
    
    var Router=Backbone.Router.extend({
        routes:{
            "":"index",
        },
        index:function(){
            var homeView=new HomeView({el:".container"});
            homeView.render();
        }
    });
    
    var router=new Router();
    Backbone.history.start();
    
});


