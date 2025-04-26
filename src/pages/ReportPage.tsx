import React from 'react';
import IncidentReportForm from '../components/forms/IncidentReportForm';

const ReportPage: React.FC = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Report an Incident</h1>
          <p className="mt-2 text-neutral-600">
            Use this form to report suspicious activities or safety concerns in your area. 
            Your report will be reviewed and routed to the appropriate authorities.
          </p>
        </div>
        
        <IncidentReportForm />
        
        <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
          <h3 className="text-lg font-medium text-primary-900 mb-2">Reporting Guidelines</h3>
          <ul className="text-primary-700 text-sm space-y-2">
            <li>Provide accurate and detailed information about the incident.</li>
            <li>Include specific location details to help authorities respond effectively.</li>
            <li>Be objective and factual in your description.</li>
            <li>Do not put yourself in danger to gather information or evidence.</li>
            <li>For emergencies requiring immediate assistance, always call emergency services first.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;