import SalaryForm from "./SalaryForm";
import HouseholdSummary from "./HouseholdSummary";
import UserTabs from "./UserTabs"
import AddNewMember from "./AddNewMember";
import Discounts from "./Discounts";
import NettoSalary from "./NettoSalary.tsx";
import { useState } from "react";


const SalaryCounter = () => {

  const [salaries, setSalaries] = useState([
    {
      id: "lfd923",
      name: "Peti",
      price: 352341,
      szja: false,
      marriage: false,
      marriageToggle: false,
      adokedv: false,
      eltartott: 0,
      kedv: 0,
      familyToggle: false,
      netto: 0
    },
    {
      id: "lfasdd9dsadw3",
      name: "Laci",
      price: 624530,
      szja: false,
      marriage: false,
      marriageToggle: false,
      adokedv: false,
      eltartott: 0,
      kedv: 0,
      familyToggle: false,
      netto: 0
    }
  ])
  
  const [curSalary, setCurSalary] = useState(salaries[0])

  // SalaryForm
  const changeName = (id, newName) => {
      setCurSalary(prevState => ({ ...prevState, name: newName }));
      setSalaries(prevSalaries => {
        return prevSalaries.map(member => {
          if (member.id === id) {
            return { ...member, name: newName };
          }
          return member;
        });
      });
  };
  const changePrice = (id, newPrice) => {
    if(newPrice >= 0){
      setCurSalary(prevState => ({ ...prevState, price: newPrice }));
        setSalaries(prevSalaries => {
          return prevSalaries.map(member => {
            if (member.id === id) {
              return { ...member, price: newPrice };
            }
            return member;
          });
        });
      };
    }
  const changeSalary = (salary) => {
    setCurSalary(salary)
  };

  // AddNewMember
  const addNewMember = (newSalary) => {
    setSalaries(prevSalaries => [...prevSalaries, newSalary]);
    setCurSalary(newSalary)
  }
  const removeMember = () => {
    setCurSalary(null);
    setSalaries(prevSalaries => prevSalaries.filter(salary => salary.id !== curSalary.id));
  }

  // Discounts
  const toggleDiscount = (id, propertyName) => {
    setCurSalary(prevState => ({ ...prevState, [propertyName]: !curSalary[propertyName]}));
    setSalaries(prevSalaries =>
        prevSalaries.map(salary => {
            if (salary.id === id) {
                return { ...salary, [propertyName]: !salary[propertyName] };
            }
            return salary;
        })
    );
  };
  const setDiscount = (id, propertyName, value) => {
    setCurSalary(prevState => ({ ...prevState, [propertyName]: value}));
    setSalaries(prevSalaries =>
        prevSalaries.map(salary => {
            if (salary.id === id) {
                return { ...salary, [propertyName]: value };
            }
            return salary;
        })
    );
  };

  //Netto
  const countNetto = (currentSalary) => {
    let nettoPrice = currentSalary.netto
    const szja = Math.round(currentSalary.price * 0.15)
    const tb = Math.round(currentSalary.price * 0.185)

    //tb levonása
    nettoPrice = currentSalary.price - tb
    let sumTax = tb

    //25 éven aluliak SZJA kedvezménye
    if(currentSalary.szja){
      if(currentSalary.price > 499952){ //e felett kell fizetnie szja-t
        let above5 = Math.round((currentSalary.price - 499952) * 0.15)
        nettoPrice -= above5
        sumTax += above5
      }
    } else { //teljesen szja-t kell fizetni
      nettoPrice -= szja
      sumTax += szja
    }

    //Friss házasok kedvezménye
    if(currentSalary.marriage && currentSalary.marriageToggle){
      nettoPrice += 5000
    }

    //Személyi adókedvezmény
    if(currentSalary.adokedv){
      if(sumTax > 77300){
        nettoPrice += 77300
      } else {
        nettoPrice += sumTax
      }
    }

    //Családi kedvezmény
    if(currentSalary.familyToggle){
      switch(currentSalary.kedv) {
        case 1:
          nettoPrice += 10000 * currentSalary.eltartott
          break;
          case 2:
          nettoPrice += 20000 * currentSalary.eltartott
          break;
          case 3:
          nettoPrice += 33000 * currentSalary.eltartott
          break;
      }
    }

    return nettoPrice
  }

  // console.log(countNetto());

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center">
        <div className="card bg-base-100 shadow-xl p-8 m-2 w-96 min-h-[20rem]">
          <header>
            <h1>Bérkalkulátor alkalmazás</h1>
            <UserTabs salaries={salaries} changeSalary={changeSalary} curSalary={curSalary}/>
            <AddNewMember addNewMember={addNewMember}/>
          </header>
          <main>
            <SalaryForm changeName={changeName} changePrice={changePrice} salary={curSalary} />
            {curSalary && <Discounts salary={curSalary} toggleDiscount={toggleDiscount} setDiscount={setDiscount}/>}
            {curSalary && <div className="bg-zinc-900 flex mt-2 p-2 rounded-lg justify-between">
              <NettoSalary salary={curSalary} setDiscount={setDiscount}/>
              <button className="btn btn-square btn-sm" onClick={removeMember}>
                <img src="/trash.svg" alt="trash can" />
              </button>
            </div>}
          </main>
        </div>
        <div className="card bg-base-100 shadow-xl p-8 m-2 w-96 min-h-[20rem]">
          <HouseholdSummary salaries={salaries} salary={curSalary} countNetto={countNetto}/>
        </div>
      </div>
    </div>
  );
};

export default SalaryCounter;
