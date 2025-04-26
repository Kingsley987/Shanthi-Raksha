import React from 'react';
import { AlertCircle, Check, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Incident, IncidentSeverity, IncidentStatus } from '../../types';

interface IncidentCardProps {
  incident: Incident;
  onClick?: () => void;
}

const IncidentCard: React.FC<IncidentCardProps> = ({ incident, onClick }) => {
  const getSeverityBadge = (severity: IncidentSeverity) => {
    switch (severity) {
      case IncidentSeverity.LOW:
        return <span className="badge bg-primary-50 text-primary-800">Low</span>;
      case IncidentSeverity.MEDIUM:
        return <span className="badge bg-warning-50 text-warning-900">Medium</span>;
      case IncidentSeverity.HIGH:
        return <span className="badge bg-accent-50 text-accent-800">High</span>;
      case IncidentSeverity.CRITICAL:
        return <span className="badge bg-error-50 text-error-900">Critical</span>;
      default:
        return <span className="badge bg-neutral-50 text-neutral-800">Unknown</span>;
    }
  };

  const getStatusBadge = (status: IncidentStatus) => {
    switch (status) {
      case IncidentStatus.REPORTED:
        return <span className="badge bg-neutral-50 text-neutral-800">Reported</span>;
      case IncidentStatus.VERIFIED:
        return <span className="badge bg-primary-50 text-primary-800">Verified</span>;
      case IncidentStatus.IN_PROGRESS:
        return <span className="badge bg-accent-50 text-accent-800">In Progress</span>;
      case IncidentStatus.RESOLVED:
        return <span className="badge bg-success-50 text-success-900">Resolved</span>;
      case IncidentStatus.CLOSED:
        return <span className="badge bg-neutral-50 text-neutral-800">Closed</span>;
      case IncidentStatus.REJECTED:
        return <span className="badge bg-error-50 text-error-900">Rejected</span>;
      default:
        return <span className="badge bg-neutral-50 text-neutral-800">Unknown</span>;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div 
      className="card card-hover cursor-pointer transition-all duration-200 hover:translate-y-[-2px]"
      onClick={onClick}
    >
      {incident.images && incident.images.length > 0 && (
        <div className="h-48 w-full">
          <img 
            src={incident.images[0]} 
            alt={incident.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-neutral-900 line-clamp-1">{incident.title}</h3>
          {incident.aiVerificationScore !== undefined && (
            <div className="flex items-center text-xs text-neutral-500">
              <Check size={12} className="mr-1 text-success-500" />
              AI: {Math.round(incident.aiVerificationScore * 100)}%
            </div>
          )}
        </div>
        
        <div className="flex items-center mb-4 text-sm text-neutral-500">
          <Clock size={14} className="mr-1" />
          <span>{formatDate(incident.reportedAt)}</span>
          <MapPin size={14} className="ml-3 mr-1" />
          <span className="truncate">{incident.location.address}</span>
        </div>
        
        <p className="text-neutral-700 text-sm mb-4 line-clamp-2">{incident.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {getSeverityBadge(incident.severity)}
            {getStatusBadge(incident.status)}
          </div>
          <button className="text-primary-600 hover:text-primary-800 flex items-center text-sm">
            Details
            <ArrowRight size={14} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncidentCard;