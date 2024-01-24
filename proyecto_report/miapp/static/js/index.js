let dataTable;
let dataTableIsInitialized = false;

const dataTableOptions={
    
    dom: 'Bfrtilp',
    buttons: [
      {
        extend: 'excelHtml5',
        text: '<i class="fa-solid fa-file-csv"></i>',
        titleAttr: 'Exportar a Excel',
        className: 'btn btn-success',
      },
      {
        extend: 'pdfHtml5',
        text: '<i class="fas fa-file-pdf"></i> ',
        titleAttr: 'Exportar a PDF',
        className: 'btn btn-danger',
      },
      {
        extend: 'print',
        text: '<i class="fa fa-print"></i> ',
        titleAttr: 'Imprimir',
        className: 'btn btn-info',
      },
    ],
    columnsDefs:[
        {className:"centered", targets:[0, 1, 2, 3, 4, 5, 6, 7]},
        {orderable: true, targets:[0, 2]},
        {searchable: false, targets:[1, 2, 3, 4, 5 ,6]},
        ],

    pageLength:5,
    destroy: true
};

const initDataTable = async () =>{
if (dataTableIsInitialized){
    dataTable.destroy();
}

await servis();

dataTable=$("#datatable-srv").DataTable(dataTableOptions);

dataTableIsInitialized = true;
};

const servis = async () => {
    try {
        const response = await fetch("http://localhost:8000/miapp/l_servis/");
        const data = await response.json();
        let content=``;
        data.servis.forEach((servis,index) => {
            content+=`
                <tr class="centered">
                    <td>${index + 1}</td>
                    <td>${servis.Monto}</td>
                    <td>${servis.Tel_act}</td>
                    <td>${servis.Fc_activacion}</td>
                    <td>${servis.Fc_estado}</td>
                    <td>${servis.Last_update}</td>
                    <td>${servis.Puntos}</td>
                    <td>${servis.Puntos <= 15
                        ? "<i class='fa-solid fa-check' style='color: green;'></i>"
                        : "<i class='fa-solid fa-xmark' style='color: red;'></i>"}</td>
                    <td>
                    <button class='btn btn-sm btn-primary'><i class='fa-solid fa-pencil'></i></button>
                    <button class='btn btn-sm btn-danger'><i class='fa-solid fa-trash-can'></i></button>
                    </td>
                </tr>
            `;
        });
        tableBody_servis.innerHTML = content;
    } catch (ex) {
        alert(ex);
    }
};

window.addEventListener("load", async () => {
    await initDataTable();

});