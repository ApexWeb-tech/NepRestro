export type UserRole = 'admin' | 'manager' | 'staff';

export type Permission = 
  | 'view_reservations'
  | 'create_reservations'
  | 'update_reservations'
  | 'delete_reservations'
  | 'view_tables'
  | 'manage_tables'
  | 'view_staff'
  | 'manage_staff'
  | 'view_logs'
  | 'manage_settings';

export const rolePermissions: Record<UserRole, Permission[]> = {
  admin: [
    'view_reservations',
    'create_reservations',
    'update_reservations',
    'delete_reservations',
    'view_tables',
    'manage_tables',
    'view_staff',
    'manage_staff',
    'view_logs',
    'manage_settings',
  ],
  manager: [
    'view_reservations',
    'create_reservations',
    'update_reservations',
    'delete_reservations',
    'view_tables',
    'manage_tables',
    'view_staff',
    'view_logs',
  ],
  staff: [
    'view_reservations',
    'create_reservations',
    'update_reservations',
    // NO delete permission for staff
    'view_tables',
  ],
};

export function hasPermission(role: UserRole, permission: Permission): boolean {
  return rolePermissions[role]?.includes(permission) ?? false;
}
