const express=require ('express')// requerimos express
const app=express()//lo guardamos en una variable llamada app ejecutado
const path= require("path")//requerimos el modulo path para usar las funciones .join y hacer que nos concatene las rutas dandole las ubicaciones 
const PORT=3030//creamos una constante con el valor del puerto 3030 que es el que vamos a escuchar
app.use(express.static('public'))//usamos la funcion .static de express para usar archivos estaticos del servidor que esta en public (imagenes)
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','home.html')))// creamos la ruta de nuestro .html
app.get('/ayuda',(req,res)=>res.sendFile(path.join(__dirname,'views','ayuda.html')))
app.get('/creaTuCuenta',(req,res)=>res.sendFile(path.join(__dirname,'views','creaTuCuenta.html')))
app.get('/ingresa',(req,res)=>res.sendFile(path.join(__dirname,'views','ingresa.html')))
app.get('/MisCompras',(req,res)=>res.sendFile(path.join(__dirname,'views','MisCompras.html')))
app.get('/ofertas',(req,res)=>res.sendFile(path.join(__dirname,'views','ofertas.html')))
app.get('/tiendasOficiales',(req,res)=>res.sendFile(path.join(__dirname,'views','tiendasOficiales.html')))
app.get('/vender',(req,res)=>res.sendFile(path.join(__dirname,'views','vender.html')))
app.get('/*',(req,res)=>res.sendFile(path.join(__dirname,'views','404.html')))
app.listen(PORT,()=>console.log("MercadoLiebre ON "+PORT))// usamos listen para escuchar y levantar nuestro servidor 
