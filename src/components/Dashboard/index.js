import React from 'react';
import ScreenHeader from '../ScreenHeader';

const Dashboard = ({details}) => {
  return (
    <div>
      <ScreenHeader title="Li'l Sebastian's CITES Monitoring Tool"/>
      <p>What's worse than one illegally trafficked plant? 5000 illegally trafficked plants!</p>
      <p>Welcome to the CITES endangered species monitoring tool!</p>
      <img
      src="https://hips.hearstapps.com/esq.h-cdn.co/assets/15/08/1424204090-tumblr_m4g0ddotsx1qa1w9bo1_1280.jpg?resize=480:*"
      alt="Li'l Sebastian"
      />
      <p className="Description">
        To reduce the overall demand of trafficked plants, this tool identifies sellers and offers of CITES listed plant species through popular e-commerce sites, to reduce the amount of manual labour on the part of law enforcement individuals and CITES staff.
      </p>
      <p>We currently have {details.length} plants in our database.</p>
    </div>
  );
}

export default Dashboard;