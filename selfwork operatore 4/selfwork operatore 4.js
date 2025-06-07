let numGattitotali = 44;
let numGattiinFila = 6;

let numFile = Math.floor (numGattitotali / numGattiinFila);
console.log(numFile);

let numRimastiFuori = numGattitotali % numGattiinFila;
console.log(numRimastiFuori);

let numDiGattiMancanti = numGattiinFila - numRimastiFuori;
console.log(numDiGattiMancanti);

console.log(`Ci sono ${numFile} File di gattie ne mancano ${numDiGattiMancanti} Per Una Nuova Fila Con Un Avanzo Di ${numRimastiFuori}`);





