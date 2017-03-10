
/**
 * Enumeration of possible validation errors
 *
 * @name ERROR
 * @enum {string}
 */
export const ERROR = {
  // project
  TYPE_NOT_FOUND: 'Patch with specified type is not found in the project',
  PINS_NOT_FOUND: 'Specified node types haven\'t required pins for creating links',
  // patches
  PATCH_NOT_FOUND: "Can't find the patch in the project",
  PATCH_NOT_FOUND_BY_PATH: 'There is no patch with the specified path in the project',
  PATCH_PATH_OCCUPIED: 'Another patch with the same path already exists',
  // pathes
  PATH_INVALID: 'Path is empty or contains invalid characters',
  // nodes
  NODE_NOT_FOUND: 'Node not found in the patch',
  POSITION_INVALID: 'Invalid position property',
  // links
  LINK_ID_INVALID: 'Link should have a generated id',
  LINK_INPUT_INVALID: 'Link should have input object with keys: `pinKey` and `nodeId`',
  LINK_OUTPUT_INVALID: 'Link should have output object with keys: `pinKey` and `nodeId`',
  LINK_INPUT_NODE_NOT_FOUND: 'Input node of the link does not exist in this patch',
  LINK_OUTPUT_NODE_NOT_FOUND: 'Output node of the link does not exist in this patch',
  // pins
  PIN_TYPE_INVALID: 'Pin type should be one of possible values: `string`, `number`, `boolean`, `pulse`',
  PIN_KEY_INVALID: 'Pin key should be generated with shortid',
  // other
  DATATYPE_INVALID: 'Invalid data type',
  IMPLEMENTATION_NOT_FOUND: 'Implementation "{impl}" not found in the project',
  CAST_PATCH_NOT_FOUND: 'Casting patch "{patchPath}" is not found in the project',
};

/**
 * Enumeration of possible pin types
 *
 * @name PIN_TYPE
 * @enum {string}
 */
export const PIN_TYPE = {
  STRING: 'string',
  NUMBER: 'number',
  BOOLEAN: 'boolean',
  PULSE: 'pulse',
};
/**
 * Enumeration of nodeTypes that references to data type.
 * E.G., inputBool === Boolean, constPulse === Pulse and etc.
 *
 * @name NODETYPE_TO_DATA_TYPES
 * @enum {PIN_TYPE}
 */
export const NODETYPE_TO_DATA_TYPES = {
  Number: PIN_TYPE.NUMBER,
  String: PIN_TYPE.STRING,
  Bool: PIN_TYPE.BOOLEAN,
  Pulse: PIN_TYPE.PULSE,
};

 /**
  * Enumeration of possible pin directions
  *
  * @name PIN_DIRECTION
  * @enum {string}
  */
export const PIN_DIRECTION = {
  INPUT: 'input',
  OUTPUT: 'output',
};