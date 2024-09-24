import { useNavigate } from 'react-router-dom';
import { Building2, Briefcase, Users, ShieldCheck } from 'lucide-react';
import './RoleSelect.css';

export default function RoleSelect() {
  const navigate = useNavigate();

  const roles = [
    { id: 'startup', label: 'Startup', icon: Building2, path: '/LoginSignup' },
    { id: 'government', label: 'Government Official', icon: Briefcase, path: '/LogSignGov' },
    { id: 'stakeholder', label: 'Stakeholder', icon: Users, path: '/LogSignStake' },
    { id: 'admin', label: 'Admin', icon: ShieldCheck, path: '/LogAdmin' },
  ];

  const handleRoleSelect = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">Select Your Role</h1>
        <div className="grid">
          {roles.map((role) => (
            <div
              key={role.id}
              className="role-card"
              onClick={() => handleRoleSelect(role.path)}
            >
              <role.icon className="role-icon" />
              <div className="role-label">{role.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
