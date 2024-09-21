import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex h-screen w-full">{children}</main>;
};

export default DashboardLayout;
