Ext.ns('Exe.Exedoc.view');

Exe.Exedoc.view.TabPanelPrincipal = Ext.extend(Ext.Panel, {
  layout : 'border',
  tab : null,
  
  initComponent : function(){
  	this.tab = new Ext.TabPanel({
        activeTab : 0,
        region : 'center',
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
  	});
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
  	}, this.tab]
  }
}); 	