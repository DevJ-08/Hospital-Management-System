let patients = JSON.parse(localStorage.getItem("patients")) || [];

function updatePatients(){

    let table = document.getElementById("patientTable");
    table.innerHTML = "";

    patients.forEach((patient,index)=>{

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.disease}</td>
            <td>
                <button onclick="deletePatient(${index})">
                    Delete
                </button>
            </td>
        `;

        table.appendChild(row);
    });

    document.getElementById("count").textContent = patients.length;

    localStorage.setItem("patients", JSON.stringify(patients));
}

function addPatient(){

    let name = document.getElementById("patientName").value;
    let age = document.getElementById("patientAge").value;
    let disease = document.getElementById("patientDisease").value;

    if(name === "" || age === "" || disease === ""){
        alert("Please fill all fields");
        return;
    }

    patients.push({
        name:name,
        age:age,
        disease:disease
    });

    document.getElementById("patientName").value="";
    document.getElementById("patientAge").value="";
    document.getElementById("patientDisease").value="";

    updatePatients();
}

function deletePatient(index){

    patients.splice(index,1);

    updatePatients();
}

updatePatients();