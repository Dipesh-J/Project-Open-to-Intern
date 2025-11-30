import { useState } from 'react';
import { Link } from 'react-router-dom';
import { collegeApi } from '../services/api';
import { 
  Button, 
  Input, 
  Card, 
  SectionHeader, 
  Loader, 
  APIError, 
  EmptyState,
  Badge 
} from '../components/ui';

/**
 * Colleges list page.
 * Search for colleges by name and view their details.
 */
const CollegesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [collegeData, setCollegeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);
    setSearched(true);

    try {
      const response = await collegeApi.getDetails(searchTerm.trim().toLowerCase());
      setCollegeData(response.data);
    } catch (err) {
      setError(err.message);
      setCollegeData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 bg-bg-default min-h-screen">
      <div className="container-lg">
        <SectionHeader
          title="Search Colleges"
          subtitle="Enter a college name (abbreviated) to view details and registered interns"
          align="center"
        />

        {/* Search Form */}
        <form onSubmit={handleSearch} className="max-w-lg mx-auto mb-12">
          <div className="flex gap-4">
            <Input
              name="collegeName"
              placeholder="Enter college name (e.g., iith)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" variant="primary" loading={loading}>
              Search
            </Button>
          </div>
        </form>

        {/* Results */}
        {loading && (
          <div className="flex justify-center py-12">
            <Loader size="lg" />
          </div>
        )}

        {error && !loading && (
          <APIError 
            message={error} 
            onRetry={() => handleSearch({ preventDefault: () => {} })}
            className="max-w-lg mx-auto"
          />
        )}

        {!loading && !error && searched && !collegeData && (
          <EmptyState
            title="College not found"
            description="No college found with that name. Please check the spelling and try again."
            action={
              <Link to="/colleges/new">
                <Button variant="primary">Add New College</Button>
              </Link>
            }
            className="max-w-lg mx-auto"
          />
        )}

        {!loading && collegeData && (
          <div className="max-w-4xl mx-auto">
            {/* College Info Card */}
            <Card variant="elevated" className="mb-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                {collegeData.logoLink && (
                  <img
                    src={collegeData.logoLink}
                    alt={collegeData.fullName}
                    className="w-24 h-24 object-contain bg-white rounded-lg p-2"
                  />
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-text-primary">
                      {collegeData.fullName}
                    </h3>
                    <Badge variant="primary">{collegeData.name}</Badge>
                  </div>
                  <p className="text-text-secondary">
                    {collegeData.interns?.length || 0} registered intern(s)
                  </p>
                </div>
                <Link to={`/interns/new?college=${collegeData.name}`}>
                  <Button variant="outline" size="sm">
                    Apply to this College
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Interns List */}
            <div className="bg-bg-surface rounded-lg p-6">
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                Registered Interns
              </h4>
              
              {collegeData.interns && collegeData.interns.length > 0 ? (
                <div className="space-y-4">
                  {collegeData.interns.map((intern) => (
                    <div
                      key={intern._id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-bg-default rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-text-primary">{intern.name}</p>
                        <p className="text-sm text-text-secondary">{intern.email}</p>
                      </div>
                      <p className="text-sm text-text-secondary mt-2 sm:mt-0">
                        📞 {intern.mobile}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyState
                  title="No interns yet"
                  description="Be the first to apply to this college!"
                  action={
                    <Link to={`/interns/new?college=${collegeData.name}`}>
                      <Button variant="primary">Apply Now</Button>
                    </Link>
                  }
                />
              )}
            </div>
          </div>
        )}

        {/* Initial State */}
        {!searched && !loading && (
          <div className="text-center py-8">
            <p className="text-text-secondary mb-4">
              Search for a college to view details and registered interns
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/colleges/new">
                <Button variant="outline">Add New College</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegesPage;
