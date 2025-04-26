import React, { useState, ChangeEvent } from 'react';
import { AlertTriangle, Camera, MapPin, Upload, X } from 'lucide-react';
import { IncidentSeverity } from '../../types';

const IncidentReportForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [severity, setSeverity] = useState<IncidentSeverity>(IncidentSeverity.MEDIUM);
  const [images, setImages] = useState<string[]>([]);
  const [locationPermissionGranted, setLocationPermissionGranted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // In a real app, this would upload to a server and return URLs
      // For demo purposes, we're creating object URLs
      const newImages = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationPermissionGranted(true);
          // In a real app, you would use a service to get the address from coordinates
          setLocation(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
        },
        (error) => {
          console.error('Error getting location', error);
          setLocationPermissionGranted(false);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form or redirect
    alert('Incident report submitted successfully!');
    setIsSubmitting(false);
    setTitle('');
    setDescription('');
    setLocation('');
    setSeverity(IncidentSeverity.MEDIUM);
    setImages([]);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <AlertTriangle className="h-6 w-6 text-primary-600 mr-2" />
        <h2 className="text-2xl font-semibold text-neutral-900">Report an Incident</h2>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-neutral-700 mb-1">
              Incident Title <span className="text-error-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input"
              placeholder="Brief description of the incident"
              required
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-1">
              Detailed Description <span className="text-error-500">*</span>
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="input"
              placeholder="Provide a detailed description of what you observed"
              required
            />
          </div>
          
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-neutral-700 mb-1">
              Location <span className="text-error-500">*</span>
            </label>
            <div className="flex">
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="input rounded-r-none"
                placeholder="Address or location description"
                required
              />
              <button
                type="button"
                onClick={requestLocation}
                className="btn-outline px-3 rounded-l-none flex items-center justify-center"
              >
                <MapPin size={18} className={locationPermissionGranted ? "text-success-500" : "text-neutral-500"} />
                <span className="sr-only">Get current location</span>
              </button>
            </div>
            <p className="mt-1 text-xs text-neutral-500">
              {locationPermissionGranted 
                ? "Using your current location" 
                : "Click the pin icon to use your current location"}
            </p>
          </div>
          
          <div>
            <label htmlFor="severity" className="block text-sm font-medium text-neutral-700 mb-1">
              Severity Level <span className="text-error-500">*</span>
            </label>
            <select
              id="severity"
              value={severity}
              onChange={(e) => setSeverity(e.target.value as IncidentSeverity)}
              className="input"
              required
            >
              <option value={IncidentSeverity.LOW}>Low - General concern, non-urgent</option>
              <option value={IncidentSeverity.MEDIUM}>Medium - Requires attention soon</option>
              <option value={IncidentSeverity.HIGH}>High - Urgent situation, potential danger</option>
              <option value={IncidentSeverity.CRITICAL}>Critical - Immediate emergency response needed</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Upload Images (Optional)
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Camera className="mx-auto h-12 w-12 text-neutral-400" />
                <div className="flex text-sm text-neutral-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none"
                  >
                    <span>Upload images</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-neutral-500">
                  PNG, JPG, GIF up to 10MB each
                </p>
              </div>
            </div>
            
            {images.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-3">
                {images.map((img, index) => (
                  <div key={index} className="relative">
                    <img
                      src={img}
                      alt={`Uploaded preview ${index + 1}`}
                      className="h-24 w-full object-cover rounded-md"
                    />
                    <button
                      type="button"
                      className="absolute top-1 right-1 rounded-full bg-neutral-800 bg-opacity-70 p-1 text-white"
                      onClick={() => removeImage(index)}
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              className="btn btn-primary w-full justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center">
                  <Upload className="mr-2 h-5 w-5" />
                  Submit Report
                </span>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default IncidentReportForm;