let express = require('express');
let app = express();

app.listen(3000,() => console.log('Tu puedes, no te rindas'));

// rutas de un parametro

app.get('/', function(req,res){
    res.send('Bienvenido, lo lograste!!!');
})

app.get('/contacto', function(req,res){
    res.send('Persevera y triunfaras, dejanos tu contacto para poder ayudarte!')
})

// rutas con mas de un parametro

// no se hace una ruta por cada producto sino una general, parametrizada en la cual se puede acceder a cualquier producto con una unica ruta y funcion de consecuencia o msj
app.get('/productos/:idProducto', function(req,res){
    res.send('Bienvenidos al detalle del producto ' + req.params.idProducto + ' ¡¡¡sigue asi no bajes los brazos, tu puedes!!!')
})

// para capturar y enviar un msj mas exacto al producto que se solicito se utiliza req (variable que tiene los datos del pedido a analizar) y la propiedad params (que tendra todos los parametros que nosotros ponemos en la url a traves del idProducto )

app.get('/productos/:idProducto/comentarios', function(req,res){
    res.send('Seccion comentarios ' + req.params.idProducto + ' ¡si se puede carajo!')
})

// ruta para ingresar a una parte en especifico de un producto

app.get('/productos/:idProducto/comentarios/:idComentario?', function(req,res){
    res.send('Seccion comentarios ' + req.params.idProducto + ' Enfocado en comentario n° ' + req.params.idComentario + ' no te rindas')
})

//el segundo parametro ... el idComentario es optativo: ?, ya que puede llegar o no, el mismo es undefined si no se especifica... para solucionar eso se usa el if/else

app.get('/productos/:idProducto/comentarios/:idComentario?', function(req,res){
    if(req.params.idComentario == undefined){
        res.send('Seccion comentarios ' + req.params.idProducto + ' no te rindas')
    } else{
        res.send('Seccion comentarios ' + req.params.idProducto + ' Enfocado en comentario n° ' + req.params.idComentario + ' no te rindas')
    }
})

// obtenemos una ruta con mas de un parametro incluso optativas donde cada una tiene su msj

// lo importante es tener bien claro la ruta principal de la cual derivaran las diferentes rutas a parametrizar, optativas o no, donde cada una tendra su pedido, funcion, metodo, msj  unico