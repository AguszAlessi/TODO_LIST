let mostrartareas = document.getElementById("TodasLasTareas");

function AgregarTarea()
{
    let tareas = [];
    let tarea = document.getElementById("agregartarea").value;
    if (tarea == " ")
    {
        alert("Ingrese algo valido");
    }
    else
    {
        tareas.push(tarea);
        MostrarTareas(tareas);
        
    }
}
function MostrarTareas(tareas)
{

    for (tarea of tareas)
    {
        mostrartareas.innerHTML += `
        <div id ="tareaagregada">
            <p onclick= "TacharTareas(tarea.id)">
                <input type ="checkbox" id = "CheckTarea">
                ${tareas}
            </p>
        </div>`;
    }
}

function TacharTareas(tareas)
{   
    let boton = document.getElementById("CheckTarea");
    for(tareas of tarea)
    {
       if (tarea.id = true)
       {
        boton.style.color = "red";
       }
    }
}