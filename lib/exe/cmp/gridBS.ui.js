Ext.ns('Exe.Exedoc.view');
Exe.Exedoc.view.gridBSUi=Ext.extend(Ext.grid.GridPanel, {
	width:'100%',
	height: '100%',
	frame:true,
	stripeRows: true,

	initComponent: function(){
		this.initStore();
		this.columns= this.getColumns();
		Exe.Exedoc.view.gridBSUi.superclass.initComponent.call(this);
	},

	initStore: function(){
		this.store= new Ext.data.ArrayStore({
			storeId : 'BS',
			idIndex : 1,
			fields:[
				{name:'remitente', type: 'string'},
				{name:'emisor', type: 'string'},
				{name:'destinatario', type: 'string'},
				{name:'numeroExpediente', type: 'string'},
				{name:'ingreso', type: 'date', dateFormat:'d/m/Y'},
				{name:'plazo', type: 'date', dateFormat:'d/m/Y'},
				{name:'materia', type: 'string'},
				{name:'idExpediente', type: 'number'},
				{name:'recibido', type: 'bool'},
				{name:'formato', type: 'number'}
			],
			data:this.getDumyDataS()
		});	
	},

	getColumns: function(){
		return [
			{header:'Recibido', dataIndex: 'recibido', sortable:true},
			{header:'Formato', dataIndex: 'formato', sortable:true},
			{header:'Remitente', dataIndex: 'remitente', sortable:true},
			{header:'Emisor', dataIndex: 'emisor', sortable:true},
			{header:'Destinatario', dataIndex: 'destinatario', sortable:true},
			{header:'N° Expediente', dataIndex: 'numeroExpediente', sortable:true},
			{header:'Ingreso', dataIndex: 'ingreso', sortable:true, xtype:'datecolumn', format:'d/m/Y'},
			{header:'Plazo', dataIndex: 'plazo', sortable:true, xtype:'datecolumn', format:'d/m/Y'},
			{header:'Materia', dataIndex: 'materia', sortable:true}
		]
	},
	getDumyDataS:function(){
		return[
			['Director Generalde A.C','Director General de Aeronautica civil', 'Sub Depto S', 'E18/2012', '14/08/2012', '15/08/2012', 'Solicitud de tareas', 12, true, 2]

		];
	}
});