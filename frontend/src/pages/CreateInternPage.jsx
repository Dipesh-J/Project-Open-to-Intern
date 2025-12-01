import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { internApi } from '../services/api';
import { Button, Input, Card, SectionHeader } from '../components/ui';

/**
 * Create Intern page.
 * Form to register as an intern at a college.
 */
const CreateInternPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    collegeName: '',
  });
  const [errors, setErrors] = useState({});

  // Pre-fill college name from URL params
  useEffect(() => {
    const college = searchParams.get('college');
    if (college) {
      setFormData((prev) => ({ ...prev, collegeName: college }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-z0-9_]{2,}@[a-z]{3,}\.[a-z]{2,}$/.test(formData.email.trim())) {
      // Email validation - more flexible than backend for better UX
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile.trim())) {
      // 10-digit mobile number validation
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.collegeName.trim()) {
      newErrors.collegeName = 'College name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      await internApi.create({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        mobile: formData.mobile.trim(),
        collegeName: formData.collegeName.trim().toLowerCase(),
      });
      
      toast.success('Application submitted successfully!');
      navigate(`/colleges?search=${formData.collegeName.trim().toLowerCase()}`);
    } catch (err) {
      toast.error(err.message || 'Failed to submit application');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 bg-bg-default min-h-screen">
      <div className="container-lg">
        <SectionHeader
          title="Apply as Intern"
          subtitle="Fill in your details to apply for an internship"
          align="center"
        />

        <Card variant="elevated" className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Full Name"
              name="name"
              placeholder="e.g., John Doe"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />

            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="e.g., john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />

            <Input
              label="Mobile Number"
              name="mobile"
              type="tel"
              placeholder="e.g., 9876543210"
              value={formData.mobile}
              onChange={handleChange}
              error={errors.mobile}
              required
            />

            <Input
              label="College Name (Abbreviated)"
              name="collegeName"
              placeholder="e.g., iith"
              value={formData.collegeName}
              onChange={handleChange}
              error={errors.collegeName}
              required
            />

            <p className="text-sm text-text-secondary">
              Note: The college must be registered in our system. If not, please{' '}
              <a href="/colleges/new" className="text-primary-variant hover:underline">
                add the college first
              </a>
              .
            </p>

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="ghost"
                onClick={() => navigate(-1)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                loading={loading}
                className="flex-1"
              >
                Submit Application
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CreateInternPage;
