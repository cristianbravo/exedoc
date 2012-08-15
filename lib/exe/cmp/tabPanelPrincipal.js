Ext.ns('Exe.Exedoc.view');

Exe.Exedoc.view.TabPanelPrincipal = Ext.extend(Ext.Panel, {
  layout : 'border',
  
  initComponent : function(){
    this.items = this.getPaneles();
    Exe.Exedoc.view.TabPanelPrincipal.superclass.initComponent.call(this);
  },

  getPaneles : function(){
  	return [{
  		title : 'Panel 1', 
  		collapsible : true,
  		collapsed : true,
        width : 250,
        region : 'west'
  	}, {  		title : 'Panel 2', 
        region : 'center',
        xtype : 'tabpanel',
        activeTab : 0,
        items : [{
        	title : 'Dashboard',
        	iconCls : ' '
        }, {
        	title : 'Bandeja Entrada',
        	closable : true,
        	iconCls : ' '
        }
        , {
        	title : 'Bandeja Salida',
        	iconCls : ' '
        }]
  	}];
  }
}); 	