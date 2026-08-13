import { supabaseAdmin } from '../supabase/server';
import type { AuditAction, AuditEntityType } from '../../types/audit';

export interface LogChangeOptions {
  action: AuditAction;
  entityType: AuditEntityType;
  entityId: string;
  changedByEmail: string;
  changedByName: string;
  changedByRole: string;
  changes?: Record<string, { old_value: any; new_value: any }>;
  reason?: string;
  ipAddress?: string;
}

export async function logChange(options: LogChangeOptions) {
  try {
    const { error } = await supabaseAdmin.from('audit_logs').insert([
      {
        action: options.action,
        entity_type: options.entityType,
        entity_id: options.entityId,
        changed_by_email: options.changedByEmail,
        changed_by_name: options.changedByName,
        changed_by_role: options.changedByRole,
        changes: options.changes || null,
        reason: options.reason,
        ip_address: options.ipAddress,
      },
    ]);

    if (error) {
      console.error('Failed to log change:', error);
    }
  } catch (error) {
    console.error('Error logging change:', error);
  }
}

export function getChanges<T extends Record<string, any>>(
  oldData: T | undefined,
  newData: T
): Record<string, { old_value: any; new_value: any }> {
  const changes: Record<string, { old_value: any; new_value: any }> = {};

  if (!oldData) {
    // All fields are new
    Object.entries(newData).forEach(([key, value]) => {
      if (key !== 'created_at' && key !== 'id') {
        changes[key] = { old_value: null, new_value: value };
      }
    });
  } else {
    // Compare old and new
    Object.entries(newData).forEach(([key, newValue]) => {
      const oldValue = oldData[key];
      if (oldValue !== newValue && key !== 'updated_at') {
        changes[key] = { old_value: oldValue, new_value: newValue };
      }
    });
  }

  return changes;
}

export function extractUserInfo(req: any): { email: string; name: string; role: string; ip?: string } {
  // Extract from request headers/auth
  const email = req.headers.get('x-user-email') || 'unknown@example.com';
  const name = req.headers.get('x-user-name') || 'Unknown User';
  const role = req.headers.get('x-user-role') || 'staff';
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip') || undefined;

  return { email, name, role, ip };
}
