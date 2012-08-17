Exe.Exedoc.view.WinLoginUi = Ext.extend(Ext.Window, {
	title : 'Acceso a sistema',
	modal : true,
	resizable : true,
	width : 400,
	height : 300,

	initComponent : function(){
		this.initForm();
		this.initButton();
		this.items = [this.login];
		this.buttons = [this.entrar];
		Exe.Exedoc.view.WinLoginUi.superclass.initComponent.call(this);
	},

	initForm : function(){
		this.login = new Ext.form.FormPanel({
			layout : 'form',
			frame : true,
			items : [{
				xtype : 'textfield',
				fieldLabel : 'Usuario',
				labelAlign : 'left'
			},{
				xtype : 'textfield',
				fieldLabel : 'Password',
				labelAlign : 'left'
			}]
		});
	},

	initButton : function() {
		this.entrar = new Ext.Button({
			text : 'Entrar',
			scope : this,
			cmpEvent : 'guardarFiltro'
		});
	}
});