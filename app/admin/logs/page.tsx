import AdminGuard from '../../../components/auth/AdminGuard';
import AuditLogManager from '../../../components/admin/AuditLogManager';

export default function AdminLogsPage() {
  return (
    <AdminGuard>
      <AuditLogManager />
    </AdminGuard>
  );
}
