var fechaActual = {}
fechaActual.fecha = any =>{
    let fecha = new Date();
    var dd = fecha.getDate();
    var mm = fecha.getMonth()+1;
    var yy = fecha.getFullYear();

    return `${yy}-${mm}-${dd}`
}


module.exports = fechaActual;