// Super Admin Mock Data

export const adminCredentials = {
  email: 'admin@vitalpath.com',
  password: 'admin123',
};

export const adminUser = {
  id: 'admin-001',
  name: 'Dr. Sarah Mitchell',
  email: 'admin@vitalpath.com',
  role: 'Super Admin',
  avatar: '/admin-avatar.jpg',
  lastLogin: '2025-02-18T08:30:00',
};

export const dashboardStats = {
  totalPatients: 2847,
  activeSubscriptions: 2156,
  monthlyRevenue: 523400,
  pendingApprovals: 47,
  newPatientsThisMonth: 312,
  churnRate: 3.2,
  averageSessionTime: '12m 34s',
  satisfactionScore: 4.8,
};

export const recentPatients = [
  {
    id: 'P001',
    name: 'Jennifer Adams',
    email: 'jennifer.adams@email.com',
    status: 'active',
    plan: 'Premium',
    joinedDate: '2025-02-15',
    weightLoss: 12.5,
  },
  {
    id: 'P002',
    name: 'Michael Chen',
    email: 'michael.chen@email.com',
    status: 'pending',
    plan: 'Standard',
    joinedDate: '2025-02-17',
    weightLoss: 0,
  },
  {
    id: 'P003',
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    status: 'active',
    plan: 'Premium',
    joinedDate: '2025-01-20',
    weightLoss: 28.3,
  },
  {
    id: 'P004',
    name: 'David Williams',
    email: 'david.w@email.com',
    status: 'active',
    plan: 'Basic',
    joinedDate: '2025-02-01',
    weightLoss: 8.7,
  },
  {
    id: 'P005',
    name: 'Emily Rodriguez',
    email: 'emily.r@email.com',
    status: 'paused',
    plan: 'Premium',
    joinedDate: '2024-12-10',
    weightLoss: 35.2,
  },
];

export const pendingApprovals = [
  {
    id: 'A001',
    patientName: 'Robert Thompson',
    type: 'New Patient',
    submittedDate: '2025-02-18T10:30:00',
    bmi: 32.4,
    urgency: 'normal',
  },
  {
    id: 'A002',
    patientName: 'Lisa Martinez',
    type: 'Prescription Refill',
    submittedDate: '2025-02-18T09:15:00',
    bmi: 29.8,
    urgency: 'high',
  },
  {
    id: 'A003',
    patientName: 'James Wilson',
    type: 'Dosage Adjustment',
    submittedDate: '2025-02-17T16:45:00',
    bmi: 34.1,
    urgency: 'normal',
  },
  {
    id: 'A004',
    patientName: 'Amanda Brown',
    type: 'New Patient',
    submittedDate: '2025-02-17T14:20:00',
    bmi: 31.2,
    urgency: 'low',
  },
];

export const revenueData = [
  { month: 'Sep', revenue: 385000 },
  { month: 'Oct', revenue: 412000 },
  { month: 'Nov', revenue: 445000 },
  { month: 'Dec', revenue: 478000 },
  { month: 'Jan', revenue: 498000 },
  { month: 'Feb', revenue: 523400 },
];

export const patientGrowthData = [
  { month: 'Sep', patients: 1850 },
  { month: 'Oct', patients: 2050 },
  { month: 'Nov', patients: 2280 },
  { month: 'Dec', patients: 2450 },
  { month: 'Jan', patients: 2635 },
  { month: 'Feb', patients: 2847 },
];

export const providers = [
  {
    id: 'DR001',
    name: 'Dr. Sarah Mitchell',
    specialty: 'Internal Medicine',
    patientsAssigned: 245,
    status: 'online',
    rating: 4.9,
  },
  {
    id: 'DR002',
    name: 'Dr. James Anderson',
    specialty: 'Endocrinology',
    patientsAssigned: 312,
    status: 'online',
    rating: 4.8,
  },
  {
    id: 'DR003',
    name: 'Dr. Emily Chen',
    specialty: 'Obesity Medicine',
    patientsAssigned: 287,
    status: 'offline',
    rating: 4.9,
  },
  {
    id: 'DR004',
    name: 'Dr. Michael Roberts',
    specialty: 'Internal Medicine',
    patientsAssigned: 198,
    status: 'busy',
    rating: 4.7,
  },
];

export const systemAlerts = [
  {
    id: 'ALERT001',
    type: 'warning',
    message: 'Low inventory alert: Tirzepatide 5mg - 23 units remaining',
    timestamp: '2025-02-18T11:30:00',
  },
  {
    id: 'ALERT002',
    type: 'info',
    message: 'System maintenance scheduled for Feb 20, 2025 at 2:00 AM EST',
    timestamp: '2025-02-18T09:00:00',
  },
  {
    id: 'ALERT003',
    type: 'success',
    message: 'HIPAA compliance audit completed successfully',
    timestamp: '2025-02-17T16:00:00',
  },
];

export const subscriptionBreakdown = {
  basic: 542,
  standard: 891,
  premium: 723,
};
