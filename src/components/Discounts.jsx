import NewMarriage from "./discountComponents/NewMarriage";
import FamilyDiscount from "./discountComponents/FamilyDiscount";

const Discounts = ({salary, toggleDiscount, setDiscount}) => {

  const handleCheckboxChange = (param) => () => {
    toggleDiscount(salary.id, param);
 };

  const handleMarriage = (event) => {
    if(!salary.marriageToggle){
      document.getElementById('modal').showModal()
    }
    toggleDiscount(salary.id, "marriageToggle")
  }

  return (
    
    <div>
      <h2 className="mb-2">Kedvezmények:</h2>

      <div className="flex mb-1">
        <input 
            type="checkbox" 
            className="toggle" 
            checked={salary.szja}
            onChange={handleCheckboxChange("szja")} 
        />
        <p className="ml-2">25 éven aluliak SZJA kedvezménye</p>
      </div>
      
      <div className="flex mb-1">
        <input 
            type="checkbox" 
            className="toggle" 
            checked={salary.marriageToggle}
            onChange={handleMarriage} 
        />
        <p className="ml-2">Friss házasok kedvezménye</p>
      </div>
        {salary.marriageToggle &&
        <button
            onClick={()=>document.getElementById('modal').showModal()}
            className="btn btn-sm btn-neutral mr-2 mb-1"
            >Dátum módosítása
        </button>}
      <NewMarriage salary={salary} setDiscount={setDiscount}/>
      {salary.marriageToggle && (
        salary.marriage ?
        <p className="eligible bg-lime-950 inline-block px-2  py-1 rounded-lg">jogosult</p> :
        <p className="eligible bg-red-950 inline-block px-2  py-1 rounded-lg">nem jogosult</p>
      )}

      <div className="flex mb-1">
        <input 
            type="checkbox" 
            className="toggle" 
            checked={salary.adokedv}
            onChange={handleCheckboxChange("adokedv")} 
        />
        <p className="ml-2">Személyi adókedvezmény</p>
      </div>

      <div className="flex mb-1">
        <input 
            type="checkbox" 
            className="toggle" 
            checked={salary.familyToggle}
            onChange={handleCheckboxChange("familyToggle")} 
        />
        <p className="ml-2">Családi kedvezmény</p>
      </div>

      {salary.familyToggle && <FamilyDiscount salary={salary} setDiscount={setDiscount}/>}
      
    </div>
  )
}

export default Discounts