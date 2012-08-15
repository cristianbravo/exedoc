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
      items : [new Exe.Exedoc.view.TabPanelPrincipal()]
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
        text : 'Principal',
        menu : [{
          text : 'Bandeja Entrada'
          //cmpEvent : 'abrirBE()'
        }, {
          text : 'Bandeja Salida'
        }]
      }, '-' , {
        text : 'Boton 2'
      }, '-' ,{
        text : 'Boton 3'
      }, '->',{
        text : 'Salir'
      } ]
    }];
  }
});
 
