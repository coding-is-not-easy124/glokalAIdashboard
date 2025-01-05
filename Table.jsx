import React from 'react';
import TableRow from '../TableRow/TableRow';
import './Table.css';

const data = [
  {
    id: 1,
    createdOn: '10/7/2023',
    personName: 'Dev',
    industry: 'Technical Startup',
    subIndustry: 'Artificial Intelligence',
    amountType: 'Pre Seed',
    amountRequired: 300000,
    approvalChance: 90,
    status: 'Pending',
  },
  {
    id: 2,
    createdOn: '15/7/2023',
    personName: 'John',
    industry: 'Research',
    subIndustry: 'Clean Energy',
    amountType: 'Grant',
    amountRequired: 50000,
    approvalChance: 70,
    status: 'Approved',
  },
  {
    id: 3,
    createdOn: '20/7/2023',
    personName: 'Sam',
    industry: 'Classical Startup',
    subIndustry: 'Fashion',
    amountType: 'Seed',
    amountRequired: 100000,
    approvalChance: 50,
    status: 'Rejected',
  },
  {
    id: 4,
    createdOn: '5/8/2023',
    personName: 'Alice',
    industry: 'Healthcare',
    subIndustry: 'Biotech',
    amountType: 'Series A',
    amountRequired: 750000,
    approvalChance: 85,
    status: 'Pending',
  },
  {
    id: 5,
    createdOn: '12/8/2023',
    personName: 'Bob',
    industry: 'FinTech',
    subIndustry: 'Blockchain',
    amountType: 'Pre Seed',
    amountRequired: 200000,
    approvalChance: 60,
    status: 'Approved',
  },
  {
    id: 6,
    createdOn: '25/8/2023',
    personName: 'Eve',
    industry: 'EdTech',
    subIndustry: 'Online Learning',
    amountType: 'Grant',
    amountRequired: 30000,
    approvalChance: 75,
    status: 'Rejected',
  },
  {
    id: 7,
    createdOn: '1/9/2023',
    personName: 'Mike',
    industry: 'Agriculture',
    subIndustry: 'Precision Farming',
    amountType: 'Seed',
    amountRequired: 120000,
    approvalChance: 55,
    status: 'Pending',
  },
  {
    id: 8,
    createdOn: '10/9/2023',
    personName: 'Sophia',
    industry: 'Retail',
    subIndustry: 'E-Commerce',
    amountType: 'Series B',
    amountRequired: 1000000,
    approvalChance: 92,
    status: 'Approved',
  },
  {
    id: 9,
    createdOn: '18/9/2023',
    personName: 'Emma',
    industry: 'Hospitality',
    subIndustry: 'Hotel Management',
    amountType: 'Grant',
    amountRequired: 40000,
    approvalChance: 65,
    status: 'Rejected',
  },
  {
    id: 10,
    createdOn: '22/9/2023',
    personName: 'Oliver',
    industry: 'Media',
    subIndustry: 'Content Creation',
    amountType: 'Pre Seed',
    amountRequired: 80000,
    approvalChance: 80,
    status: 'Pending',
  },
  {
    id: 11,
    createdOn: '30/9/2023',
    personName: 'Liam',
    industry: 'Transportation',
    subIndustry: 'Ride Sharing',
    amountType: 'Series A',
    amountRequired: 600000,
    approvalChance: 85,
    status: 'Approved',
  },
  {
    id: 12,
    createdOn: '5/10/2023',
    personName: 'Sophia',
    industry: 'Entertainment',
    subIndustry: 'Gaming',
    amountType: 'Seed',
    amountRequired: 150000,
    approvalChance: 68,
    status: 'Rejected',
  },
  {
    id: 13,
    createdOn: '12/10/2023',
    personName: 'James',
    industry: 'Energy',
    subIndustry: 'Solar Power',
    amountType: 'Grant',
    amountRequired: 90000,
    approvalChance: 75,
    status: 'Pending',
  },
  {
    id: 14,
    createdOn: '20/10/2023',
    personName: 'Amelia',
    industry: 'Fashion',
    subIndustry: 'Apparel',
    amountType: 'Series A',
    amountRequired: 400000,
    approvalChance: 88,
    status: 'Approved',
  },
  {
    id: 15,
    createdOn: '30/10/2023',
    personName: 'Noah',
    industry: 'Healthcare',
    subIndustry: 'Telemedicine',
    amountType: 'Seed',
    amountRequired: 180000,
    approvalChance: 72,
    status: 'Rejected',
  },
  {
    id: 16,
    createdOn: '10/11/2023',
    personName: 'Lucas',
    industry: 'Agriculture',
    subIndustry: 'Organic Farming',
    amountType: 'Pre Seed',
    amountRequired: 95000,
    approvalChance: 58,
    status: 'Pending',
  },
  {
    id: 17,
    createdOn: '18/11/2023',
    personName: 'Mia',
    industry: 'Education',
    subIndustry: 'Tutoring',
    amountType: 'Grant',
    amountRequired: 25000,
    approvalChance: 80,
    status: 'Approved',
  },
  {
    id: 18,
    createdOn: '25/11/2023',
    personName: 'Ava',
    industry: 'Technology',
    subIndustry: 'Cybersecurity',
    amountType: 'Series B',
    amountRequired: 2000000,
    approvalChance: 93,
    status: 'Rejected',
  },
];

const Table = ({ tab }) => {
  // Filter rows based on the selected tab
  const filteredData =
    tab === 'All Cases' ? data : data.filter((row) => row.status === tab);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Created On</th>
          <th>Person Name</th>
          <th>Type of Industry</th>
          <th>Sub Industry</th>
          <th>Amount Type</th>
          <th>Amount Required</th>
          <th>Status</th>
          <th>Approval Chance</th>
          <th>Summary</th>
          <th>Save Changes</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.length > 0 ? (
          filteredData.map((row) => <TableRow key={row.id} {...row} />)
        ) : (
          <tr>
            <td colSpan="11" style={{ textAlign: 'center' }}>
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
