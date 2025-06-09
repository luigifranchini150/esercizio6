

let voto = 28;

let giudizio;
switch (true) {
case voto <= 18:
        giudizio = `insufficente`
        break;
case voto >= 18 && voto <= 21:
  giudizio = `sufficente`
         break;
case voto >= 21 && voto <= 24:
  giudizio = `buono`
        break;
case voto >= 24 && voto <= 27:
  giudizio = `distinto`
        break;
     case voto >= 27 && voto <= 29:
  giudizio = `ottimo`
        break;
         case voto == 30:
  giudizio = `eccelente`
  default:
  giudizio = `voto non valido`
        break;
}
console.log(giudizio);


