import React from 'react';
import { BookOpen, FileText, Download } from 'lucide-react';
import { mockResources } from '../data/mockData';

const ResourcesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <BookOpen className="h-8 w-8 text-primary-600 mr-3" />
        <h1 className="text-3xl font-bold text-neutral-900">Educational Resources</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-neutral-900">Available Resources</h2>
              <div className="flex space-x-2">
                <input
                  type="search"
                  placeholder="Search resources..."
                  className="input"
                />
                <button className="btn btn-primary">Search</button>
              </div>
            </div>

            <div className="grid gap-6">
              {mockResources.map(resource => (
                <div key={resource.id} className="border rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <img
                        src={resource.thumbnailUrl}
                        alt={resource.title}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="text-lg font-medium text-neutral-900">{resource.title}</h3>
                      <p className="text-neutral-600 text-sm mt-1">{resource.description}</p>
                      <div className="flex items-center mt-3">
                        <span className="text-sm text-neutral-500">{resource.category}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm text-neutral-500">By {resource.author.name}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <button className="btn btn-outline flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Categories</h2>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary-50 text-primary-700">
                Safety Guidelines (15)
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary-50 text-primary-700">
                Cultural Resources (8)
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary-50 text-primary-700">
                Emergency Plans (12)
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary-50 text-primary-700">
                Training Materials (10)
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Popular Tags</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">#safety</span>
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">#guidelines</span>
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">#emergency</span>
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">#training</span>
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">#culture</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;