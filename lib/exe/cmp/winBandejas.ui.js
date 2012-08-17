Ext.ns('Exe.Exedoc.view');
Exe.Exedoc.view.winBandejasUi=Ext.extend(Ext.Window, {
	frame:true,
	width:700,
	layout:'fit',
	height: 400,
	minimizable: true,
	maximizable: true,
	closable: false,
	initComponent: function(){
		this.initElements();
		this.items=this.form;
		Exe.Exedoc.view.winBandejasUi.superclass.initComponent.call(this);
	},
	initElements: function(){
		this.form=new Ext.form.FormPanel({
			items:[{
				xtype:'tabpanel',
				activeTab:0,
				width:'100%',
				height:'100%',
				items:[{
					title: 'Bandeja de entrada',
					layout:'column',
					items: new Exe.Exedoc.view.gridBE()
				},{
					title: 'Bandeja de Salida',
					layout:'column',
					items: new Exe.Exedoc.view.gridBS()
				}, {
					title: 'Bandeja Copia'
				}, {
					title: 'Bandeja Compartida'
				}]
			}]
		});
	}
});