let mostrartareas = document.getElementById("TodasLasTareas");
let tareas = [];

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
            nombre: tarea,
            fecha: fecha,
            completada:false
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
    let fechaFormateada = `${day}/${month}/${year}`;

        mostrartareas.innerHTML += `
        <div id ="tareaagregada">
            <p onclick= "TacharTareas(tarea.id)">
                <input type ="checkbox" id = "CheckTarea">
                ${tarea.nombre} - ${fechaFormateada} 
            </p>
        </div>`;
});
}

function TacharTareas(id)
{
    let texto = document.getElementById(id);
    let checkbox = document.getElementById(`check-${id}`);
    if(checkbox.checked)
    {
        texto.style.textDecoration = "line-through";
    }
}