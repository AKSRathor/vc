import React from 'react'
import "./ContractDetailsGov.css"
import ContractDetailsCard from './ContractDetailsCard'

const ContractDetailsGov = () => {
  return (
    <div>
        <div id="ContractDetailsGovHeadDiv"><h1>Contract Details</h1></div>
        <div className="govAllContractCards">
            <ContractDetailsCard/>
            <ContractDetailsCard/>
        </div>
    </div>
  )
}

export default ContractDetailsGov