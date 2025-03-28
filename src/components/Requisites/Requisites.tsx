import React from 'react'
import { CopyButton } from '../CopyButton';
import ie from '../../data/individualEntrepreneur.json';
// import { createSchedule } from '../../helpers/сreateSchedule';
// import modules from '../../data/onlineModuleSchedule.json';
// import practices from '../../data/onlinePracticeSchedule.json';
// import retreats from '../../data/onlineRetreatSchedule.json';

const Requisites: React.FC = () => {

  // const nextGropuDate = new Date(createSchedule(modules, practices,retreats).filter(group => group.type === 'module')[0].startDate);
  // const nextGrupDateToPrint = `${nextGropuDate.getDate().toString().padStart(2, '0')}.${(nextGropuDate.getMonth() + 1).toString().padStart(2, '0')}`

  return (
    <div className='text-left w-max mt-2 mx-auto text-gray-600'>
    <p className="bg-yellow-100 p-2 inline-block">Реквізити</p>
    <br/>
    {ie.recipient} <CopyButton value={ie.recipient} />
    <br />
    IBAN: {ie.iban} <CopyButton value={ie.iban} />
    <br />
    ІПН/ЄДРПОУ: {ie.id} <CopyButton value={ie.id} />
    <br />
    Акціонерне товариство: {ie.bank} <CopyButton value={ie.bank} />
    <br />
    МФО: {ie.mfo} <CopyButton value={ie.mfo} />
    <br />
    ОКПО Банку: {ie.okpo} <CopyButton value={ie.okpo} />
    <br />
    <br />
    🔸Призначення платежу:
    <br />
    {`"За консультаційні послуги з психології відносин 01-08.08.25"`} <CopyButton value={`За консультаційні послуги з психології відносин 01-08.08.25`} /> 
    <br />
    <br />
    🔥Важливо вказати призначення платежу
    <br />
    🔥Важливо, щоб платіж був від фізособи.
    <br />А не від ФОП, чи організації
    <br/>
    🔥 Після оплати пришліть, будь ласка, скрін платежу&nbsp;
  <a
    href="https://t.me/oleh_holovnykh"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-800 underline"
  >
    @oleh_holovnykh
  </a>
    <br/>
  </div>
  )
}

export default Requisites;