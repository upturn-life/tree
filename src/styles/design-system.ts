export const colors = {
  primary: {
    DEFAULT: '#2563EB',
    hover: '#1D4ED8',
  },
  background: {
    app: '#F8FAFC',
    card: '#FFFFFF',
  },
  text: {
    primary: '#111827',
    secondary: '#6B7280',
    muted: '#9CA3AF',
  },
  border: {
    DEFAULT: '#E5E7EB',
  },
  action: {
    yes: '#16A34A',
    no: '#DC2626',
  },
  token: {
    xp: '#6366F1',
    tree: '#059669',
  },
};

export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
  },
  scale: {
    heading: 'text-lg font-semibold',
    body: 'text-base',
    small: 'text-sm',
    muted: 'text-xs',
  },
};

export const spacing = {
  container: 'gap-4',
  section: 'gap-6',
};

export const components = {
  card: 'bg-white rounded-xl shadow-sm p-4 border border-[#E5E7EB]',
  button: {
    base: 'rounded-lg font-medium transition-colors',
    primary: 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-[#111827]',
  },
  input: 'rounded-lg border border-[#E5E7EB] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]',
};
