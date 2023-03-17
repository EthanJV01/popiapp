// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'auto',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'App Framework7',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/about/',
    	url: 'about.html',
    	name: 'about',
  		},
		{
		path: '/register/',
    	url: 'register.html',
    	name: 'register',
  		},
		{
		path: '/login/',
    	url: 'login.html',
    	name: 'login',
  		},
		{
		path: '/registerpt2/',
    	url: 'registerpt2.html',
    	name: 'registerpt2',
  		},
		{
		path: '/registerpt3/',
    	url: 'registerpt3.html',
    	name: 'registerpt3',
  		}
		,
		{
		path: '/home2/',
    	url: 'index2.html',
    	name: 'shome2',
  		},
		{
		path: '/home3/',
    	url: 'index3.html',
    	name: 'home3',
  		},
		{
		path: '/mapa/',
    	url: 'mapa.html',
    	name: 'mapa',
  		}
		
	],
	dialog: {
		title: 'Diseño Web App',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login-screen');
		
		app.dialog.alert('¡ Bienvenido a la APP !');
    }
	
});



$$(document).on('click', '#btnCheckout', function (e) {
	e.preventDefault();

	
	app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {
		
		//app.dialog.alert('Great!');
		
		var notification = app.notification.create({
		  icon: '<i class="material-icons">check</i>',
		  title: 'Order',
		  titleRightText: '',
		  subtitle: '',
		  text: "Your order has been received.",
		  closeTimeout: 3000,
		});
		notification.open();
		
	});
	
	
	
});





