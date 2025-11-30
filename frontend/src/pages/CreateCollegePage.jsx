import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { collegeApi } from '../services/api';
import { Button, Input, Card, SectionHeader } from '../components/ui';

/**
 * Create College page.
 * Form to add a new college to the system.
 */
const CreateCollegePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    fullName: '',
    logoLink: '',
  });
  const [errors, setErrors] = useState({});

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
      newErrors.name = 'College name is required';
    } else if (!/^[a-z][a-z ]+[a-z]$/.test(formData.name.trim())) {
      newErrors.name = 'Name should contain only lowercase letters and spaces';
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.logoLink.trim()) {
      newErrors.logoLink = 'Logo URL is required';
    } else if (!/^(http[s]?:\/\/.*\.(?:png|jpeg))$/.test(formData.logoLink.trim())) {
      newErrors.logoLink = 'Logo URL must be a valid URL ending with .png or .jpeg';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      await collegeApi.create({
        name: formData.name.trim().toLowerCase(),
        fullName: formData.fullName.trim(),
        logoLink: formData.logoLink.trim(),
      });
      
      toast.success('College created successfully!');
      navigate('/colleges');
    } catch (err) {
      toast.error(err.message || 'Failed to create college');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 bg-bg-default min-h-screen">
      <div className="container-lg">
        <SectionHeader
          title="Add New College"
          subtitle="Register a new college to enable intern applications"
          align="center"
        />

        <Card variant="elevated" className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="College Name (Abbreviated)"
              name="name"
              placeholder="e.g., iith"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />

            <Input
              label="Full Name"
              name="fullName"
              placeholder="e.g., Indian Institute of Technology, Hyderabad"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
              required
            />

            <Input
              label="Logo URL"
              name="logoLink"
              type="url"
              placeholder="https://example.com/logo.png"
              value={formData.logoLink}
              onChange={handleChange}
              error={errors.logoLink}
              required
            />

            {formData.logoLink && !errors.logoLink && (
              <div className="flex items-center gap-4">
                <span className="text-sm text-text-secondary">Preview:</span>
                <img
                  src={formData.logoLink}
                  alt="Logo preview"
                  className="w-16 h-16 object-contain bg-white rounded-lg p-1"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}

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
                Create College
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CreateCollegePage;
