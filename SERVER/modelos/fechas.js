var fechaActual = {}
fechaActual.fecha = any =>{
    let fecha = new Date();
    var dd = fecha.getDate();
    var mm = fecha.getMonth()+1;
    var yy = fecha.getFullYear();
    var hora = fecha.getHours() +":"+fecha.getMinutes()+":"+fecha.getSeconds();
    return `${yy}-${mm}-${dd} ${hora}`
}


module.exports = fechaActual;