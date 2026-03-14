/**
 * General (non-system) standard objects that can be activated by users in Data model.
 * Must match server config: general-objects-active-by-default.config.ts
 */
const GENERAL_OBJECTS_ACTIVE_BY_DEFAULT = ['workflow', 'task'] as const;

const SET = new Set<string>(GENERAL_OBJECTS_ACTIVE_BY_DEFAULT);

export const isGeneralObjectActiveByDefault = (
  nameSingular: string,
): boolean => {
  return SET.has(nameSingular);
};
