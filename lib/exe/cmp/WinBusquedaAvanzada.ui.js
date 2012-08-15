Exe.Exedoc.view.WinBusquedaAvanzadaUi = Ext.extend(Ext.Window, {
	title : 'Busqueda Avanzada',
	modal : true,
	resizable : true,
	layout : 'fit',
	minimizable : true,
	maximizable : true,
	width : 500,
	height : 360,

	initComponent : function(){
		this.initForm();
		this.initButton();
		this.items = [this.buscador];
		this.buttons = [this.btnGuardarFiltro, this.btnBuscar];
		Exe.Exedoc.view.WinBusquedaAvanzadaUi.superclass.initComponent.call(this);
	},

	initForm : function(){
		this.buscador = new Ext.form.FormPanel({
			layout : 'column',
			frame : true,
			items : [{
				xtype : 'fieldset',
				title : 'Datos de B\u00fasqueda',
				columnWidth : .5,
				labelAlign : 'top',
				layout : 'form',
				style : 'padding-left:10px;',
				items : [{
					xtype : 'textfield',
					fieldLabel : 'Contenga',
					name : 'contenga',
					ref : '../../contenga',
					width : 180
				},{
					xtype : 'textfield',
					fieldLabel : 'N\u00b0 Expediente',
					name : 'numExpediente',
					ref : '../../numExpediente',
					width : 180
				},{
					xtype : 'datefield',
					fieldLabel : 'Fecha Inicio',
					name : 'fechaInicio',
					ref : '../../fechaInicio',
					width : 180,
					editable : false
				},{
					xtype : 'datefield',
					fieldLabel : 'Fecha T\u00e9rmino',
					name : 'fechaTermino',
					ref : '../../fechaTermino',
					width : 180,
					editable : false
				},{
					xtype : 'compositefield',
					fieldLabel : 'Usuario Emisor',
					width : 180,
					items : [{
						xtype : 'textfield',
						hideLabel : true,
						width : 155
					},{
						xtype : 'button',
						text : '',
						iconCls : 'icon-buscar'
					}]
				}]
			},{
				xtype : 'fieldset',
				title : 'Atributos',
				columnWidth : .5,
				labelAlign : 'top',
				layout : 'form',
				style : 'padding-left:10px;',
				items : [{
					xtype : 'combo',
					fieldLabel : 'Tipo Expediente',
					name : 'tipoExpediente',
					ref : '../../tipoExpediente',
					valueField : 'id',
					emptyText : 'Seleccione Opci\u00f3n',
					store : [[1, 'Expediente 1'],[2, 'Expediente 2']],
					width : 180
				},{
					xtype : 'combo',
					fieldLabel : 'Estado',
					name : 'estado',
					ref : '../../estado',
					valueField : 'id',
					emptyText : 'Seleccione Opci\u00f3n',
					store : [[1, 'Estado 1'],[2, 'Estado 2']],
					width : 180
				},{
					xtype : 'compositefield',
					fieldLabel : 'Usuario Remitente',
					items : [{
						xtype : 'textfield',
						hideLabel : true,
						width : 155
					},{
						xtype : 'button',
						text : '',
						iconCls : 'icon-buscar'
					}]
				},{
					xtype : 'compositefield',
					fieldLabel : 'Usuario Destinatario',
					width : 180,
					items : [{
						xtype : 'textfield',
						hideLabel : true,
						width : 155
					},{
						xtype : 'button',
						text : '',
						iconCls : 'icon-buscar'
					}]
				}]
			}]
		});
	},

	initButton : function() {
		this.btnGuardarFiltro = new Ext.Button({
			text : 'Guardar Filtro',
			scope : this,
			cmpEvent : 'guardarFiltro',
			iconCls : 'icon-guardar'
		});
		this.btnBuscar = new Ext.Button({
			text : 'Buscar',
			scope : this,
			cmpEvent : 'buscar',
			iconCls : 'icon-buscar'
		});
	}
});