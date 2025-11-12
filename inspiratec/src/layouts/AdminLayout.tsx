import type { ReactNode } from 'react';
import Sidebar from '../components/admin/Sidebar';
import AdminNavbar from '../components/admin/AdminNavbar';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="ml-64">
        <AdminNavbar />
        <main className="pt-20">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
