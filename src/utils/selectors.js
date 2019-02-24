export const getElementByHook = (root, hook) => root.querySelector(`[data-hook="${hook}"]`);

export const getAllElementsByHook = (root, hook) => root.querySelectorAll(`[data-hook="${hook}"]`);
