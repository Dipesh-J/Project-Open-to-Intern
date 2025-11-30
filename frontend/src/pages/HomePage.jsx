import { Link } from 'react-router-dom';
import { Button } from '../components/ui';

/**
 * Home page with hero section.
 * Landing page for the application.
 */
const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-bg-surface to-bg-default">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-4xl font-semibold text-text-primary mb-6">
              Find Your Perfect{' '}
              <span className="text-primary-variant">Internship</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Connect with top colleges and universities to kickstart your career.
              Browse opportunities, apply with ease, and take the first step towards
              your dream career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/colleges">
                <Button variant="primary" size="lg">
                  Browse Colleges
                </Button>
              </Link>
              <Link to="/interns/new">
                <Button variant="outline" size="lg">
                  Apply as Intern
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-bg-default">
        <div className="container-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary text-center mb-12">
            Why Choose <span className="text-primary-variant">OpenIntern</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-bg-surface p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Top Colleges</h3>
              <p className="text-text-secondary text-sm">
                Partner with leading institutions across the country for quality internship programs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-bg-surface p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Easy Application</h3>
              <p className="text-text-secondary text-sm">
                Simple and streamlined application process to get you started quickly.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-bg-surface p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Quality Matches</h3>
              <p className="text-text-secondary text-sm">
                Get matched with internships that align with your skills and interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bg-surface">
        <div className="container-lg text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            Join thousands of students who have found their perfect internship through our platform.
          </p>
          <Link to="/interns/new">
            <Button variant="primary" size="lg">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
