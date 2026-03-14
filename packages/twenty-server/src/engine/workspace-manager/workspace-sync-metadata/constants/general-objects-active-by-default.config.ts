import { STANDARD_OBJECT_IDS } from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-object-ids';

/**
 * Standard object nameSingular type (camelCase entity names).
 * Used to type which general (non-system) objects are visible by default on workspace setup.
 */
export type StandardObjectNameSingular = keyof typeof STANDARD_OBJECT_IDS;

/**
 * General standard objects that are active by default on workspace setup and the only ones
 * that can be activated by users (including admins). All other general objects are hidden
 * and cannot be activated.
 */
export const GENERAL_OBJECTS_ACTIVE_BY_DEFAULT: readonly StandardObjectNameSingular[] =
  ['workflow', 'task'] as const;

export type GeneralObjectActiveByDefault =
  (typeof GENERAL_OBJECTS_ACTIVE_BY_DEFAULT)[number];

const GENERAL_OBJECTS_ACTIVE_BY_DEFAULT_SET = new Set<string>(
  GENERAL_OBJECTS_ACTIVE_BY_DEFAULT as unknown as string[],
);

export function isGeneralObjectActiveByDefault(nameSingular: string): boolean {
  return GENERAL_OBJECTS_ACTIVE_BY_DEFAULT_SET.has(nameSingular);
}
