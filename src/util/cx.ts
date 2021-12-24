type ClassName = string|undefined|null|false;

export function cx (...classNames: ClassName[]): string|undefined {
  const enabledClassNames = classNames.filter(Boolean);
  if (enabledClassNames.length === 0) {
    return undefined;
  }

  return enabledClassNames.join(' ');
}
