const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]



 for ( i = 0; i < alumns.length; i++){

    let aprobadosT1 = 0;
    let aprobadosT2 = 0;
    let aprobadosT3 = 0;

    if (alumns[i].T1 == true){
        aprobadosT1++;
    }

    if ((alumns[i].T2 == true)){
        aprobadosT2++;
    }

    if ((alumns[i].T3 == true)){
        aprobadosT3++;
    }

    alumns.forEach ((alumn) => {

        if (aprobadosT1 + aprobadosT2 + aprobadosT3 > 1){
        alumns[i].isApproved = true;
        }
})

}





console.log (alumns);