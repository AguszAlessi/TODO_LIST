let mostrartareas = document.getElementById("TodasLasTareas");
let tareas = [];
let idtarea = 0;
let tareaMasRapida = null;
let tiempoMasRapido = null;

function AgregarTarea()
{

    let fecha = new Date(); 
    let tarea = document.getElementById("agregartarea").value;
    if (tarea === " ")
    {
        alert("Ingrese algo valido");
    }
    else
    {
        let tareaObj = 
        {
            id: idtarea++,
            nombre: tarea,
            fecha: fecha,
            fechacompletada:false
        };
        tareas.push(tareaObj);
        MostrarTareas();

    }
}
function MostrarTareas()
{
    mostrartareas.innerHTML = "";
    tareas.forEach(tarea=> {
   
        
        let day = tarea.fecha.getDate();
        let month = tarea.fecha.getMonth() + 1;
        let year = tarea.fecha.getFullYear();
        let hours = tarea.fecha.getHours().toString().padStart(2, '0');
        let minutes = tarea.fecha.getMinutes().toString().padStart(2, '0');
        let seconds = tarea.fecha.getSeconds().toString().padStart(2, '0');

        let fechaFormateada = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
        let fechaCompletada = tarea.completada && tarea.fechaCompletada
        ? `(Completada: ${tarea.fechaCompletada.toLocaleDateString()} ${tarea.fechaCompletada.toLocaleTimeString()})`
        : "";

        mostrartareas.innerHTML += `
    <div id ="tareaagregada">
        <input type = "checkbox" id = "check-${tarea.id}" ${tarea.completada ? "checked" : ""}>
    <p>
        <span style="text-decoration: ${tarea.completada ? "line-through" : "none"};">
            ${tarea.nombre}
        </span> - ${fechaFormateada} ${fechaCompletada}
    </p>
    </div> `;
    let checkbox = document.getElementById(`check-${tarea.id}`);
    checkbox.addEventListener("change", () => TacharTareas(tarea.id));
});


}

function TacharTareas(id) {
    let tarea = tareas.find(t => t.id === id);
    let checkbox = document.getElementById(`check-${id}`);

    if (checkbox.checked) {
        tarea.completada = true;
        tarea.fechaCompletada = new Date();
        let TiempoMs = tarea.fechaCompletada - tarea.fecha;

        if ( tiempoMasRapido === null || TiempoMs < tiempoMasRapido)
        {
            tiempoMasRapido = TiempoMs;
            tareaMasRapida = tarea;
        }
    } else {
        tarea.completada = false;
        tarea.fechaCompletada = null;
    }
    MostrarTareas();
}

function TareaMasRapida()
{
    let texto = document.getElementById("MasRapido");
    if (tareaMasRapida)
    {
        let segundos = (tiempoMasRapido/1000).toFixed(2);
        texto.innerHTML = "La tarea mas rapida en hacerse fue" +  tareaMasRapida.nombre + " en " + segundos + "  segundos";
    }

}