let persona = {
    nombre: "Ana", //nombre de la variable y su valor asignado
    apellido: "Carrizales",
    getName: function () { //función para imprimir los datos de las variables de forma ordenada
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: "Santa Elena #1131", //nombre de la variable y su valor asignado
        colonia: "Nuevo Milenio",
        cp: 28048,
        municipio: "Colima",
        getAddress: function () { //función para imprimir los datos de las variables de forma ordenada y con un formato específico
            return `${this.calle} Colonia: ${this.colonia} CP: ${this.cp},${this.municipio}`
        }
    }
    
};
console.log(persona.domicilio.getAddress()); //La propiedad domicilio le adjudicamos la función para imprimir la dirección