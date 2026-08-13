export type AuditAction = 'create' | 'update' | 'delete';
export type AuditEntityType = 'reservation' | 'table' | 'staff' | 'settings';

export interface AuditLogChange {
  field: string;
  old_value: any;
  new_value: any;
}

export interface AuditLog {
  id: string;
  action: AuditAction;
  entity_type: AuditEntityType;
  entity_id: string;
  changed_by_email: string;
  changed_by_name: string;
  changed_by_role: string;
  changes: Record<string, AuditLogChange> | null;
  reason?: string;
  ip_address?: string;
  created_at: string;
}
