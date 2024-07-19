import React from 'react';

interface Salary {
  id: string;
  price: number;
  szja: boolean;
  marriage: boolean;
  marriageToggle: boolean;
  adokedv: boolean;
  eltartott: number;
  kedv: number;
  familyToggle: boolean;
  netto: number;
}

interface Props {
  salary: Salary;
  setDiscount: (id: string, propertyName: string, value: any) => void;
}

const NettoSalary:React.FC<Props> = ({salary, setDiscount}) => {

    let nettoPrice = salary.netto
    const szja: number = Math.round(salary.price * 0.15)
    const tb: number = Math.round(salary.price * 0.185)

    //tb levonása
    nettoPrice = salary.price - tb
    let sumTax = tb

    //25 éven aluliak SZJA kedvezménye
    if(salary.szja){
      if(salary.price > 499952){ //e felett kell fizetnie szja-t
        let above5 = Math.round((salary.price - 499952) * 0.15)
        nettoPrice -= above5
        sumTax += above5
      }
    } else { //teljesen szja-t kell fizetni
      nettoPrice -= szja
      sumTax += szja
    }

    //Friss házasok kedvezménye
    if(salary.marriage && salary.marriageToggle){
      nettoPrice += 5000
    }

    //Személyi adókedvezmény
    if(salary.adokedv){
      if(sumTax > 77300){
        nettoPrice += 77300
      } else {
        nettoPrice += sumTax
      }
    }

    //Családi kedvezmény
    if(salary.familyToggle){
      switch(salary.kedv) {
        case 1:
          nettoPrice += 10000 * salary.eltartott
          break;
          case 2:
          nettoPrice += 20000 * salary.eltartott
          break;
          case 3:
          nettoPrice += 33000 * salary.eltartott
          break;
      }
    }

    const setNetto = () => {
      setDiscount(salary.id, "netto", nettoPrice)
   };

   () => {setNetto()}

  
  return (
    <div className='mt-1'>Nettó bér: {nettoPrice}</div>
  )
}

export default NettoSalary