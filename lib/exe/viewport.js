Ext.ns('Exe.Exedoc.view');

Exe.Exedoc.view.ViewPort = Ext.extend(Ext.Viewport, {
  layout : 'border',
  renderTo : Ext.getBody(),
  monitorResize : true,

  initComponent : function(){
    this.items = this.getRegiones();
    Exe.Exedoc.view.ViewPort.superclass.initComponent.call(this);
  },

  getRegiones : function(){
    return [{
      id : 'panelCenter',
      region : 'center',
      border : false,
      layout : 'fit',
      items : [new Exe.Exedoc.view.TabPanelPrincipal({
        ref : 'panelprincipal'
      })]
    }, {
      region : 'north',
      heigth : 300,
      //layout : 'column',
      /* asdsadsd
      items : [
      new Ext.BoxComponent({
        region : 'north',
        heigth : 90,
        columnWidth : 1,
        autoEl : {
          tag : 'div',
          html : '<img src="logo.jpg"/> ' 
        }
      }), {
        html : 'HOLA MUNDO'
      }]
      */
      tbar : [new Ext.BoxComponent({autoEl : {tag : 'div', html : '<img src="logo.jpg"/> ' }}), {
        text : 'Inicio',
        iconCls : 'icon-inicio',
        menu : [{
          text : 'Bandeja Entrada',
        }, {
          text : 'Bandeja Salida',
          iconCls : 'icon-bandejasalida'
        }]
      }, '-' , {
        text : 'Crear Expediente',
        iconCls : 'icon-crearex'
      }, '-' ,{
        text : 'Reportes',
        iconCls : 'icon-reporte'
      },'-' ,{
        text : 'Mantenedores',
        iconCls : 'icon-mantenedor'
      }, '->',{
        text : '',
        iconCls : 'icon-user'
      }, '-',{
        text : '',
        iconCls : 'icon-chat'
      }, '-',{
        text : '',
        iconCls : 'icon-notificacion'
      },'-' ,{
        text : '',
        iconCls : 'icon-ayuda'
      } ]
    }];
  }
});
 
