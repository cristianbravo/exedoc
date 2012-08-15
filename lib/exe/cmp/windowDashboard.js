Ext.ns('Exe.Exedoc.view');


Exe.Exedoc.view.WindowDashboard = Ext.extend(Ext.Window, {
	form : null,
	layout : 'fit',
	title : 'Indicadores',
	width : 400,
	height : 100,
	x : 800,
	y : 70,

	initComponent : function(){
		this.initForm();
		this.items = this.form;
		Exe.Exedoc.view.WindowDashboard.superclass.initComponent.call(this);
	},

	initForm : function(){
		this.form = new Ext.form.FormPanel({
			layout : 'column',
			border : false,
			items : [{
				columnWidth : 0.5,
				style : 'padding : 5px 0px 0px 5px',
				border : false,
				layout : 'form',
				items : [{
					hideLabel : true,
					xtype :'columnchart',
					store: store,
            		url:'../../resources/charts.swf',
            		xField: 'name',
				}]
			}, {
				columnWidth : 0.5, 
				style : 'padding : 5px 0px 0px 5px',
				border : false,
				layout : 'form',
				items : [{
					xtype : 'button',
					text : 'Buscar'
				}]
			}, {
				columnWidth : 0.5, 
				style : 'padding : 5px 0px 0px 5px',
				border : false,
				layout : 'form',
				items : [{
					xtype : 'displayfield',
					value : '<a href="http://www.google.cl" >Avanzada </a>'
				}]
			}, {
				columnWidth : 0.5, 
				style : 'padding : 5px 0px 0px 5px',
				border : false,
				layout : 'form',
				items : [{
					xtype : 'displayfield',
					value : '<a href="http://www.google.cl" >Guardar Busqueda</a>'
				}]
			}]
		});
	},
}); 	