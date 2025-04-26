import React from 'react';
import { AlertTriangle, Bell, X } from 'lucide-react';
import { Alert, AlertLevel } from '../../types';

interface AlertBannerProps {
  alert: Alert;
  onDismiss?: () => void;
}

const AlertBanner: React.FC<AlertBannerProps> = ({ alert, onDismiss }) => {
  const getAlertStyles = (level: AlertLevel) => {
    switch (level) {
      case AlertLevel.INFO:
        return 'bg-primary-50 border-primary-200 text-primary-800';
      case AlertLevel.WARNING:
        return 'bg-warning-50 border-warning-200 text-warning-900';
      case AlertLevel.EMERGENCY:
        return 'bg-error-50 border-error-200 text-error-900';
      default:
        return 'bg-neutral-50 border-neutral-200 text-neutral-800';
    }
  };

  const getAlertIcon = (level: AlertLevel) => {
    switch (level) {
      case AlertLevel.EMERGENCY:
        return <AlertTriangle className="h-5 w-5 text-error-500" />;
      case AlertLevel.WARNING:
        return <AlertTriangle className="h-5 w-5 text-warning-500" />;
      default:
        return <Bell className="h-5 w-5 text-primary-500" />;
    }
  };

  return (
    <div className={`rounded-lg border px-4 py-3 mb-6 animate-fade-in ${getAlertStyles(alert.level)}`}>
      <div className="flex justify-between items-start">
        <div className="flex">
          <div className="flex-shrink-0">
            {getAlertIcon(alert.level)}
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium">{alert.title}</h3>
            <div className="mt-1 text-sm">
              <p>{alert.message}</p>
            </div>
            <div className="mt-2 text-xs">
              <span className="font-medium">Affected areas:</span>{' '}
              {alert.affectedAreas.join(', ')}
            </div>
          </div>
        </div>
        {onDismiss && (
          <button
            type="button"
            className="flex-shrink-0 ml-2 inline-flex"
            onClick={onDismiss}
          >
            <X className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Dismiss</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default AlertBanner;