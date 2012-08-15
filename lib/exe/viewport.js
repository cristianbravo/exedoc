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
        text : 'Principal',
        menu : [{
          text : 'Bandeja Entrada',
          handler : function(){
            console.log()
          },
          scope : this
        }, {
          text : 'Inicio'
        }]
      }, '-' , {
        text : 'Crear Expediente'
      }, '-' ,{
        text : 'Reportes'
      }, '-' ,{
        text : 'Mantenedores'
      }, '-' ,{
        text : 'Ayuda',
        handler : function(){
          new Ext.Window({
            layout:'fit',
            width:500,
            height:300,
            closeAction:'hide',
            plain: true
          })
        }
      }, '->',{
        text : 'Salir'
      } ]
    }];
  }
});
 
