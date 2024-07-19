import React from 'react'

const UserTabs = ({salaries, changeSalary, curSalary}) => {

  const changeUser = (salary) => {
    changeSalary(salary)
  }

  return (
    <>
      {salaries.map((salary, index) => (
        <button
        className={`btn btn-neutral px-2 mb-2 mr-2 text-base ${curSalary !== null && curSalary.id === salary.id && 'border-2 border-gray-400 hover:border-2 hover:border-gray-400'}`}
        onClick={() => changeUser(salary)} key={index}>
          {salary.name == "" ? "-" : salary.name}
        </button>
      ))}
    </>
  )
}

export default UserTabs