Ext.ns('Exe.Exedoc.view');

Exe.Exedoc.view.WindowBusquedaGlobal = Ext.extend(Ext.Window, {
	form : null,
	layout : 'fit',
	title : 'B&#250;squeda',
	width : 700,
	height : 100,
	x : 40,
	y : 70,

	initComponent : function(){
		this.initForm();
		this.items = this.form;
		Exe.Exedoc.view.WindowBusquedaGlobal.superclass.initComponent.call(this);
	},

	initForm : function(){
		this.form = new Ext.form.FormPanel({
			layout : 'column',
			border : false,
			items : [{
				columnWidth : 0.25,
				style : 'padding : 5px 0px 0px 5px',
				border : false,
				layout : 'form',
				items : [{
					hideLabel : true,
					xtype :'textfield',
					emptyText : 'Buscar...',
	                name : 'first',
	                allowBlank : false
				}]
			}, {
				columnWidth : 0.10, 
				style : 'padding : 5px 0px 0px 5px',
				border : false,
				layout : 'form',
				items : [{
					xtype : 'button',
					text : 'Buscar'
				}]
			}, {
				columnWidth : 0.25, 
				style : 'padding : 5px 0px 0px 5px',
				border : false,
				layout : 'form',
				items : [{
					xtype : 'displayfield',
					value : '<a href="http://www.google.cl" >Avanzada </a>'
				}]
			}, {
				columnWidth : 0.3, 
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