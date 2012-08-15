/**
* Bootstrap/loader de la aplicacion
*
*/
Ext.onReady(function(){        
       Ext.QuickTips.init();
       
       //new Exe.fiscalizacion.view.ViewPort();
       //Ext.Msg.alert('Titulo', 'Mensaje');
       new Exe.Exedoc.view.ViewPort()
});