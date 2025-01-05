import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSave } from '@fortawesome/free-solid-svg-icons';
import StatusBar from '../StatusBar/StatusBar';
import './TableRow.css';

const TableRow = ({
  id,
  createdOn,
  personName,
  industry,
  subIndustry,
  amountType,
  amountRequired,
  approvalChance,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{createdOn}</td>
      <td>{personName}</td>
      <td>{industry}</td>
      <td>{subIndustry}</td>
      <td>{amountType}</td>
      <td>{amountRequired}</td>
      <td>
        <select>
          <option>Select</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
      </td>
      <td>
        <div className="status-bar-wrapper">
          <StatusBar approvalChance={approvalChance} />
        </div>
      </td>
      <td>
        <button className="icon-btn"><FontAwesomeIcon icon={faEye} /></button>
      </td>
      <td>
        <button className="icon-btn save-btn">
          <FontAwesomeIcon icon={faSave} /> Save Changes
        </button>
      </td>
    </tr>
  );
};

export default TableRow;